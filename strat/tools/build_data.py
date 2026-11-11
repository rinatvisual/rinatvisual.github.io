# Шифрует Excel-план в data.enc.json (AES-256-GCM, ключ на каждого пользователя через PBKDF2)
# Пример: python3 build_data.py plan.xlsx --admin sasha:ПАРОЛЬ --add ivan:ПАРОЛЬ2 --remove petr
import argparse, base64, datetime, hashlib, json, os, sys
import openpyxl
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes

ITER = 600000
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'data.enc.json')
b64 = lambda b: base64.b64encode(b).decode()
ub64 = base64.b64decode

def uid(login):
    return hashlib.sha256(('strat:' + login.strip().lower()).encode()).hexdigest()

def kek(login, pwd, salt, it=ITER):
    k = PBKDF2HMAC(hashes.SHA256(), 32, salt, it)
    return k.derive((login.strip().lower() + ':' + pwd).encode())

def wrap(dk, login, pwd):
    salt, iv = os.urandom(16), os.urandom(12)
    return {'u': uid(login), 'it': ITER, 'salt': b64(salt), 'iv': b64(iv),
            'wk': b64(AESGCM(kek(login, pwd, salt)).encrypt(iv, dk, None))}

def unwrap(users, login, pwd, it0=ITER):
    for e in users:
        if e['u'] == uid(login):
            return AESGCM(kek(login, pwd, ub64(e['salt']), e.get('it', it0))).decrypt(ub64(e['iv']), ub64(e['wk']), None)
    raise SystemExit('Логин admin не найден в data.enc.json')

def d(v):
    return v.strftime('%Y-%m-%d') if isinstance(v, datetime.datetime) else None

# контрольные точки (из прежней версии плана) — для рамок в календаре
KT = [('КТ1', '2026-11-01'), ('КТ2', '2027-01-15'), ('КТ3', '2027-03-01'), ('КТ4', '2027-06-01'), ('КТ5', '2027-09-01')]

def read_tasks(path):
    # столбцы: A задача, B ответственный, C исполнитель, D срок, E комментарий, F статус, G комментарий, H контроль
    ws = openpyxl.load_workbook(path, data_only=True)['Гант']
    tasks = []
    for row, r in enumerate(ws.iter_rows(min_row=5, max_col=8, values_only=True), start=5):
        title, resp, co, due, comment, status, note, ctrl = r
        if not title or not d(due):
            continue
        tasks.append({'row': row, 'id': str(len(tasks) + 1), 'title': str(title).strip(), 'resp': str(resp or '').strip(),
                      'co': co or '', 'start': None, 'due': d(due), 'comment': comment or '', 'note': note or '',
                      'status': status or '', 'ctrl': ctrl or '', 'kt': False})
    for i, (k, dt) in enumerate(KT, 1):
        tasks.append({'id': k, 'title': f'Контрольная точка {i} — {dt[8:]}.{dt[5:7]}.{dt[:4]}', 'resp': '', 'co': '', 'start': None,
                      'due': dt, 'comment': '', 'note': '', 'status': '', 'ctrl': '', 'kt': True})
    return sorted(tasks, key=lambda t: (t['due'], not t['kt']))

def read_people(path):
    ws = openpyxl.load_workbook(path, data_only=True)['Справочник']
    return [str(r[0]).strip() for r in ws.iter_rows(min_row=2, max_col=1, values_only=True) if r[0]]

ap = argparse.ArgumentParser()
ap.add_argument('xlsx'); ap.add_argument('--admin', required=True)
ap.add_argument('--add', action='append', default=[]); ap.add_argument('--remove', action='append', default=[])
a = ap.parse_args()

al, ap_ = a.admin.split(':', 1)
old = json.load(open(OUT)) if os.path.exists(OUT) else None
if old:
    dk, users = unwrap(old['users'], al, ap_, old['iter']), old['users']
else:
    dk = AESGCM.generate_key(256)
    users = [wrap(dk, al, ap_)]
for x in a.add:
    l, p = x.split(':', 1)
    users = [e for e in users if e['u'] != uid(l)] + [wrap(dk, l, p)]
for l in a.remove:
    users = [e for e in users if e['u'] != uid(l)]

payload = json.dumps({'tasks': read_tasks(a.xlsx), 'people': read_people(a.xlsx), 'built': datetime.date.today().isoformat(), 'gen': b64(os.urandom(9))}, ensure_ascii=False)
iv = os.urandom(12)
out = {'v': 1, 'iter': ITER, 'users': users, 'iv': b64(iv), 'ct': b64(AESGCM(dk).encrypt(iv, payload.encode(), None))}
json.dump(out, open(OUT, 'w'))
# шаблон Excel для выгрузки с сайта — тоже зашифрован
tiv = os.urandom(12)
json.dump({'iv': b64(tiv), 'ct': b64(AESGCM(dk).encrypt(tiv, open(a.xlsx, 'rb').read(), None))},
          open(os.path.join(os.path.dirname(OUT), 'template.enc.json'), 'w'))
print('OK:', len(read_tasks(a.xlsx)), 'задач,', len(users), 'пользователей ->', os.path.abspath(OUT))
