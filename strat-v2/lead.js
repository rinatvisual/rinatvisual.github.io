// Вкладка «Путь лида»: схема модулей, воронка, регламенты и зашифрованные файлы
(function(){
const css=`
#leadwrap{--fh:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;--fb:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;font-family:var(--fb);max-width:1480px;margin:0 auto;padding:24px 28px 40px;display:flex;flex-direction:column;gap:28px}
.lsec{padding:22px}
.lsec>h2{font-size:24px;line-height:1.2;margin:0 0 4px;font-weight:700}
.lsec>.sub{font-size:14px;color:var(--muted);margin:0 0 18px;max-width:72ch}
.mchips{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:0;border-top:1px solid var(--line)}
.mchip{border:0;border-bottom:1px solid var(--line);background:transparent;padding:12px 10px 12px 0;text-align:left;line-height:1.3;display:flex;gap:10px;align-items:baseline}
.mchip:hover b{color:var(--accent)}
.mchip .mn{font-family:var(--fh);font-weight:700;font-size:20px;color:var(--ink);min-width:52px}
.mchip b{display:block;font-size:14.5px}.mchip small{color:var(--muted);font-size:13px}
.lscroll{overflow-x:auto;padding-bottom:6px;margin:0 -6px;padding-left:6px}
.lcanvas{position:relative;width:1400px;height:700px;transform-origin:0 0}
.lscroll.fit{overflow:hidden}
.lcanvas>svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.lcard{position:absolute;background:var(--card);border:1px solid var(--line);border-top:4px solid var(--ink);border-radius:4px;padding:12px 14px 10px;text-align:left;cursor:pointer;font-size:13px;line-height:1.4}
.lcard:hover{border-color:var(--accent);border-top-color:var(--accent)}
.lcard.m7{border-style:dashed;border-top-style:solid}
.lcard h4{margin:0;font-size:15px;line-height:1.25}
.lcard h4 .mn{color:var(--accent);margin-right:4px}
.lcard .ow{font-size:12.5px;color:var(--muted);margin:2px 0 8px}
.lcard dl{display:block;margin:0}
.lcard dd+dt{margin-top:6px}
.lcard dt{font-size:12px;color:var(--muted);margin-bottom:1px}
.lcard dd{margin:0}
.lcard .outs{display:flex;flex-wrap:wrap;gap:4px;margin-top:9px}
.lcard .outs span{border:1px solid var(--ink);color:var(--ink);border-radius:3px;padding:0 6px;font-size:11.5px;font-weight:600}
.lcard .nt{margin-top:9px;padding:6px 8px;background:var(--soft);border-radius:3px;font-size:12px}
.lcard .ntx{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.lcard .nt b{font-weight:600}
.lcard .fc{position:absolute;top:10px;right:10px;font-size:12px;color:var(--muted);display:flex;gap:3px;align-items:center}
.epath{fill:none;stroke:var(--ink);stroke-width:1.75}
.epath.d{stroke-dasharray:5 5}
.ehit{fill:none;stroke:transparent;stroke-width:18;cursor:pointer;pointer-events:stroke}
.ehit:hover+.epath{stroke:var(--accent);stroke-width:3}
.epill{position:absolute;transform:translate(-50%,-50%);display:inline-flex;align-items:center;gap:4px;border:1px solid var(--ink);border-radius:3px;background:var(--card);color:var(--ink);font-weight:600;white-space:nowrap;cursor:pointer;padding:2px 8px}
.epill.big{font-family:var(--fh);font-size:21px;font-weight:700;padding:0 8px;border-color:transparent;background:var(--card)}
.epill.sm{font-size:12px}
.epill:hover{background:var(--ink);color:var(--card);border-color:var(--ink)}
.epill .fn{display:inline-flex;align-items:center;gap:2px;font-size:11.5px;color:var(--accent)}
.epill:hover .fn{color:inherit}
.bus{position:absolute;transform:translate(-50%,-50%);font-family:var(--fh);font-size:19px;font-weight:700;color:var(--muted);background:var(--card);padding:0 8px;pointer-events:none}
.lhint{font-size:14px;color:var(--muted);margin:0 0 14px}
.funnel{display:flex;flex-direction:column;align-items:center;gap:0}
.fst{border:1px solid var(--line);border-left:4px solid var(--ink);background:var(--card);border-radius:3px;padding:7px 14px;text-align:left;cursor:pointer;display:flex;justify-content:space-between;align-items:baseline;gap:12px}
.fst:hover{border-color:var(--accent)}
.fst small{font-size:13.5px;color:var(--muted)}
.fst b{font-family:var(--fh);font-size:21px;color:var(--ink);white-space:nowrap}
.fst.last{background:var(--ink);border-color:var(--ink)}.fst.last small,.fst.last b{color:var(--card)}
.fcv{font-family:var(--fh);font-size:12.5px;font-weight:700;color:var(--muted);padding:3px 0}
.lboxes{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:22px}
.lbox2{border-left:3px solid var(--signal);padding:4px 0 4px 14px;font-size:14px;max-width:75ch}
.lbox2 b{display:block;margin-bottom:4px;font-family:var(--fh)}
.ls{margin-top:0}
.ls h5{margin:18px 0 8px;font-size:15px;font-family:var(--fh);color:var(--ink)}
.ls h5:first-child{margin-top:0}
.ls .it{border:1px solid var(--line);border-radius:4px;padding:10px 12px;margin-bottom:6px;font-size:14px}
.ls .it .hd{display:flex;align-items:center;gap:8px;font-weight:600}
.ls .it p{margin:4px 0 0}
.ls .it .ag{margin-top:6px;font-size:13px;border-left:3px solid var(--signal);padding:2px 0 2px 8px}
.ls .it .mt{margin-top:3px;font-size:13px;color:var(--muted)}
.ls .it.task{cursor:pointer;display:flex;gap:8px;align-items:center}
.ls .it.task:hover{border-color:var(--accent)}
.ls .it.task .dd{margin-left:auto;font-size:13px;color:var(--muted);white-space:nowrap}
.ls .it.next{border-color:var(--ink);box-shadow:inset 4px 0 0 var(--signal)}
.sdot{width:9px;height:9px;border-radius:50%;display:inline-block;flex:none}
.s-ok{background:#1d8a57}.s-work{background:#e0a100}.s-draft{background:#1d5fa8}.s-none{background:#d9372b}
.tpill{font-size:11.5px;font-weight:600;border-radius:3px;padding:1px 6px;background:var(--soft);color:var(--muted);margin-left:auto;white-space:nowrap}
.tpill.ext{background:color-mix(in srgb,#8b5cf6 13%,transparent);color:#7c3aed}
.files .fl{display:flex;align-items:center;gap:8px;border:1px solid var(--line);border-radius:4px;padding:8px 10px;margin-bottom:6px}
.files .fl button.open{border:0;background:transparent;color:var(--accent);font-weight:600;text-align:left;padding:0;flex:1;word-break:break-word}
.files .fl button.open:hover{text-decoration:underline}
.files .fl small{color:var(--muted);font-size:12px;white-space:nowrap}
.files .fl .x{border:0;background:transparent;color:var(--muted);font-size:15px}
.files .empty{font-size:13.5px;color:var(--muted);margin:0 0 8px}
.upl{display:inline-flex;align-items:center;gap:6px;cursor:pointer}
.upst{font-size:13px;color:var(--muted);margin-left:8px}
.slegend{display:flex;flex-wrap:wrap;gap:4px 14px;font-size:12.5px;color:var(--muted);margin:0 0 10px}
.slegend span{display:inline-flex;align-items:center;gap:5px}
details.more summary{cursor:pointer;font-size:13.5px;color:var(--accent);font-weight:600;margin:10px 0 6px}

/* ретро-слой */
.lsec>h2{font-size:30px;font-weight:400}
.lsec:has(#lcanvas){padding:18px 12px}
.mchips{border-top:2px solid var(--ink)}
.mchip{border-bottom:1px dashed var(--ink)}
.mchip .mn{font-weight:400;font-size:24px;color:var(--danger)}
.lcard{border:2px solid var(--ink);border-top:8px solid var(--ink);border-radius:6px;box-shadow:4px 4px 0 var(--hard);font-size:13.5px}
.lcard:hover{border-color:var(--ink);border-top-color:var(--danger);transform:translate(-1px,-1px);box-shadow:6px 6px 0 var(--hard)}
.lcard.m7{border-style:dashed;border-top-style:solid}
.lcard h4{font-size:18px;font-weight:400}
.lcard h4 .mn{color:var(--danger)}
.lcard .outs span{border:1.5px solid var(--ink);border-radius:4px;background:var(--soft)}
.epath{stroke:var(--ink);stroke-width:2.25}
.ehit:hover+.epath{stroke:var(--danger)}
.epill{border:2px solid var(--ink);border-radius:6px;box-shadow:2px 2px 0 var(--hard);background:var(--card)}
.epill.big{font-weight:400;font-size:24px;border:0;box-shadow:none;background:transparent;text-shadow:0 0 6px var(--card),0 0 2px var(--card)}
.epill.big:hover{background:var(--ink);color:var(--card);text-shadow:none}
.epill:hover{background:var(--ink);color:var(--card)}
.bus{font-weight:400;font-size:22px;color:var(--ink);background:transparent;text-shadow:0 0 6px var(--card),0 0 2px var(--card)}
.fst{border:2px solid var(--ink);border-left:10px solid var(--ink);border-radius:6px;box-shadow:3px 3px 0 var(--hard)}
.fst b{font-weight:400;font-size:26px}
.fst.last{background:var(--danger);border-color:var(--ink)}
.fst.last small,.fst.last b{color:#fff}
.fcv{font-weight:400;font-size:15px;color:var(--ink)}
.lbox2{border-left:6px solid var(--signal)}
.lbox2 b{font-weight:400;font-size:17px}
.ls h5{font-size:18px;font-weight:400}
.ls .it{border:2px solid var(--ink);border-radius:6px}
.ls .it.next{box-shadow:inset 6px 0 0 var(--signal)}
.ls .it .ag{border-left-width:4px}
.sdot{border-radius:4px;border:1.5px solid var(--ink)}
.files .fl{border:2px solid var(--ink);border-radius:6px}
.tpill{border-radius:4px;border:1px solid var(--ink);background:transparent}
.limg{margin:0 0 6px}
.limgv{display:block;width:100%;padding:0;border:2px solid var(--ink);border-radius:6px;background:var(--soft);cursor:zoom-in;box-shadow:4px 4px 0 var(--hard)}
.limgv img{display:block;width:100%;height:auto;max-height:70vh;object-fit:contain;background:var(--card)}
.lph{display:block;padding:40px 12px;color:var(--muted);font-size:14px}
.limgd{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;min-height:170px;border:2px dashed var(--ink);border-radius:6px;cursor:pointer;text-align:center;padding:16px;background:var(--soft)}
.limgd:hover{background:var(--card)}
.limgd b{font-family:var(--fh);font-weight:400;font-size:20px}
.limgd span{font-size:13.5px;color:var(--muted)}
.lcard.ours{border-color:var(--danger);border-top-color:var(--danger)}
.lcard.ours h4 .mn{color:var(--danger)}
.ourtag{position:absolute;top:-8px;right:10px;transform:translateY(-50%);background:var(--ink);color:var(--card);font-size:11.5px;font-weight:700;padding:1px 7px;border:2px solid var(--ink);border-radius:6px}
.lcard.az{border-style:dashed;border-top-style:solid;border-top-color:var(--muted);background:var(--soft)}
.nog{margin:2px 0 0;font-size:12.5px;color:var(--muted)}
.vtog{position:absolute;display:flex;flex-direction:column;align-items:stretch;gap:4px;z-index:2}
.vcap{font-size:12px;color:var(--muted)}
.vtog button{border:2px solid var(--ink);border-radius:6px;background:var(--card);padding:5px 8px;font-weight:600;font-size:13px;text-align:left;color:var(--ink);box-shadow:2px 2px 0 var(--hard)}
.vtog button.on{background:var(--ink);color:var(--card)}
.vor{font-family:var(--fh);font-size:22px;text-align:center;line-height:1.1;color:var(--danger)}
.ourtag.off{background:var(--danger);color:#fff;border-color:var(--ink)}
.epath.off{stroke:var(--danger);stroke-dasharray:6 5}
.epill.off{border-color:var(--danger);color:var(--danger);text-decoration:line-through}
.mtbox textarea{min-height:200px;font-size:14px;line-height:1.5;background:var(--card);border:2px solid var(--ink);border-radius:6px;overflow:hidden;margin-bottom:4px}
.mview{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:14px;margin-bottom:6px}
.mblk{border:2px solid var(--ink);border-radius:6px;background:var(--card);box-shadow:3px 3px 0 var(--hard)}
.mblk h6{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:0;padding:8px 12px;font-family:var(--fh);font-weight:400;font-size:17px;background:var(--ink);color:var(--card)}
.mblk h6 span{font-family:var(--fb);font-size:12px;font-weight:700;background:var(--signal);color:#22262a;border-radius:6px;padding:0 7px}
.mblk ul{list-style:none;margin:0;padding:0}
.mblk li{padding:7px 12px 7px 30px;border-top:1px dashed var(--line);position:relative;font-size:14px;line-height:1.35}
.mblk li:first-child{border-top:0}
.mblk li::before{content:'';position:absolute;left:12px;top:12px;width:8px;height:8px;background:var(--danger);border:1px solid var(--ink)}
.mblk li b{font-weight:600;display:block}
.mblk li small{display:block;color:var(--muted);font-size:12.5px;margin-top:2px}
.lcard{transition:transform .15s,box-shadow .15s,border-color .15s}
.epill{transition:background-color .15s,color .15s,transform .1s}
.epill:hover{transform:translate(-50%,-50%) scale(1.06)}
.epath{transition:stroke .15s,stroke-width .15s}
.fst{transition:transform .12s,box-shadow .12s}
.fst:hover{transform:translate(-1px,-1px);box-shadow:5px 5px 0 var(--hard)}
.mchip{transition:background-color .15s}
.mchip:hover{background:var(--soft)}
.mblk li{transition:background-color .12s}
.mblk li:hover{background:var(--soft)}
.epill.noclick{pointer-events:none;cursor:default}
.limgw{position:relative}
.lpdfv{position:relative;display:block;width:100%;border:2px solid var(--ink);border-radius:6px;background:var(--soft);box-shadow:4px 4px 0 var(--hard);overflow:hidden}
.lpdfv canvas{display:block;width:100%;height:auto;max-height:70vh;object-fit:contain;background:var(--card);cursor:zoom-in;margin:0 auto}
.pdfnav{position:absolute;right:10px;bottom:10px;display:flex;align-items:center;gap:6px;z-index:3}
.pdfnav .pg{font-family:var(--fh);font-size:13px;background:var(--card);color:var(--ink);border:2px solid var(--ink);border-radius:6px;padding:3px 8px;box-shadow:2px 2px 0 var(--hard);pointer-events:none}
.pdfnav .ib{padding:4px 10px;min-width:32px;line-height:1.2;font-size:16px}
.pdfnav .ib:disabled{opacity:.45;cursor:default;transform:none;box-shadow:2px 2px 0 var(--hard)}
.kwbtn{border:0;border-bottom:1.5px dashed var(--accent);background:color-mix(in srgb,var(--signal) 18%,transparent);color:var(--ink);font:inherit;font-weight:600;padding:0 3px;border-radius:6px;cursor:pointer;display:inline;line-height:inherit}
.kwbtn:hover{background:var(--signal);color:#22262a;border-bottom-style:solid}
.kwhl{background:color-mix(in srgb,var(--signal) 18%,transparent);color:var(--ink);font:inherit;font-weight:600;padding:0 3px;border-radius:4px;display:inline;line-height:inherit}
@media (prefers-reduced-motion:reduce){.lcard,.epill,.epath,.fst,.mchip,.mblk li{transition:none}}
@media (max-width:900px){#leadwrap{padding:16px;gap:16px}.lsec{padding:16px}.lboxes{grid-template-columns:1fr}}
`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

let LEAD=null;
const POS={az:[85,0,205],m7:[555,0,250],m1:[85,0,205],m2:[85,0,205],m34:[425,0,225],m5:[455,0,225],m6:[800,0,215],m8:[1130,0,210]};
const STL={ok:'работает / согласовано',work:'в работе',draft:'драфт, согласовать',none:'нет материала / не начато'};
const ICONF='<svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><path fill="currentColor" d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1.5V9h5.5"/></svg>';
const MAXSIZE=25*1024*1024;

async function loadLead(){
  if(LEAD) return LEAD;
  const r=await fetch('lead.enc.json',{cache:'no-store'}); const j=await r.json();
  LEAD=JSON.parse(dec.decode(await aesDec(KEY,j.iv,j.ct))); return LEAD;
}
const M=id=>LEAD.modules[id];
let VAR=+(ls.get('strat.var')||1);
const outs=id=>id==='az'?[VAR===1?`→ М1: лиды (${(LEAD.variants&&LEAD.variants[1])||''})`:'→ М3: лиды (напрямую в ОП)']:M(id).out;
const mName=id=>id==='tu'?'«Трудоустроен в ГК Алабуга»':`${M(id).short} · ${M(id).name}`;
const mOwner=id=>id==='tu'?'':`${M(id).owner} · ${M(id).dept}`;
const filesOf=k=>(FL[k]||[]).filter(f=>!f.del).sort((a,b)=>a.ts-b.ts);
const KW_LIST=[
  {title:'Форум',re:/форум[а-яё]*/gi},
  {title:'Грант',re:/грант[а-яё]*/gi},
  {title:'Очный этап',re:/очн(?:ый|ого|ому|ым|ом|ые|ых|ым|ыми)\s+этап[а-яё]*/gi},
  {title:'Профориентации',re:/профориентаци[а-яё]*/gi},
  {title:'Закрытый клуб',re:/закрыт(?:ый|ого|ому|ым|ом|ые|ых|ым|ыми)\s+клуб[а-яё]*/gi},
  {title:'Инфополе',re:/инфопол[а-яё]*/gi}
];
function highlightKw(s){
  let h=esc(s);
  for(const k of KW_LIST){
    h=h.replace(k.re,m=>`<b class="kwhl">${m}</b>`);
  }
  return h;
}
function linkifyKw(s){
  let h=esc(s);
  for(const k of KW_LIST){
    h=h.replace(k.re,m=>`<button type="button" class="kwbtn" data-kw="${esc(k.title)}">${m}</button>`);
  }
  return h;
}
function fixZayavka(s){
  return String(s??'').replace(/заявк(?:а|и)/gi,'лиды');
}
const sdot=s=>`<i class="sdot s-${s}" title="${STL[s]||''}"></i>`;

/* задачи отдела: по фамилии владельца модуля в поле «Ответственный» */
function modTasks(id){
  const sn=M(id).owner.toLowerCase();
  return TASKS.filter(t=>!t.kt&&(t.resp||'').toLowerCase().includes(sn)).sort((a,b)=>a.due<b.due?-1:1);
}
const isOpen=t=>!['Готово','Отменено'].includes(t.status);
function nearest(id){const td=ymd(new Date()),op=modTasks(id).filter(isOpen);return op.find(t=>t.due>=td)||op[0]||null}

/* ---------- отрисовка вкладки ---------- */
window.renderLead=async function(){
  const box=$('#leadwrap');
  try{await loadLead()}catch(e){box.innerHTML='<div class="panel lsec">Не удалось загрузить карту.</div>';return}
  const mods=['m1','m2','m34','m5','m6','m7','m8','az'];
  let cards='';
  for(const id of Object.keys(POS)){
    const m=M(id),[x,y,w]=POS[id],nf=filesOf('mod:'+id).length;
    cards+=`<div class="lcard ${id} ${id==='m1'&&VAR===2?'ours':''}" data-mod="${id}" role="button" tabindex="0" style="left:${x}px;top:${y}px;width:${w}px">
      ${nf?`<span class="fc" title="Документов: ${nf}">${ICONF}${nf}</span>`:''}
      ${id==='m1'?`<span class="ourtag ${VAR===2?'off':''}">${VAR===2?'наш PR · отключён':'наш PR'}</span>`:''}
      <h4>${esc(m.card).replace(/^(М[\d–]+)\s·\s/,'<span class="mn">$1</span>')}</h4><div class="ow">${esc(m.owner)} · ${esc(m.dept)}</div>
      <dl>${m.goal?`<dt>Цель</dt><dd>${highlightKw(m.goal)}</dd>`:''}${m.format?`<dt>Формат</dt><dd>${linkifyKw(m.format)}</dd>`:''}</dl>${!m.goal&&!m.format?'<p class="nog">Цель и формат пока не заданы</p>':''}
    </div>`;
  }
  box.innerHTML=`
  <section class="panel lsec">
    <h2>Модули и руководители</h2><p class="sub">Нажмите на модуль, чтобы открыть цели, регламенты и документы отдела.</p>
    <div class="mchips">${mods.map(id=>`<button class="mchip" data-mod="${id}"><span class="mn">${esc(M(id).short)}</span><span><b>${esc(M(id).name)}</b><small>${esc(M(id).owner)}, ${esc(M(id).dept)}</small></span></button>`).join('')}</div>
  </section>
  <section class="panel lsec">
    <h2>Путь лида</h2>
    <p class="lhint">Карточка открывает отдел. Стрелка или число на ней открывает регламент взаимодействия между двумя отделами.</p>
    <div class="lscroll"><div class="lcanvas" id="lcanvas">${LEAD.variants?`<div class="vtog" id="vtog" role="group" aria-label="Куда идут лиды ${esc(M('az').name)}"><span class="vcap">Лиды ${esc(M('az').name)}:</span>${Object.entries(LEAD.variants).map(([k,v],i)=>`${i?'<span class="vor">или</span>':''}<button data-var="${k}" class="${String(VAR)===k?'on':''}">${esc(v)}</button>`).join('')}</div>`:''}<svg id="lsvg"><defs><marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--ink)"/></marker><marker id="arrr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--danger)"/></marker></defs></svg>${cards}</div></div>
  </section>
  <section class="panel lsec">
    <h2>Воронка 26/27</h2><p class="sub">Нажмите на этап, чтобы перейти к связанной стрелке или отделу.</p>
    <div class="lboxes"><div class="lbox2"><b>${esc(LEAD.loop.title)}</b>${esc(LEAD.loop.text)}</div><div class="lbox2"><b>${esc(LEAD.chat.title)}</b>${esc(LEAD.chat.text)}</div></div>
    <div class="funnel">${LEAD.funnel.map((f,i)=>`<button class="fst ${i===LEAD.funnel.length-1?'last':''}" data-f="${i}" style="width:min(100%,${Math.max(280,420-i*28)}px)"><small>${esc(f.name)}</small><b>${esc(f.num)}</b></button>${f.next?`<div class="fcv">↓ ${esc(f.next)}</div>`:''}`).join('')}</div>
  </section>`;
  box.querySelectorAll('[data-mod]').forEach(el=>{el.onclick=()=>openModule(el.dataset.mod);el.onkeydown=e=>{if(e.key==='Enter'&&!e.target.classList.contains('kwbtn'))openModule(el.dataset.mod)}});
  box.querySelectorAll('.kwbtn').forEach(btn=>{btn.onclick=e=>{e.stopPropagation();openKeyword(btn.dataset.kw)}});
  box.querySelectorAll('.fst').forEach(el=>el.onclick=()=>openStage(+el.dataset.f));
  box.querySelectorAll('#vtog [data-var]').forEach(el=>el.onclick=()=>{VAR=+el.dataset.var;ls.set('strat.var',String(VAR));renderLead()});
  drawEdges();
  prefetchImages();
  if(window.leadIntro&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    window.leadIntro=false;
    const E='cubic-bezier(.2,.8,.2,1)';
    box.querySelectorAll('.lsec').forEach((s,i)=>s.animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'none'}],{duration:340,delay:i*70,easing:E,fill:'backwards'}));
    // карточки появляются по ходу движения лида, затем стрелки
    const order=['az','m1','m2','m34','m5','m6','m8','m7'];
    order.forEach((id,i)=>{const c=box.querySelector('#lcanvas .lcard.'+id);c&&c.animate([{opacity:0,transform:'translateY(14px)'},{opacity:1,transform:'none'}],{duration:320,delay:180+i*55,easing:E,fill:'backwards'})});
    box.querySelectorAll('#lsvg g, #lcanvas .epill, #lcanvas .bus, #vtog').forEach(el=>el.animate([{opacity:0},{opacity:1}],{duration:380,delay:180+order.length*55,easing:'ease',fill:'backwards'}));
    box.querySelectorAll('.fst').forEach((f,i)=>f.animate([{opacity:0,transform:'scaleX(.92)'},{opacity:1,transform:'none'}],{duration:260,delay:300+i*60,easing:E,fill:'backwards'}));
  }
};

