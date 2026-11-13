// Cloudflare Worker: xolchade.dev/gh/* → api.github.com/* (только репозиторий xolchade/substance)
export default {
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname.replace(/^\/gh\//, '/');
    if (!path.startsWith('/repos/xolchade/substance/contents/')) return new Response('Forbidden', { status: 403 });
    const h = new Headers();
    for (const k of ['authorization', 'accept', 'content-type']) { const v = req.headers.get(k); if (v) h.set(k, v); }
    h.set('user-agent', 'strat-proxy');
    const r = await fetch('https://api.github.com' + path + url.search, {
      method: req.method, headers: h,
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : await req.arrayBuffer(),
    });
    const out = new Response(r.body, r);
    out.headers.set('cache-control', 'no-store');
    return out;
  },
};
