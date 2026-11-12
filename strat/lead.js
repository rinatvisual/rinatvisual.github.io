// Вкладка «Путь лида»: схема модулей, воронка, регламенты и зашифрованные файлы
(function(){
const css=`
#leadwrap{max-width:1480px;margin:0 auto;padding:24px 28px 40px;display:flex;flex-direction:column;gap:28px;}
.lsec{padding:22px}
.lsec>h2{font-size:24px;line-height:1.2;margin:0 0 4px;font-weight:700}
.lsec>.sub{font-size:14px;color:var(--muted);margin:0 0 18px;max-width:72ch}
.mchips{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:0;border-top:1px solid var(--line)}
.mchip{border:0;border-bottom:1px solid var(--line);background:transparent;padding:12px 10px 12px 0;text-align:left;line-height:1.3;display:flex;gap:10px;align-items:baseline}
.mchip:hover b{color:var(--accent)}
.mchip .mn{font-family:var(--fh);font-weight:700;font-size:20px;color:var(--ink);min-width:52px}
.mchip b{display:block;font-size:14.5px}.mchip small{color:var(--muted);font-size:13px}
.lscroll{overflow-x:auto;padding-bottom:6px;margin:0 -6px;padding-left:6px}
.lcanvas{position:relative;width:1450px;height:700px;transform-origin:0 0}
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

/* тема «Карта набора» */
#leadwrap{font-family:var(--fb);gap:22px}
.lsec{padding:22px 24px}
.lsec>h2{font-family:var(--fm);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--ink);margin:0 0 4px}
.lsec>.sub,.lhint{font-size:13.5px;color:var(--muted)}
.mchips{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-template-areas:"m7 m7 m7 m7" "m1 m34 m6 m8" "m2 m34 m6 m8" ". m5 m5 m5";gap:10px;border:0}
.mchip[data-mod="m7"]{grid-area:m7}.mchip[data-mod="m1"]{grid-area:m1}.mchip[data-mod="m2"]{grid-area:m2}.mchip[data-mod="m5"]{grid-area:m5}
.mchip[data-mod="m34"]{grid-area:m34;align-self:center}.mchip[data-mod="m6"]{grid-area:m6;align-self:center}.mchip[data-mod="m8"]{grid-area:m8;align-self:center}
.mchip strong{font-size:13px;font-weight:700;color:inherit;margin-top:2px}
@media (max-width:900px){.mchips{grid-template-columns:1fr;grid-template-areas:none}.mchips .mchip{grid-area:auto!important}}
.mchip{flex-direction:column;align-items:flex-start;gap:2px;border:0;border-radius:14px;background:var(--tile);color:var(--on-accent);padding:14px 16px;min-height:0;transition:filter .15s,transform .15s}
.mchip:hover{filter:brightness(1.07);transform:translateY(-1px)}
.mchip:hover b{color:inherit}
.mchip .mn{font-family:var(--fb);font-size:11.5px;font-weight:500;color:inherit;opacity:.85;min-width:0}
.mchip b{font-size:18px;font-weight:700;color:inherit;margin-top:4px}
.mchip small{color:inherit;opacity:.9;font-size:12.5px;margin-top:4px;line-height:1.4}
.mchip[data-mod="m7"]{background:var(--navy)}
.mchip[data-mod="m5"]{background:var(--soft);color:var(--ink);border:1.5px dashed var(--accent)}
.mchip[data-mod="m5"] .mn{color:var(--accent);opacity:1}
.mchip[data-mod="az"]{background:var(--card);color:var(--ink);border:1.5px dashed var(--edge)}
.mchip[data-mod="az"] .mn{color:var(--accent);opacity:1}
.lsec:has(#lcanvas){padding:22px 14px}
.lcard{background:var(--card);border:1.5px solid var(--edge);border-radius:12px;box-shadow:var(--sh1);font-size:13px;transition:border-color .15s,box-shadow .15s,transform .15s}
.lcard:hover{border-color:var(--accent);box-shadow:0 0 0 2px var(--accent),0 8px 22px color-mix(in srgb,var(--accent) 28%,transparent);transform:translateY(-2px)}
.lcard.m7{border-style:dashed;border-color:var(--ink)}
.lcard h4{font-size:14px;font-weight:700;color:var(--ink)}
.lcard h4 .mn{color:var(--accent)}
.lcard dt{font-family:var(--fm);font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--accent)}
.lcard .outs span{border:0;border-radius:999px;background:var(--tile);color:var(--on-accent);padding:2px 9px;font-size:11px;font-weight:700}
.lcard.m7 .outs span{background:var(--navy)}
.lcard .nt{border-radius:8px;background:var(--card)}
.lcard.ours{border:2px solid var(--danger)}
.lcard.ours h4 .mn{color:var(--danger)}
.lcard.az{border-style:dashed;background:var(--card)}
.ourtag{position:absolute;top:-8px;right:10px;transform:translateY(-50%);background:var(--navy);color:var(--on-navy);font-size:11px;font-weight:700;padding:1px 8px;border-radius:999px}
.ourtag.off{background:var(--danger);color:#fff}
.epath{stroke:var(--accent);stroke-width:2}
.epath.d{stroke:var(--ink);stroke-width:1.5;stroke-dasharray:3 4}
.epath.off{stroke:var(--danger);stroke-dasharray:6 5}
.ehit:hover+.epath{stroke:var(--accent);stroke-width:3.5}
.epill{border:1px solid var(--edge);border-radius:999px;background:var(--card);color:var(--ink);font-size:12px;font-weight:700;transition:background-color .15s,color .15s}
.epill:hover{background:var(--tile);color:var(--on-accent);border-color:var(--tile)}
.epill.big{font-family:var(--fb);font-size:21px;font-weight:600;color:var(--accent);border:0;background:var(--card);padding:0 6px;letter-spacing:-.01em}
.epill.big:hover{background:var(--tile);color:var(--on-accent)}
.epill.off{border-color:var(--danger);color:var(--danger);text-decoration:line-through}
.bus{font-family:var(--fb);font-size:21px;font-weight:700;color:var(--ink);background:var(--soft);padding:0 8px;text-shadow:none}
.vcap{font-size:12px;color:var(--muted)}
.vtog button{border:1px solid var(--edge);border-radius:10px;background:var(--card);color:var(--ink);font-weight:600;font-size:13px;padding:5px 9px;box-shadow:none}
.vtog button.on{background:var(--tile);color:var(--on-accent);border-color:var(--tile)}
.vor{font-family:var(--fb);font-size:15px;font-weight:700;color:var(--accent)}
.funnel{gap:0}
.fst{background:var(--card);border:1px solid var(--line);border-radius:10px;box-shadow:none;padding:8px 14px;flex-direction:column;align-items:flex-start;gap:0;transition:border-color .15s}
.fst:hover{border-color:var(--accent)}
.fst small{font-size:12px;color:var(--muted)}
.fst b{font-family:var(--fb);font-size:19px;font-weight:700;color:var(--ink)}
.fst.last{background:var(--tile);border-color:var(--tile)}
.fst.last small,.fst.last b{color:var(--on-accent)}
.fcv{font-family:var(--fm);font-size:11px;font-weight:700;color:var(--accent);padding:4px 0}
.lboxes{gap:12px}
.funnels{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;align-items:start;margin-top:16px}
.funnels .funnel{width:100%}
.fcol{min-width:0}
.ftitle{margin:0 0 10px;text-align:center;font-size:16px;font-weight:700;color:var(--ink)}
.ftitle:empty{display:none}
.fcol.left .ftitle{color:#16a34a}.fcol.right .ftitle{color:#dc2626}.fcol.center .ftitle{color:var(--accent)}
.funnel.side .fst{cursor:default}
.funnel.side .fst.src{cursor:pointer}.funnel.side .fst.src:hover{border-color:var(--accent)}
.srcw{margin-bottom:14px}
.srct{font-family:var(--fm);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--ink);margin-bottom:8px}
.srcg{display:grid;grid-template-columns:1fr 1fr;border:1.5px solid var(--edge);border-radius:14px;overflow:hidden;background:var(--card)}
.srcr{display:grid;grid-template-rows:1fr 1fr;border-left:1.5px solid var(--edge);position:relative}
.srcr .srcc.c{border-top:1.5px solid var(--edge)}
.srcc{padding:14px 16px;display:flex;flex-direction:column;gap:2px}
.srcc.a{justify-content:center}
.srcc small{font-size:14px;color:var(--muted);font-weight:600}
.srcc b{font-size:28px;font-weight:700;letter-spacing:-.01em;color:var(--ink);line-height:1.15}
.srcc.a b{font-size:34px}
.srcc span{font-family:var(--fm);font-size:12px;font-weight:700;color:var(--accent)}
.srcw.left .srcc b,.srcw.left .srcc span,.srcw.left .srcw.right .srcc b,.srcw.right .srcc span,.srcw.right :root[data-theme="dark"] .srcw.left .srcc b,:root[data-theme="dark"] .srcw.left .srcc span{color:#4ade80}
:root[data-theme="dark"] .srcw.right .srcc b,:root[data-theme="dark"] .srcw.right .srcc span{color:#f87171}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .srcw.left .srcc b,:root:not([data-theme="light"]) .srcw.left .srcc span{color:#4ade80}:root:not([data-theme="light"]) .srcw.right .srcc b,:root:not([data-theme="light"]) .srcw.right .srcc span{color:#f87171}}
@media (max-width:600px){.srcg{grid-template-columns:1fr}.srcr{border-left:0;border-top:1.5px solid var(--edge)}}
.funnel.side .fst:hover{border-color:var(--line)}
.funnel.left .fst b{color:#16a34a}.funnel.right .fst b{color:#dc2626}
:root[data-theme="dark"] .funnel.left .fst b{color:#4ade80}:root[data-theme="dark"] .funnel.right .fst b{color:#f87171}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .funnel.left .fst b{color:#4ade80}:root:not([data-theme="light"]) .funnel.right .fst b{color:#f87171}}
.funnel.left .fcv{color:#16a34a}.funnel.right .fcv{color:#dc2626}
.funnel.left .fst.last{background:color-mix(in srgb,#16a34a 14%,var(--card));border-color:#16a34a}
.funnel.right .fst.last{background:color-mix(in srgb,#dc2626 12%,var(--card));border-color:#dc2626}
.funnel.side .fst.last small{color:var(--muted)}
@media (max-width:900px){.funnels{grid-template-columns:1fr}}
.lbox2{border:1px dashed var(--edge);border-radius:12px;background:var(--card);padding:12px 14px;font-size:13.5px;max-width:none}
.lbox2 b{font-family:var(--fb);font-size:13.5px;font-weight:700;color:var(--accent)}
.ls h5{font-family:var(--fm);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--ink)}
.ls .it{border:1px solid var(--edge);border-radius:12px;background:var(--soft)}
.ls .it .ag{border-left:3px solid var(--accent)}
.ls .it.next{box-shadow:inset 4px 0 0 var(--accent)}
.sdot{border-radius:50%;border:0}
.files .fl{border:1px solid var(--line);border-radius:10px;background:var(--soft)}
.tpill{border-radius:999px;border:1px solid var(--line);background:var(--card)}
.limg{margin:0 0 6px}
.limgv{display:block;width:100%;padding:0;border:1px solid var(--line);border-radius:14px;background:var(--soft);cursor:zoom-in;overflow:hidden}
.limgv img{display:block;width:100%;height:auto;max-height:70vh;object-fit:contain;background:var(--card)}
.lph{display:block;padding:40px 12px;color:var(--muted);font-size:14px}
.limgd{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;min-height:170px;border:1.5px dashed var(--edge);border-radius:14px;cursor:pointer;text-align:center;padding:16px;background:var(--soft)}
.limgd:hover{border-color:var(--accent)}
.limgd b{font-weight:700;font-size:16px;color:var(--accent)}
.limgd span{font-size:13.5px;color:var(--muted)}
.nog{margin:2px 0 0;font-size:12.5px;color:var(--muted)}
.vtog{position:absolute;display:flex;flex-direction:column;align-items:stretch;gap:4px;z-index:2}
.mtbox textarea{min-height:200px;font-size:14px;line-height:1.5;border-radius:12px;overflow:hidden;margin-bottom:4px}
.mview{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:12px;margin-bottom:6px}
.mblk{border:1px solid var(--edge);border-radius:14px;background:var(--card);overflow:hidden}
.mblk h6{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:0;padding:9px 12px;font-family:var(--fb);font-weight:700;font-size:14px;background:var(--soft);color:var(--ink);border-bottom:1px solid var(--line)}
.mblk h6 span{font-size:11.5px;font-weight:700;background:var(--tile);color:var(--on-accent);border-radius:999px;padding:0 8px}
.mblk ul{list-style:none;margin:0;padding:0}
.mblk li{padding:7px 12px 7px 28px;border-top:1px solid var(--line);position:relative;font-size:14px;line-height:1.35;transition:background-color .12s}
.mblk li:first-child{border-top:0}
.mblk li::before{content:'';position:absolute;left:12px;top:13px;width:7px;height:7px;border-radius:50%;background:var(--accent)}
.mblk li b{font-weight:600;display:block}
.mblk li small{display:block;color:var(--muted);font-size:12.5px;margin-top:2px}
.mblk li:hover{background:var(--soft)}
.mblk li.msub{padding:12px 12px 4px;font-family:var(--fm);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--accent);border-top:0;background:none}
.mblk li.msub::before{display:none}
.mblk li.msub:hover{background:none}
.mblk li.msub+li{border-top:0}
.mblk li.msub:not(:first-child){margin-top:4px;border-top:1px solid var(--line)}
#fsv{width:100vw;height:100vh;max-width:none;max-height:none;margin:0;padding:0;border:0;border-radius:0;background:#0b0b0d;color:#ececf1;box-shadow:none}
#fsv[open]{display:flex;flex-direction:column;animation:none}
#fsv::backdrop{background:#000}
.fsbar{display:flex;align-items:center;gap:10px;padding:10px 16px;border-bottom:1px solid #26262c;flex:none}
.fsbar h2{flex:1;margin:0;font-size:16px;font-weight:600;color:#ececf1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.fsbar .pg{font-size:13px;font-weight:600;color:#9c9ca8;min-width:64px;text-align:center}
.fsbar .ib,.fsbar .btn.ghost{background:#1c1c20;border-color:#34343c;color:#ececf1}
.fsstage{flex:1;min-height:0;display:grid;place-items:center;position:relative;padding:16px;overflow:auto}
.fsstage canvas,.fsstage img{max-width:100%;max-height:100%;display:block;border-radius:6px;box-shadow:0 10px 40px rgba(0,0,0,.6);transition:opacity .15s}
.fsstage.ld canvas{opacity:.55}
.fsstage:has(.fsdoc),.fsstage:has(.fsxl){display:block;padding:0}
.fsdoc{min-height:100%;background:#2a2a2e}
.fsdoc .docx-wrapper{background:#2a2a2e!important;padding:24px 12px!important}
.fsdoc .docx-wrapper>section.docx{box-shadow:0 10px 40px rgba(0,0,0,.5)!important;margin-bottom:24px!important}
.fsxl{display:flex;flex-direction:column;height:100%}
.fstabs{display:flex;gap:4px;padding:8px 12px;border-bottom:1px solid #26262c;overflow-x:auto;flex:none}
.fstabs button{border:1px solid #34343c;background:#1c1c20;color:#c9c9d3;border-radius:8px;padding:4px 12px;font-size:13px;font-weight:600;white-space:nowrap}
.fstabs button.on{background:var(--tile);border-color:var(--tile);color:#fff}
.fssheet{flex:1;overflow:auto;background:#fff;color:#111}
.fssheet table{border-collapse:collapse;font-size:13px;font-family:var(--fb)}
.fssheet td{border:1px solid #d9dde3;padding:4px 8px;white-space:pre-wrap;vertical-align:top;min-width:40px}
.fssheet tr:first-child td{background:#eef3fb;font-weight:700;position:sticky;top:0}
.lvid{position:relative;border:1px solid var(--line);border-radius:14px;overflow:hidden;background:#000}
.lvid video{display:block;width:100%;max-height:70vh;background:#000}
.fsstage video{width:100%;height:100%;object-fit:contain;display:block;border-radius:6px;background:#000;box-shadow:0 10px 40px rgba(0,0,0,.6)}
.fsstage .fsmsg{color:#9c9ca8;font-size:15px;text-align:center;max-width:46ch}
.fsnav{position:absolute;top:50%;transform:translateY(-50%);width:52px;height:52px;border-radius:50%;border:1px solid #34343c;background:rgba(28,28,32,.85);color:#fff;font-size:26px;display:grid;place-items:center;transition:background-color .15s,transform .15s}
.fsnav:hover:not(:disabled){background:var(--tile);transform:translateY(-50%) scale(1.06)}
.fsnav:disabled{opacity:.25;cursor:default}
.fsnav.p{left:16px}.fsnav.n{right:16px}
.fsbtn{position:absolute;top:10px;right:10px;z-index:3;width:34px;height:34px;padding:0!important;display:grid;place-items:center;box-shadow:0 2px 8px rgba(0,0,0,.18)}

.epill.noclick{pointer-events:none;cursor:default}
.limgw{position:relative}
.lpdfv{position:relative;display:block;width:100%;border:1px solid var(--line);border-radius:14px;background:var(--soft);overflow:hidden}
.lpdfv canvas{display:block;width:100%;height:auto;max-height:70vh;object-fit:contain;background:var(--card);cursor:zoom-in;margin:0 auto}
.pdfnav{position:absolute;right:10px;bottom:10px;display:flex;align-items:center;gap:6px;z-index:3}
.pdfnav .pg{font-size:13px;font-weight:600;background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:10px;padding:3px 8px;pointer-events:none}
.pdfnav .ib{padding:4px 10px;min-width:32px;line-height:1.2;font-size:16px;box-shadow:0 2px 8px rgba(0,0,0,.18)}
.pdfnav .ib:disabled{opacity:.45;cursor:default}
.lpdfv canvas{transition:opacity .15s}.lpdfv.ld canvas{opacity:.55}
.kwbtn{border:0;border-bottom:1.5px dashed var(--accent);background:color-mix(in srgb,var(--accent) 12%,transparent);color:var(--ink);font:inherit;font-weight:600;padding:0 3px;border-radius:6px;cursor:pointer;display:inline;line-height:inherit}
.kwbtn:hover{background:var(--accent);color:var(--on-accent);border-bottom-style:solid}
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
function linkifyKw(s,mod){
  let h=esc(s);
  for(const k of KW_LIST){
    if(mod==='m5'&&k.title==='Профориентации') continue;  // в М5 «профориентации» — просто текст
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
      <dl>${m.goal?`<dt>Цель</dt><dd>${esc(m.goal)}</dd>`:''}${m.format?`<dt>Формат</dt><dd>${linkifyKw(m.format,id)}</dd>`:''}</dl>${!m.goal&&!m.format?'<p class="nog">Цель и формат пока не заданы</p>':''}
    </div>`;
  }
  box.innerHTML=`
  <section class="panel lsec">
    <h2>Модули и руководители</h2><p class="sub">Нажмите на модуль, чтобы открыть цели, регламенты и документы отдела.</p>
    <div class="mchips">${['m7','m1','m2','m34','m6','m8','m5'].map(id=>{const m=M(id),own=id==='m1'?`${M('az').owner} · PR`:`${m.owner} · ${m.dept}`;
      return `<button class="mchip" data-mod="${id}"><span class="mn">${esc(m.num)}</span><b>${esc(m.name)}</b><strong>${esc(own)}</strong><small>${esc(m.desc||'')}</small></button>`}).join('')}</div>
  </section>
  <section class="panel lsec">
    <h2>Путь лида</h2>
    <p class="lhint">Карточка открывает отдел. Стрелка или число на ней открывает регламент взаимодействия между двумя отделами.</p>
    <div class="lscroll"><div class="lcanvas" id="lcanvas">${LEAD.variants?`<div class="vtog" id="vtog" role="group" aria-label="Куда идут лиды ${esc(M('az').name)}"><span class="vcap">Лиды ${esc(M('az').name)}:</span>${Object.entries(LEAD.variants).map(([k,v],i)=>`${i?'<span class="vor">или</span>':''}<button data-var="${k}" class="${String(VAR)===k?'on':''}">${esc(v)}</button>`).join('')}</div>`:''}<svg id="lsvg"><defs><marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--ink)"/></marker><marker id="arrr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--danger)"/></marker></defs></svg>${cards}</div></div>
  </section>
  <section class="panel lsec">
    <h2>Воронка 26/27</h2><p class="sub">Нажмите на этап, чтобы перейти к связанной стрелке или отделу.</p>
    <div class="lboxes"><div class="lbox2"><b>${esc(LEAD.loop.title)}</b>${esc(LEAD.loop.text)}</div><div class="lbox2"><b>${esc(LEAD.chat.title)}</b>${esc(LEAD.chat.text)}</div></div>
    <div class="funnels">${fTitle('center')}<div class="funnel">${LEAD.funnel.map((f,i)=>`<button class="fst ${i===LEAD.funnel.length-1?'last':''}" data-f="${i}" style="width:${100-i*5}%"><small>${esc(f.name)}</small><b>${esc(f.num)}</b></button>${f.next?`<div class="fcv">↓ ${esc(f.next)}</div>`:''}`).join('')}</div></div>${fTitle('left')}${funnelCol('left')}</div>${fTitle('right')}${funnelCol('right')}</div></div>
  </section>`;
  box.querySelectorAll('[data-mod]').forEach(el=>{el.onclick=()=>openModule(el.dataset.mod);el.onkeydown=e=>{if(e.key==='Enter'&&!e.target.classList.contains('kwbtn'))openModule(el.dataset.mod)}});
  box.querySelectorAll('.kwbtn').forEach(btn=>{btn.onclick=e=>{e.stopPropagation();openKeyword(btn.dataset.kw)}});
  box.querySelectorAll('.fst[data-f]').forEach(el=>el.onclick=()=>openStage(+el.dataset.f));
  box.querySelectorAll('.fst[data-src]').forEach(el=>el.onclick=()=>openSources(el.dataset.src));
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
    box.querySelectorAll('.funnel').forEach(fn=>fn.querySelectorAll('.fst').forEach((f,i)=>f.animate([{opacity:0,transform:'scaleX(.92)'},{opacity:1,transform:'none'}],{duration:260,delay:300+i*60,easing:E,fill:'backwards'})));
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
  // М3–4 → М5: прямая вниз в верх М5, правее левых краёв обеих карточек
  const x5=Math.max(m34.l,R.m5.l)+70;
  P['m34-m5']=[[x5,m34.b],[x5,R.m5.t]]; pills['m34-m5']=[x5-62,(m34.b+R.m5.t)/2,'big'];
  // М5 → М3–4: прямая вверх в низ М3–4
  const x6=Math.min(m34.r,R.m5.r)-50;
  P['m5-m34']=[[x6,R.m5.t],[x6,m34.b]]; pills['m5-m34']=[x6+30,(R.m5.t+m34.b)/2,'big'];
  const xc=Math.round((R.m5.r+R.m6.l)/2);  // коридор М7 → М5 посередине между М5 и М6
  P['m34-m6']=[[m34.r,y1],[R.m6.l,y1]]; pills['m34-m6']=[(m34.r+xc)/2,y1-24,'big'];
  P['m6-m8']=[[R.m6.r,y1],[R.m8.l,y1]]; pills['m6-m8']=[(R.m6.r+R.m8.l)/2,y1-24,'big'];
  P['m8-tu']=[[R.m8.r,y1],[R.m8.r+70,y1]]; pills['m8-tu']=[R.m8.r+42,y1-26,'big'];
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
    const [px,py,sz]=pills[e.id], nf=filesOf('edge:'+e.id).length, nc=['m1-m34','m2-m34','az-m1','az-m34'].includes(e.id);  // подписи «лиды» не кликаются — только сама стрелка
    const b=document.createElement(nc?'span':'button'); b.className='epill '+sz+(off?' off':'')+(nc?' noclick':''); b.style.left=px+'px'; b.style.top=py+'px';
    if(!nc) b.title='Регламент взаимодействия: '+mName(e.from)+' → '+mName(e.to);
    b.innerHTML=esc(sz==='big'?e.num:(e.id.startsWith('m7-')?'Метрики':e.label.replace(/^→\s*М\d\S*:\s*/,'').replace(/^заявка$/i,'лиды')))+(nf?`<span class="fn">${ICONF}${nf}</span>`:'');
    if(!nc) b.onclick=()=>openEdge(e.id); cv.appendChild(b);
  }
  fitCanvas();
  const s=document.createElement('div'); s.className='bus'; s.textContent=(LEAD.funnel&&LEAD.funnel[0]&&LEAD.funnel[0].num)||''; s.style.left=(m34.l-10)+'px'; s.style.top=((y1+y2)/2)+'px'; s.style.transform='translate(-100%,-50%)'; s.style.fontSize='20px'; cv.appendChild(s);
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