function rect(id){const el=$(`#lcanvas .lcard.${id}`);return {l:el.offsetLeft,t:el.offsetTop,w:el.offsetWidth,h:el.offsetHeight,r:el.offsetLeft+el.offsetWidth,b:el.offsetTop+el.offsetHeight,cx:el.offsetLeft+el.offsetWidth/2,cy:el.offsetTop+el.offsetHeight/2}}
// подгонка схемы под ширину окна (на телефоне — прокрутка)
function fitCanvas(){
  const cv=$('#lcanvas'); if(!cv) return; const wrap=cv.parentElement, W=wrap.clientWidth, cw=cv.offsetWidth;
  const k=W>=880?Math.min(1,W/Math.max(cw,cv.scrollWidth)):1;
  cv.style.transform=k<1?`scale(${k})`:''; wrap.classList.toggle('fit',W>=880);
  wrap.style.height=W>=880?(cv.offsetHeight*k+6)+'px':'';
}
window.addEventListener('resize',()=>{if(TAB==='lead')fitCanvas()});
function layout(){
  const h=id=>$(`#lcanvas .lcard.${id}`).offsetHeight, set=(id,y)=>$(`#lcanvas .lcard.${id}`).style.top=y+'px';
  set('m7',0); set('az',0); const row=Math.max(h('m7'),h('az'))+110;
  ['m1','m34','m6','m8'].forEach(id=>set(id,row));
  set('m2',row+h('m1')+54); set('m5',row+h('m34')+92);
  const bottom=Math.max(...['m2','m5','m6','m8'].map(id=>{const e=$(`#lcanvas .lcard.${id}`);return e.offsetTop+e.offsetHeight}));
  $('#lcanvas').style.height=(bottom+20)+'px';
}
function drawEdges(){
  const cv=$('#lcanvas'), svg=$('#lsvg'); if(!cv) return; layout();
  cv.querySelectorAll('.epill,.bus').forEach(e=>e.remove()); svg.querySelectorAll('g').forEach(g=>g.remove());
  const R={}; Object.keys(POS).forEach(k=>R[k]=rect(k));
  const m34=R.m34, busY=R.m7.b+45, jx=R.m1.r+80;
  const P={}, pills={};
  // М1 → М3–4: прямая; М2 → М3–4: вверх к нижней части М3–4
  const y1=Math.max(R.m1.t,m34.t)+60, y2=m34.b-46, y2s=R.m2.t+56;
  P['m1-m34']=[[R.m1.r,y1],[m34.l,y1]]; pills['m1-m34']=[(R.m1.r+jx)/2-6,y1-17,'sm'];
  P['m2-m34']=[[R.m2.r,y2s],[jx,y2s],[jx,y2],[m34.l,y2]]; pills['m2-m34']=[(R.m2.r+jx)/2,y2s-17,'sm'];
  const x5=m34.l+28;
  P['m34-m5']=[[x5,m34.b],[x5,R.m5.cy],[R.m5.l,R.m5.cy]]; pills['m34-m5']=[x5-64,R.m5.cy-18,'big'];
  const x6=R.m5.r-40;
  P['m5-m34']=[[x6,R.m5.t],[x6,m34.b-24],[m34.r,m34.b-24]]; pills['m5-m34']=[x6+30,(R.m5.t+m34.b)/2+4,'big'];
  const xc=Math.round((R.m5.r+R.m6.l)/2);  // коридор М7 → М5 посередине между М5 и М6
  P['m34-m6']=[[m34.r,y1],[R.m6.l,y1]]; pills['m34-m6']=[(m34.r+xc)/2,y1-24,'big'];
  P['m6-m8']=[[R.m6.r,y1],[R.m8.l,y1]]; pills['m6-m8']=[(R.m6.r+R.m8.l)/2,y1-24,'big'];
  P['m8-tu']=[[R.m8.r,y1],[R.m8.r+62,y1]]; pills['m8-tu']=[R.m8.r+36,y1-26,'big'];
  ['m1','m34','m6','m8'].forEach(t=>{const tx=R[t].cx; P['m7-'+t]=[[R.m7.cx,R.m7.b],[R.m7.cx,busY],[tx,busY],[tx,R[t].t]]; pills['m7-'+t]=[tx,busY+(R[t].t-busY)/2,'sm']});
  const xl=Math.round(R.m1.l/2)+4;  // коридор М7 → М2 слева без обрезки
  P['m7-m2']=[[R.m7.cx,R.m7.b],[R.m7.cx,busY],[xl,busY],[xl,R.m2.t+40],[R.m2.l,R.m2.t+40]]; pills['m7-m2']=[xl+14,(R.m1.b+R.m2.t)/2,'sm'];
  P['m7-m5']=[[R.m7.cx,R.m7.b],[R.m7.cx,busY],[xc,busY],[xc,R.m5.cy+20],[R.m5.r,R.m5.cy+20]]; pills['m7-m5']=[xc,(R.m34.b+R.m5.t)/2+18,'sm'];
  const vt=$('#vtog'); if(vt){vt.style.left=(R.az.r+24)+'px';vt.style.top=(R.az.t+70)+'px';vt.style.width=(R.m34.l+30-R.az.r-44)+'px'}
  const xa=R.m1.l+40, ya=R.m34.l+30;  // внешний PR: вариант 1 — вниз в М1, вариант 2 — вправо в М3–4
  P['az-m1']=[[xa,R.az.b],[xa,R.m1.t]]; pills['az-m1']=[xa,(R.az.b+busY)/2,'sm'];
  P['az-m34']=[[R.az.r,R.az.t+46],[ya,R.az.t+46],[ya,R.m34.t]]; pills['az-m34']=[(R.az.r+ya)/2,R.az.t+46-17,'sm'];
  const ns='http://www.w3.org/2000/svg';
  for(const e of LEAD.edges){
    if(e.variant&&e.variant!==VAR) continue;
    const pts=P[e.id]; if(!pts) continue;
    const d='M'+pts.map(p=>p.join(' ')).join(' L');
    const g=document.createElementNS(ns,'g');
    const off=e.id==='m1-m34'&&VAR===2;
    g.innerHTML=`<path class="ehit" d="${d}"></path><path class="epath ${e.dashed||off?'d':''} ${off?'off':''}" d="${d}" marker-end="url(#${off?'arrr':'arr'})"></path>`;
    g.querySelector('.ehit').addEventListener('click',()=>openEdge(e.id));
    svg.appendChild(g);
    const [px,py,sz]=pills[e.id], nf=filesOf('edge:'+e.id).length, nc=e.id==='m1-m34'||e.id==='m2-m34';
    const b=document.createElement(nc?'span':'button'); b.className='epill '+sz+(off?' off':'')+(nc?' noclick':''); b.style.left=px+'px'; b.style.top=py+'px';
    if(!nc) b.title='Регламент взаимодействия: '+mName(e.from)+' → '+mName(e.to);
    b.innerHTML=esc(sz==='big'?e.num:(e.id.startsWith('m7-')?'Метрики':e.label.replace(/^→\s*М\d\S*:\s*/,'').replace(/^заявка$/i,'лиды')))+(nf?`<span class="fn">${ICONF}${nf}</span>`:'');
    if(!nc) b.onclick=()=>openEdge(e.id); cv.appendChild(b);
  }
  fitCanvas();
  const s=document.createElement('div'); s.className='bus'; s.textContent=(LEAD.funnel&&LEAD.funnel[0]&&LEAD.funnel[0].num)||''; s.style.left=((jx+m34.l)/2)+'px'; s.style.top=((y1+y2)/2)+'px'; s.style.fontSize='20px'; cv.appendChild(s);
}

