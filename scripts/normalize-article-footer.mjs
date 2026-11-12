#!/usr/bin/env node
// Align all public Research article footers with the approved sitewide menu.
// Scope: footer nav markup and static asset cache keys only; no editorial content.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const dist=join(root,'dist');
const articleRoot=join(dist,'research');
const canonicalPage=await readFile(join(dist,'system','index.html'),'utf8');
const navRx=/<nav class="detail-system" aria-label="Commercial system">[\s\S]*?<\/nav>/g;
const canonical=(canonicalPage.match(navRx)||[])[0];
if(!canonical||!canonical.includes('lowob SYSTEM')||!canonical.includes('lowob RESEARCH'))throw Error('Approved footer markup missing');
const links=[['/system/','lowob SYSTEM'],['/research/','lowob RESEARCH'],['/about/','About'],['/contact/','Contact']];
for(const [url,label] of links){
  if(!canonical.includes('href="'+url+'"')||!canonical.includes('>'+label+'</span>'))throw Error('Canonical footer link missing: '+label);
}
const keys=new Set(['refined.css','research-design.css','research-interactions.js']);
const cacheKey='article-footer-canonical-20261112';
const slugs=(await readdir(articleRoot,{withFileTypes:true})).filter(e=>e.isDirectory()).map(e=>e.name).sort();
let articles=0,updated=0;
for(const slug of slugs){
 const path=join(articleRoot,slug,'index.html');
 let source;
 try{source=await readFile(path,'utf8')}catch{continue}
 articles++;
 const matches=source.match(navRx)||[];
 if(matches.length!==1)throw Error('Expected exactly one footer menu in '+slug);
 const old=matches[0];
 const recognized=old===canonical||(old.includes('href="/strategy/"')&&old.includes('href="/growth/"')&&old.includes('href="/distribution/"')&&old.includes('href="/revenue/"'));
 if(!recognized)throw Error('Unexpected footer structure in '+slug);
 let next=source.replace(old,canonical).replace(/\/assets\/([a-z-]+\.(?:css|js))\?v=[^"]+/g,(match,file)=>keys.has(file)?'/assets/'+file+'?v='+cacheKey:match);
 if(next!==source){await writeFile(path,next);updated++}
}
if(articles!==166)throw Error('Expected 166 public articles, found '+articles);
if(updated!==166)throw Error('Expected to update 166 article files, updated '+updated);
console.log('Normalized footer on '+updated+' of '+articles+' articles');
