#!/usr/bin/env node
// Rendered capture of https://proucomplicitat.cat — screenshots + verbatim text + network log.
// Throwaway discovery tooling. Requires content/current-site/_inventory.json (run crawl.mjs first).
//
// Usage:  node scripts/capture.mjs            # every section page (see TARGETS below)
//         node scripts/capture.mjs <url> ...  # just these URLs
//
// Scope (agreed with the owner): every WordPress *page* + the home page + ONE representative
// per template type (post, category, tag, author). The ~185 blog posts are listed in the
// inventory but not captured individually. Embeds (iframes, sliders, social widgets) are not
// reproduced; they are logged as [embed …] placeholders in the text.
//
// Output:
//   screenshots/<slug>--1440-full.png, --390-full.png, --1440-top.png, --390-top.png
//   screenshots/<slug>--1440-nav-open.png, --390-nav-open.png, --1440-footer.png, --390-footer.png
//       (nav/footer only for one page per template type — they are site-wide chrome)
//   content/current-site/<slug>.md          verbatim DOM text of the main + sidebar regions
//   content/current-site/_chrome.md         header, nav, footer, cookie banner (site-wide)
//   content/current-site/_network.json      every response per page (type, bytes) + DOM images

import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright'); // uses the preinstalled global Playwright
import { readFile, writeFile, mkdir } from 'node:fs/promises';

const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36 proucomplicitat-redesign-discovery/1.0 (+mailto:yo@andreaisa.com)';
const ORIGIN = 'https://proucomplicitat.cat';
const REPRESENTATIVES = [
  ORIGIN + '/manifest-per-a-festes-majors-estiu-2026', // recent post
  ORIGIN + '/victories-populars-de-setembre-2024-a-agost-de-2025', // long-form post
  ORIGIN + '/category/palestina',
  ORIGIN + '/tag/bds',
  ORIGIN + '/author/nomescomplicitat',
];
// One page per template gets nav/footer shots.
const CHROME_SHOTS = new Set([ORIGIN + '/', ORIGIN + '/qui-som', REPRESENTATIVES[0], REPRESENTATIVES[2]]);

const slugOf = (url) => {
  const p = decodeURIComponent(new URL(url).pathname).replace(/^\/|\/$/g, '');
  return (p || 'index').replace(/\//g, '--').normalize('NFKD').replace(/[^\w-]+/g, '').toLowerCase().slice(0, 120) || 'page';
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Scroll the whole page so lazy images load, then wait for images + fonts.
async function settle(page) {
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.8;
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); }
    window.scrollTo(0, 0);
  });
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].filter((i) => !i.complete).map((i) => new Promise((r) => { i.onload = i.onerror = r; setTimeout(r, 8000); })));
  });
  await sleep(800);
}

async function acceptCookies(page) {
  const btn = page.locator('#cookie_action_close_header');
  if (await btn.isVisible().catch(() => false)) { await btn.click().catch(() => {}); await sleep(600); }
}

