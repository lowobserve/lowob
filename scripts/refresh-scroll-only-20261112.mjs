#!/usr/bin/env node
// Refresh asset references in exactly the 166 static Research article pages.
import {readdir,readFile,writeFile} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const dir=join(resolve(fileURLToPath(new URL('..',import.meta.url))),'dist','research');
const links=[
  ['/assets/research-design.css?v=sidebar-darker-thumb-20261112','/assets/research-design.css?v=sidebar-scroll-only-20261112'],
  ['/assets/research-interactions.js?v=sidebar-independent-scroll-20261112','/assets/research-interactions.js?v=sidebar-scroll-only-20261112']
];
let count=0;
for (const entry of await readdir(dir,{withFileTypes:true})){
 if(!entry.isDirectory())continue;
 const path=join(dir,entry.name,'index.html');
 let html;try{html=await readFile(path,'utf8')}catch{continue}
 if(!html.includes('class="toc-scroll-region"'))throw Error('Missing sidebar scroll region: '+entry.name);
 for(const [oldRef,newRef] of links){
   if(html.split(oldRef).length!==2)throw Error('Missing or duplicate original asset: '+entry.name);
   html=html.replace(oldRef,newRef);
 }
 await writeFile(path,html,'utf8');
 count++;
}
if(count!==166)throw Error('Expected 166 updated articles, found '+count);
console.log('Refreshed sidebar scroll CSS/JS assets in '+count+' articles');
