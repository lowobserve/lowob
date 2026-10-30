import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { normalizeSite } from './site-meta.mjs';

const root=mkdtempSync(join(tmpdir(),'lowob-metadata-'));
const page=(robots='')=>`<!doctype html><html lang="en"><head><title>Test | lowob</title><meta name="description" content="A test article's description.">${robots}</head><body><h1>Test</h1><time datetime="2026-02-10">10 February 2026</time><p>Body stays unchanged.</p></body></html>`;
try {
  mkdirSync(join(root,'research/test'),{recursive:true});
  mkdirSync(join(root,'directory-preview-gc-beta/entity/aave'),{recursive:true});
  mkdirSync(join(root,'unlisted'),{recursive:true});
  writeFileSync(join(root,'research/test/index.html'),page());
  const privatePage=page('<meta content="noindex, follow" name="robots">');
  writeFileSync(join(root,'directory-preview-gc-beta/entity/aave/index.html'),privatePage);
  writeFileSync(join(root,'unlisted/index.html'),page('<meta name="googlebot" content="noindex">'));
  writeFileSync(join(root,'robots.txt'),'User-agent: *\nAllow: /\nDisallow: /private/\n');
  const modifiedAt=new Date().toISOString();
  const result=normalizeSite(root,{fix:true,modifiedAt});
  assert.equal(result.errors.length,0); assert.equal(result.public,1); assert.equal(result.excluded,2);
  assert.equal(readFileSync(join(root,'directory-preview-gc-beta/entity/aave/index.html'),'utf8'),privatePage);
  assert.ok(readFileSync(join(root,'unlisted/index.html'),'utf8').includes('name="googlebot" content="noindex"'));
  const fixed=readFileSync(join(root,'research/test/index.html'),'utf8');
  assert.equal(fixed.slice(fixed.indexOf('<body>')),page().slice(page().indexOf('<body>')));
  assert.ok(fixed.includes('"datePublished":"2026-02-10"'));
  assert.ok(fixed.includes(`"dateModified":"${modifiedAt}"`));
  assert.ok(fixed.includes('<link rel="canonical" href="https://lowob.com/research/test/">'));
  assert.ok(!fixed.slice(0, fixed.indexOf('</head>')).includes('https://www.lowob.com'));
  const sitemap=readFileSync(join(root,'sitemap.xml'),'utf8');
  assert.ok(sitemap.includes('<loc>https://lowob.com/research/test/</loc>'));

  assert.ok(sitemap.includes(`<lastmod>${modifiedAt}</lastmod>`));
  assert.ok(!sitemap.includes('preview') && !sitemap.includes('unlisted'));
  assert.ok(!readFileSync(join(root,'llms.txt'),'utf8').includes('unlisted'));
  assert.ok(readFileSync(join(root,'robots.txt'),'utf8').includes('Disallow: /private/'));
  assert.equal(normalizeSite(root).changed,0);
  assert.throws(()=>normalizeSite(root,{modifiedAt:'2099-01-01T00:00:00Z'}));
  console.log('Metadata regression checks passed: noindex, preview exclusion, head-only edits, timestamps, robots preservation, idempotence.');
} finally { rmSync(root,{recursive:true,force:true}); }
