#!/usr/bin/env node
// Update the four-tile navigation immediately above the footer across every
// lowob design-preview page. No production dist pages or article copy changed.
import {readdir,readFile,writeFile} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const directory=join(root,'dist','design-preview');
const assert=(test,message)=>{if(!test)throw Error(message);};
const navigation='<nav class="detail-system" aria-label="Commercial system">'+
  '<a href="/design-preview/system/" style="--item-signal:#a879ff">The lowob system</a>'+
  '<a href="/design-preview/featured/" style="--item-signal:#23d8ff">lowob RESEARCH</a>'+
  '<a href="/design-preview/about/" style="--item-signal:#ff42d0">About</a>'+
  '<a href="/design-preview/contact/" style="--item-signal:#ff6b35">Contact</a>'+
  '</nav>';
const expectedLinks=['/design-preview/system/','/design-preview/featured/','/design-preview/about/','/design-preview/contact/'];
const pages=[];
async function explore(dir){
  for(const entry of await readdir(dir,{withFileTypes:true})){
    const path=join(dir,entry.name);
    if(entry.isDirectory())await explore(path);
    else if(entry.isFile()&&entry.name==='index.html')pages.push(path);
  }
}
await explore(directory);
assert(pages.length===173,'Expected 173 preview HTML pages, found '+pages.length);
const edits=[];
let replaced=0,inserted=0,alreadyPresent=0;
for(const file of pages){
  const html=await readFile(file,'utf8');
  assert(html.includes('<body class="preview-only"'),'Not a preview-only page: '+file);
  assert(html.includes('noindex'),'Noindex safety missing: '+file);
  const footer='<footer class="architecture-footer"';
  const footerAt=html.indexOf(footer);
  assert(footerAt>=0,'Footer missing: '+file);
  assert(html.indexOf(footer,footerAt+footer.length)<0,'Multiple footers: '+file);
  const existing=[...html.matchAll(/<nav class="detail-system(?: [^"]*)?"[^>]*>[\s\S]*?<\/nav>/g)];
  assert(existing.length<=1,'Unexpected multiple upper-footer menus: '+file);
  let output;
  if(existing.length){
    const match=existing[0];
    assert(match.index<footerAt,'Existing menu after footer: '+file);
    if(match[0]===navigation){output=html;alreadyPresent++;}
    else {output=html.slice(0,match.index)+navigation+html.slice(match.index+match[0].length);replaced++;}
  }else{
    assert(!html.includes('class="detail-system" aria-label="Commercial system"'),'Unexpected orphaned menu: '+file);
    output=html.slice(0,footerAt)+navigation+html.slice(footerAt);
    inserted++;
  }
  const resultMenus=[...output.matchAll(/<nav class="detail-system"[\s\S]*?<\/nav>/g)];
  assert(resultMenus.length===1,'Exactly one consolidated menu required: '+file);
  assert(resultMenus[0][0]===navigation,'Inconsistent menu: '+file);
  assert(resultMenus[0].index<output.indexOf(footer),'Menu does not precede footer: '+file);
  assert((resultMenus[0][0].match(/<a href=/g)||[]).length===4,'Expected exactly four links: '+file);
  for(const target of expectedLinks)assert(resultMenus[0][0].includes('href="'+target+'"'),'Missing destination '+target);
  assert(output.includes('<footer class="architecture-footer"'),'Footer lost: '+file);
  if(output!==html)edits.push({file,output});
}
assert(replaced+inserted+alreadyPresent===173,'Menu accounting changed');
assert(inserted<=2,'Unexpected insertion on extra pages: '+inserted);
for(const {file,output} of edits)await writeFile(file,output);
console.log('PASS: '+pages.length+' preview pages; '+replaced+' replaced, '+inserted+' inserted, '+alreadyPresent+' already correct. All menus appear directly above the original footer, with four valid preview links; production unaffected.');
