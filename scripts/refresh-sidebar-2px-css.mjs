#!/usr/bin/env node
// Refresh only research-design CSS asset references on the 166 article pages.
import {readdir,readFile,writeFile} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const articles=join(root,'dist','research');
const before='/assets/research-design.css?v=tall-thin-sidebar-scroll-20261112';
const after='/assets/research-design.css?v=sidebar-2px-fixed-height-20261112';
let updated=0;
for(const entry of await readdir(articles,{withFileTypes:true})){
 if(!entry.isDirectory())continue;
 const path=join(articles,entry.name,'index.html');
 let html;
 try{html=await readFile(path,'utf8')}catch{continue}
 if(html.split(before).length!==2)throw Error('Missing/duplicate CSS version on '+entry.name);
 if(!html.includes('class="toc-scroll-region"'))throw Error('Missing scroll pane in '+entry.name);
 await writeFile(path,html.replace(before,after),'utf8');
 updated++;
}
if(updated!==166)throw Error('Expected 166 updated articles, got '+updated);
console.log('Refreshed 166 article stylesheet references');
