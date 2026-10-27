#!/usr/bin/env node
// Head-only metadata normalization. Never remove robots directives or publish previews.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
export const ORIGIN = 'https://www.lowob.com';
export const decode = s => String(s).replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
export const escape = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export const textOnly = s => decode(String(s).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
export const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)].map(m => [m[1].toLowerCase(), decode(m[2] ?? m[3])]));
export function meta(h, key) { for (const m of h.matchAll(/<meta\b[^>]*>/gi)) { const a = attributes(m[0]); if ((a.name || a.property)?.toLowerCase() === key) return a.content || ''; } return ''; }
export function setMeta(h, key, value, property = false) {
  let found = false;
  const tag = `<meta ${property ? 'property' : 'name'}="${key}" content="${escape(value)}">`;
  h = h.replace(/<meta\b[^>]*>/gi, old => { const a = attributes(old); if ((a.name || a.property)?.toLowerCase() !== key) return old; if (found) return ''; found = true; return tag; });
  return found ? h : h.replace(/<\/head>/i, `${tag}</head>`);
}
export function schemas(h) { return [...h.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].flatMap(m => { const j = JSON.parse(m[1]); return Array.isArray(j) ? j : j['@graph'] || [j]; }); }
export function scanSite(site) {
  const files = [];
  function walk(dir) { for (const e of fs.readdirSync(dir, {withFileTypes:true})) { if (e.name.startsWith('.') || ['node_modules','content','data','launch','assets','_review'].includes(e.name)) continue; const f = path.join(dir,e.name); if (e.isDirectory()) walk(f); else if (e.name.endsWith('.html')) files.push(f); } }
  walk(site);
  return files.sort().map(file => {
    const html = fs.readFileSync(file,'utf8'), head = html.slice(0,html.indexOf('</head>') + 7);
    const p = '/' + path.relative(site,file).split(path.sep).join('/').replace(/index\.html$/, '');
    const noindex = [...head.matchAll(/<meta\b[^>]*>/gi)].some(m => { const a = attributes(m[0]); return /^(robots|googlebot|bingbot)$/i.test(a.name || '') && /\b(noindex|none)\b/i.test(a.content || ''); });
    const privateRoute = /(?:^|\/)[^/]*(?:preview|private|staging)[^/]*(?:\/|$)/i.test(p);
    return {file,html,head,p,url:ORIGIN+p,noindex,excluded:noindex || privateRoute || !file.endsWith('index.html'),article:/^\/research\/[^/]+\/$/.test(p)};
  });
}
export function normalizeSite(site, {fix=false, modifiedAt, reportPath} = {}) {
  if (modifiedAt && (!Number.isFinite(Date.parse(modifiedAt)) || Date.parse(modifiedAt) > Date.now()+60000)) throw new Error('Invalid or future modification timestamp');
  const records = scanSite(site), warnings = [], errors = [], titles = new Map(); let changed = 0;
  for (const r of records) {
    if (r.excluded) { warnings.push(`${r.p}: excluded from public indexes; ${r.noindex ? 'intentional noindex retained' : 'private/preview route'}`); continue; }
    let h = r.head;
    const title = textOnly(h.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '');
    const headline = textOnly(r.html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || title);
    const socialTitle = title.replace(/\s*\|\s*lowob$/i,'');
    const description = meta(h,'description');
    if (!title || !description) errors.push(`${r.p}: missing title or description`);
    if (title.length > 70) warnings.push(`${r.p}: title ${title.length} characters`);
    if (description.length > 170) warnings.push(`${r.p}: description ${description.length} characters`);
    if ((r.html.match(/<h1[\s>]/gi)||[]).length !== 1) errors.push(`${r.p}: expected one H1`);
    if (titles.has(title)) errors.push(`${r.p}: duplicate title with ${titles.get(title)}`); titles.set(title,r.p);
    let canonicalFound = false;
    h = h.replace(/<link\b[^>]*>/gi, tag => { if (attributes(tag).rel !== 'canonical') return tag; if (canonicalFound) return ''; canonicalFound=true; return `<link rel="canonical" href="${r.url}">`; });
    if (!canonicalFound) h=h.replace(/<\/head>/i,`<link rel="canonical" href="${r.url}"></head>`);
    const ownImage = r.article && fs.existsSync(path.join(path.dirname(r.file),'share.png'));
    const image = ownImage ? r.url+'share.png' : meta(h,'og:image') || ORIGIN+'/share.png';
    for (const [k,v] of Object.entries({'og:title':socialTitle,'og:description':description,'og:url':r.url,'og:type':r.article?'article':'website','og:site_name':'lowob','og:image':image,'og:image:width':'1200','og:image:height':'630','og:image:alt':headline})) h=setMeta(h,k,v,true);
    for (const [k,v] of Object.entries({'twitter:card':'summary_large_image','twitter:title':socialTitle,'twitter:description':description,'twitter:image':image})) h=setMeta(h,k,v);
    let ld;
    try { ld=schemas(h); } catch { errors.push(`${r.p}: invalid JSON-LD`); continue; }
    if (r.article) {
      let article=ld.find(j=>['Article','BlogPosting','NewsArticle'].includes(j['@type']));
      if (!article) { article={'@context':'https://schema.org','@type':'Article',headline,author:{'@type':'Organization',name:meta(h,'author')||'lowob',url:ORIGIN},publisher:{'@type':'Organization',name:'lowob',url:ORIGIN}}; ld.push(article); }
      const pub=meta(h,'article:published_time') || r.html.match(/<time[^>]*datetime="([^"]+)"/)?.[1];
      if (!article.datePublished && pub) article.datePublished=pub;
      article.mainEntityOfPage=r.url; article.description=description; article.image=image;
      if (modifiedAt) article.dateModified=modifiedAt;
      if (article.dateModified && Date.parse(article.dateModified)>Date.now()+60000) errors.push(`${r.p}: future dateModified`);
      if (article.dateModified) h=setMeta(h,'article:modified_time',article.dateModified,true);
      r.modified=article.dateModified;
    }
    if (r.p==='/') {
      if (!ld.some(j=>j['@type']==='Organization')) ld.push({'@context':'https://schema.org','@type':'Organization',name:'lowob',url:ORIGIN});
      if (!ld.some(j=>j['@type']==='WebSite')) ld.push({'@context':'https://schema.org','@type':'WebSite',name:'lowob',url:ORIGIN});
    }
    h=h.replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,'');
    if (ld.length) h=h.replace(/<\/head>/i,ld.map(j=>`<script type="application/ld+json">${JSON.stringify(j).replace(/</g,'\\u003c')}</script>`).join('')+'</head>');
    r.title=headline; r.description=description;
    if (h!==r.head) { changed++; if(fix) fs.writeFileSync(r.file,h+r.html.slice(r.head.length)); }
  }
  const publicRecords=records.filter(r=>!r.excluded);
  if (fix && !errors.length) {
    const sitemap='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+publicRecords.map(r=>`  <url><loc>${r.url}</loc>${r.modified?`<lastmod>${r.modified}</lastmod>`:''}</url>`).join('\n')+'\n</urlset>\n';
    fs.writeFileSync(path.join(site,'sitemap.xml'),sitemap);
    const robotsPath=path.join(site,'robots.txt');
    const robots=fs.existsSync(robotsPath)?fs.readFileSync(robotsPath,'utf8'):'User-agent: *\nAllow: /\n';
    fs.writeFileSync(robotsPath,robots.replace(/^Sitemap:.*$/gim,'').trim()+`\n\nSitemap: ${ORIGIN}/sitemap.xml\n`);
    fs.writeFileSync(path.join(site,'llms.txt'),'# lowob\n\n> Commercial growth for complex markets: strategy, growth, distribution and revenue.\n\n'+['Core pages','Research'].map((heading,i)=>`## ${heading}\n\n`+publicRecords.filter(r=>r.article===!!i).map(r=>`- [${r.title}](${r.url})${r.description?': '+r.description:''}`).join('\n')).join('\n\n')+'\n');
  }
  const report=`# Lowob metadata report\n\n${records.length} HTML pages scanned; ${publicRecords.length} public URLs; ${publicRecords.filter(r=>r.article).length} research articles; ${records.filter(r=>r.excluded).length} excluded previews/noindex pages.\n\n${errors.length} errors. ${changed} pages ${fix?'updated':'would change'}.\n\n## Safeguards\n\nIntentional noindex is retained. Preview routes are excluded from sitemap.xml and llms.txt. Only page heads are changed. Publication dates are preserved. Sitemap lastmod comes from actual dateModified; unknown dates are omitted.\n\n## Errors\n\n${errors.join('\n')||'None.'}\n\n## Advisories\n\n${warnings.map(w=>'- '+w).join('\n')||'None.'}\n`;
  if(reportPath) fs.writeFileSync(reportPath,report);
  return {pages:records.length,public:publicRecords.length,articles:publicRecords.filter(r=>r.article).length,excluded:records.filter(r=>r.excluded).length,changed,errors,warnings,report};
}
if (process.argv[1] && import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href) {
  const arg=k=>{const i=process.argv.indexOf('--'+k);return i<0?undefined:process.argv[i+1];};
  if(!arg('site')) throw new Error('Usage: node scripts/site-meta.mjs --site dist [--fix] [--modified-at ISO] [--report path]');
  const r=normalizeSite(arg('site'),{fix:process.argv.includes('--fix'),modifiedAt:arg('modified-at'),reportPath:arg('report')});
  console.log(JSON.stringify({...r,report:undefined,warnings:r.warnings.length},null,2)); if(r.errors.length) process.exitCode=1;
}
