#!/usr/bin/env node
// Repair article recommendation layout/content and prevent sidebar CLS.
// Uses the existing 31 Featured cards as the only allowed bottom CTA targets.
// Existing article bodies, metadata, URLs and publish dates are untouched.
import {readFile,writeFile,readdir} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const dist=join(root,'dist'),articleRoot=join(dist,'research');
const read=p=>readFile(p,'utf8');
const must=(x,msg)=>{if(!x)throw Error(msg);};
const decode=s=>s.replace(/&quot;|&#34;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const text=s=>decode(s.replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim());
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const hash=s=>{let h=2166136261;for(const char of s){h=Math.imul(h^char.charCodeAt(0),16777619)>>>0;}return h>>>0;};
const stop=new Set(('the and for from with that this your what when where which who while does how why use using used more need needs should into than about can not are was were been have has having make making work works working build building better guide case lowob their them its over our all each other these those still would could means article research company companies').split(' '));
const words=s=>new Set(String(s).toLowerCase().replace(/\bai\b/g,' artificial intelligence ').replace(/\bgtm\b/g,' go to market ').split(/[^a-z0-9]+/).filter(w=>w.length>3&&!stop.has(w)));
const intersection=(source,feature)=>{
  let total=0;
  for(const word of feature.words)if(source.words.has(word))total+=(source.headlineWords.has(word)?4:1)*(feature.titleWords.has(word)?1.5:0.65);
  return total;
};
const hubPath=join(articleRoot,'index.html');
const hub=await read(hubPath);
const featuredSection=hub.slice(hub.indexOf('id="library-featured"'),hub.indexOf('id="library-all"'));
must(featuredSection.length>1000,'Featured section absent');
const featured=[...featuredSection.matchAll(/<a class="research-card" href="\/research\/([^/]+)\/"[^>]*data-library-card[^>]*data-tags="([^"]*)"[\s\S]*?<h2>([\s\S]*?)<\/h2>/g)].map(([_,slug,tags,title])=>{
  const clean=text(title);
  return {slug,tags,title:clean,titleWords:words(clean),words:words(clean+' '+tags),uses:0};
});
must(featured.length===31,'Expected 31 approved Featured destinations; got '+featured.length);
must(new Set(featured.map(f=>f.slug)).size===31,'Duplicate Featured destination');
const entries=(await readdir(articleRoot,{withFileTypes:true})).filter(x=>x.isDirectory()).map(x=>x.name);
const articles=[];
for(const slug of entries){
  const path=join(articleRoot,slug,'index.html');
  let html;
  try{html=await read(path)}catch{continue}
  const headline=text(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1]||'');
  must(headline,'Missing H1 '+slug);
  const description=decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1]||'');
  articles.push({slug,path,html,headline,headlineWords:words(headline),words:words(headline+' '+description)});
}
must(articles.length===166,'Expected 166 articles; got '+articles.length);
const bySlug=new Map(articles.map(a=>[a.slug,a]));
for(const f of featured)must(bySlug.has(f.slug),'Featured slug missing from articles: '+f.slug);
// Sort by a stable salted hash rather than source date/rank, to keep distribution fair.
const sequence=[...articles].sort((a,b)=>(hash('lowob-20261111:'+a.slug)-hash('lowob-20261111:'+b.slug))||a.slug.localeCompare(b.slug));
const destinations=new Map();
for(const article of sequence){
  const candidates=featured.filter(f=>f.slug!==article.slug && destinations.get(f.slug)!==article.slug)
    .map(f=>{
      const relevant=intersection(article,f);
      const variety=(hash('link:'+article.slug+':'+f.slug)%1000)/250; // 0 - 4, stable.
      const penalty=f.uses*3.2;
      return {...f,quality:relevant+variety-penalty,relevant};
    })
    .sort((a,b)=>b.quality-a.quality||a.slug.localeCompare(b.slug));
  must(candidates.length,'No viable Featured CTA for '+article.slug);
  const chosen=candidates[0];
  destinations.set(article.slug,chosen.slug);
  featured.find(f=>f.slug===chosen.slug).uses++;
}
for(const [source,target] of destinations){
  must(source!==target,'Self-link '+source);
  must(destinations.get(target)!==source,'Reciprocal two-page loop '+source+' / '+target);
}
const used=featured.filter(f=>f.uses>0).length;
must(used>=28,'Recommendations insufficiently distributed across 31 Featured articles: '+used);
const getAsideFeature=(article,excluded)=>featured
  .filter(f=>f.slug!==article.slug&&f.slug!==excluded)
  .map(f=>({...f,quality:intersection(article,f)+(hash('sidebar:'+article.slug+':'+f.slug)%1000)/380}))
  .sort((a,b)=>b.quality-a.quality||a.slug.localeCompare(b.slug))
  .slice(0,2);
