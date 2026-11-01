#!/usr/bin/env node
// Discovery crawler for https://proucomplicitat.cat — builds the page inventory.
// Throwaway tooling for the redesign discovery phase (not part of any site build).
//
// Usage:  NODE_USE_ENV_PROXY=1 node scripts/crawl.mjs
// Output: content/current-site/_inventory.json  (one record per internal HTML URL)
//         .cache/crawl/<sha1>.html               (raw server HTML, gitignored)
//
// Politeness: 1 request/second, identified User-Agent, honours robots.txt Disallow.

import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';

const ORIGIN = 'https://proucomplicitat.cat';
const UA = 'Mozilla/5.0 (compatible; proucomplicitat-redesign-discovery/1.0; +mailto:yo@andreaisa.com)';
const DELAY_MS = 1000;
const CACHE = '.cache/crawl';
const OUT = 'content/current-site/_inventory.json';
// Paginated archive pages (/page/N) are crawled for links but capped so the
// inventory stays about content, not every listing page.
const MAX_PAGINATION = 2;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let last = 0;
async function politeFetch(url) {
  const wait = last + DELAY_MS - Date.now();
  if (wait > 0) await sleep(wait);
  last = Date.now();
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      return await fetch(url, { headers: { 'User-Agent': UA, 'Accept-Language': 'ca,es;q=0.8,en;q=0.5' }, redirect: 'follow' });
    } catch (e) {
      if (attempt === 2) throw e;
      await sleep(2000 * (attempt + 1));
    }
  }
}

function normalise(href, base) {
  let u;
  try { u = new URL(href, base); } catch { return null; }
  if (u.origin !== ORIGIN && u.origin !== 'https://www.proucomplicitat.cat' && u.origin !== 'http://proucomplicitat.cat') return null;
  u.protocol = 'https:'; u.host = 'proucomplicitat.cat'; u.hash = '';
  // Drop WordPress noise query strings; keep ?p= style ids out of the inventory.
  if (u.search) return null;
  let p = u.pathname.replace(/\/+$/, '') || '/';
  if (/^\/(wp-admin|wp-json|wp-login|xmlrpc|wp-includes|wp-content|feed|comments\/feed)/.test(p)) return null;
  if (/\/(feed|trackback|embed|amp)$/.test(p)) return null;
  if (/\.(jpe?g|png|gif|webp|svg|pdf|docx?|xlsx?|pptx?|odt|zip|mp[34]|mov|css|js|xml|txt|ico)$/i.test(p)) return null;
  return ORIGIN + p;
}

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#0?39;|&#8217;/g, "'").replace(/&quot;/g, '"').replace(/&#8211;/g, '–').replace(/&#8220;|&#8221;/g, '"').replace(/&nbsp;/g, ' ').replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n));

async function main() {
  await mkdir(CACHE, { recursive: true });
  await mkdir('content/current-site', { recursive: true });

  // robots.txt
  const robots = await (await politeFetch(ORIGIN + '/robots.txt')).text();
  const disallow = [...robots.matchAll(/^Disallow:\s*(\S+)/gim)].map((m) => m[1]);
  const allowed = (url) => !disallow.some((d) => new URL(url).pathname.startsWith(d));

  // Sitemaps (WordPress core: /wp-sitemap.xml index)
  const seeds = new Map(); // url -> sitemap source
  const idx = await (await politeFetch(ORIGIN + '/wp-sitemap.xml')).text();
  for (const sm of [...idx.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])) {
    const xml = await (await politeFetch(sm)).text();
    const kind = sm.match(/wp-sitemap-(.+?)-\d+\.xml/)?.[1] ?? sm;
    for (const loc of [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])) {
      const n = normalise(loc, ORIGIN);
      if (n) seeds.set(n, kind);
    }
  }
  seeds.set(ORIGIN + '/', seeds.get(ORIGIN + '/') ?? 'posts-page');

  const queue = [...seeds.keys()];
  const seen = new Set(queue);
  const records = [];
  const external = new Map();

  while (queue.length) {
    const url = queue.shift();
    if (!allowed(url)) { records.push({ url, skipped: 'robots.txt' }); continue; }
    let res, html = '';
    try {
      res = await politeFetch(url);
      html = await res.text();
    } catch (e) {
      records.push({ url, error: String(e.cause?.code || e.message) });
      continue;
    }
    const key = createHash('sha1').update(url).digest('hex');
    await writeFile(`${CACHE}/${key}.html`, html);

    const finalUrl = normalise(res.url, ORIGIN) ?? res.url;
    const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1]?.trim() ?? '');
    const bodyClass = html.match(/<body[^>]*class="([^"]*)"/)?.[1] ?? '';
    const h1 = decode((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? '').replace(/<[^>]+>/g, '').trim());
    const desc = decode(html.match(/<meta (?:name|property)="(?:og:)?description" content="([^"]*)"/)?.[1] ?? '');
    const date = html.match(/<time[^>]*class="[^"]*entry-date[^"]*"[^>]*datetime="([^"]+)"/)?.[1] ?? '';
    const lang = html.match(/<html[^>]*lang="([^"]+)"/)?.[1] ?? '';
    const type =
      /\bhome\b/.test(bodyClass) ? 'home' :
      /\bsingle-post\b/.test(bodyClass) ? 'post' :
      /\bpage-template|\bpage\b/.test(bodyClass) && !/archive/.test(bodyClass) ? 'page' :
      /\bcategory\b/.test(bodyClass) ? 'category' :
      /\btag\b/.test(bodyClass) ? 'tag' :
      /\bauthor\b/.test(bodyClass) ? 'author' :
      /\barchive\b/.test(bodyClass) ? 'archive' :
      /\berror404\b/.test(bodyClass) ? '404' : 'other';

    const hrefs = [...html.matchAll(/<a\s[^>]*href="([^"]+)"/g)].map((m) => decode(m[1]));
    const internalLinks = new Set();
    for (const h of hrefs) {
      const n = normalise(h, url);
      if (n) {
        internalLinks.add(n);
        const pag = n.match(/\/page\/(\d+)$/);
        if (pag && +pag[1] > MAX_PAGINATION) continue;
        if (!seen.has(n)) { seen.add(n); queue.push(n); }
      } else {
        try {
          const u = new URL(h, url);
          if (/^https?:$/.test(u.protocol) && !u.host.endsWith('proucomplicitat.cat')) external.set(u.host, (external.get(u.host) ?? 0) + 1);
        } catch {}
      }
    }
    const docs = [...new Set(hrefs.filter((h) => /\.(pdf|docx?|odt|xlsx?|pptx?|zip)(\?|$)/i.test(h)))];

    records.push({
      url, finalUrl, status: res.status, source: seeds.get(url) ?? 'link', type, title, h1, description: desc,
      date, lang, bytesHtml: html.length, internalLinks: internalLinks.size, documents: docs,
    });
    process.stdout.write(`${records.length}/${records.length + queue.length} ${res.status} ${type} ${url}\n`);
  }

  await writeFile(OUT, JSON.stringify({ crawledAt: new Date().toISOString(), origin: ORIGIN, robots, records, externalHosts: Object.fromEntries([...external].sort((a, b) => b[1] - a[1])) }, null, 1));
  console.log(`wrote ${OUT}: ${records.length} records`);
}

main().catch((e) => { console.error(e); process.exit(1); });