// боковые воронки: слева — зелёные цифры, справа — красные; конверсия считается из самих чисел
// колонка воронки с подписью сверху (подписи — в зашифрованных данных)
const fTitle=side=>`<div class="fcol ${side}"><h3 class="ftitle">${esc((LEAD.funnelTitles&&LEAD.funnelTitles[side])||'')}</h3>`;
function funnelCol(side){
  const nums=(LEAD.funnelSides&&LEAD.funnelSides[side])||[]; if(!nums.length) return '';
  const val=s=>+String(s).replace(/\D/g,'');
  return `<div class="funnel side ${side}">${LEAD.funnel.map((f,i)=>{const n=nums[i]; if(n==null) return '';
    const nx=nums[i+1], cv=nx!=null&&val(n)?Math.round(val(nx)/val(n)*100)+'%':'';
    const tag=i===0&&LEAD.funnelSrc?'button':'div';
    return `<${tag} class="fst ${i===LEAD.funnel.length-1?'last':''}${tag==='button'?' src':''}" ${tag==='button'?`data-src="${side}"`:''} style="width:${100-i*5}%"><small>${esc(f.name)}</small><b>${esc(n)}</b></${tag}>${cv?`<div class="fcv">↓ ${cv}</div>`:''}`}).join('')}</div>`;
}