const asideKey='<aside class="research-article-aside preview-toc">';
const cta=/<a class="service-next research-article-next" href="[^"]+" style="([^"]+)"><div><h2>[\s\S]*?<\/h2><p>[\s\S]*?<\/p><\/div><\/a>/;
const version='cta-sidebar-hotfix-20261111';
let modified=0,sidebars=0;
for(const article of articles){
  const recommended=featured.find(f=>f.slug===destinations.get(article.slug));
  must(recommended,'Missing recommendation for '+article.slug);
  const existing=article.html;
  const match=existing.match(cta);
  must(match,'Expected exactly one article CTA for '+article.slug);
  let html=existing.replace(cta,'<a class="service-next research-article-next" href="/research/'+recommended.slug+'/" style="'+match[1]+'"><div><h2>'+esc(recommended.title)+'</h2><p>Read next in lowob Research</p></div></a>');
  must(html.indexOf(asideKey)>0,'Content List aside missing '+article.slug);
  if(!html.includes('class="toc-all-research"')){
    const start=html.indexOf(asideKey)+asideKey.length;
    const end=html.indexOf('</aside>',start);
    must(end>start,'Sidebar closing tag missing '+article.slug);
    const inside=html.slice(start,end);
    must(inside.includes('<h2>Content List</h2>'),'Content List heading lost '+article.slug);
    const related=getAsideFeature(article,recommended.slug);
    must(related.length===2,'Two sidebar recommendations missing '+article.slug);
    const links=related.map(f=>'<a href="/research/'+f.slug+'/" class="toc-featured-link"><span class="toc-featured-thumb toc-featured-thumb-logo"><img src="/assets/favicon.svg" alt="" width="56" height="56" loading="lazy" decoding="async"></span><span class="toc-featured-title">'+esc(f.title)+'</span></a>').join('');
    const nav='<a href="/research/#all" class="toc-all-research" aria-label="Browse all lowob research">All Research</a>'+inside+'<section class="toc-featured-links"><h3>Featured research</h3>'+links+'</section>';
    html=html.slice(0,start)+nav+html.slice(end);
    sidebars++;
  }
  html=html.replaceAll('/assets/research-design.css?v=release-20261111','/assets/research-design.css?v='+version)
    .replaceAll('/assets/research-interactions.js"','/assets/research-interactions.js?v='+version+'"');
  must(!html.includes('src="/assets/research-interactions.js"'),'Unversioned JS '+article.slug);
  must(html.includes('href="/research/'+recommended.slug+'/" style=')||html.includes('href="/research/'+recommended.slug+'/" style="'),'CTA changed during render '+article.slug);
  must(html.includes('class="toc-all-research"'),'Missing static sidebar '+article.slug);
  must(html.includes('class="toc-featured-links"'),'Missing static Featured links '+article.slug);
  if(html!==existing){await writeFile(article.path,html);modified++;}
}
let newHub=hub.replaceAll('/assets/research-design.css?v=release-20261111','/assets/research-design.css?v='+version)
  .replaceAll('/assets/research-interactions.js"','/assets/research-interactions.js?v='+version+'"');
must(/class="service-next research-next" href="\/about\/"/.test(newHub),'Research hub About CTA changed');
if(newHub!==hub)await writeFile(hubPath,newHub);
const most=[...featured].sort((a,b)=>b.uses-a.uses)[0];
console.log('PASS: '+modified+' article CTA pages, '+sidebars+' static sidebars, '+used+'/31 Featured destinations used; max destination frequency '+most.uses+'. No reciprocal links. Research hub remains linked to About.');
