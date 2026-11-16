#!/usr/bin/env node
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const p=readFileSync(new URL('../dist/_headers',import.meta.url),'utf8');
for(const route of ['/research/*/index.md','/research/summaries.md','/llms-full.txt','https://:version.:subdomain.workers.dev/*']){
  assert.ok(p.includes(route+'\n  X-Robots-Tag: noindex'),route+' missing noindex rule');
}
assert.ok(!/^\/research\/\*\s*$/m.test(p),'HTML research wildcard must not be noindexed');
assert.ok(!/^\/\*\s*$/m.test(p),'All-site noindex forbidden');
console.log('PASS: only AI text variants and Cloudflare preview are noindex');
