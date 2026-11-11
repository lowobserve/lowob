#!/usr/bin/env node
// Promote the approved preview to the existing public research URLs.
// Run ONLY on release/research-editorial-20261110, never on main.
import {readFile,writeFile,readdir} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {normalizeSite} from './site-meta.mjs';

const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const source=join(root,'research-release-source','design-preview');
const dist=join(root,'dist');
const read=p=>readFile(p,'utf8');
const ok=(x,msg)=>{if(!x)throw Error(msg);};
const get=(s,re,what)=>{const m=s.match(re);ok(m,what+' missing');return m[1];};
const dirs=async base=>(await readdir(base,{withFileTypes:true})).filter(e=>e.isDirectory()).map(e=>e.name);
const unescape=s=>s.replace(/&quot;|&#34;/g,'"').replace(/&amp;/g,'&').replace(/&#39;|&apos;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const h1=s=>unescape(get(s,/<h1\b[^>]*>([\s\S]*?)<\/h1>/i,'H1').replace(/<[^>]*>/g,'').trim());
const slug=s=>get(get(s,/<meta property="og:url" content="(https:\/\/lowob\.com\/research\/[^"]+\/)"/,'preview og:url'),/^https:\/\/lowob\.com\/research\/([^/]+)\/$/,'slug');
const refined=new Map(),archive=new Map();
for(const name of await dirs(source)){
  if(name==='library'||!existsSync(join(source,name,'index.html')))continue;
  const html=await read(join(source,name,'index.html'));
  if(!html.includes('<meta property="og:type" content="article">'))continue;
  const canonicalSlug=slug(html);
  ok(!refined.has(canonicalSlug),'Duplicate refined slug '+canonicalSlug);
  refined.set(canonicalSlug,{name,html});
}
for(const name of await dirs(join(source,'library'))){
  const html=await read(join(source,'library',name,'index.html'));
  ok(slug(html)===name,'Archive slug mismatch '+name);
  archive.set(name,{name,html});
}
ok(refined.size===31,'Expected 31 refined: '+refined.size);
ok(archive.size===135,'Expected 135 archives: '+archive.size);
const all=new Map([...refined,...archive]);
ok(all.size===166,'Wrong article count or duplicate source slugs');
const publicSlugs=(await dirs(join(dist,'research'))).filter(n=>existsSync(join(dist,'research',n,'index.html')));
ok(publicSlugs.length===166,'Expected 166 existing public URLs, got '+publicSlugs.length);
for(const name of publicSlugs)ok(all.has(name),'Preview lacks public article '+name);
const routeMap=Object.fromEntries([...refined].map(([canonical,{name}])=>[name,canonical]));
const cssPath='/assets/research-design.css';
const jsPath='/assets/research-interactions.js';
const hubApprovedSource=await read(join(source,'featured','index.html'));
const featuredSection=hubApprovedSource.slice(hubApprovedSource.indexOf('id="library-featured"'),hubApprovedSource.indexOf('id="library-all"'));
const featuredCards=[...featuredSection.matchAll(/<a class="research-card" href="\/design-preview\/([^/]+)\/"[\s\S]*?<h2>([\s\S]*?)<\/h2>/g)];
const featuredChoices=featuredCards.map((m,i)=>({slug:routeMap[m[1]],title:unescape(m[2].replace(/<[^>]*>/g,'').trim()),order:i}));
ok(featuredChoices.length===31&&featuredChoices.every(x=>all.has(x.slug)),'Expected 31 approved featured article destinations');
function nextChoice(current,headline){
  const stop=new Set(['the','and','for','from','with','that','this','your','what','when','does','without','why','how','vs','are','who','not','more','lowob','use','using']);
  const terms=s=>new Set(s.toLowerCase().split(/[^a-z0-9]+/).filter(w=>w.length>3&&!stop.has(w)));
  const words=terms(headline);
  return featuredChoices.filter(x=>x.slug!==current).map(x=>({...x,score:[...terms(x.title)].filter(w=>words.has(w)).length})).sort((a,b)=>b.score-a.score||a.order-b.order)[0];
}
function links(s){
  s=s.replaceAll('/design-preview/preview.css',cssPath).replaceAll('/design-preview/preview.js',jsPath);
  return s.replace(/\/design-preview\/(?:library\/)?(?:[a-z0-9-]+\/)?(?:#[a-z0-9-]+)?/g,p=>{
    const hash=p.includes('#')?p.slice(p.indexOf('#')):'';
    const parts=p.replace(/^\/design-preview\//,'').split('/').filter(Boolean);
    const section=parts[0]||'';
    if(!section)return '/';
    if(section==='library')return '/research/'+parts[1]+'/'+hash;
    if(section==='research'||section==='featured'||section==='batch-two')return '/research/'+hash;
    if(section==='system')return hash?'/'+hash.substring(1)+'/':'/';
    if(section==='about'||section==='contact')return '/'+section+'/';
    if(routeMap[section])return '/research/'+routeMap[section]+'/'+hash;
    throw Error('Unmapped approved-preview destination '+p);
  });
}
const css=(await read(join(source,'preview.css'))).replaceAll('body.preview-only','body.research-live');
ok(css.includes('body.research-live'),'Failed to scope approved stylesheet');
await writeFile(join(dist,'assets','research-design.css'),css);
let script=await read(join(source,'preview.js'));
script=script.replace('(() => {','(() => {\nconst REFINED_SLUG_MAP='+JSON.stringify(routeMap)+';');
script=script.replaceAll('classList.contains("preview-only")','classList.contains("research-live")')
  .replaceAll('/design-preview/research/','/research/')
  .replaceAll('/design-preview/featured/#all','/research/#all')
  .replaceAll('/design-preview/featured/','/research/')
  .replace("link.href='/design-preview/'+slug+'/'","link.href='/research/'+(REFINED_SLUG_MAP[slug]||slug)+'/'")
  .replace("!current.includes('/'+slug+'/')","!current.includes('/'+(REFINED_SLUG_MAP[slug]||slug)+'/')");
ok(!script.includes("link.href='/design-preview/'"),'Unconverted related navigation');
ok(script.includes("allResearchLink.href='/research/#all'"),'Sidebar destination missing');
await writeFile(join(dist,'assets','research-interactions.js'),script);
function page(old,preview,name,edited=false){
  let head=old.slice(0,old.indexOf('</head>'));
  ok(head.includes('rel="canonical"'),'Existing canonical missing: '+name);
  ok(head.includes('content="index, follow"'),'Existing public indexing missing: '+name);
  let body=get(preview,/(<body\b[^>]*>[\s\S]*?<\/body>)/i,'Approved body '+name);
  ok(body.includes('class="preview-only"'),'Preview source class absent '+name);
  body=links(body.replace('class="preview-only"','class="research-live"'));
  ok(!body.includes('/design-preview/'),'Preview navigation leaked '+name);
  if(name==='Research hub'){
    const oldCopy='<p>31 refined articles across strategy, growth, distribution and revenue, with all 166 articles available under All.</p>';
    const newCopy='<p>Practical analysis for companies working on strategy, growth, distribution, and revenue in markets still being defined.</p>';
    ok(body.includes('<h1>Useful research.<br>Clearer decisions.</h1>'),'Approved Research heading changed');
    ok(body.includes(oldCopy),'Approved Research intro changed');
    body=body.replace(oldCopy,newCopy);
    body=body.replace(/(<a class="service-next research-next" href=")[^"]*(" style="[^"]*"><div><h2>)[\s\S]*?(<\/h2><p>)[\s\S]*?(<\/p><\/div><\/a>)/,(_m,start,mid,mid2,end)=>start+'/about/'+mid+'Operator experience. Studio flexibility.'+mid2+'Senior thinking stays close to the work.'+end);
    ok(/class="service-next research-next" href="\/about\/"/.test(body),'Research closing CTA does not link About');
  }else{
    const next=nextChoice(name,h1(preview));
    ok(next&&next.slug!==name,'No distinct featured destination for '+name);
    const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const target='/research/'+next.slug+'/';
    const cta=/(<a class="service-next research-article-next" href=")[^"]*(" style="[^"]*"><div>)[\s\S]*?(<\/div><\/a>)/;
    ok(cta.test(body),'Missing article closing CTA '+name);
    body=body.replace(cta,(_m,start,mid,end)=>start+target+mid+'<h2>'+esc(next.title)+'</h2><p>Read next in lowob Research</p>'+end);
    ok(body.includes('class="service-next research-article-next" href="'+target+'"'),'Article closing CTA incorrect '+name);
  }
  if(edited){
    const now=new Date().toISOString(),headline=h1(preview);
    head=head.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,(whole,json)=>{
      const j=JSON.parse(json);
      if(j['@type']==='FAQPage')return '';
      if(j['@type']==='Article'){
        j.headline=headline;
        j.dateModified=now;
        return '<script type="application/ld+json">'+JSON.stringify(j).replace(/</g,'\\u003c')+'</script>';
      }
      return whole;
    });
    head=head.replace(/<meta property="article:modified_time" content="[^"]*">/g,'');
    head+='<meta property="article:modified_time" content="'+now+'">';
  }
  head+='<link rel="stylesheet" href="'+cssPath+'?v=release-20261111">';
  const result=head+'</head>'+body+'</html>';
  ok((result.match(/<h1\b/g)||[]).length===1,'H1 count changed '+name);
  ok(!/noindex/i.test(result.slice(0,result.indexOf('</head>'))),'Accidental noindex '+name);
  ok(result.includes('src="'+jsPath),'Script missing '+name);
  return result;
}
for(const [canonical,{html}] of all){
  const path=join(dist,'research',canonical,'index.html'),old=await read(path);
  const existing=get(old,/<link rel="canonical" href="([^"]+)"/,'Public canonical '+canonical);
  ok(existing==='https://lowob.com/research/'+canonical+'/','Unexpected original URL '+canonical);
  await writeFile(path,page(old,html,canonical,refined.has(canonical)));
}
const hub=join(dist,'research','index.html');
const newHub=page(await read(hub),await read(join(source,'featured','index.html')),'Research hub');
ok((newHub.match(/data-library-card/g)||[]).length>=166,'Incomplete research hub');
await writeFile(hub,newHub);
const metadata=normalizeSite(dist,{fix:true});
ok(metadata.errors.length===0,'Metadata errors '+metadata.errors.join('; '));
ok(metadata.articles===166&&metadata.public===176,'Public index inventory changed');
const sitemap=await read(join(dist,'sitemap.xml'));
ok(!sitemap.includes('/design-preview/'),'Preview entered sitemap');
let count=0;
for(const [canonical,{html}] of all){
  const actual=await read(join(dist,'research',canonical,'index.html'));
  ok(actual.includes('class="research-live"'),'Article style not promoted '+canonical);
  ok(!actual.includes('/design-preview/'),'Article preview link remains '+canonical);
  ok(actual.includes('rel="canonical" href="https://lowob.com/research/'+canonical+'/"'),'Canonical changed '+canonical);
  ok(sitemap.includes('https://lowob.com/research/'+canonical+'/'),'Article missing from sitemap '+canonical);
  if(archive.has(canonical)&&html.includes('class="archive-checklist"')){
    ok(actual.includes('class="archive-checklist"'),'Lost checklist '+canonical);count++;
  }
}
ok(count===38,'Wrong preserved checklist count '+count);
console.log('Promoted 31 refined + 135 visually updated articles, 166 original URLs, 38 checklists, preserved live metadata and verified sitemap.');
