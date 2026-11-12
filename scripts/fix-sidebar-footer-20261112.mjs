#!/usr/bin/env node
// Static HTML fix: keep the CTA outside the scroll region on every Research
// article, plus remove outdated footer tagline across all public site pages.
import {readdir,readFile,writeFile} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const dist=join(root,'dist');
const footer='<p class="footer-worldwide">DECENTRALIZED / WORLDWIDE</p>';
const oldCSS='/assets/research-design.css?v=sidebar-independent-scroll-20261112';
const newCSS='/assets/research-design.css?v=article-scrollbar-footer-20261112';
const regionOpen='<div class="toc-scroll-region" role="region" aria-label="Scrollable content list and featured research" tabindex="0">';
const articleRegex=/(<aside class="research-article-aside preview-toc"><a[^>]*class="toc-all-research"[^>]*>[\s\S]*?<\/a>)([\s\S]*?)(<\/aside>)/;
let articleCount=0,footerCount=0,fileCount=0;
async function walk(dir){
 for(const entry of await readdir(dir,{withFileTypes:true})){
  const path=join(dir,entry.name);
  if(entry.isDirectory()){await walk(path);continue;}
  if(entry.name!=='index.html')continue;
  const s=await readFile(path,'utf8');
  const isArticle=/\/dist\/research\/[^/]+\/index\.html$/.test(path);
  let output=s;
  if(isArticle){
   articleCount++;
   if(output.includes('class="toc-scroll-region"'))throw Error('Already wrapped: '+path);
   if(output.split(oldCSS).length!==2)throw Error('Missing Research CSS version: '+path);
   if((output.match(articleRegex)||[]).length!==4)throw Error('Missing CTA / article aside: '+path);
   output=output.replace(articleRegex,(_full,prefix,body,end)=>prefix+regionOpen+body+'</div>'+end);
   output=output.replace(oldCSS,newCSS);
  }
  if(output.includes(footer)){
   if(output.split(footer).length!==2)throw Error('Duplicate footer tagline: '+path);
   output=output.replace(footer,'');
   footerCount++;
  }
  if(output.includes(footer))throw Error('Footer tagline survived on '+path);
  if(output!==s){await writeFile(path,output,'utf8');fileCount++;}
 }
}
await walk(dist);
if(articleCount!==166)throw Error('Expected 166 articles: '+articleCount);
if(footerCount!==177)throw Error('Expected 177 footer removals: '+footerCount);
if(fileCount!==177)throw Error('Expected 177 HTML changes: '+fileCount);
console.log(JSON.stringify({articleCount,footerCount,fileCount,cssVersion:newCSS}));
