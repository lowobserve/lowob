// Finalize the 135 archive previews with the standard lowob article footer.
// Source text is taken from the existing original article; citations are never invented.
function completeArchiveV3({html,original,featured}){
  const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const plain=s=>String(s??"").replace(/<[^>]*>/g," ").replace(/&nbsp;|&#160;/g," ").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/\s+/g," ").trim();
  const slug=html.match(/data-original-slug="([^"]+)"/)?.[1];
  if(!slug||!html.includes('data-visual-only="true"')||!html.includes("noindex"))throw Error("Refusing nonarchive page");
  if(html.includes('class="lowob-takeaways"')||html.includes('class="kol-sources"')||html.includes('class="research-next-action"'))throw Error("Already finalized "+slug);
  const bStart=html.indexOf('<div class="research-article-body editorial-rewrite"');
  const bOpen=html.indexOf(">",bStart)+1, navStart=html.indexOf('<nav class="research-related"',bOpen),navStop=html.indexOf("</nav>",navStart)+6;
  if(bStart<0||bOpen<1||navStart<0||navStop<6)throw Error("Missing archive footer "+slug);
  const oldBody=html.slice(bOpen,navStart);
  const rawStart=original.indexOf('<div class="research-article-body">'),rawOpen=original.indexOf(">",rawStart)+1,rawEnd=original.indexOf('</div><aside class="research-article-aside',rawOpen);
  if(rawStart<0||rawEnd<0)throw Error("Missing original body "+slug);
  const raw=original.slice(rawOpen,rawEnd);
  const title=plain(html.match(/<header class="research-article-hero">[\s\S]*?<h1>([\s\S]*?)<\/h1>/)?.[1]||slug.replace(/-/g," "));
  let body=oldBody;
  // The global editorial rules previously colored these question prompts green.
  body=body.replace(/(<div class="archive-questions">[\s\S]*?<\/div>)/g,block=>block.replace(/<strong(?:\s+[^>]*)?>/g,'<strong style="color:#fff!important;font-weight:700!important">'));
  body=body.replace(/(<p class="archive-section-label">[\s\S]*?<\/p>)/g,block=>block.replace(/<strong(?:\s+[^>]*)?>/g,'<strong style="color:#fff!important;font-weight:700!important">'));
  const keyMatch=raw.match(/<p\b[^>]*>\s*<strong>\s*Key points\s*:?\s*<\/strong>\s*<\/p>\s*<ul\b[^>]*>([\s\S]*?)<\/ul>/i);
  const keyPoints=keyMatch?[...keyMatch[1].matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)].map(m=>plain(m[1])).filter(Boolean):[];
  const takeaway=plain(raw.match(/<aside class="article-takeaway">[\s\S]*?<strong>\s*lowob takeaway:\s*<\/strong>([\s\S]*?)<\/p>[\s\S]*?<\/aside>/i)?.[1]||"");
  const rawParas=[...raw.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map(m=>plain(m[1])).filter(p=>p.length>=65&&p.length<=380&&!/^key points|^in short:|^who this is for:|^lowob takeaway:/i.test(p));
  const words=s=>s.toLowerCase().replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();
  const uniq=arr=>[...new Map(arr.filter(Boolean).map(t=>[words(t),t])).values()];
  let take=[];
  if(keyPoints.length){
    const chosen=[0,Math.floor(keyPoints.length/2),keyPoints.length-1];
    take=uniq(chosen.map(i=>keyPoints[i])).slice(0,3);
  }else{
    let idx=[Math.floor(rawParas.length*.30),Math.floor(rawParas.length*.72),rawParas.length-1];
    take=uniq(idx.map(i=>rawParas[i])).filter(p=>p.length>=50&&p.length<=300);
    if(take.length<2&&takeaway)take.push(takeaway);
    take=uniq(take).slice(0,3);
  }
  if(!take.length&&takeaway)take=[takeaway];
  if(!take.length)throw Error("Unable to source takeaways "+slug);
  const idBase="archive-"+slug;
  const takeId=idBase+"-takeaways",sourcesId=idBase+"-sources";
  const takeSection='<section class="lowob-takeaways" aria-labelledby="'+esc(takeId)+'"><h2 id="'+esc(takeId)+'">lowob takeaways</h2><ul>'+take.map(t=>'<li>'+esc(t)+'</li>').join("")+'</ul></section>';
  const linkItems=[...raw.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)].map(m=>({url:m[1].replace(/&amp;/g,"&"),label:plain(m[2])})).filter(m=>m.label&&m.url);
  const external=uniq(linkItems.filter(x=>/^https?:\/\//.test(x.url)).map(x=>x.url)).map(url=>linkItems.find(x=>x.url===url)).slice(0,6);
  const internal=uniq(linkItems.filter(x=>/^\/research\/[^#?]+\/$/.test(x.url)).map(x=>x.url)).map(url=>linkItems.find(x=>x.url===url)).slice(0,3);
  let sourceP="";
  if(external.length){
    sourceP='<p>External references linked in the original article:</p>'+external.map(x=>'<p><a href="'+esc(x.url)+'" target="_blank" rel="noopener noreferrer">'+esc(x.label.slice(0,145))+'</a></p>').join("");
  }else{
    sourceP='<p class="archive-sourcing-note">No external sources are cited in the current draft. Any factual, numerical, regulatory, or time-sensitive claims still require source verification before publication.</p>';
  }
  if(internal.length)sourceP+='<p>Related lowob material cited in the article: '+internal.map(x=>'<a href="'+esc(x.url)+'">'+esc(x.label.slice(0,90))+'</a>').join("; ")+'.</p>';
  const sources='<section class="kol-sources archive-sources" aria-labelledby="'+esc(sourcesId)+'"><h2 id="'+esc(sourcesId)+'">Sources and notes</h2>'+sourceP+'</section>';
  const stop=new Set("the and that this from with your what when where why how which into over about than under above after below without have has can for are was were who its you one two best guide should does do vs more what is of in to a an on by at as or it use using their they we our their be not work system systems company marketing startups ai research article lowob".split(" "));
  const tokens=s=>new Set(plain(s).toLowerCase().replace(/&amp;/g," ").split(/[^a-z0-9]+/g).filter(x=>x.length>2&&!stop.has(x)));
  const current=tokens(title);
  const middle=tokens(plain(body.slice(0,2100)));
  const ownCategory=plain(html.match(/class="research-article-meta preview-article-meta"[\s\S]*?<span>([\s\S]*?)<\/span>/i)?.[1]||"");
  const scores=featured.filter(f=>f.url&&!f.url.includes("/"+slug+"/")).map(f=>{
    let score=0;
    for(const t of tokens(f.title))score+=(current.has(t)?7:0)+(middle.has(t)?1:0);
    for(const category of f.tags||[])if(category!=="Strategy"&&ownCategory.toLowerCase().includes(category.toLowerCase()))score+=3;
    if(ownCategory.includes("Strategy")&&(f.tags||[]).includes("Strategy"))score+=2;
    if(ownCategory.includes("Growth")&&(f.tags||[]).includes("Growth"))score+=2;
    if(ownCategory.includes("Revenue")&&(f.tags||[]).includes("Revenue"))score+=2;
    if(ownCategory.includes("Distribution")&&(f.tags||[]).includes("Distribution"))score+=2;
    if(/founder|creator|community/i.test(title)&&/founder|creator|community/i.test(f.title))score+=5;
    if(/regulat|compliance|decision|governance|agent|context/i.test(title)&&/enterprise brain|buy context|AI is making execution/i.test(f.title))score+=5;
    return {...f,score};
  }).sort((a,b)=>b.score-a.score||a.title.localeCompare(b.title));
  if(scores.length<2)throw Error("Insufficient related articles "+slug);
  const related=scores.slice(0,2);
  const relatedNav='<nav class="research-related" aria-label="Related research"><h2>Related research</h2><ul>'+related.map(x=>'<li><a href="'+esc(x.url)+'" target="_blank" rel="noopener noreferrer">'+esc(x.title)+'</a></li>').join("")+'</ul></nav>';
  const actions=uniq([...keyPoints,...rawParas].filter(s=>/^(?:choose|decide|test|track|check|review|build|start|ask|define|create|write|measure|compare|identify|pick|make|map|audit|run|set|document|agree|stop|use|keep|look|begin|ensure|require|record|align|invite|prioriti[sz]e|go|contact|find|read|avoid|give|focus|take|verify|work|draft|establish|conduct|treat|prepare|assign|calculate|negotiate)\b/i.test(s)&&s.length>=45&&s.length<=240));
  const action=actions[actions.length-1]||keyPoints.find(s=>s.length>=40&&s.length<=210)||rawParas.find(s=>s.length>=50&&s.length<=210)||take[0];
  const next='<aside class="research-next-action archive-next-action" aria-label="Next move"><h2>Next Move</h2><p>'+esc(action)+'</p><a href="/design-preview/contact/" target="_blank" rel="noopener noreferrer">Start a conversation</a></aside>';
  let result=html.slice(0,bOpen)+body+takeSection+sources+relatedNav+next+html.slice(navStop);
  const asideRe=/<aside class="research-article-aside preview-toc">([\s\S]*?)<\/aside>/;
  const oldAside=result.match(asideRe);
  if(!oldAside)throw Error("Missing content list "+slug);
  let inner=oldAside[1];
  const toclinks='<li><a href="#'+esc(takeId)+'">lowob takeaways</a></li><li><a href="#'+esc(sourcesId)+'">Sources and notes</a></li>';
  if(/<ol>[\s\S]*?<\/ol>/.test(inner)){
    inner=inner.replace("</ol>",toclinks+"</ol>");
  }else{
    inner='<h2>Content List</h2><ol>'+toclinks+'</ol>';
  }
  result=result.replace(oldAside[0],'<aside class="research-article-aside preview-toc">'+inner+'</aside>');
  result=result.replace(/href="\/design-preview\/preview\.css(?:\?v=[^"]*)?"/g,'href="/design-preview/preview.css?v=archive-footer-v3"');
  const bodyPart=result.slice(bOpen,result.indexOf('</div><aside class="research-article-aside preview-toc">',bOpen));
  const toc=result.match(asideRe)?.[1]||"";
  const anchorRefs=[...toc.matchAll(/href="#([^"]+)"/g)].map(m=>m[1]);
  const missing=anchorRefs.filter(id=>!bodyPart.includes('id="'+id+'"'));
  if(missing.length)throw Error("Missing TOC anchors "+slug+" "+missing.join(","));
  for(const marker of ['class="lowob-takeaways"','class="kol-sources archive-sources"','class="research-next-action archive-next-action"','<h2>Related research</h2>']){
    if(!result.includes(marker))throw Error("Missing "+marker+" in "+slug);
  }
  if(result.includes('<h2>More research</h2>'))throw Error("Old generic nav survived "+slug);
  if(result.includes('class="archive-questions"')&&bodyPart.match(/<div class="archive-questions">[\s\S]*?<\/div>/g)?.some(block=>!block.includes('style="color:#fff!important')))throw Error("Green question survived "+slug);
  return {html:result,stats:{slug,title,summaryCount:take.length,externalSources:external.length,internalLinks:internal.length,related:related.map(x=>x.url),nextMove:action,toc:anchorRefs.length,whiteQuestions:(body.match(/style="color:#fff!important/g)||[]).length,sourceReviewRequired:!external.length}};
}
