// One-time release: apply only Chris Wells authorship to the CURRENT live lowob source.
// No Read-page, CTA, footer, menu, or design-system changes are imported.
import fs from 'node:fs';
import path from 'node:path';

const root = process.argv[2] || 'dist';
const research = path.join(root, 'research');
const assert = (condition, message) => {if (!condition) throw Error(message)};
assert(fs.existsSync(research), 'Missing dist/research');
assert(!fs.existsSync(path.join(root, 'the-read', 'index.html')), 'Read page unexpectedly present in live branch');

const OLD_BY = /<span>By <strong>lowob<\/strong>\s*·\s*([\s\S]*?)<\/span>/;
const OLD_META = /<meta\s+name="author"\s+content="lowob"\s*\/?>/;
const OLD_LD = '"author":{"@type":"Organization","name":"lowob","url":"https://lowob.com"}';
const NEW_LD = '"author":{"@type":"Person","name":"Chris Wells","url":"https://lowob.com/about/#chris","jobTitle":"Founder, lowob","sameAs":["https://x.com/lowobco"]}';
const changes = new Map();
const researchFiles = [];
let skipped = 0;

for (const slug of fs.readdirSync(research).sort()) {
  const file = path.join(research, slug, 'index.html');
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, 'utf8');
  const by = OLD_BY.exec(html);
  const meta = OLD_META.test(html);
  const ld = html.includes(OLD_LD);
  if (!by && !meta && !ld) {
    assert(!html.includes('content="Chris Wells"'), 'An article is already changed; check source branch: ' + slug);
    skipped++;
    continue;
  }
  assert(by && meta && ld, 'Incomplete author markers in article: ' + slug);
  const rest = by[1];
  const author = '<span class="byline-by">By <a href="/about/#chris"><strong>Chris Wells</strong></a></span>' +
    '<span class="byline-from">From <a href="/research/"><b>lowob</b> RESEARCH</a> · ' + rest + '</span>';
  const revised = html.replace(OLD_BY, author).replace(OLD_META, '<meta name="author" content="Chris Wells">').split(OLD_LD).join(NEW_LD);
  assert(revised.includes('<span class="byline-by">') && revised.includes('"@type":"Person","name":"Chris Wells"') &&
    revised.includes('<meta name="author" content="Chris Wells">'), 'Failed to rewrite: ' + slug);
  assert(!revised.includes('href="/the-read/"'), 'Unexpected Read navigation in article: ' + slug);
  changes.set(file, revised);
  researchFiles.push(file);
}
assert(researchFiles.length === 401, 'Expected exactly 401 articles, found ' + researchFiles.length);
assert(skipped === 1, 'Expected one non-article page, found ' + skipped);

const hub = path.join(research, 'index.html');
const originalHub = fs.readFileSync(hub, 'utf8');
const cards = (originalHub.match(/By <strong>lowob<\/strong>/g) || []).length;
assert(cards === 667, 'Expected 667 library byline placements, found ' + cards);
changes.set(hub, originalHub.replace(/By <strong>lowob<\/strong>/g, 'By <strong>Chris Wells</strong>'));

const feed = path.join(research, 'feed.xml');
const originalFeed = fs.readFileSync(feed, 'utf8');
const feedTag = '<author><name>lowob</name></author>';
assert(originalFeed.split(feedTag).length === 2, 'Expected one original feed author');
changes.set(feed, originalFeed.replace(feedTag, '<author><name>Chris Wells</name><uri>https://lowob.com/about/#chris</uri></author>'));

const about = path.join(root, 'about', 'index.html');
const originalAbout = fs.readFileSync(about, 'utf8');
assert(originalAbout.split('<section class="founder-section">').length === 2, 'Expected one Chris Wells founder section');
changes.set(about, originalAbout.replace('<section class="founder-section">', '<section class="founder-section" id="chris">'));

const cssFile = path.join(root, 'assets', 'research-design.css');
const originalCSS = fs.readFileSync(cssFile, 'utf8');
assert(!originalCSS.includes('.research-article-meta .byline-by'), 'Byline styles already exist');
const addition = [
  '',
  '/* Chris Wells research bylines — scoped to article author metadata */',
  '.research-article-meta .byline-by{display:block;margin-top:18px;font-size:18px;letter-spacing:-.01em;color:#f3f3ef}',
  '.research-article-meta .byline-by a{color:inherit;text-decoration:none;border-bottom:1px solid #39FF14}',
  '.research-article-meta .byline-by strong{font-weight:400}',
  '.research-article-meta .byline-from{display:block;margin-top:6px;font-size:14px;color:#858585}',
  '.research-article-meta .byline-from a{color:#f3f3ef;text-decoration:none}',
  '.research-article-meta .byline-from b{font-weight:700}',
  ''
].join('\n');
changes.set(cssFile, originalCSS.trimEnd() + '\n' + addition);

const home = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
assert(home.includes('<span class="primary-action-label">Book The Read</span>'), 'Unexpected live homepage CTA');

for (const [file, contents] of changes) fs.writeFileSync(file, contents);
for (const file of researchFiles) {
  const t = fs.readFileSync(file, 'utf8');
  assert(t.includes('By <a href="/about/#chris"><strong>Chris Wells</strong></a>'), 'Missing visible byline: ' + file);
}
assert(!fs.readFileSync(hub, 'utf8').includes('By <strong>lowob</strong>'), 'Library byline remains');
assert(fs.readFileSync(about, 'utf8').includes('id="chris"'), 'Founder anchor missing');
console.log('PASS: 401 article bylines, 667 library placements, 1 RSS author, About anchor, scoped CSS.');
console.log('PASS: 406 files changed, no Read content, no nav or homepage changes.');
