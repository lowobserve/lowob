#!/usr/bin/env node
// Normalize visible editorial update labels, preserving original publication
// dates and article content. Featured list on the Research hub is authoritative.
import {readFile,writeFile,readdir} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const articlesDir=join(root,'dist','research');
const hub=await readFile(join(articlesDir,'index.html'),'utf8');
const first=hub.indexOf('id="library-featured"'), last=hub.indexOf('id="library-all"');
if(first<0||last<first)throw Error('Research Featured / All boundary not found');
const featureHTML=hub.slice(first,last);
const selected=new Set([...featureHTML.matchAll(/<a class="research-card" href="\/research\/([^/]+)\//g)].map(m=>m[1]));
if(selected.size!==31)throw Error('Expected 31 Featured articles; got '+selected.size);
const entries=(await readdir(articlesDir,{withFileTypes:true})).filter(e=>e.isDirectory()).map(e=>e.name).sort();
const metaRx=/(<div class="research-article-meta preview-article-meta"><span>)([\s\S]*?)(<\/span><\/div>)/;
const dateRx=/\s*·\s*Updated\s+(?:0?9|10)\s+November\s+2026/gi;
let found=0,modified=0,featuredCount=0,unfeaturedCount=0,removedOld=0;
for(const slug of entries){
 const file=join(articlesDir,slug,'index.html');
 let source;
 try{source=await readFile(file,'utf8');}catch{continue;}
 found++;
 const matches=[...source.matchAll(new RegExp(metaRx.source,'g'))];
 if(matches.length!==1)throw Error('Expected single article date block: '+slug);
 const meta=matches[0], existing=meta[2];
 const publication=existing.match(/<time\b[^>]*>[\s\S]*?<\/time>/)?.[0];
 if(!publication)throw Error('Missing original publication date: '+slug);
 const hasOriginalUpdate=dateRx.test(existing);
 dateRx.lastIndex=0;
 const stripped=existing.replace(dateRx,'');
 const featured=selected.has(slug);
 let output=stripped;
 if(featured) {
   featuredCount++;
   output=output.replace('</time>','</time> · Updated 10 November 2026');
 } else {
   unfeaturedCount++;
   if(hasOriginalUpdate)removedOld++;
 }
 if((output.match(/Updated\s+(?:0?9|10)\s+November\s+2026/g)||[]).length!==(featured?1:0))
   throw Error('Incorrect update count for '+slug);
 if(!output.includes(publication))throw Error('Original publication date changed for '+slug);
 const next=source.replace(metaRx,(_,pre,_body,post)=>pre+output+post);
 if(next!==source){await writeFile(file,next,'utf8');modified++;}
}
if(found!==166||featuredCount!==31||unfeaturedCount!==135)
 throw Error('Incorrect populations: '+JSON.stringify({found,featuredCount,unfeaturedCount}));
console.log(JSON.stringify({found,featuredCount,unfeaturedCount,modified,removedOld,featuredLabel:'Updated 10 November 2026'}));