// DOM -> Markdown, preserving text verbatim. Runs in the page.
function extract(rootSelectors) {
  const out = [];
  const clean = (s) => s.replace(/ /g, ' ').replace(/[ \t\r\n]+/g, ' ');
  const visible = (el) => { const cs = getComputedStyle(el); return cs.display !== 'none' && cs.visibility !== 'hidden'; };
  function inline(node) {
    let s = '';
    for (const n of node.childNodes) {
      if (n.nodeType === 3) s += clean(n.textContent);
      else if (n.nodeType === 1) {
        if (!visible(n) && n.tagName !== 'IMG') continue;
        const t = n.tagName;
        if (t === 'BR') s += '  \n';
        else if (t === 'STRONG' || t === 'B') { const x = inline(n).trim(); s += x ? `**${x}** ` : ''; }
        else if (t === 'EM' || t === 'I') { const x = inline(n).trim(); s += x ? `*${x}* ` : ''; }
        else if (t === 'A') { const x = inline(n).trim(); s += x ? `[${x}](${n.href})` : ''; }
        else if (t === 'IMG') s += `![${n.alt ?? ''}](${n.currentSrc || n.src})`;
        else if (t === 'IFRAME') s += ` [embed: ${n.src || n.dataset.src || 'iframe'}] `;
        else if (t === 'INPUT') { if (!['hidden'].includes(n.type)) s += ` [input ${n.type}${n.placeholder ? ` placeholder="${n.placeholder}"` : ''}${n.type === 'submit' ? ` value="${n.value}"` : ''}] `; }
        else if (t === 'BUTTON') s += ` [button: ${clean(n.innerText).trim()}] `;
        else if (t === 'SELECT') s += ` [select: ${[...n.options].map((o) => o.text).join(' | ')}] `;
        else if (t === 'TEXTAREA') s += ` [textarea${n.placeholder ? ` placeholder="${n.placeholder}"` : ''}] `;
        else if (t === 'SCRIPT' || t === 'STYLE' || t === 'NOSCRIPT' || t === 'SVG') {}
        else s += inline(n);
      }
    }
    return s;
  }
  const BLOCK = /^(P|H[1-6]|UL|OL|LI|BLOCKQUOTE|FIGURE|FIGCAPTION|TABLE|FORM|DIV|SECTION|ARTICLE|ASIDE|HEADER|FOOTER|NAV|LABEL|PRE|HR|DL|DT|DD|IFRAME|MAIN)$/;
  function block(el, depth = 0) {
    if (!visible(el)) return;
    const t = el.tagName;
    if (/^H[1-6]$/.test(t)) { const x = inline(el).trim(); if (x) out.push('#'.repeat(+t[1]) + ' ' + x, ''); return; }
    if (t === 'P' || t === 'FIGCAPTION' || t === 'LABEL' || t === 'DT' || t === 'DD' || t === 'PRE') {
      if ([...el.children].some((c) => BLOCK.test(c.tagName) && c.tagName !== 'LABEL')) { for (const c of el.children) block(c, depth); return; }
      const x = inline(el).trim(); if (x) out.push((t === 'FIGCAPTION' ? '_Caption:_ ' : t === 'LABEL' ? '_Label:_ ' : '') + x, ''); return;
    }
    if (t === 'UL' || t === 'OL') {
      let i = 1;
      for (const li of el.children) {
        if (li.tagName !== 'LI' || !visible(li)) continue;
        const nested = [...li.children].filter((c) => c.tagName === 'UL' || c.tagName === 'OL');
        const clone = li.cloneNode(true); clone.querySelectorAll('ul,ol').forEach((n) => n.remove());
        const x = inline(clone).trim();
        if (x) out.push('  '.repeat(depth) + (t === 'OL' ? `${i++}. ` : '- ') + x);
        for (const n of nested) block(n, depth + 1);
      }
      if (depth === 0) out.push(''); return;
    }
    if (t === 'BLOCKQUOTE') { const x = inline(el).trim(); if (x) out.push('> ' + x, ''); return; }
    if (t === 'HR') { out.push('---', ''); return; }
    if (t === 'IFRAME') { out.push(`[embed: ${el.src || el.dataset.src || 'iframe'}]`, ''); return; }
    if (t === 'TABLE') { for (const tr of el.querySelectorAll('tr')) out.push('| ' + [...tr.children].map((c) => inline(c).trim()).join(' | ') + ' |'); out.push(''); return; }
    if (t === 'IMG') { out.push(inline({ childNodes: [el] }).trim(), ''); return; }
    // Generic container: recurse into block children, emit loose inline text as paragraphs.
    let buf = '';
    const flush = () => { const x = buf.trim(); if (x) out.push(x, ''); buf = ''; };
    for (const n of el.childNodes) {
      if (n.nodeType === 1 && (BLOCK.test(n.tagName) || n.tagName === 'IMG')) { flush(); block(n, depth); }
      else if (n.nodeType === 1 || n.nodeType === 3) buf += inline({ childNodes: [n] });
    }
    flush();
  }
  const res = {};
  for (const [name, sel] of Object.entries(rootSelectors)) {
    out.length = 0;
    const el = document.querySelector(sel);
    if (el) block(el);
    res[name] = out.join('\n').replace(/\n{3,}/g, '\n\n').trim();
  }
  res.title = document.title;
  res.lang = document.documentElement.lang;
  res.metaDescription = document.querySelector('meta[name=description]')?.content ?? '';
  res.ogImage = document.querySelector('meta[property="og:image"]')?.content ?? '';
  res.images = [...document.images].map((i) => ({ src: i.currentSrc || i.src, alt: i.alt, w: i.naturalWidth, h: i.naturalHeight, region: i.closest('#masthead') ? 'header' : i.closest('#colophon') ? 'footer' : i.closest('#secondary') ? 'sidebar' : 'main' }));
  res.iframes = [...document.querySelectorAll('iframe')].map((f) => f.src || f.dataset.src || '');
  res.forms = [...document.querySelectorAll('form')].map((f) => ({ action: f.action, cls: f.className, id: f.id }));
  res.scrollHeight = document.documentElement.scrollHeight;
  return res;
}