/* ---------- окна ---------- */
function showPanel(title,html,after){OPEN_DAY=null;$('#dtitle').textContent=title;$('#dbody').innerHTML=html;after&&after();if(!$('#dlg').open)$('#dlg').showModal();$('#dbody').scrollTop=0}
function regItem(r){return `<div class="it"><div class="hd">${sdot(r.status)} ${esc(r.name)}<span class="tpill ${r.type==='внешний'?'ext':''}">${esc(r.type)}</span></div><p>${esc(r.text)}</p><div class="mt">${r.mods==='all'?'все модули':r.mods.map(m=>`${M(m).short} (${M(m).owner})`).join(', ')}</div></div>`}
function conceptItem(c,part){
  if(part) return `<div class="it"><div class="hd">${sdot(c.status)} ↗ ${esc(c.name)}</div><div class="mt">владелец ${M(c.owner).short} (${M(c.owner).owner})</div></div>`;
  return `<div class="it"><div class="hd">${sdot(c.status)} ${esc(c.name)}</div><p>${esc(c.text)}</p>${c.with.length?`<div class="mt">Владелец ${M(c.owner).short} (${M(c.owner).owner}) · с ${c.with.map(m=>`${M(m).short} (${M(m).owner})`).join(', ')}</div>`:''}<div class="ag"><b>Согласовать:</b> ${esc(c.agree)}</div></div>`;
}
const slegend=`<div class="slegend">${Object.entries(STL).map(([k,v])=>`<span>${sdot(k)}${v}</span>`).join('')}</div>`;

