// Shared, deterministic editorial pass for preview-only older research articles.
// Outputs revised static HTML; never modifies original public /research/ pages.
function polishArchive(input){
  if(!input.includes('data-visual-only="true"')) throw Error("Refusing non-archive page");
  const start=input.indexOf('<div class="research-article-body editorial-rewrite"');
  const open=input.indexOf(">",start)+1;
  const end=input.indexOf('<nav class="research-related"',open);
  if(start<0||open<1||end<0)throw Error("Missing archive body bounds");
  let body=input.slice(open,end);
  const originalBody=body;
  const stats={faq:0,keyPoints:0,lists:0,proseLists:0,sequences:0,definitions:0,linkGroups:0,checklists:0,rankings:0,pullquotes:0,headingsPromoted:0};
  const textOf=x=>x.replace(/<[^>]*>/g," ").replace(/&(?:nbsp|amp);/g," ").replace(/\s+/g," ").trim();
  const countWords=x=>textOf(x).split(/\s+/).filter(Boolean).length;
  const escape=x=>String(x).replace(/[&<>"']/g,z=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[z]));
  body=body.replace(/(<p\b[^>]*>)\s*<strong>\s*In short:\s*<\/strong>\s*([a-z])/gi,(_m,tag,c)=>tag+c.toUpperCase());
  body=body.replace(/<h[23]\b[^>]*>\s*In short\s*<\/h[23]>\s*/gi,"");
  body=body.replace(/<h[23]\b[^>]*>\s*Who this is for\s*<\/h[23]>\s*/gi,"");
  body=body.replace(/(<p\b[^>]*>)\s*<strong>\s*Who this is for:?\s*<\/strong>\s*([a-z])/gi,(_m,p,c)=>p+c.toUpperCase());
  body=body.replace(/<p\b[^>]*>\s*<strong>\s*Key points\s*:?\s*<\/strong>\s*<\/p>\s*<ul\b[^>]*>[\s\S]*?<\/ul>\s*/gi,()=>{stats.keyPoints++;return ""});
  const faq=/<h2\b[^>]*>\s*Common questions\s*<\/h2>/i.exec(body);
  if(faq){const at=faq.index;const next=/<h2\b/i.exec(body.slice(at+faq[0].length));const to=next?at+faq[0].length+next.index:body.length;body=body.slice(0,at)+body.slice(to);stats.faq++;}
  body=body.replace(/<p\b[^>]*>\s*<strong>\s*What would prove this wrong[.:]?\s*<\/strong>\s*([\s\S]*?)<\/p>/gi,(_m,copy)=>'<p class="archive-section-label"><strong>What would prove this wrong:</strong></p>\n<p>'+copy.trim()+'</p>');
  const listRegex=/<(ul|ol)\b([^>]*)>([\s\S]*?)<\/\1>/gi;
  body=body.replace(listRegex,(full,tag,attrs,inside,position)=>{
    const matches=[...inside.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)];
    if(!matches.length||/<(?:ul|ol)\b/i.test(inside))return full;
    stats.lists++;
    const items=matches.map(m=>{
      let s=m[1].trim().replace(/^\s*\[\s*[xX ]\s*\]\s*/,"");
      s=s.replace(/<\/?p\b[^>]*>/gi," ").replace(/<br\s*\/?>/gi,"; ").replace(/\s+/g," ").trim();
      s=s.replace(/(?:[;,]\s*)+$/,"");
      return s;
    }).filter(Boolean);
    if(!items.length)return "";
    if(items.length>=2&&items.every(s=>/\?\s*$/.test(textOf(s)))){
      stats.questions=(stats.questions||0)+1;
      return '<div class="archive-questions">'+items.map(s=>'<p><strong>'+s+'</strong></p>').join('\n')+'</div>';
    }
    const pre=textOf(body.slice(Math.max(0,position-280),position)).toLowerCase();
    const isLinks=items.filter(s=>/<a\b[^>]*href=/i.test(s)).length >= Math.max(3,items.length*.65);
    const checklist=/\[\s*[xX ]\s*\]/.test(inside)||/\bchecklist\b/.test(pre.slice(-85));
    const isRanked=tag.toLowerCase()==="ol"&&(/\b(top|best|ranked|ranking|list of vendors|the list)\b/i.test(pre.slice(-160))||items.some(s=>/\b(price|provider|vendor)\b/i.test(textOf(s))&&items.length<=10));
    const sequential=tag.toLowerCase()==="ol"&&items.length>=3&&items.length<=10&&/\b(step|sequence|workflow|process|phase|stage|order|timeline|ladder|start|then)\b/.test(pre.slice(-160));
    const stripPunc=s=>s.replace(/[;,]\s*$/,"").trim();
    const finish=s=>/[.!?]\s*$/.test(s)?s:stripPunc(s)+".";
    if(isLinks){stats.linkGroups++;return '<div class="archive-resource-links">'+items.map(s=>'<p>'+s+'</p>').join('\n')+'</div>';}
    if(isRanked){stats.rankings++;return '<ol class="archive-useful-ranking">'+matches.map(m=>'<li>'+m[1]+'</li>').join('')+'</ol>';}
    if(sequential){stats.sequences++;return '<div class="archive-sequence" role="list">'+items.map(s=>'<p class="archive-sequence-step" role="listitem">'+finish(s)+'</p>').join('\n')+'</div>';}
    if(checklist){stats.checklists++;return '<div class="archive-checklist">'+items.map(s=>'<p>'+finish(s)+'</p>').join('\n')+'</div>';}
    const labeled=items.filter(s=>/^<(?:strong|b)\b/i.test(s)).length>=Math.ceil(items.length*.65);
    if(labeled&&items.length<=8){stats.definitions++;return '<div class="archive-definitions">'+items.map(s=>'<p>'+finish(s)+'</p>').join('\n')+'</div>';}
    stats.proseLists++;
    const paras=[];
    for(let k=0;k<items.length;k+=3){
      const three=items.slice(k,k+3);
      const fullSentences=three.every(s=>/[.!?]\s*$/.test(s));
      let joined=three.map(s=>{
        s=stripPunc(s);
        if(/^[a-z]/.test(s))s=s[0].toUpperCase()+s.slice(1);
        return s;
      }).map((s,i)=>fullSentences?s:((i===three.length-1)?finish(s):s)).join(fullSentences?" ":"; ");
      if(!/[.!?]\s*$/.test(joined))joined+=".";
      paras.push('<p class="archive-prose-group">'+joined+'</p>');
    }
    return paras.join('\n');
  });
  const tks=/<aside class="article-takeaway">\s*<p>\s*<strong>lowob takeaway:\s*<\/strong>\s*([\s\S]*?)<\/p>\s*<\/aside>/gi;
  body=body.replace(tks,(_m,copy)=>{stats.pullquotes++;return '<p class="editorial-pullquote archive-judgment-quote">'+copy.trim()+'</p>';});
  body=body.replace(/<p\b[^>]*>\s*<strong>\s*lowob takeaway:\s*<\/strong>\s*([\s\S]*?)<\/p>/gi,(_m,copy)=>{stats.pullquotes++;return '<p class="editorial-pullquote archive-judgment-quote">'+copy.trim()+'</p>';});
  // Some older pages used h3 for every main section and only h2 for FAQ.
  const hasH2=/<h2\b/i.test(body);
  if(!hasH2){
    body=body.replace(/<h3\b([^>]*)>([\s\S]*?)<\/h3>/gi,(_m,attrs,label)=>{
      stats.headingsPromoted++;
      const clean=attrs.replace(/\s*id="[^"]*"/gi,"");
      return '<h2'+clean+'>'+label+'</h2>';
    });
  }
  const ids=new Set(),heads=[];
  const slug=s=>textOf(s).toLowerCase().replace(/&[a-z]+;/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,60)||"section";
  body=body.replace(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/gi,(_m,attrs,label)=>{
    let id=(attrs.match(/\bid="([^"]+)"/)||[])[1]||slug(label);
    let base=id,n=2;while(ids.has(id))id=base+"-"+n++;
    ids.add(id);heads.push([id,textOf(label)]);
    return '<h2'+attrs.replace(/\s*id="[^"]*"/gi,"")+' id="'+escape(id)+'">'+label+'</h2>';
  });
  // Existing archive pages already contain proper citations, links, and metadata.
  let result=input.slice(0,open)+body+input.slice(end);
  result=result.replace(/href="\/design-preview\/preview\.css(?:\?v=[^"]*)?"/g,'href="/design-preview/preview.css?v=archive-polish-v2"');
  result=result.replace(/src="\/design-preview\/preview\.js(?:\?v=[^"]*)?"/g,'src="/design-preview/preview.js?v=archive-polish-v2"');
  const asideStart=result.indexOf('<aside class="research-article-aside preview-toc">',end-(originalBody.length-body.length));
  const asideStop=result.indexOf('</aside>',asideStart);
  if(asideStart<0||asideStop<0)throw Error("Archive sidebar missing");
  const toc=heads.slice(0,9).map(([id,label])=>'<li><a href="#'+escape(id)+'">'+escape(label)+'</a></li>').join("");
  const aside='<aside class="research-article-aside preview-toc">'+(toc?'<h2>Content List</h2><ol>'+toc+'</ol>':'')+'</aside>';
  result=result.slice(0,asideStart)+aside+result.slice(asideStop+8);
  if(result.includes('<h2 id="common-questions"'))throw Error("FAQ removal incomplete");
  if(!result.includes('data-visual-only="true"')||!result.includes('noindex'))throw Error("Guardrails lost");
  const afterWords=countWords(body),beforeWords=countWords(originalBody);
  if(afterWords<150||afterWords<beforeWords*.33)throw Error("Unexpected text loss: "+beforeWords+" -> "+afterWords);
  for(const [id] of heads.slice(0,9))if(!body.includes('id="'+id+'"'))throw Error("TOC target missing "+id);
  return {html:result,stats:{...stats,beforeWords,afterWords,remainingLists:(body.match(/<(?:ul|ol)\b/gi)||[]).length,headings:heads.length}};
}
