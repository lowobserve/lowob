#!/usr/bin/env node
// Update only the visible card-type labels and the two matching source manifests.
// No article content, dates, author credit, URL, service/market tags, HTML head,
// canonical, sitemap, or preview files are changed.
import formatBySlug from './research-type-map.mjs';
import {readFile,writeFile} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const assert=(x,msg)=>{if(!x)throw Error(msg);};
const allowed=new Set(['Analysis','Guide','Playbook','Case Study']);
const mappings=Object.entries(formatBySlug);
assert(mappings.length===166,'Expected exactly 166 classified articles');
for(const [slug,type] of mappings)assert(/^[a-z0-9-]+$/.test(slug)&&allowed.has(type),'Invalid classification '+slug+': '+type);
const counts=Object.fromEntries([...allowed].map(type=>[type,0]));
mappings.forEach(([,type])=>counts[type]++);
const read=(p)=>readFile(join(root,p),'utf8');
const edits=[];

// Update the public hub (31 Featured cards + 166 All cards).
const hubPath='dist/research/index.html',oldHub=await read(hubPath);
const seen=new Set();let cardsChanged=0,cardsChecked=0;
const cardPattern=/(<a class="research-card" href="\/research\/([^/]+)\/"[^>]*><div class="research-card-meta"><span>)([^<]*)(<\/span>)/g;
const newHub=oldHub.replace(cardPattern,(whole,before,slug,old,after)=>{
  assert(formatBySlug[slug],'Unclassified public card: '+slug);
  assert(['Research','Playbook','Analysis','Operating Model','AI / Marketing','Web3','Guide','Case Study'].includes(old),'Unexpected former card type '+old+' for '+slug);
  seen.add(slug);cardsChecked++;
  if(old!==formatBySlug[slug])cardsChanged++;
  return before+formatBySlug[slug]+after;
});
assert(cardsChecked===197,'Expected 197 visible cards (31 Featured + 166 All), found '+cardsChecked);
assert(seen.size===166,'Expected 166 distinct public hub cards, found '+seen.size);
assert(mappings.every(([slug])=>seen.has(slug)),'Type map has unpublished/missing slugs');
for(const match of newHub.matchAll(cardPattern))assert(match[3]===formatBySlug[match[2]],'Bad card type for '+match[2]);
assert(!newHub.includes('<div class="research-card-meta"><span>Research</span>'),'Generic Research card type remains');
// Verify no text beyond the card format span was modified.
const normalize=(s)=>s.replace(cardPattern,(_,start,slug,_old,end)=>start+'__TYPE__'+end);
assert(normalize(oldHub)===normalize(newHub),'The public hub changed beyond article format badges');
edits.push([hubPath,newHub]);

// Update 133 public release manifest entries so rebuilds don't undo the fix.
const releasePath='scripts/research-release.mjs',oldRelease=await read(releasePath);
const jsonText=oldRelease.replace(/^\/\/[^\n]*\nexport default /,'').replace(/;\s*$/,'');
const release=JSON.parse(jsonText);
assert(release.length===133,'Expected 133 archive manifest articles');
const releaseSlugs=new Set();
for(const entry of release){
  assert(!releaseSlugs.has(entry.slug),'Duplicate release manifest slug '+entry.slug);
  releaseSlugs.add(entry.slug);
  assert(formatBySlug[entry.slug],'Unclassified release entry '+entry.slug);
  entry.type=formatBySlug[entry.slug];
}
const newRelease='// Public release manifest; article HTML in dist/research is the source of truth.\nexport default '+JSON.stringify(release,null,2)+';\n';
edits.push([releasePath,newRelease]);

// Update the 33 older original source entries for future generator runs.
const sourcePath='scripts/build-refined-site.mjs',oldSource=await read(sourcePath);
const opening='const researchArticles = [',closing='].map(([type, date, readTime, title, service, sectors, slug])';
const start=oldSource.indexOf(opening),end=oldSource.indexOf(closing,start);
assert(start>=0&&end>start,'Original article definition list missing');
const block=oldSource.slice(start,end);
let originalSeen=new Set(),originalLines=0;
const revised=block.split('\n').map(line=>{
  const m=line.match(/^(\s*)\["([^"]+)",(.*), "([a-z0-9-]+)"\],?$/);
  if(!m)return line;
  const slug=m[4];
  assert(!originalSeen.has(slug),'Duplicate original article slug '+slug);
  originalSeen.add(slug);originalLines++;
  assert(formatBySlug[slug],'Unclassified original article '+slug);
  assert(!releaseSlugs.has(slug),'Article listed as original and release: '+slug);
  return line.replace('["'+m[2]+'",','["'+formatBySlug[slug]+'",');
}).join('\n');
assert(originalLines===33,'Expected 33 original article definitions, found '+originalLines);
assert(originalSeen.size+releaseSlugs.size===166,'Manifest split does not cover all 166 articles');
edits.push([sourcePath,oldSource.slice(0,start)+revised+oldSource.slice(end)]);

for(const [path,out] of edits)await writeFile(join(root,path),out);
console.log('PASS: reclassified 166 published articles into controlled editorial formats '+JSON.stringify(counts));
console.log('PASS: '+cardsChecked+' visible library cards checked, '+cardsChanged+' labels changed; all 166 article URLs retain their function/market tags.');
console.log('PASS: 133 release manifest entries and 33 original generator entries aligned; article content, publication dates, canonical URLs and live preview untouched.');