function filesBlock(key,title,empty){
  const list=filesOf(key);
  return `<h5>${title}</h5><div class="files" data-key="${key}">${list.length?list.map(f=>`<div class="fl">${ICONF}<button class="open" data-id="${f.id}">${esc(f.name)}</button><small>${f.size>=1048576?(f.size/1048576).toFixed(1)+' МБ':Math.max(1,Math.round(f.size/1024))+' КБ'} · ${esc(f.a)} · ${new Date(f.ts).toLocaleDateString('ru-RU')}</small><button class="x" data-del="${f.id}" title="Удалить">×</button></div>`).join(''):`<p class="empty">${empty}</p>`}
  <label class="btn ghost upl">Загрузить файл<input type="file" hidden data-up="${key}"></label><span class="upst"></span></div>`;
}
function bindFiles(reopen){
  $('#dbody').querySelectorAll('.files').forEach(box=>{
    const key=box.dataset.key, stEl=box.querySelector('.upst');
    box.querySelectorAll('button.open').forEach(b=>b.onclick=()=>openFile(filesOf(key).find(f=>f.id===b.dataset.id),stEl));
    box.querySelectorAll('[data-del]').forEach(b=>b.onclick=async()=>{
      if(!b.dataset.sure){b.dataset.sure=1;b.textContent='удалить?';b.style.fontSize='11px';setTimeout(()=>{b.textContent='×';delete b.dataset.sure;b.style.fontSize=''},2500);return}
      await deleteFile(key,b.dataset.del); reopen(); renderLead();
    });
    box.querySelector('[data-up]').onchange=async e=>{const f=e.target.files[0];if(!f)return;
      try{await uploadFile(key,f,stEl);reopen();renderLead()}catch(err){stEl.textContent='Не загружено: '+err.message}};
  });
}

