#!/usr/bin/env node
// Staging QA for the 366-article research release plus two existing event articles.
// This complements (rather than changes) the frozen 166-article release QA.
import {readFileSync,existsSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {scanSite,meta} from './site-meta.mjs';

const root=fileURLToPath(new URL('..',import.meta.url));
const dist=join(root,'dist');
const read=path=>readFileSync(path,'utf8');
const check=(ok,message)=>{if(!ok)throw Error(message)};
const hub=read(join(dist,'research','index.html'));
const featuredStart='<div id="library-featured" class="research-grid" data-library-panel="featured">';
const allStart='<div id="library-all" class="research-grid" data-library-panel="all" hidden>';
const endMark='<p class="research-empty" id="preview-library-empty"';
const f=hub.indexOf(featuredStart),a=hub.indexOf(allStart),z=hub.indexOf(endMark);
check(f>=0&&a>f&&z>a,'Research panels missing or out of order');
const extract=section=>[...section.matchAll(/<a class="research-card"[\s\S]*?<\/a>/g)].map(match=>{
  const html=match[0];
  const slug=html.match(/href="\/research\/([^/]+)\//)?.[1];
  const rank=Number(html.match(/data-rank="(\d+)"/)?.[1]);
  check(slug&&Number.isInteger(rank),'Unrecognized research card');
  return {slug,rank};
});
const featured=extract(hub.slice(f,a));
const all=extract(hub.slice(a,z));
const unique=cards=>new Set(cards.map(c=>c.slug));
const featuredSlugs=unique(featured),allSlugs=unique(all);
check(featured.length===31&&featuredSlugs.size===31,'Featured should contain 31 unique curated articles');
check(all.length===368&&allSlugs.size===368,'All should contain 368 unique articles (366 release + 2 prior event pages)');
check(all.filter(c=>c.rank>166).length===202,'Expected 202 new article cards');
check(all.filter(c=>c.rank<=166).length===166,'Expected 166 prior article cards');
for(const card of featured)check(allSlugs.has(card.slug)&&card.rank<=166,'Featured article missing from All or not in approved curated set: '+card.slug);
const indexed=scanSite(dist).filter(x=>x.article&&!x.excluded);
check(indexed.length===368,'Unexpected number of indexable research articles: '+indexed.length);
const sitemap=read(join(dist,'sitemap.xml'));
for(const {slug} of all){
  const path='/research/'+slug+'/';
  const file=join(dist,'research',slug,'index.html');
  check(existsSync(file),'Article page missing: '+slug);
  const html=read(file),head=html.slice(0,html.indexOf('</head>')+7);
  check((html.match(/<h1\b/gi)||[]).length===1,'Expected exactly one H1: '+slug);
  check(head.includes('rel="canonical" href="https://lowob.com'+path+'"'),'Canonical missing: '+slug);
  check(/\bindex\b/i.test(meta(head,'robots')),'Article marked noindex: '+slug);
  check(sitemap.includes('https://lowob.com'+path),'Article missing from sitemap: '+slug);
}
check(existsSync(join(dist,'llms-full.txt')),'Full AI text missing');
check(existsSync(join(dist,'assets','build-order.css')),'Release CSS missing');
console.log('PASS: 31 curated Featured, 368 unique All, 202 new + 166 existing, indexable pages, canonicals, H1, sitemap, AI text, CSS.');
