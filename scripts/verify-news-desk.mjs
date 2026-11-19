#!/usr/bin/env node
// Checks the lowob News Desk build: page, feeds, homepage strip, article boxes and links.
import { readFileSync, existsSync } from 'node:fs';

const fail = (m) => { console.error('FAIL: ' + m); process.exit(1); };
const read = (p) => { if (!existsSync(p)) fail('missing ' + p); return readFileSync(p, 'utf8'); };

const data = JSON.parse(read('research-release-source/news/news.json'));
const items = data.items;
if (!Array.isArray(items) || items.length === 0) fail('news.json has no items');
const fields = ['date', 'headline', 'source', 'url', 'kind', 'topic', 'why', 'research'];
for (const it of items) {
  for (const f of fields) if (!it[f] || (Array.isArray(it[f]) && it[f].length === 0)) fail(`story "${it.headline || '?'}" is missing ${f}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(it.date)) fail(`bad date ${it.date}`);
  if (!/^https:\/\//.test(it.url)) fail(`source URL must be https: ${it.url}`);
  if (/[—–!]/.test(it.headline + it.why)) fail(`dash or exclamation mark in "${it.headline}"`);
  for (const s of it.research) if (!existsSync(`dist/research/${s}/index.html`)) fail(`story links a missing article: ${s}`);
}
const page = read('dist/news/index.html');
const n = (page.match(/class="news-item"/g) || []).length;
if (n !== items.length) fail(`/news/ shows ${n} stories, news.json has ${items.length}`);
if (!page.includes('<link rel="canonical" href="https://lowob.com/news/">')) fail('/news/ canonical');
if (!page.includes('"@type": "CollectionPage"') && !page.includes('"@type":"CollectionPage"')) fail('/news/ structured data');
if (/noindex/.test(page.match(/<meta name="robots" content="([^"]*)"/)?.[1] || '')) fail('/news/ is noindexed');
read('dist/news/feed.xml'); JSON.parse(read('dist/news/news.json'));
const home = read('dist/index.html');
if ((home.match(/class="news-strip"/g) || []).length !== 1) fail('homepage needs exactly one News Desk strip');
const linked = new Set(items.flatMap((i) => i.research));
let boxes = 0;
for (const s of linked) if (read(`dist/research/${s}/index.html`).includes('class="bo-news"')) boxes++;
if (boxes !== linked.size) fail(`"In the news" box on ${boxes} of ${linked.size} linked articles`);
if (!read('dist/sitemap.xml').includes('<loc>https://lowob.com/news/</loc>')) fail('sitemap is missing /news/');
console.log(`PASS: News Desk with ${items.length} stories, homepage strip, ${boxes} article boxes, feeds and sitemap entry`);
