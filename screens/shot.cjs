// Captures a pàgina completa (desktop 1440 + mòbil 390) de cada ruta; fixa a screens/.
// Ús: npm run preview (port 4321) i node screens/shot.cjs [ruta ...]
const { chromium } = require('playwright');
const BASE = process.env.BASE || 'http://localhost:4321';
const routes = process.argv.slice(2).length ? process.argv.slice(2) : ['/sistema/', '/en/sistema/', '/', '/en/', '/intern/', '/en/intern/'];
const vps = { desktop: { width: 1440, height: 900 }, mobile: { width: 390, height: 844 } };
(async () => {
  const b = await chromium.launch();
  for (const [vn, vp] of Object.entries(vps)) {
    for (const r of routes) {
      const ctx = await b.newContext({ viewport: vp, deviceScaleFactor: vn === 'mobile' ? 2 : 1 });
      const p = await ctx.newPage();
      await p.goto(BASE + r, { waitUntil: 'networkidle' });
      if (r.includes('intern')) { await p.evaluate(() => sessionStorage.setItem('icl-demo-ok', '1')); await p.reload({ waitUntil: 'networkidle' }); }
      await p.evaluate(() => document.querySelectorAll('img[loading=lazy]').forEach(i => (i.loading = 'eager')));
      await p.waitForTimeout(300);
      const name = r.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'home';
      await p.screenshot({ path: `screens/${name}-${vn}.png`, fullPage: true });
      await ctx.close();
    }
  }
  await b.close();
})();
