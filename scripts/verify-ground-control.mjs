#!/usr/bin/env node
// Checks the Ground Control beta build under /research/ground-control/ and the homepage panel.
import { readFileSync, existsSync } from 'node:fs';

const fail = (m) => { console.error('FAIL: ' + m); process.exit(1); };
const read = (p) => { if (!existsSync(p)) fail('missing ' + p); return readFileSync(p, 'utf8'); };
const src = 'research-release-source/ground-control/';
const dl = JSON.parse(read(src + 'deadlines.json'));
const ev = JSON.parse(read(src + 'events.json'));
const rg = JSON.parse(read(src + 'regulatory.json'));
JSON.parse(read(src + 'directory.json'));

const CONF = new Set(['confirmed', 'estimated', 'tba']);
const KIND = new Set(['grant', 'accel', 'pitch', 'event', 'research']);
for (const g of dl.items) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(g.date)) fail(`bad date on ${g.name}`);
  if (!CONF.has(g.conf)) fail(`bad confidence flag on ${g.name}`);
  if (!KIND.has(g.kind)) fail(`bad kind on ${g.name}`);
  if (!/^https:\/\//.test(g.url)) fail(`source must be https on ${g.name}`);
  if (/[—–!]/.test(g.name + g.detail)) fail(`dash or exclamation mark in ${g.name}`);
}
for (const r of dl.rolling) if (!/^https:\/\//.test(r.url)) fail(`source must be https on ${r.name}`);

const base = 'dist/research/ground-control/';
const pages = ['', 'deadlines/', 'events/', 'regulation/', 'directory/'];
for (const p of pages) {
  const h = read(base + p + 'index.html');
  if (!h.includes(`<link rel="canonical" href="https://lowob.com/research/ground-control/${p}">`)) fail(`canonical on /research/ground-control/${p}`);
  if (!h.includes('"@type": "BreadcrumbList"') && !h.includes('"@type":"BreadcrumbList"')) fail(`breadcrumbs on ${p || 'overview'}`);
  if (!/<h1>/.test(h)) fail(`no H1 on ${p || 'overview'}`);
}
const dead = read(base + 'deadlines/index.html');
const rows = (dead.match(/class="gc-row"/g) || []).length;
if (rows !== dl.items.length) fail(`deadlines page shows ${rows} gates, data has ${dl.items.length}`);
for (const c of ['confirmed', 'estimated', 'tba']) if (dl.items.some((g) => g.conf === c) && !dead.includes(`c-${c}`)) fail(`confidence flag ${c} not shown`);
const robots = dead.match(/<meta name="robots" content="([^"]*)"/)?.[1] || '';
const sitemap = read('dist/sitemap.xml');
const inMap = sitemap.includes('<loc>https://lowob.com/research/ground-control/deadlines/</loc>');
if (robots.startsWith('noindex') === inMap) fail('deadlines page robots and sitemap disagree');
for (const f of ['deadlines.csv', 'deadlines.json', 'deadlines.ics', 'events.csv', 'events.ics', 'regulatory.csv', 'directory.csv', 'ground-control.json']) read(base + 'data/' + f);
if (!read(base + 'data/deadlines.ics').startsWith('BEGIN:VCALENDAR')) fail('deadlines.ics is not a calendar');
if (!read('dist/research/index.html').includes('class="gc-hub-card"')) fail('research hub has no Ground Control card');
for (const p of ['dist/research/index.html','dist/news/index.html','dist/research/ground-control/index.html']) if (!read(p).includes('class="rx-nav"')) fail('portal bar missing on '+p);
const listed = ['top-5-ai-notetakers-for-decision-capture', 'top-10-applied-ai-events-nov-2026-jun-2027'];
for (const s of listed) if (!read(`dist/research/${s}/index.html`).includes('class="gc-listing"')) fail(`no listing box on ${s}`);
console.log(`PASS: Ground Control beta with ${dl.items.length} dated gates, ${dl.rolling.length} always open, ${ev.items.length} events, ${rg.items.length} regulatory dates, exports, hub card, portal bar, listing boxes; deadlines page ${robots.startsWith('noindex') ? 'noindex until re-verified' : 'indexed'}`);
