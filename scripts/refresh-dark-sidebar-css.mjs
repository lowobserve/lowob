#!/usr/bin/env node
import {readdir,readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {join,resolve} from 'node:path';
const folder=join(resolve(fileURLToPath(new URL('..',import.meta.url))),'dist','research');
const before='/assets/research-design.css?v=sidebar-2px-fixed-height-20261112';
const after='/assets/research-design.css?v=sidebar-darker-thumb-20261112';
let count=0;
for(const e of await readdir(folder,{withFileTypes:true})){
  if(!e.isDirectory())continue;
  const path=join(folder,e.name,'index.html');
  let s;try{s=await readFile(path,'utf8')}catch{continue}
  if(s.split(before).length!==2)throw Error('Unexpected stylesheet ref: '+e.name);
  await writeFile(path,s.replace(before,after),'utf8');
  count++;
}
if(count!==166)throw Error('Expected 166 articles, found '+count);
console.log('Refreshed '+count+' article CSS links');
