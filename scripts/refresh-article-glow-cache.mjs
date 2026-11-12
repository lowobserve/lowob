#!/usr/bin/env node
// Cache refresh only: retain every article's body, metadata, and navigation.
// The new CSS contains the desktop All Research sidebar glow.
import {readdir,readFile,writeFile} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const folder=join(root,'dist','research');
const key='desktop-sidebar-glow-20261112';
const needle=/<link rel="stylesheet" href="\/assets\/research-design\.css\?v=[^"]+">/g;
const replacement='<link rel="stylesheet" href="/assets/research-design.css?v='+key+'">';
let count=0;
for(const entry of await readdir(folder,{withFileTypes:true})){
 if(!entry.isDirectory())continue;
 const path=join(folder,entry.name,'index.html');
 let source;try{source=await readFile(path,'utf8')}catch{continue}
 const hits=[...source.matchAll(needle)];
 if(hits.length!==1)throw Error('Expected exactly one research CSS ref in '+entry.name);
 const updated=source.replace(needle,replacement);
 if(updated===source)throw Error('Cache key unchanged in '+entry.name);
 await writeFile(path,updated,'utf8');
 count++;
}
if(count!==166)throw Error('Expected 166 articles, got '+count);
console.log('Bumped desktop article CSS key in '+count+' articles');
