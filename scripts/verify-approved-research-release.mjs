#!/usr/bin/env node
// Independent post-build QA for the approved 166-article research release.
import {readFile,readdir} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {scanSite,meta,schemas,normalizeSite} from './site-meta.mjs';
const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const dist=join(root,'dist'),src=join(root,'research-release-source','design-preview');
const read=p=>readFile(p,'utf8');
const dirs=async p=>(await readdir(p,{withFileTypes:true})).filter(x=>x.isDirectory()).map(x=>x.name);
const check=(x,msg)=>{if(!x)throw Error(msg);};
const get=(s,re,label)=>{const m=s.match(re);check(m,label+' not found');return m[1];};
const text=s=>s.replace(/<[^>]*>/g,'').replace(/&quot;|&#34;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/\s+/g,' ').trim();
const inner=s=>get(s,/<div class="research-article-body[^"]*"[^>]*>([\s\S]*?)<\/div><aside class="research-article-aside[^"]*">/,'article body');
const slug=s=>get(s,/<meta property="og:url" content="https:\/\/lowob\.com\/research\/([^/]+)\//,'source public slug');
const featuredSource=await read(join(src,'featured','index.html'));
const featuredPart=featuredSource.slice(featuredSource.indexOf('id="library-featured"'),featuredSource.indexOf('id="library-all"'));
const approvedFeaturedNames=new Set([...featuredPart.matchAll(/<a class="research-card" href="\/design-preview\/([^/]+)\//g)].map(x=>x[1]));
check(approvedFeaturedNames.size===31,'Expected 31 approved featured destinations');
const preview=new Map();
const refined=new Set(),archive=new Set();
for(const name of await dirs(src)){
  const f=join(src,name,'index.html');
  if(name==='library'||!existsSync(f))continue;
  const html=await read(f);
  if(html.includes('<meta property="og:type" content="article">')){
    const id=slug(html);
    check(!preview.has(id),'Duplicate refined source '+id);
    preview.set(id,html);refined.add(id);
  }
}
for(const name of await dirs(join(src,'library'))){
  const html=await read(join(src,'library',name,'index.html'));
  check(slug(html)===name,'Archive mapping mismatch '+name);
  check(!preview.has(name),'Duplicate archive '+name);
  preview.set(name,html);archive.add(name);
}
check(refined.size===31&&archive.size===135&&preview.size===166,'Source coverage changed');
const styles=await read(join(dist,'assets','research-design.css'));
const script=await read(join(dist,'assets','research-interactions.js'));
check(styles.includes('body.research-live')&&!styles.includes('body.preview-only'),'Production styles not scoped');
check(script.includes("allResearchLink.href='/research/#all'"),'All Research sidebar is broken');
check(script.includes("input.type='checkbox'")&&script.includes('localStorage.setItem(storageKey'),'Interactive checklist not preserved');
check(script.includes('REFINED_SLUG_MAP'),'Contextual article URL mapping missing');
check(!script.includes("'/design-preview/'"),'Preview sidebar destination remains');
const records=scanSite(dist);
check(records.filter(x=>!x.excluded).length===176,'Public page count changed');
check(records.filter(x=>x.article).length===166,'Indexed article count changed');
check(records.filter(x=>x.noindex&&x.article).length===0,'Article is noindex');
const sourceLinks=new Set();
let checklists=0,altered=0,staticSidebars=0;
const nextDestinations=new Map();
for(const [slug,sourceHTML] of preview){
  const html=await read(join(dist,'research',slug,'index.html'));
  const seo=html.slice(0,html.indexOf('</head>'));
  const path='/research/'+slug+'/';
  check(!html.includes('/design-preview/'),'Preview path leaked in '+slug);
  check(html.includes('class="research-live"'),'Approved styling missing '+slug);
  check(html.includes('/assets/research-design.css'),'CSS missing '+slug);
  check(html.includes('/assets/research-interactions.js'),'JS missing '+slug);
  check(meta(seo,'og:url')==='https://lowob.com'+path,'OG URL changed '+slug);
  check(meta(seo,'robots').includes('index'),'Index directive missing '+slug);
  check(seo.includes('rel="canonical" href="https://lowob.com'+path+'"'),'Canonical changed '+slug);
  check(meta(seo,'og:image')==='https://lowob.com'+path+'share.png','Original per-article share art changed '+slug);
  check(existsSync(join(dist,'research',slug,'share.png')),'Original share art missing '+slug);
  check((html.match(/<h1\b/gi)||[]).length===1,'H1 count '+slug);
  const a=inner(sourceHTML),b=inner(html);
  check(text(a)===text(b),'Approved article wording changed '+slug);
  const article=schemas(seo).find(j=>j['@type']==='Article');
  check(article&&article.mainEntityOfPage==='https://lowob.com'+path,'Article schema wrong '+slug);
  check(article.datePublished===meta(seo,'article:published_time'),'Publication date changed '+slug);
  if(refined.has(slug)){
    check(article.headline===text(get(html,/<h1\b[^>]*>([\s\S]*?)<\/h1>/i,'H1')),'Structured headline differs '+slug);
    altered++;
  }
  if(archive.has(slug)&&sourceHTML.includes('class="archive-checklist"')){
    check(html.includes('class="archive-checklist"'),'Checklist lost '+slug);checklists++;
  }
  const bigCTA=get(html,/<a class="service-next research-article-next" href="([^\"]+)"/,'Article bottom CTA '+slug);
  check(/^\/research\/[a-z0-9-]+\/$/.test(bigCTA),'Closing CTA is not an article: '+slug+' -> '+bigCTA);
  const bigTarget=bigCTA.split('/')[2];
  check(refined.has(bigTarget)&&bigTarget!==slug,'Article closing CTA must link to a different featured article: '+slug);
  nextDestinations.set(slug,bigTarget);
  if(html.includes('class="toc-all-research"')){
    check(html.includes('class="toc-featured-links"'),'Static Featured sidebar links missing '+slug);
    check((html.match(/class="toc-featured-link"/g)||[]).length===2,'Expected two static sidebar recommendations '+slug);
    staticSidebars++;
  }
  const refs=[...html.matchAll(/href="(\/research\/[^"#?]*)"/g)].map(x=>x[1]);
  for(const href of refs)sourceLinks.add(href);
}
check(checklists===38,'Checklists not 38: '+checklists);
check(staticSidebars===166,'Expected all 166 sidebars to be pre-rendered; found '+staticSidebars);
for(const [source,target] of nextDestinations)check(nextDestinations.get(target)!==source,'Reciprocal Featured CTA loop between '+source+' and '+target);
check(new Set(nextDestinations.values()).size>=28,'Too few distinct Featured CTA destinations');
check(altered===31,'Refined count not 31');
for(const href of sourceLinks){
  const m=href.match(/^\/research\/([^/]+)\/$/);
  if(m)check(preview.has(m[1]),'Broken internal research link '+href);
}
const hub=await read(join(dist,'research','index.html'));
check(hub.includes('class="research-live"'),'Hub not promoted');
check(hub.includes('>Search Research</span>'),'Approved search label missing');
check(hub.includes('<h1>Useful research.<br>Clearer decisions.</h1>'),'Approved Research headline changed');
check(hub.includes('Practical analysis for companies working on strategy, growth, distribution, and revenue in markets still being defined.'),'Approved Research subtext missing');
check(/class="service-next research-next" href="\/about\/"/.test(hub),'Research bottom CTA does not lead to About');
check(!hub.includes('/design-preview/'),'Preview link in hub');
const featured=hub.slice(hub.indexOf('id="library-featured"'),hub.indexOf('id="library-all"'));
const all=hub.slice(hub.indexOf('id="library-all"'),hub.indexOf('id="preview-library-empty"'));
const featureCards=[...featured.matchAll(/<a class="research-card"[\s\S]*?<\/a>/g)];
const allCards=[...all.matchAll(/<a class="research-card"[\s\S]*?<\/a>/g)];
check(featureCards.length===31,'Wrong featured card count '+featureCards.length);
check(allCards.length===166,'Wrong total card count '+allCards.length);
const links=allCards.map(x=>get(x[0],/href="([^"]+)"/,'card URL'));
check(new Set(links).size===166,'Duplicate research card URL');
for(const href of links)check(/^\/research\/[a-z0-9-]+\/$/.test(href)&&preview.has(href.split('/')[2]),'Invalid article card '+href);
const report=normalizeSite(dist);
check(report.errors.length===0&&report.changed===0,'Metadata normalization not clean: '+report.errors.join('; ')+'; changes='+report.changed);
const robots=await read(join(dist,'robots.txt')),sitemap=await read(join(dist,'sitemap.xml'));
check(robots.includes('https://lowob.com/sitemap.xml'),'Robots sitemap changed');
check(!sitemap.includes('design-preview'),'Preview included in sitemap');
for(const key of preview.keys())check(sitemap.includes('https://lowob.com/research/'+key+'/'),'Sitemap missing '+key);
console.log('PASS: 31 original approved rewrites, 135 untouched visual articles, 166 stable canonical URLs, 38 working checklist blocks, 31 featured cards, 166 unique all cards, SEO+schema+images, navigation, sitemap, indexing.');