/* откуда пришли заявки: доли считаются по центральной воронке и одинаковы для всех трёх */
const numv=s=>+String(s).replace(/\D/g,'');
const fmtN=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
function srcRows(side){
  const base=LEAD.funnelSrc.map(([n,v])=>[n,numv(v)]), sum=base.reduce((a,[,v])=>a+v,0);
  if(side==='center') return base.map(([n,v])=>[n,v,v/sum]);
  const total=numv(LEAD.funnelSides[side][0]);
  // распределяем итог по тем же долям, остаток от округления — самым большим дробным частям
  const raw=base.map(([n,v])=>[n,total*v/sum,v/sum]), fl=raw.map(([n,x,s])=>[n,Math.floor(x),s]);
  let rest=total-fl.reduce((a,[,v])=>a+v,0);
  raw.map((r,i)=>[i,r[1]-Math.floor(r[1])]).sort((a,b)=>b[1]-a[1]).forEach(([i])=>{if(rest>0){fl[i][1]++;rest--}});
  return fl;
}
function srcBlock(side){
  const r=srcRows(side), pc=s=>Math.round(s*100)+'%';
  const total=side==='center'?LEAD.funnel[0].num:LEAD.funnelSides[side][0];
  const cell=([n,v,s],cls)=>`<div class="srcc ${cls}"><small>${esc(n)}</small><b>${fmtN(v)}</b><span>${pc(s)}</span></div>`;
  return `<div class="srcw ${side}"><div class="srct">Заявки · ${esc(total)}</div><div class="srcg">${cell(r[0],'a')}<div class="srcr">${cell(r[1],'b')}${cell(r[2],'c')}</div></div></div>`;
}
function openSources(side){ showPanel('Откуда заявки',srcBlock(side),()=>{}); }
function openStage(i){
  const f=LEAD.funnel[i], prev=LEAD.funnel[i-1];
  const c=f.concept&&LEAD.concepts.find(x=>x.name===f.concept), e=f.edge&&LEAD.edges.find(x=>x.id===f.edge);
  const html=(i===0&&LEAD.funnelSrc?srcBlock('center'):'')+`<div class="ls"><div class="it"><div class="hd">${esc(f.name)}</div><p style="font-size:22px;font-weight:700;margin:4px 0">${esc(f.num)}</p>
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
  for(const raw of String(txt||'').split('\n')){
    const line=raw.trim();
    if(!line){cur=null;continue}
    if(!cur){cur={h:line.replace(/:\s*$/,''),items:[]};blocks.push(cur);continue}
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
  // строка с двоеточием на конце («KPI / результат:») — подраздел, а не метрика
  const isSub=it=>/:\s*$/.test(it);
  return bl.map(b=>`<section class="mblk"><h6>${esc(b.h)}<span>${b.items.filter(i=>!isSub(i)).length}</span></h6>${b.items.length?`<ul>${b.items.map(it=>{if(isSub(it))return `<li class="msub">${esc(it.replace(/:\s*$/,''))}</li>`;const i=it.indexOf(' — ');return i>0?`<li><b>${esc(it.slice(0,i))}</b><small>${esc(it.slice(i+3))}</small></li>`:`<li><b>${esc(it)}</b></li>`}).join('')}</ul>`:''}</section>`).join('');
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
const isVid=f=>f&&(/^video\//.test(f.type||'')||/\.(mp4|m4v|webm|mov)$/i.test(f.name||''));
const VIDMAX=50*1024*1024;  // ограничение GitHub на размер одного файла через API
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

/* PDF-листалка: страницы рисуются заранее во внеэкранный холст и показываются мгновенно */
// загрузка внешней библиотеки по требованию (пробует адреса по очереди)
const LIBS={};
function loadScript(urls,ready){
  const k=urls[0]; if(LIBS[k]) return LIBS[k];
  return LIBS[k]=(async()=>{
    for(const u of urls){
      if(ready()) return;
      try{await new Promise((res,rej)=>{const s=document.createElement('script');s.src=u;s.onload=res;s.onerror=rej;document.head.appendChild(s)});if(ready())return}catch(e){}
    }
    if(!ready()){delete LIBS[k];throw new Error('не загрузился просмотрщик')}
  })();
}
function pdfPager(doc,cv,opts){
  const N=doc.numPages, cache=new Map(), dpr=Math.min(window.devicePixelRatio||1,2);
  let chain=Promise.resolve(), want=1, page=1;
  const render=n=>{
    if(cache.has(n)) return cache.get(n);
    const pr=chain=chain.then(async()=>{
      const p=await doc.getPage(n), vp0=p.getViewport({scale:1}), vp=p.getViewport({scale:opts.scale(vp0)*dpr});
      const off=document.createElement('canvas'); off.width=Math.round(vp.width); off.height=Math.round(vp.height);
      const ctx=off.getContext('2d'); ctx.fillStyle='#fff'; ctx.fillRect(0,0,off.width,off.height);
      await p.render({canvasContext:ctx,viewport:vp}).promise; return off;
    });
    cache.set(n,pr); return pr;
  };
  const go=async n=>{
    const my=page=want=Math.max(1,Math.min(N,n));
    opts.onPage&&opts.onPage(page,N);
    if(!cache.has(page)) opts.loading&&opts.loading(true);
    const off=await render(page);
    if(want!==my) return;  // пока грузилось, пролистали дальше
    if(cv.width!==off.width||cv.height!==off.height){cv.width=off.width;cv.height=off.height}
    if(opts.css) opts.css(off,dpr);
    cv.getContext('2d').drawImage(off,0,0);
    opts.loading&&opts.loading(false);
    [page+1,page+2,page-1,page+3].forEach(k=>{if(k>=1&&k<=N)render(k)});
    for(const k of [...cache.keys()]) if(Math.abs(k-page)>6) cache.delete(k);
  };
  return {go,get page(){return page},N};
}
const FSICON='<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>';
/* полноэкранный просмотр фото / PDF / документа */
async function openFull(f,url,startPage){
  let d=$('#fsv');
  if(!d){d=document.createElement('dialog');d.id='fsv';document.body.appendChild(d);
    d.addEventListener('close',()=>{d.querySelectorAll('video').forEach(v=>v.pause());d.innerHTML='';d.onkeydown=null;if(document.fullscreenElement)document.exitFullscreen().catch(()=>{})})}
  const img=/^image\//.test(f.type), pdf=isPdf(f), vid=isVid(f), nm=(f.name||'').toLowerCase();
  const docx=/\.docx$/.test(nm)||/wordprocessingml/.test(f.type), xls=/\.(xlsx|xlsm|xls|csv|ods)$/.test(nm)||/spreadsheetml|ms-excel|text\/csv/.test(f.type);
  d.innerHTML=`<div class="fsbar"><h2>${esc(f.name)}</h2><span class="pg"></span>
    <a class="btn ghost" href="${url}" download="${esc(f.name)}">Скачать</a>
    <button class="ib" data-fs title="Во весь экран монитора">${FSICON}</button>
    <button class="ib" data-x aria-label="Закрыть">✕</button></div>
    <div class="fsstage">${img?`<img src="${url}" alt="">`:vid?`<video controls autoplay playsinline src="${url}"></video>`:(docx||xls)?'<p class="fsmsg">Открываю документ…</p>':pdf?'<canvas></canvas><button class="fsnav p" aria-label="Назад">‹</button><button class="fsnav n" aria-label="Вперёд">›</button>':'<p class="fsmsg">Этот тип файла здесь не показывается (например, PowerPoint или старый .doc) — нажмите «Скачать».</p>'}</div>`;
  d.querySelector('[data-x]').onclick=()=>d.close();
  d.querySelector('[data-fs]').onclick=()=>{document.fullscreenElement?document.exitFullscreen():d.requestFullscreen&&d.requestFullscreen().catch(()=>{})};
  if(!d.open) d.showModal();
  if(vid){const v=d.querySelector('video');if(startPage)v.addEventListener('loadedmetadata',()=>{v.currentTime=startPage},{once:true});return}
  if(docx||xls){
    const st=d.querySelector('.fsstage');
    try{
      const buf=await (await fetch(url)).arrayBuffer();
      if(docx){
        await loadScript(['https://cdn.jsdelivr.net/npm/docx-preview@0.3.0/dist/docx-preview.min.js','https://unpkg.com/docx-preview@0.3.0/dist/docx-preview.min.js','https://cdn.jsdelivr.net/npm/docx-preview@0.1.20/dist/docx-preview.min.js'],()=>window.docx);
        st.innerHTML='<div class="fsdoc"></div>';
        await window.docx.renderAsync(buf,st.firstChild,null,{inWrapper:true,breakPages:true,ignoreLastRenderedPageBreak:true});
      }else{
        await loadScript(['https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'],()=>window.XLSX);
        const wb=XLSX.read(buf,{type:'array',cellDates:true});
        st.innerHTML=`<div class="fsxl"><div class="fstabs">${wb.SheetNames.map((s,i)=>`<button class="${i?'':'on'}" data-s="${i}">${esc(s)}</button>`).join('')}</div><div class="fssheet"></div></div>`;
        const show=i=>{st.querySelector('.fssheet').innerHTML=XLSX.utils.sheet_to_html(wb.Sheets[wb.SheetNames[i]],{header:'',footer:''});
          st.querySelectorAll('.fstabs button').forEach(b=>b.classList.toggle('on',+b.dataset.s===i))};
        st.querySelectorAll('.fstabs button').forEach(b=>b.onclick=()=>show(+b.dataset.s));
        if(wb.SheetNames.length<2) st.querySelector('.fstabs').remove();
        show(0);
      }
    }catch(e){st.innerHTML=`<p class="fsmsg">Не удалось показать документ: ${esc(e.message)}. Нажмите «Скачать».</p>`}
    return;
  }
  if(!pdf) return;
  const st=d.querySelector('.fsstage'), cv=st.querySelector('canvas'), pg=d.querySelector('.pg'), bp=st.querySelector('.fsnav.p'), bn=st.querySelector('.fsnav.n');
  st.classList.add('ld');
  try{
    const doc=await (await loadPdfJs()).getDocument(url).promise;
    const pgr=pdfPager(doc,cv,{
      scale:vp=>Math.min((st.clientWidth-32)/vp.width,(st.clientHeight-32)/vp.height),
      css:(off,dpr)=>{cv.style.width=(off.width/dpr)+'px';cv.style.height=(off.height/dpr)+'px'},
      onPage:(p,N)=>{pg.textContent=p+' / '+N;bp.disabled=p<=1;bn.disabled=p>=N},
      loading:on=>st.classList.toggle('ld',on)});
    bp.onclick=()=>pgr.go(pgr.page-1); bn.onclick=()=>pgr.go(pgr.page+1);
    d.onkeydown=e=>{if(e.key==='ArrowRight'||e.key===' '||e.key==='PageDown'){e.preventDefault();pgr.go(pgr.page+1)}else if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();pgr.go(pgr.page-1)}};
    await pgr.go(startPage||1);
  }catch(e){st.innerHTML=`<p class="fsmsg">Не удалось открыть PDF: ${esc(e.message)}</p>`}
}

function imgBlock(key){
  const f=filesOf(key).slice(-1)[0], pdf=isPdf(f), vid=isVid(f), ACC='image/*,application/pdf,.pdf,video/*,.mp4,.mov,.webm';
  return `<div class="limg" data-key="${key}">${f?`<div class="limgw"><button class="limgv" title="Открыть крупно"><span class="lph">Загружаю ${pdf?'презентацию':vid?'видео':'фото'}…</span></button></div>`:`<label class="limgd"><b>Загрузить фото, PDF или видео</b><span>Схема, презентация PDF, снимок или видео (до 50 МБ) — покажется здесь на всю ширину</span><input type="file" accept="${ACC}" hidden data-img></label>`}
  ${f?`<div class="row" style="margin-top:8px"><label class="btn ghost upl">Заменить фото / PDF / видео<input type="file" accept="${ACC}" hidden data-img></label><button class="btn ghost" data-imgdel>Удалить ${pdf?'PDF':vid?'видео':'фото'}</button><span class="upst"></span></div>`:'<span class="upst"></span>'}</div>`;
}
async function bindImg(key,reopen){
  const box=$('#dbody .limg'); if(!box) return;
  const stEl=box.querySelector('.upst'), f=filesOf(key).slice(-1)[0];
  box.querySelectorAll('[data-img]').forEach(inp=>inp.onchange=async e=>{
    const file=e.target.files[0]; if(!file) return;
    const pdf=file.type==='application/pdf'||/\.pdf$/i.test(file.name||'');
    const vid=isVid(file);
    if(!/^image\//.test(file.type)&&!pdf&&!vid){stEl.textContent='Нужна картинка (JPG, PNG), PDF или видео (MP4, MOV, WebM)';return}
    if(vid&&file.size>VIDMAX){stEl.textContent=`Видео ${(file.size/1048576).toFixed(0)} МБ — больше 50 МБ. Сожмите его и загрузите снова`;return}
    try{
      const old=filesOf(key);
      let up=file;
      if(vid){if(!/^video\/(mp4|webm)$/.test(file.type))up=new File([file],file.name,{type:/\.webm$/i.test(file.name)?'video/webm':'video/mp4'})}
      else if(!pdf){stEl.textContent='Сжимаю фото…';up=await shrinkImage(file)}
      else if(!up.type){up=new File([file],file.name,{type:'application/pdf'})}
      await uploadFile(key,up,stEl);
      for(const o of old)await deleteFile(key,o.id);
      reopen();renderLead();
    }catch(err){stEl.textContent='Не загружено: '+err.message}
  });
  const del=box.querySelector('[data-imgdel]');
  if(del) del.onclick=async()=>{
    const lbl=isPdf(f)?'Удалить PDF':isVid(f)?'Удалить видео':'Удалить фото';
    if(!del.dataset.sure){del.dataset.sure=1;del.textContent='Точно удалить?';setTimeout(()=>{del.textContent=lbl;delete del.dataset.sure},2500);return}
    for(const o of filesOf(key))await deleteFile(key,o.id);reopen();
  };
  if(!f) return;
  try{
    if(!MEM.has(f.id)) await loadSync();
    const url=await blobUrl(f);
    const wrap=box.querySelector('.limgw'); if(!wrap) return;
    if(isVid(f)){
      wrap.innerHTML=`<div class="lvid"><video controls playsinline preload="metadata" src="${url}"></video><button type="button" class="ib fsbtn" title="На весь экран">${FSICON}</button></div>`;
      const v=wrap.querySelector('video');
      wrap.querySelector('.fsbtn').onclick=e=>{e.stopPropagation();const tm=v.currentTime;v.pause();openFull(f,url,tm)};
    }else if(isPdf(f)){
      const pdfjsLib=await loadPdfJs();
      const doc=await pdfjsLib.getDocument(url).promise;
      wrap.innerHTML=`<div class="lpdfv"><canvas title="Открыть на весь экран"></canvas><button type="button" class="ib fsbtn" title="На весь экран">${FSICON}</button><div class="pdfnav"><span class="pg">1 / ${doc.numPages}</span><button type="button" class="ib" data-p="-1" aria-label="Назад">‹</button><button type="button" class="ib" data-p="1" aria-label="Вперёд">›</button></div></div>`;
      const cv=wrap.querySelector('canvas'), pgEl=wrap.querySelector('.pg'), [bPrev,bNext]=wrap.querySelectorAll('.pdfnav .ib'), box2=wrap.querySelector('.lpdfv');
      const pgr=pdfPager(doc,cv,{scale:vp=>Math.max(640,wrap.clientWidth||700)/vp.width,
        onPage:(p,N)=>{pgEl.textContent=p+' / '+N;bPrev.disabled=p<=1;bNext.disabled=p>=N},
        loading:on=>box2.classList.toggle('ld',on)});
      const draw=n=>pgr.go(n);
      bPrev.onclick=e=>{e.stopPropagation();draw(pgr.page-1)};
      bNext.onclick=e=>{e.stopPropagation();draw(pgr.page+1)};
      wrap.querySelector('.fsbtn').onclick=e=>{e.stopPropagation();openFull(f,url,pgr.page)};
      cv.onclick=()=>openFull(f,url,pgr.page);
      await draw(1);
    }else{
      const v=wrap.querySelector('.limgv'); if(!v) return;
      v.innerHTML=`<img src="${url}" alt="${esc(f.name)}">`; v.onclick=()=>openFull(f,url);
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
  const run=()=>Object.keys(FL).filter(k=>k.startsWith('img:')).forEach(k=>{const f=filesOf(k).slice(-1)[0];if(f&&!isVid(f)&&!MEM.has(f.id))blobUrl(f).catch(()=>{})});
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
    stEl.textContent=''; openFull(f,url);
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
// закрыли окно отдела — видео не должно играть в фоне
document.addEventListener('close',e=>{if(e.target&&e.target.id!=='fsv')e.target.querySelectorAll&&e.target.querySelectorAll('video').forEach(v=>v.pause())},true);
