// Genera public/downloads/sistema-{ca,en}.pdf (A4) des del build en marxa (npm run preview).
// Nota: usa el Chromium de Playwright (puppeteer no és instal·lat); API de page.pdf idèntica.
// Cal executar-ho sense sandbox. Després: npm run build perquè el PDF entri a dist/.
const { chromium } = require('playwright');
const BASE = process.env.BASE || 'http://localhost:4321';
const OUT = process.env.OUT || 'public/downloads'; // crear la carpeta abans; els PDF ja no es publiquen
const pages = { ca: '/sistema/', en: '/en/sistema/' };
(async () => {
  const b = await chromium.launch();
  for (const [lang, path] of Object.entries(pages)) {
    const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
    await p.goto(BASE + path, { waitUntil: 'networkidle' });
    await p.evaluate(() => document.querySelectorAll('img[loading=lazy]').forEach(i => (i.loading = 'eager')));
    await p.waitForTimeout(500);
    await p.emulateMedia({ media: 'print' });
    await p.pdf({ path: `${OUT}/sistema-${lang}.pdf`, format: 'A4', printBackground: true, preferCSSPageSize: true });
    await p.close();
  }
  await b.close();
})();
