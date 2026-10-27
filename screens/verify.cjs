// Verificació: errors de consola, <html lang>, noindex, desbordament horitzontal (1440/390),
// anada i tornada del selector d'idioma i href fixos al codi font. Surt amb codi 1 si falla.
const { chromium } = require('playwright');
const { execSync } = require('child_process');
const BASE = process.env.BASE || 'http://localhost:4321';
const pairs = ['/', '/danys/', '/recerca/', '/cronologia/', '/campanyes/', '/actors/', '/intern/', '/sistema/'];
const vps = [{ width: 1440, height: 900 }, { width: 390, height: 844 }];
let fail = 0;
const norm = (x) => (x.length > 1 ? x.replace(/\/$/, '') : x); // l'arrel EN és /en (convenció existent)
const bad = (m) => { fail++; console.log('FAIL', m); };
(async () => {
  const b = await chromium.launch();
  for (const lang of ['ca', 'en']) for (const base of pairs) for (const vp of vps) {
    const path = lang === 'en' ? '/en' + (base === '/' ? '/' : base) : base;
    const ctx = await b.newContext({ viewport: vp });
    const p = await ctx.newPage();
    const errs = [];
    p.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
    p.on('pageerror', (e) => errs.push(String(e)));
    const res = await p.goto(BASE + path, { waitUntil: 'networkidle' });
    const tag = `${path} @${vp.width}`;
    if (res.status() !== 200) bad(`${tag} status ${res.status()}`);
    if (errs.length) bad(`${tag} console: ${errs.join(' | ')}`);
    if ((await p.getAttribute('html', 'lang')) !== lang) bad(`${tag} html lang`);
    if (!(await p.$('meta[name=robots][content=noindex]'))) bad(`${tag} noindex missing`);
    const ov = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (ov > 0) bad(`${tag} horizontal overflow ${ov}px`);
    if (vp.width === 1440) { // toggle round trip
      const other = lang === 'ca' ? 'EN' : 'CA';
      await p.click(`.toggle a:text-is("${other}")`);
      await p.waitForLoadState('networkidle');
      const expect = lang === 'ca' ? '/en' + (base === '/' ? '/' : base) : base;
      if (norm(new URL(p.url()).pathname) !== norm(expect)) bad(`${tag} toggle -> ${p.url()} expected ${expect}`);
      await p.click(`.toggle a:text-is("${lang.toUpperCase()}")`);
      await p.waitForLoadState('networkidle');
      if (norm(new URL(p.url()).pathname) !== norm(path)) bad(`${tag} toggle back -> ${p.url()}`);
    }
    await ctx.close();
  }
  await b.close();
  const hard = execSync(`grep -rnE 'href="/' src || true`).toString().trim();
  if (hard) bad('hardcoded hrefs:\n' + hard);
  console.log(fail ? `${fail} failure(s)` : 'ALL OK');
  process.exit(fail ? 1 : 0);
})();
