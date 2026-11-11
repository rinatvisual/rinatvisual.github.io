# Шифрует карту «Путь лида» (JSON) в lead.enc.json тем же ключом, что и данные
# Пример: python3 build_lead.py lead_map.json --admin sasha:ПАРОЛЬ
import argparse, base64, hashlib, json, os
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes

HERE = os.path.dirname(os.path.abspath(__file__))
b64 = lambda b: base64.b64encode(b).decode()
ub = base64.b64decode

ap = argparse.ArgumentParser(); ap.add_argument('src'); ap.add_argument('--admin', required=True)
a = ap.parse_args()
login, pwd = a.admin.split(':', 1)
d = json.load(open(os.path.join(HERE, '..', 'data.enc.json')))
uid = hashlib.sha256(('strat:' + login.lower()).encode()).hexdigest()
e = next(x for x in d['users'] if x['u'] == uid)
kek = PBKDF2HMAC(hashes.SHA256(), 32, ub(e['salt']), e.get('it', d['iter'])).derive((login.lower() + ':' + pwd).encode())
dk = AESGCM(kek).decrypt(ub(e['iv']), ub(e['wk']), None)
data = json.dumps(json.load(open(a.src)), ensure_ascii=False).encode()
iv = os.urandom(12)
json.dump({'iv': b64(iv), 'ct': b64(AESGCM(dk).encrypt(iv, data, None))}, open(os.path.join(HERE, '..', 'lead.enc.json'), 'w'))
print('OK lead.enc.json')
