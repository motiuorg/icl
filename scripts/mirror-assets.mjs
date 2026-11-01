#!/usr/bin/env node
// Mirror images, fonts and downloadable documents used by the captured pages.
// Throwaway discovery tooling. Run after crawl.mjs + capture.mjs.
//
// Usage:  NODE_USE_ENV_PROXY=1 node scripts/mirror-assets.mjs
// Output: assets/original/<site path>                 same-origin files, path preserved
//         assets/original/_external/<host>/<path>     third-party files
//         assets/original/_manifest.json              one record per file (format, px, bytes, used on)
//
// For WordPress resized images (name-300x200.jpg) the unresized original is also fetched,
// because the redesign needs the best available source.

import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const UA = 'Mozilla/5.0 (compatible; proucomplicitat-redesign-discovery/1.0; +mailto:yo@andreaisa.com)';
const ROOT = 'assets/original';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// Third-party hosts whose images are widget chrome (avatars, tracking pixels), not content.
const SKIP_HOSTS = /(^|\.)(twimg\.com|twitter\.com|x\.com|google\.com|gstatic\.com|doubleclick\.net|facebook\.com|fbcdn\.net|gravatar\.com|vimeocdn\.com|ytimg\.com)$/;

const net = JSON.parse(await readFile('content/current-site/_network.json', 'utf8'));
const inv = JSON.parse(await readFile('content/current-site/_inventory.json', 'utf8'));

const want = new Map(); // url -> {kind, usedOn:Set}
const add = (u, kind, page) => {
  if (!u || u.startsWith('data:')) return;
  let url; try { url = new URL(u); } catch { return; }
  url.hash = '';
  if (url.host === 'proucomplicitat.cat' || url.host === 'www.proucomplicitat.cat') url.search = url.pathname.endsWith('.css') ? url.search : '';
  const key = url.toString();
  if (!want.has(key)) want.set(key, { kind, usedOn: new Set() });
  if (page) want.get(key).usedOn.add(page);
};
for (const [page, rec] of Object.entries(net)) {
  for (const r of rec.responses ?? []) {
    if (r.status !== 200) continue;
    if (r.type === 'image' || /^image\//.test(r.mime)) add(r.url, 'image', page);
    else if (r.type === 'font' || /font|woff/.test(r.mime)) add(r.url, 'font', page);
  }
  for (const i of rec.images ?? []) add(i.src, 'image', page);
}
// Documents linked from ANY crawled page (posts included). Only the organisation's own
// uploads are mirrored; third-party PDFs are listed in the manifest as external links.
for (const r of inv.records) for (const d of r.documents ?? []) {
  let u; try { u = new URL(d.trim(), r.url); } catch { continue; }
  if (/(^|\.)proucomplicitat\.cat$/.test(u.host)) { u.protocol = 'https:'; add(u.toString(), 'document', r.url); }
  else { const k = u.toString(); if (!want.has(k)) want.set(k, { kind: 'document-external', usedOn: new Set() }); want.get(k).usedOn.add(r.url); }
}

// Add unresized originals for WordPress thumbnails.
for (const [u, v] of [...want]) {
  const m = u.match(/^(https:\/\/proucomplicitat\.cat\/wp-content\/uploads\/.+?)-\d+x\d+(\.\w+)$/);
  if (m) { add(m[1] + m[2], 'image-original', null); for (const p of v.usedOn) want.get(m[1] + m[2]).usedOn.add(p + ' (as resized)'); }
}

const localPath = (u) => {
  const url = new URL(u);
  const p = decodeURIComponent(url.pathname).replace(/^\/+/, '') || 'index';
  const safe = p.split('/').map((s) => s.replace(/[^\w.\-]+/g, '_')).join('/');
  return url.host.endsWith('proucomplicitat.cat') ? path.join(ROOT, safe) : path.join(ROOT, '_external', url.host, safe);
};

const manifest = [];
let i = 0;
for (const [u, v] of want) {
  i++;
  const host = new URL(u).host;
  const rec = { url: u, kind: v.kind, usedOn: [...v.usedOn], host };
  if (v.kind === 'document-external') { manifest.push({ ...rec, skipped: 'third-party document: linked, not mirrored' }); continue; }
  if (SKIP_HOSTS.test(host)) { manifest.push({ ...rec, skipped: 'third-party widget chrome' }); continue; }
  const dest = localPath(u);
  rec.file = dest;
  if (!existsSync(dest)) {
    await sleep(1000);
    try {
      const res = await fetch(u, { headers: { 'User-Agent': UA } });
      rec.status = res.status;
      if (!res.ok) { manifest.push({ ...rec, file: undefined, error: `HTTP ${res.status}` }); console.log(`${i}/${want.size} ${res.status} ${u}`); continue; }
      rec.contentType = res.headers.get('content-type');
      const buf = Buffer.from(await res.arrayBuffer());
      await mkdir(path.dirname(dest), { recursive: true });
      await writeFile(dest, buf);
    } catch (e) { manifest.push({ ...rec, file: undefined, error: String(e.cause?.code || e.message) }); continue; }
  }
  rec.bytes = (await stat(dest)).size;
  rec.format = path.extname(dest).slice(1).toLowerCase() || 'unknown';
  try {
    if (rec.format === 'pdf') rec.pages = +execFileSync('pdfinfo', [dest]).toString().match(/Pages:\s+(\d+)/)?.[1];
    else if (v.kind.startsWith('image')) {
      const [w, h, fmt] = execFileSync('identify', ['-format', '%w %h %m\n', dest + '[0]']).toString().trim().split(' ');
      Object.assign(rec, { width: +w, height: +h, format: fmt.toLowerCase() });
    }
  } catch {}
  manifest.push(rec);
  console.log(`${i}/${want.size} ok ${dest} ${rec.bytes}B`);
}
await writeFile(path.join(ROOT, '_manifest.json'), JSON.stringify(manifest, null, 1));
console.log(`manifest: ${manifest.length} entries`);
