#!/usr/bin/env node
// Bump only sidebar CSS and JS asset versions in article pages.
import {readFile,readdir,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {join,resolve} from 'node:path';
const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const folder=join(root,'dist','research');
let changed=0;
const rules=[
  ['/assets/research-design.css?v=sidebar-glow-unclipped-20261112','/assets/research-design.css?v=sidebar-independent-scroll-20261112'],
  ['/assets/research-interactions.js?v=article-footer-canonical-20261112','/assets/research-interactions.js?v=sidebar-independent-scroll-20261112']
];
for(const entry of await readdir(folder,{withFileTypes:true})){
  if(!entry.isDirectory()) continue;
  const path=join(folder,entry.name,'index.html');
  let s;try{s=await readFile(path,'utf8')}catch{continue}
  let next=s;
  for(const [before,after] of rules){
    if(next.split(before).length!==2)throw Error('CSS/JS key missing or repeated on '+entry.name);
    next=next.replace(before,after);
  }
  await writeFile(path,next,'utf8'); changed++;
}
if(changed!==166)throw Error('Expected 166 Research articles, found '+changed);
console.log('Updated CSS and JS refs for '+changed+' articles');