async function main() {
  const inv = JSON.parse(await readFile('content/current-site/_inventory.json', 'utf8').catch(() => '{"records":[]}'));
  let targets = process.argv.slice(2);
  if (!targets.length) {
    const pages = inv.records.filter((r) => r.status === 200 && (r.type === 'page' || r.type === 'home') && r.source === 'posts-page').map((r) => r.url);
    targets = [...new Set([ORIGIN + '/', ...pages, ...REPRESENTATIVES])];
  }
  await mkdir('screenshots', { recursive: true });
  const net = JSON.parse(await readFile('content/current-site/_network.json', 'utf8').catch(() => '{}'));
  const browser = await chromium.launch();
  let chromeDone = false;

  for (const url of targets) {
    const slug = slugOf(url);
    const t0 = Date.now();
    const rec = { url, slug, responses: [] };
    try {
      // ---- Desktop pass: screenshots + text + network ----
      const dctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, userAgent: UA, locale: 'ca-ES' });
      const page = await dctx.newPage();
      page.on('requestfinished', async (req) => {
        const resp = await req.response().catch(() => null); if (!resp) return;
        const sizes = await req.sizes().catch(() => ({}));
        rec.responses.push({ url: req.url(), type: req.resourceType(), status: resp.status(), mime: resp.headers()['content-type'] ?? '', bytes: sizes.responseBodySize ?? 0 });
      });
      await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
      if (url === ORIGIN + '/') {
        await settle(page);
        await page.screenshot({ path: `screenshots/${slug}--1440-top-with-cookie-banner.png` });
        rec.cookieBanner = await page.evaluate(() => document.querySelector('#cookie-law-info-bar')?.innerText.replace(/\s+/g, ' ').trim() ?? '');
      }
      // Hero slider (MetaSlider) captions: all slides incl. hidden ones (textContent, not innerText).
      rec.slider = await page.evaluate(() => [...document.querySelectorAll('.metaslider li, .metaslider .slide')].map((li) => ({
        caption: li.querySelector('.caption, .caption-wrap')?.textContent.replace(/\s+/g, ' ').trim() ?? '',
        img: li.querySelector('img')?.src ?? '', alt: li.querySelector('img')?.alt ?? '', link: li.querySelector('a')?.href ?? '' })).filter((x) => x.img || x.caption));
      await acceptCookies(page);
      await settle(page);
      await page.screenshot({ path: `screenshots/${slug}--1440-top.png` });
      await page.screenshot({ path: `screenshots/${slug}--1440-full.png`, fullPage: true });
      const data = await page.evaluate(extract, { main: '#primary', sidebar: '#secondary', header: '#masthead', footer: '#colophon', cookie: '#cookie-law-info-bar' });
      if (CHROME_SHOTS.has(url)) {
        await page.locator('#colophon').screenshot({ path: `screenshots/${slug}--1440-footer.png` }).catch(() => {});
        const sub = page.locator('.main-navigation .menu-item-has-children > a').first();
        if (await sub.count()) { await sub.hover(); await sleep(700); }
        await page.screenshot({ path: `screenshots/${slug}--1440-nav-open.png` });
      }
      if (!chromeDone && url === ORIGIN + '/') { // site-wide chrome is always taken from the home page
        const menu = await page.evaluate(() => {
          const walk = (ul, d = 0) => [...ul.children].filter((li) => li.tagName === 'LI').map((li) => {
            const a = li.querySelector(':scope > a'); const sub = li.querySelector(':scope > ul');
            return '  '.repeat(d) + `- [${a?.textContent.trim()}](${a?.href})` + (sub ? '\n' + walk(sub, d + 1).join('\n') : '');
          });
          const ul = document.querySelector('.main-navigation ul.menu, .main-navigation ul');
          return ul ? walk(ul).join('\n') : '';
        });
        await writeFile('content/current-site/_chrome.md', [
          '---', `source: ${url}`, `captured: ${new Date().toISOString()}`, 'note: Site-wide chrome (header, primary navigation, sidebar, footer, cookie banner) as rendered on the home page at 1440px. Verbatim.', '---', '',
          '# Header', '', data.header, '', '# Primary navigation (menu tree incl. hidden sub-menus)', '', menu, '', '# Sidebar (#secondary, home page)', '', data.sidebar, '', '# Footer', '', data.footer, '', '# Hero slider (MetaSlider, home page) — every slide, in DOM order', '', ...(rec.slider ?? []).map((x, i) => `${i + 1}. ${x.caption || '(no caption)'}  \n   image: ${x.img}${x.alt ? `  \n   alt: ${x.alt}` : ''}${x.link ? `  \n   link: ${x.link}` : ''}`), '', '# Cookie banner (before accepting)', '', rec.cookieBanner || data.cookie, '',
        ].join('\n'));
        chromeDone = true;
      }
      await dctx.close();

      // ---- Mobile pass: screenshots only ----
      const mctx = await browser.newContext({ viewport: { width: 390, height: 844 }, userAgent: UA.replace('X11; Linux x86_64', 'Linux; Android 14; Pixel 8') + ' Mobile', isMobile: true, hasTouch: true, deviceScaleFactor: 1, locale: 'ca-ES' });
      const m = await mctx.newPage();
      await m.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
      await acceptCookies(m);
      await settle(m);
      await m.screenshot({ path: `screenshots/${slug}--390-top.png` });
      await m.screenshot({ path: `screenshots/${slug}--390-full.png`, fullPage: true });
      if (CHROME_SHOTS.has(url)) {
        await m.locator('#colophon').screenshot({ path: `screenshots/${slug}--390-footer.png` }).catch(() => {});
        const tog = m.locator('.mobilenav-main-link').first();
        if (await tog.isVisible().catch(() => false)) { await tog.click(); await sleep(900); }
        await m.screenshot({ path: `screenshots/${slug}--390-nav-open.png` });
      }
      await mctx.close();

      const inv1 = inv.records.find((r) => r.url === url) ?? {};
      const md = [
        '---',
        `url: ${url}`,
        `title: ${JSON.stringify(data.title)}`,
        `type: ${inv1.type ?? 'unknown'}`,
        inv1.date ? `published: ${inv1.date}` : null,
        `lang: ${data.lang}`,
        data.metaDescription ? `meta_description: ${JSON.stringify(data.metaDescription)}` : null,
        data.ogImage ? `og_image: ${data.ogImage}` : null,
        `captured: ${new Date().toISOString()}`,
        `screenshots: [screenshots/${slug}--1440-full.png, screenshots/${slug}--390-full.png]`,
        data.iframes.length ? `embeds_not_reproduced: ${JSON.stringify(data.iframes)}` : null,
        'note: Verbatim rendered DOM text of #primary (main column). Header/nav/footer are in _chrome.md. Not translated or corrected.',
        '---', '',
        data.main, '',
        data.sidebar && slug !== 'index' ? '<!-- sidebar (#secondary) on this page -->\n\n' + data.sidebar : '',
      ].filter((x) => x !== null).join('\n');
      await writeFile(`content/current-site/${slug}.md`, md.trim() + '\n');
      rec.images = data.images; rec.iframes = data.iframes; rec.forms = data.forms; rec.scrollHeight = data.scrollHeight;
      rec.totalBytes = rec.responses.reduce((a, r) => a + r.bytes, 0);
      net[url] = rec;
      console.log(`ok ${slug} ${(rec.totalBytes / 1024).toFixed(0)}KB ${((Date.now() - t0) / 1000).toFixed(1)}s`);
    } catch (e) {
      net[url] = { ...rec, error: String(e.message).slice(0, 300) };
      console.log(`FAIL ${slug}: ${e.message.split('\n')[0]}`);
    }
    await writeFile('content/current-site/_network.json', JSON.stringify(net, null, 1));
    await sleep(1000);
  }
  await browser.close();
}

main().catch((e) => { console.error(e); process.exit(1); });
