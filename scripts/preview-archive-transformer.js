(function transformArchivePreview({row,source,template}) {
  const escape = x => String(x ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const slug = (row[11] || '').match(/\/research\/([^/]+)\//)?.[1];
  if (!slug) throw Error('Missing source slug at rank '+row[0]);
  const heading = source.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] || row[2] || 'Research';
  const title = heading.replace(/<[^>]*>/g,'');
  const opening = '<div class="research-article-body">';
  const start = source.indexOf(opening);
  const end = source.indexOf('</div><aside class="research-article-aside',start);
  if (start < 0 || end < 0) throw Error('Missing article body '+slug);
  let body = source.slice(start + opening.length,end);
  const date = source.match(/<time datetime="([^"]+)">([^<]+)<\/time>/);
  const dateISO = date?.[1] || row[8], dateText = date?.[2] || row[8];
  if (!dateISO) throw Error('No date '+slug);
  body = body.replace(/<p(?=[\s>])([^>]*)>/,(tag,attrs) => attrs.includes('class=') ? '<p'+attrs.replace(/class="([^"]*)"/,'class="$1 kol-intro"')+'>' : '<p class="kol-intro"'+attrs+'>');
  const headings=[], seen = new Set();
  const makeId = s => s.replace(/<[^>]*>/g,'').toLowerCase().replace(/&[a-z]+;/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,64) || 'section';
  body = body.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/g,(all,attrs,inside) => {
    let id = attrs.match(/\bid="([^"]+)"/)?.[1] || makeId(inside);
    if(seen.has(id)) id = id+'-'+(seen.size+1);
    seen.add(id);
    headings.push([id,inside.replace(/<[^>]*>/g,'')]);
    return '<h2'+attrs.replace(/\s+id="[^"]*"/g,'')+' id="'+escape(id)+'">'+inside+'</h2>';
  });
  body = body.replace(/<a\b[^>]*href="([^"]+)"[^>]*>/g,(tag,url) => url.startsWith('#') ? tag : tag.replace(/\s+target="[^"]*"/g,'').replace(/\s+rel="[^"]*"/g,'').slice(0,-1)+' target="_blank" rel="noopener noreferrer">');
  const wordCount = body.replace(/<[^>]*>/g,' ').trim().split(/\s+/).length;
  const readMinutes = Math.max(3,Math.round(wordCount/210));
  const tocLinks = (headings.length ? headings.slice(0,9) : [['article-body','Article']]).map(([id,label])=>'<li><a href="#'+escape(id)+'">'+escape(label)+'</a></li>').join('');
  const wrappedBody = '<div class="research-article-body editorial-rewrite" data-visual-only="true" data-original-slug="'+escape(slug)+'" id="article-body">'+body+'<nav class="research-related" aria-label="Related research"><h2>More research</h2><ul><li><a href="/design-preview/featured/" target="_blank" rel="noopener noreferrer">Browse featured lowob research</a></li></ul></nav></div>';
  const aside = '<aside class="research-article-aside preview-toc"><h2>Content List</h2><ol>'+tocLinks+'</ol></aside>';
  let h = template;
  const hs=h.indexOf('<header class="research-article-hero">'),he=h.indexOf('</header>',hs)+9;
  const bs=h.indexOf('<div class="research-article-body',he),as=h.indexOf('<aside class="research-article-aside preview-toc">',bs),ae=h.indexOf('</aside>',as)+8;
  if ([hs,he,bs,as,ae].some(i=>i<0)) throw Error('Unexpected template');
  const hero='<header class="research-article-hero"><h1>'+heading+'</h1><div class="research-article-meta preview-article-meta"><span>By <strong>lowob</strong> · <time datetime="'+dateISO+'">'+escape(dateText)+'</time> · '+readMinutes+'-minute read · '+escape(row[3]||'Research')+'</span></div></header>';
  h=h.slice(0,hs)+hero+h.slice(he,bs)+wrappedBody+aside+h.slice(ae);
  const originalDescription=source.match(/<meta name="description" content="([^"]*)"/)?.[1]||'lowob research article';
  h=h.replace(/<title>[\s\S]*?<\/title>/,'<title>'+escape(title)+' | lowob design preview</title>');
  for(const [kind,key,value] of [['name','description',originalDescription],['property','og:title',title],['property','og:description',originalDescription],['property','og:url','https://lowob.com/research/'+slug+'/'],['name','twitter:title',title],['name','twitter:description',originalDescription],['property','article:published_time',dateISO],['property','og:image:alt',title]]){
    const re=new RegExp('(<meta '+kind+'="'+key+'" content=")[^"]*(">)');
    if(!re.test(h)) throw Error('Missing meta '+key);
    h=h.replace(re,(_m,a,z)=>a+escape(value)+z);
  }
  h=h.replace(/<meta property="article:modified_time" content="[^"]*">/,'');
  h=h.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/,'<script type="application/ld+json">'+JSON.stringify({'@context':'https://schema.org','@type':'Article',headline:title,datePublished:dateISO,description:originalDescription,author:{'@type':'Organization',name:'lowob'},publisher:{'@type':'Organization',name:'lowob'},mainEntityOfPage:'https://lowob.com/research/'+slug+'/'})+'</script>');
  h=h.replace(/<a class="service-next research-article-next"[\s\S]*?<\/a>/,'<a class="service-next research-article-next" href="/design-preview/featured/" style="--next-signal:#39FF14"><div><h2>Explore lowob research</h2><p>Browse the library</p></div></a>');
  if (!h.includes('noindex') || !h.includes('data-visual-only="true"') || !h.includes('<h1>')) throw Error('Failed archive preview QA '+slug);
  return {path:'dist/design-preview/library/'+slug+'/index.html',mode:'100644',type:'blob',content:h};
})