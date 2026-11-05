# Шифрует Excel-план в data.enc.json (AES-256-GCM, ключ на каждого пользователя через PBKDF2)
# Пример: python3 build_data.py plan.xlsx --admin sasha:ПАРОЛЬ --add ivan:ПАРОЛЬ2 --remove petr
import argparse, base64, datetime, hashlib, json, os, sys
import openpyxl
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes

ITER = 310000
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'data.enc.json')
b64 = lambda b: base64.b64encode(b).decode()
ub64 = base64.b64decode

def uid(login):
    return hashlib.sha256(('strat:' + login.strip().lower()).encode()).hexdigest()

def kek(login, pwd, salt):
    k = PBKDF2HMAC(hashes.SHA256(), 32, salt, ITER)
    return k.derive((login.strip().lower() + ':' + pwd).encode())

def wrap(dk, login, pwd):
    salt, iv = os.urandom(16), os.urandom(12)
    return {'u': uid(login), 'salt': b64(salt), 'iv': b64(iv),
            'wk': b64(AESGCM(kek(login, pwd, salt)).encrypt(iv, dk, None))}

def unwrap(users, login, pwd):
    for e in users:
        if e['u'] == uid(login):
            return AESGCM(kek(login, pwd, ub64(e['salt']))).decrypt(ub64(e['iv']), ub64(e['wk']), None)
    raise SystemExit('Логин admin не найден в data.enc.json')

def d(v):
    return v.strftime('%Y-%m-%d') if isinstance(v, datetime.datetime) else None

def read_tasks(path):
    ws = openpyxl.load_workbook(path, data_only=True)['Гант']
    tasks = []
    for r in ws.iter_rows(min_row=5, max_col=10, values_only=True):
        num, title, resp, co, start, due, note, status, comment, ctrl = r
        if not title or not due or str(num).strip() == '—':
            continue
        tasks.append({'id': str(num).strip(), 'title': str(title).strip(), 'resp': resp or '',
                      'co': co or '', 'start': d(start), 'due': d(due), 'note': note or '',
                      'status': status or '', 'comment': comment or '', 'ctrl': ctrl or '',
                      'kt': str(num).startswith('КТ')})
    return tasks

ap = argparse.ArgumentParser()
ap.add_argument('xlsx'); ap.add_argument('--admin', required=True)
ap.add_argument('--add', action='append', default=[]); ap.add_argument('--remove', action='append', default=[])
a = ap.parse_args()

al, ap_ = a.admin.split(':', 1)
old = json.load(open(OUT)) if os.path.exists(OUT) else None
if old:
    dk, users = unwrap(old['users'], al, ap_), old['users']
else:
    dk = AESGCM.generate_key(256)
    users = [wrap(dk, al, ap_)]
for x in a.add:
    l, p = x.split(':', 1)
    users = [e for e in users if e['u'] != uid(l)] + [wrap(dk, l, p)]
for l in a.remove:
    users = [e for e in users if e['u'] != uid(l)]

payload = json.dumps({'tasks': read_tasks(a.xlsx), 'built': datetime.date.today().isoformat()}, ensure_ascii=False)
iv = os.urandom(12)
out = {'v': 1, 'iter': ITER, 'users': users, 'iv': b64(iv), 'ct': b64(AESGCM(dk).encrypt(iv, payload.encode(), None))}
json.dump(out, open(OUT, 'w'))
print('OK:', len(read_tasks(a.xlsx)), 'задач,', len(users), 'пользователей ->', os.path.abspath(OUT))