function openModule(id){
  const m=M(id);
  const html=`<div class="ls">
    <div class="it"><div class="hd">${esc(m.num)} · ${esc(m.name)}</div><div class="mt">${esc(m.owner)} · ${esc(m.dept)}</div><p>${esc(m.desc)}</p></div>
    <h5>Путь лида — ${esc(m.card)}</h5>
    ${imgBlock('img:'+id)}
    <div class="it"><dl class="meta">${m.goal?`<dt>Цель</dt><dd>${esc(m.goal)}</dd>`:''}${m.format?`<dt>Формат</dt><dd>${esc(m.format)}</dd>`:''}${outs(id).length?`<dt>Переходы</dt><dd>${outs(id).map(esc).join('<br>')}</dd>`:''}</dl></div>
    ${filesBlock('mod:'+id,'Документы отдела','Документов пока нет — загрузите положение, регламент или другой файл отдела.')}
  </div>`;
  showPanel(`${m.short} · ${m.name}`,html,()=>{
    bindFiles(()=>openModule(id));
    bindImg('img:'+id,()=>openModule(id));
  });
}


function openKeyword(kw){
  const key='kw:'+kw;
  const c=(LEAD.concepts||[]).find(x=>x.name.toLowerCase().includes(kw.toLowerCase())||kw.toLowerCase().includes(x.name.toLowerCase()));
  const html=`<div class="ls">
    ${c?conceptItem(c,false):''}
    <h5>Фото / схема</h5>
    ${imgBlock('img:'+key)}
    ${filesBlock(key,'Материалы и документы','Документов по теме «'+esc(kw)+'» пока нет — загрузите презентацию, концепцию или регламент.')}
  </div>`;
  showPanel(kw,html,()=>{
    bindFiles(()=>openKeyword(kw));
    bindImg('img:'+key,()=>openKeyword(kw));
  });
}

