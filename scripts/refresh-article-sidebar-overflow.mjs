#!/usr/bin/env node
// Refresh only the research-design.css URL on 166 article pages; retain
// all article content and metadata exactly as published.
import {readdir,readFile,writeFile} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const dir=join(root,'dist','research');
const original='/assets/research-design.css?v=desktop-sidebar-glow-20261112';
const newer='/assets/research-design.css?v=sidebar-glow-unclipped-20261112';
let changed=0;
for(const e of await readdir(dir,{withFileTypes:true})){
 if(!e.isDirectory())continue;
 const f=join(dir,e.name,'index.html');
 let content;try{content=await readFile(f,'utf8')}catch{continue}
 if(content.split(original).length!==2)throw Error('Missing or duplicate original version in '+e.name);
 const updated=content.replace(original,newer);
 if(updated!==content){await writeFile(f,updated,'utf8');changed++}
}
if(changed!==166)throw Error('Expected exactly 166 article CSS updates, found '+changed);
console.log('Refreshed CSS cache key on '+changed+' articles');
