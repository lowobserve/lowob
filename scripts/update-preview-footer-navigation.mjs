#!/usr/bin/env node
// Update the four-tile navigation immediately above the footer across every
// lowob design-preview page. No production dist pages or article copy changed.
import {readdir,readFile,writeFile} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const directory=join(root,'dist','design-preview');
const assert=(test,message)=>{if(!test)throw Error(message);};
// Match the original tile markup exactly: number | one-line label | arrow.
const menuItems=[
  {number:'01',label:'The lowob system',url:'/design-preview/system/',color:'#a879ff'},
  {number:'02',label:'lowob RESEARCH',url:'/design-preview/featured/',color:'#23d8ff'},
  {number:'03',label:'About',url:'/design-preview/about/',color:'#ff42d0'},
  {number:'04',label:'Contact',url:'/design-preview/contact/',color:'#ff6b35'},
];
const arrow='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>';
const navigation='<nav class="detail-system" aria-label="Commercial system">'+
  menuItems.map(({number,label,url,color})=>'<a href="'+url+'" style="--item-signal:'+color+'"><span>'+number+'</span>'+label+arrow+'</a>').join('')+
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
  assert((resultMenus[0][0].match(/<span>0[1-4]<\/span>/g)||[]).length===4,'Original numbered labels missing: '+file);
  assert((resultMenus[0][0].match(/<svg xmlns=/g)||[]).length===4,'Original right arrows missing: '+file);
  for(const target of expectedLinks)assert(resultMenus[0][0].includes('href="'+target+'"'),'Missing destination '+target);
  assert(output.includes('<footer class="architecture-footer"'),'Footer lost: '+file);
  if(output!==html)edits.push({file,output});
}
assert(replaced+inserted+alreadyPresent===173,'Menu accounting changed');
assert(inserted<=2,'Unexpected insertion on extra pages: '+inserted);
for(const {file,output} of edits)await writeFile(file,output);
console.log('PASS: '+pages.length+' preview pages; '+replaced+' replaced, '+inserted+' inserted, '+alreadyPresent+' already correct. All menus appear directly above the original footer, with four valid preview links; production unaffected.');