function openEdge(eid){
  const e=LEAD.edges.find(x=>x.id===eid), a=e.from, b=e.to, isM=eid.startsWith('m7-');
  const html=`<div class="ls">
    <div class="it"><div class="hd">${esc(mName(a))} → ${esc(mName(b))}</div><div class="mt">${esc(mOwner(a))}${b!=='tu'?' → '+esc(mOwner(b)):''}</div><p>${esc(e.label.replace(/заявка/gi,'лиды'))}${e.num?` · <b>${esc(e.num)}</b>`:''}</p></div>
    ${isM?metricsBlock(e):`<h5>Фото</h5>${imgBlock('img:edge:'+eid)}`}
    ${filesBlock('edge:'+eid,'Файл регламента взаимодействия','Регламент ещё не загружен. Загрузите файл (PDF, Word, Excel, картинку) — он зашифруется и сохранится на GitHub.')}
    <div class="row" style="margin-top:10px"><button class="btn ghost" data-go="${a}">Открыть ${esc(M(a).short)}</button>${b!=='tu'?`<button class="btn ghost" data-go="${b}">Открыть ${esc(M(b).short)}</button>`:''}</div>
  </div>`;
  showPanel(isM?'Метрики':'Регламент взаимодействия',html,()=>{
    $('#dbody').querySelectorAll('[data-go]').forEach(x=>x.onclick=()=>openModule(x.dataset.go));
    bindFiles(()=>openEdge(eid));
    if(isM) bindMetrics(e); else bindImg('img:edge:'+eid,()=>openEdge(eid));
  });
}

function openStage(i){
  const f=LEAD.funnel[i], prev=LEAD.funnel[i-1];
  const c=f.concept&&LEAD.concepts.find(x=>x.name===f.concept), e=f.edge&&LEAD.edges.find(x=>x.id===f.edge);
  const html=`<div class="ls"><div class="it"><div class="hd">${esc(f.name)}</div><p style="font-size:22px;font-weight:700;margin:4px 0">${esc(f.num)}</p>
    <div class="mt">${prev?`Из этапа «${esc(prev.name)}»: ${esc(prev.next)}`:'Первый этап воронки'}${f.next?` · дальше: ${esc(f.next)}`:''}</div></div>
    ${e?`<h5>На схеме</h5><div class="it task" data-edge="${e.id}"><span>${esc(mName(e.from))} → ${esc(mName(e.to))} · ${esc(e.num)}</span><span class="dd">регламент →</span></div>`:''}
    ${c?`<div class="row"><button class="btn ghost" data-go="${c.owner}">Открыть ${esc(M(c.owner).short)} · ${esc(M(c.owner).name)}</button></div>`:''}</div>`;
  showPanel('Воронка 26/27',html,()=>{
    $('#dbody').querySelectorAll('[data-edge]').forEach(x=>x.onclick=()=>openEdge(x.dataset.edge));
    $('#dbody').querySelectorAll('[data-go]').forEach(x=>x.onclick=()=>openModule(x.dataset.go));
  });
}

