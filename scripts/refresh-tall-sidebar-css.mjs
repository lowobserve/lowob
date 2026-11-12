#!/usr/bin/env node
// Only change the CSS cache key on each of the 166 Research article pages.
import {readdir,readFile,writeFile} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const dir=join(root,'dist','research');
const before='/assets/research-design.css?v=article-scrollbar-footer-20261112';
const after='/assets/research-design.css?v=tall-thin-sidebar-scroll-20261112';
let count=0;
for(const e of await readdir(dir,{withFileTypes:true})){
  if(!e.isDirectory())continue;
  const path=join(dir,e.name,'index.html');
  let html;try{html=await readFile(path,'utf8')}catch{continue}
  if(html.split(before).length!==2)throw Error('Missing CSS version on '+e.name);
  if(!html.includes('class="toc-scroll-region"'))throw Error('Missing static scrollbar region on '+e.name);
  await writeFile(path,html.replace(before,after),'utf8');
  count++;
}
if(count!==166)throw Error('Expected 166 article updates, found '+count);
console.log('Refreshed sidebar stylesheet on '+count+' article pages');
