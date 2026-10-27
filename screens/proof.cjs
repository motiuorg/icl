// Captures cropped screenshots of the real build for the "sistema" page (src/assets/proof).
const { chromium } = require('playwright');
const BASE = process.env.BASE || 'http://localhost:4321';
const shots = [];
for (const [lang, pre] of [['ca', ''], ['en', '/en']]) {
  shots.push([`home-${lang}`, `${pre}/`, null], [`impacts-${lang}`, `${pre}/danys/`, 'runams'],
    [`timeline-${lang}`, `${pre}/cronologia/`, null], [`internal-${lang}`, `${pre}/intern/`, 'unlock']);
}
(async () => {
  const b = await chromium.launch();
  for (const [name, path, mode] of shots) {
    const ctx = await b.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 });
    const p = await ctx.newPage();
    await p.goto(BASE + path, { waitUntil: 'networkidle' });
    if (mode === 'unlock') {
      // unlock via the demo gate without ever printing/typing the password on screen
      await p.evaluate(() => sessionStorage.setItem('icl-demo-ok', '1'));
      await p.reload({ waitUntil: 'networkidle' });
    }
    if (mode === 'runams') { await p.evaluate(() => (document.querySelector('.nav-wrap').style.display='none', window.scrollTo(0, document.querySelector('#runams').getBoundingClientRect().top + scrollY - 20))); await p.waitForTimeout(400); }
    await p.screenshot({ path: `src/assets/proof/${name}.png` });
    await ctx.close();
  }
  await b.close();
})();