/* ---------- метрики на стрелках М7: просмотр + правка по кнопке ---------- */
function parseMetrics(txt){
  const blocks=[]; let cur=null;
  for(const raw of String(txt||'').split('
')){
    const line=raw.trim();
    if(!line){cur=null;continue}
    if(!cur){cur={h:line,items:[]};blocks.push(cur);continue}
    const t=line.replace(/^[•\-–*]\s*/,'');
    const last=cur.items[cur.items.length-1];
    if(last&&/→\s*$/.test(last)){cur.items[cur.items.length-1]=last+' '+t;continue}   // перенос строки после «→»
    cur.items.push(t);
  }
  return blocks;
}
function metricsView(txt){
  const bl=parseMetrics(txt);
  if(!bl.length) return '<p class="mt">Метрики пока не заполнены — нажмите «Редактировать».</p>';
  return bl.map(b=>`<section class="mblk"><h6>${esc(b.h)}<span>${b.items.length}</span></h6>${b.items.length?`<ul>${b.items.map(it=>{const i=it.indexOf(' — ');return i>0?`<li><b>${esc(it.slice(0,i))}</b><small>${esc(it.slice(i+3))}</small></li>`:`<li><b>${esc(it)}</b></li>`}).join('')}</ul>`:''}</section>`).join('');
}
function metricsBlock(e){
  const cur=MT[e.id], txt=cur?cur.t:(e.metrics||'');
  return `<h5>Метрики ${esc(M(e.to).short)} · ${esc(M(e.to).name)}</h5>
  <div class="mtbox"><div id="mtview" class="mview">${metricsView(txt)}</div>
  <textarea id="mttext" class="hidden" spellcheck="false">${esc(txt)}</textarea>
  <div class="row"><button class="btn" id="mtedit">Редактировать</button><button class="btn hidden" id="mtsave">Сохранить</button><button class="btn ghost hidden" id="mtcancel">Отмена</button>
  <span class="st" id="mtst">${cur?`Изменено: ${esc(cur.a)}, ${new Date(cur.ts).toLocaleString('ru-RU',{dateStyle:'short',timeStyle:'short'})}`:'Из файла «Итоговая система аналитических метрик»'}</span></div></div>`;
}
function bindMetrics(e){
  const ta=$('#mttext'), view=$('#mtview'); if(!ta) return;
  const fit=()=>{ta.style.height='auto';ta.style.height=(ta.scrollHeight+4)+'px'}; ta.oninput=fit;
  const mode=ed=>{ta.classList.toggle('hidden',!ed);view.classList.toggle('hidden',ed);$('#mtedit').classList.toggle('hidden',ed);$('#mtsave').classList.toggle('hidden',!ed);$('#mtcancel').classList.toggle('hidden',!ed);if(ed){fit();ta.focus()}};
  $('#mtedit').onclick=()=>mode(true);
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches) view.querySelectorAll('.mblk').forEach((b,i)=>b.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:260,delay:i*60,easing:'cubic-bezier(.2,.8,.2,1)',fill:'backwards'}));
  $('#mtcancel').onclick=()=>{const c=MT[e.id];ta.value=c?c.t:(e.metrics||'');mode(false)};
  $('#mtsave').onclick=async()=>{MT[e.id]={t:ta.value,a:USER,ts:Date.now()};view.innerHTML=metricsView(ta.value);mode(false);$('#mtst').textContent='Сохраняю…';await persist();$('#mtst').textContent=syncOn()?'Сохранено и отправлено':'Сохранено в этом браузере'};
}

/* ---------- фото или PDF-презентация отдела (одно на модуль, шифруется как файлы) ---------- */
const isPdf=f=>f&&(f.type==='application/pdf'||/\.pdf$/i.test(f.name||''));
let PDFJS=null;
function loadPdfJs(){
  if(PDFJS) return PDFJS;
  PDFJS=new Promise((res,rej)=>{
    if(window.pdfjsLib) return res(window.pdfjsLib);
    const s=document.createElement('script');
    s.src='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    s.onload=()=>{window.pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';res(window.pdfjsLib)};
    s.onerror=()=>rej(new Error('Не удалось загрузить PDF-плеер'));
    document.head.appendChild(s);
  });
  return PDFJS;
}

