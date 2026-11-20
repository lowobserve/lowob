import fs from "node:fs";
import path from "node:path";

const root=process.argv[2]||"dist";
let updated=0, seen=0;
function addToIndex(html) {
  if (!html.includes('id="site-index"') || html.includes('href="/the-read/" style="--signal:#39FF14"')) return html;
  const start=html.indexOf('<nav aria-label="Site index">');
  const end=html.indexOf('</nav>',start);
  if(start<0||end<0)return html;
  const nav=html.slice(start,end+6);
  const research=(nav.match(/<a\b[^>]*href="\/research\/"[^>]*>[\s\S]*?<\/a>/)||[])[0];
  if(!research)return html;
  const newItem=research.replace('href="/research/"','href="/the-read/"')
    .replace(/<strong>(?:lowob RESEARCH|Research)<\/strong>/,'<strong>The Read</strong>');
  if(newItem===research)throw Error("Could not construct Read menu item");
  let edited=html.slice(0,start)+nav.replace(research,newItem+research)+html.slice(end+6);
  const signalStart=edited.indexOf('<div class="signal-key">');
  if(signalStart>=0){
    const signalEnd=edited.indexOf('</div>',signalStart);
    if(signalEnd>signalStart){
      const before=edited.slice(signalStart,signalEnd);
      const small=(before.match(/<a\b[^>]*href="\/research\/"[^>]*>[\s\S]*?<\/a>/)||[])[0];
      if(small){const added=small.replace('href="/research/"','href="/the-read/"')
        .replace('lowob RESEARCH','The Read').replace('Research','The Read');
        edited=edited.slice(0,signalStart)+before.replace(small,added+small)+edited.slice(signalEnd);}
    }
  }
  return edited;
}
function walk(dir) {
  for(const ent of fs.readdirSync(dir,{withFileTypes:true})) {
    const p=path.join(dir,ent.name);
    if(ent.isDirectory())walk(p);
    else if(ent.name==="index.html"){
      const s=fs.readFileSync(p,"utf8");
      if(s.includes('id="site-index"'))seen++;
      const modified=addToIndex(s);
      if(modified!==s){fs.writeFileSync(p,modified);updated++;}
    }
  }
}
walk(root);
console.log("The Read menu: updated",updated,"pages from",seen,"with a site index");
