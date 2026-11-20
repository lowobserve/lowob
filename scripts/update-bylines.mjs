// Changes the author on every lowob research page from "lowob" to Chris Wells.
// Runs on the BUILT site (the folder that gets deployed). No dependencies. Node 18+.
//
//   node scripts/update-bylines.mjs <site-folder>            dry run: reports what would change
//   node scripts/update-bylines.mjs <site-folder> --write    makes the changes
//
// It edits, in place:
//   research/<slug>/index.html   visible byline, <meta name="author">, JSON-LD "author"   (401 articles on 19 Nov 2026)
//   research/index.html          "By lowob" on every library card
//   research/feed.xml            the feed's <author>
// and writes bylines-manifest.csv listing every article and what changed.
import fs from 'node:fs';
import path from 'node:path';

const root = process.argv[2];
const write = process.argv.includes('--write');
if (!root || !fs.existsSync(path.join(root, 'research'))) {
  console.error('Usage: node scripts/update-bylines.mjs <built-site-folder> [--write]  (folder must contain research/)');
  process.exit(1);
}

const LINKEDIN = '<CHRIS LINKEDIN URL>'; // fill in before running with --write
const OLD_LD = '"author":{"@type":"Organization","name":"lowob","url":"https://lowob.com"}';
const NEW_LD = '"author":{"@type":"Person","name":"Chris Wells","url":"https://lowob.com/about/#chris","jobTitle":"Founder, lowob"'
  + (LINKEDIN.startsWith('http') ? `,"sameAs":["${LINKEDIN}","https://x.com/lowobco"]` : ',"sameAs":["https://x.com/lowobco"]') + '}';
const OLD_META = /<meta\s+name="author"\s+content="lowob"\s*\/?>/g;
const NEW_META = '<meta name="author" content="Chris Wells">';
// Article byline: <span>By <strong>lowob</strong> · <time ...>...</time> · 5-minute read · Revenue</span>
const OLD_BY = /<span>By <strong>lowob<\/strong>\s*·\s*([\s\S]*?)<\/span>/;
const newBy = (rest) =>
  '<span class="byline-by">By <a href="/about/#chris"><strong>Chris Wells</strong></a></span>' +
  `<span class="byline-from">From <a href="/research/"><b>lowob</b> RESEARCH</a> · ${rest}</span>`;
const CARD = /By <strong>lowob<\/strong>/g;

const rows = [['slug', 'byline', 'meta_author', 'jsonld_author', 'status']];
let changed = 0, skipped = 0;
const dir = path.join(root, 'research');
for (const slug of fs.readdirSync(dir).sort()) {
  const f = path.join(dir, slug, 'index.html');
  if (!fs.existsSync(f)) continue;
  let h = fs.readFileSync(f, 'utf8');
  const hasBy = OLD_BY.test(h), hasMeta = OLD_META.test(h), hasLd = h.includes(OLD_LD);
  OLD_META.lastIndex = 0;
  if (!hasBy && !hasMeta && !hasLd) {
    const done = h.includes('content="Chris Wells"');
    rows.push([slug, '', '', '', done ? 'already done' : 'not an article (skipped)']);
    skipped++; continue;
  }
  h = h.replace(OLD_BY, (_, rest) => newBy(rest)).replace(OLD_META, NEW_META).split(OLD_LD).join(NEW_LD);
  rows.push([slug, hasBy ? 'yes' : 'MISSING', hasMeta ? 'yes' : 'MISSING', hasLd ? 'yes' : 'MISSING', 'changed']);
  if (write) fs.writeFileSync(f, h);
  changed++;
}

const extra = [];
const idx = path.join(dir, 'index.html');
if (fs.existsSync(idx)) {
  const h = fs.readFileSync(idx, 'utf8'); const n = (h.match(CARD) || []).length;
  if (write && n) fs.writeFileSync(idx, h.replace(CARD, 'By <strong>Chris Wells</strong>'));
  extra.push(`research/index.html: ${n} library cards`);
}
const feed = path.join(dir, 'feed.xml');
if (fs.existsSync(feed)) {
  const h = fs.readFileSync(feed, 'utf8'); const n = (h.match(/<author><name>lowob<\/name><\/author>/g) || []).length;
  if (write && n) fs.writeFileSync(feed, h.replace(/<author><name>lowob<\/name><\/author>/g, '<author><name>Chris Wells</name><uri>https://lowob.com/about/#chris</uri></author>'));
  extra.push(`research/feed.xml: ${n} author tag(s)`);
}

fs.writeFileSync(path.join(root, 'bylines-manifest.csv'), rows.map(r => r.join(',')).join('\n') + '\n');
const missing = rows.filter(r => r.includes('MISSING')).length;
console.log(`${write ? 'Changed' : 'Would change'} ${changed} articles; skipped ${skipped}; ${missing} with a missing marker.`);
extra.forEach(e => console.log((write ? 'Changed ' : 'Would change ') + e));
console.log('Manifest: ' + path.join(root, 'bylines-manifest.csv'));
if (!LINKEDIN.startsWith('http')) console.log('Note: LinkedIn URL not set; JSON-LD sameAs has X only.');
if (!write) console.log('Dry run. Add --write to apply.');