function imgBlock(key){
  const f=filesOf(key).slice(-1)[0], pdf=isPdf(f);
  return `<div class="limg" data-key="${key}">${f?`<div class="limgw"><button class="limgv" title="Открыть крупно"><span class="lph">Загружаю ${pdf?'презентацию':'фото'}…</span></button></div>`:`<label class="limgd"><b>Загрузить фото или PDF</b><span>Схема, презентация PDF или снимок — покажется здесь на всю ширину</span><input type="file" accept="image/*,application/pdf,.pdf" hidden data-img></label>`}
  ${f?`<div class="row" style="margin-top:8px"><label class="btn ghost upl">Заменить фото / PDF<input type="file" accept="image/*,application/pdf,.pdf" hidden data-img></label><button class="btn ghost" data-imgdel>Удалить ${pdf?'PDF':'фото'}</button><span class="upst"></span></div>`:'<span class="upst"></span>'}</div>`;
}
async function bindImg(key,reopen){
  const box=$('#dbody .limg'); if(!box) return;
  const stEl=box.querySelector('.upst'), f=filesOf(key).slice(-1)[0];
  box.querySelectorAll('[data-img]').forEach(inp=>inp.onchange=async e=>{
    const file=e.target.files[0]; if(!file) return;
    const pdf=file.type==='application/pdf'||/\.pdf$/i.test(file.name||'');
    if(!/^image\//.test(file.type)&&!pdf){stEl.textContent='Нужна картинка (JPG, PNG) или PDF';return}
    try{
      const old=filesOf(key);
      let up=file;
      if(!pdf){stEl.textContent='Сжимаю фото…';up=await shrinkImage(file)}
      else if(!up.type){up=new File([file],file.name,{type:'application/pdf'})}
      await uploadFile(key,up,stEl);
      for(const o of old)await deleteFile(key,o.id);
      reopen();renderLead();
    }catch(err){stEl.textContent='Не загружено: '+err.message}
  });
  const del=box.querySelector('[data-imgdel]');
  if(del) del.onclick=async()=>{
    const lbl=isPdf(f)?'Удалить PDF':'Удалить фото';
    if(!del.dataset.sure){del.dataset.sure=1;del.textContent='Точно удалить?';setTimeout(()=>{del.textContent=lbl;delete del.dataset.sure},2500);return}
    for(const o of filesOf(key))await deleteFile(key,o.id);reopen();
  };
  if(!f) return;
  try{
    if(!MEM.has(f.id)) await loadSync();
    const url=await blobUrl(f);
    const wrap=box.querySelector('.limgw'); if(!wrap) return;
    if(isPdf(f)){
      const pdfjsLib=await loadPdfJs();
      const doc=await pdfjsLib.getDocument(url).promise;
      let page=1, busy=false;
      wrap.innerHTML=`<div class="lpdfv"><canvas title="Открыть крупно"></canvas><div class="pdfnav"><span class="pg">1 / ${doc.numPages}</span><button type="button" class="ib" data-p="-1" aria-label="Назад">‹</button><button type="button" class="ib" data-p="1" aria-label="Вперёд">›</button></div></div>`;
      const cv=wrap.querySelector('canvas'), pgEl=wrap.querySelector('.pg'), [bPrev,bNext]=wrap.querySelectorAll('.pdfnav .ib');
      const draw=async n=>{
        if(busy) return; busy=true;
        page=Math.max(1,Math.min(doc.numPages,n));
        bPrev.disabled=page<=1; bNext.disabled=page>=doc.numPages;
        pgEl.textContent=page+' / '+doc.numPages;
        const p=await doc.getPage(page);
        const vp0=p.getViewport({scale:1}), dpr=Math.min(window.devicePixelRatio||1,2);
        const targetW=Math.max(640,(wrap.clientWidth||700)*dpr);
        const vp=p.getViewport({scale:targetW/vp0.width});
        cv.width=vp.width; cv.height=vp.height;
        await p.render({canvasContext:cv.getContext('2d'),viewport:vp}).promise;
        busy=false;
      };
      bPrev.onclick=e=>{e.stopPropagation();if(page>1)draw(page-1)};
      bNext.onclick=e=>{e.stopPropagation();if(page<doc.numPages)draw(page+1)};
      cv.onclick=()=>showViewer(f,url);
      await draw(1);
    }else{
      const v=wrap.querySelector('.limgv'); if(!v) return;
      v.innerHTML=`<img src="${url}" alt="${esc(f.name)}">`; v.onclick=()=>showViewer(f,url);
    }
  }catch(e){const p=box.querySelector('.lph');if(p)p.textContent='Не удалось открыть файл: '+e.message}
}

/* ---------- файлы: шифруются ключом сайта и хранятся в репозитории ---------- */
function bytesToB64(u8){let s='';for(let i=0;i<u8.length;i+=0x8000)s+=String.fromCharCode.apply(null,u8.subarray(i,i+0x8000));return btoa(s)}
const fpath=id=>(SYNC.path.replace(/[^/]*$/,''))+'files/'+id+'.bin';
async function uploadFile(key,file,stEl){
  await loadSync();
  if(!SYNC) throw new Error('не настроено хранение на GitHub');
  // if(file.size>MAXSIZE) throw new Error('файл больше 25 МБ');
  stEl.textContent='Шифрую…';
  const iv=crypto.getRandomValues(new Uint8Array(12));
  const ct=new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM',iv},KEY,await file.arrayBuffer()));
  const blob=new Uint8Array(12+ct.length); blob.set(iv); blob.set(ct,12);
  const id=crypto.randomUUID();
  stEl.textContent='Загружаю на GitHub…';
  const r=await fetch(api(fpath(id)),{method:'PUT',headers:{Authorization:'Bearer '+SYNC.token,Accept:'application/vnd.github+json','Content-Type':'application/json'},body:JSON.stringify({message:'strat: add encrypted file',content:bytesToB64(blob)})});
  if(!r.ok) throw new Error('GitHub '+r.status);
  cachePut(id,blob); MEM.set(id,URL.createObjectURL(file));
  (FL[key]=FL[key]||[]).push({id,name:file.name,type:file.type||'',size:file.size,a:USER,ts:Date.now()});
  await persist();
}
// файлы неизменяемы (у каждого свой id), поэтому их можно смело кэшировать — в кэше лежат зашифрованные байты
const MEM=new Map();
async function cacheGet(id){try{const c=await caches.open('strat-files');const r=await c.match('/strat/files/'+id+'.bin');return r?new Uint8Array(await r.arrayBuffer()):null}catch(e){return null}}
async function cachePut(id,u8){try{const c=await caches.open('strat-files');await c.put('/strat/files/'+id+'.bin',new Response(u8))}catch(e){}}
async function fetchEnc(id){
  const hit=await cacheGet(id); if(hit) return hit;
  let u8=null;
  try{const r=await fetch('files/'+id+'.bin');if(r.ok)u8=new Uint8Array(await r.arrayBuffer())}catch(e){}   // быстрый адрес Pages
  if(!u8&&SYNC){const r=await fetch(api(fpath(id))+'?t='+Date.now(),{headers:{Authorization:'Bearer '+SYNC.token,Accept:'application/vnd.github.raw'},cache:'no-store'});if(r.ok)u8=new Uint8Array(await r.arrayBuffer())}
  if(!u8) throw new Error('файл не найден');
  cachePut(id,u8); return u8;
}
async function blobUrl(f){
  if(MEM.has(f.id)) return MEM.get(f.id);
  const b=await fetchEnc(f.id);
  const plain=await crypto.subtle.decrypt({name:'AES-GCM',iv:b.subarray(0,12)},KEY,b.subarray(12));
  const url=URL.createObjectURL(new Blob([plain],{type:f.type||'application/octet-stream'})); MEM.set(f.id,url); return url;
}
// фоновая подгрузка всех фото, пока человек смотрит схему
function prefetchImages(){
  const run=()=>Object.keys(FL).filter(k=>k.startsWith('img:')).forEach(k=>{const f=filesOf(k).slice(-1)[0];if(f&&!MEM.has(f.id))blobUrl(f).catch(()=>{})});
  if(window.requestIdleCallback) requestIdleCallback(run,{timeout:2000}); else setTimeout(run,800);
}
// сжатие фото перед загрузкой: до 2400 px по длинной стороне, WebP
async function shrinkImage(file){
  try{
    if(file.size<350*1024||!/^image\/(png|jpeg|webp|bmp)$/.test(file.type)) return file;
    const bmp=await createImageBitmap(file), k=Math.min(1,2400/Math.max(bmp.width,bmp.height));
    const c=document.createElement('canvas'); c.width=Math.round(bmp.width*k); c.height=Math.round(bmp.height*k);
    c.getContext('2d').drawImage(bmp,0,0,c.width,c.height);
    const blob=await new Promise(r=>c.toBlob(r,'image/webp',.9));
    if(!blob||blob.size>=file.size) return file;
    return new File([blob],file.name.replace(/\.\w+$/,'')+'.webp',{type:'image/webp'});
  }catch(e){return file}
}
async function openFile(f,stEl){
  if(!f) return;
  try{
    stEl.textContent='Расшифровываю…'; await loadSync();
    const url=await blobUrl(f);
    stEl.textContent=''; showViewer(f,url);
  }catch(e){stEl.textContent='Не открылось: '+e.message}
}
function showViewer(f,url){
  let d=$('#fview');
  if(!d){d=document.createElement('dialog');d.id='fview';d.style.width='min(1000px,calc(100vw - 24px))';document.body.appendChild(d);
    d.addEventListener('close',()=>{d.innerHTML=''})}
  d.dataset.url=url;
  const img=/^image\//.test(f.type), pv=img||/^(application\/pdf|text\/)/.test(f.type);
  d.innerHTML=`<div class="dh"><h2>${esc(f.name)}</h2><button class="ib" id="fvclose" aria-label="Закрыть">✕</button></div>
   <div class="db"><div class="row" style="margin:0"><a class="btn" href="${url}" target="_blank" rel="noopener">Открыть в новой вкладке</a><a class="btn ghost" href="${url}" download="${esc(f.name)}">Скачать</a></div>
   ${pv?(img?`<img src="${url}" alt="" style="max-width:100%;border-radius:10px">`:`<iframe src="${url}" style="width:100%;height:70vh;border:1px solid var(--line);border-radius:10px;background:#fff"></iframe>`):'<p style="font-size:13px;color:var(--muted);margin:0">Этот тип файла браузер не показывает сам — нажмите «Скачать» и откройте в программе (Word, Excel).</p>'}</div>`;
  d.querySelector('#fvclose').onclick=()=>d.close();
  d.showModal();
}
async function deleteFile(key,id){
  const f=(FL[key]||[]).find(x=>x.id===id); if(!f) return;
  f.del=true; await persist();
  try{await loadSync();if(!SYNC)return;const h={Authorization:'Bearer '+SYNC.token,Accept:'application/vnd.github+json','Content-Type':'application/json'};
    const g=await fetch(api(fpath(id))+'?t='+Date.now(),{headers:h,cache:'no-store'}); if(!g.ok) return;
    await fetch(api(fpath(id)),{method:'DELETE',headers:h,body:JSON.stringify({message:'strat: delete file',sha:(await g.json()).sha})});
  }catch(e){}
}
})();
