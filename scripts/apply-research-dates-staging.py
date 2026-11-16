#!/usr/bin/env python3
"""Apply the approved 202-article editorial chronology to the staging dist.
Proposed dates are NOT evidence of historical public publication.
"""
import datetime as dt,json,re,sys,collections
from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
dist=Path(__file__).resolve().parent.parent/"dist"
dates=json.loads(Path(__file__).with_name("research-proposed-dates.json").read_text())
assert len(dates)==202 and max(dates.values())<="2026-11-14"
assert max(collections.Counter(dates.values()).values())<=3
pending={};imgs=[];counts=collections.Counter()
def human(d):
 t=dt.date.fromisoformat(d);return f'{t.day} {t.strftime("%B %Y")}'
def once(p,t,rep,label):
 o,n=re.subn(p,rep,t,count=1,flags=re.I)
 if n!=1:raise RuntimeError(f"{label}: expected one match, got {n}")
 return o
def stage(p,t):
 if p.read_text(encoding="utf8")!=t:pending[p]=t
for slug,date in dates.items():
 folder=dist/"research"/slug
 hp=folder/"index.html";mp=folder/"index.md";ip=folder/"share.png"
 for p in (hp,mp,ip):
  if not p.is_file():raise RuntimeError(f"missing {p}")
 h=hp.read_text(encoding="utf8");head=h.split("</head>")[0]
 if f'<link rel="canonical" href="https://lowob.com/research/{slug}/">' not in head:raise RuntimeError("canonical: "+slug)
 if '<meta name="robots" content="index, follow">' not in head:raise RuntimeError("robots: "+slug)
 h=once(r'(<meta\b[^>]*property="article:published_time"\s+content=")[^"]+("[^>]*>)',h,lambda m:m[1]+date+m[2],slug+" meta")
 h=once(r'(<div class="research-article-meta[^>]*>[\s\S]*?<time\s+datetime=")[^"]+("\s*>)[^<]*(</time>)',h,lambda m:m[1]+date+m[2]+human(date)+m[3],slug+" byline")
 def schema(m):
  j=json.loads(m[2]);a=j if isinstance(j,list) else j.get("@graph",[j])
  a=[x for x in a if isinstance(x,dict) and x.get("@type") in ("Article","BlogPosting","NewsArticle")]
  if len(a)!=1:raise RuntimeError(f"Article schema count: {slug}")
  a[0]["datePublished"]=date
  return m[1]+json.dumps(j,ensure_ascii=False,separators=(",",":")).replace("<",r"\u003c")+m[3]
 h=once(r'(<script\b[^>]*type="application/ld\+json"[^>]*>)([\s\S]*?)(</script>)',h,schema,slug+" schema")
 stage(hp,h)
 md=mp.read_text(encoding="utf8")
 stage(mp,once(r'(?m)^(Published:\s*)\d{4}-\d{2}-\d{2}',md,lambda m:m[1]+date,slug+" markdown"))
 imgs.append((ip,date))
hub=dist/"research"/"index.html"
def card(m):
 slug=m[1]
 if slug not in dates:return m[0]
 counts[slug]+=1
 return once(r'<time\s+datetime="\d{4}-\d{2}-\d{2}">[^<]*</time>',m[0],
  lambda _:f'<time datetime="{dates[slug]}">{human(dates[slug])}</time>',slug+" card")
s=re.sub(r'<a class="research-card" href="/research/([^/]+)/"[\s\S]*?</a>',card,hub.read_text(encoding="utf8"))
if set(counts)!=set(dates):raise RuntimeError("Research cards mismatch")
stage(hub,s)
summ=dist/"research"/"summaries.md";n=collections.Counter()
def summary(m):
 slug=m[2]
 if slug not in dates:return m[0]
 n[slug]+=1;return m[1]+dates[slug]
s=re.sub(r'(?m)(^## \[[^\n]*?\]\(https://lowob\.com/research/([^/]+)/\)\n\nPublished )\d{4}-\d{2}-\d{2}',summary,summ.read_text(encoding="utf8"))
if set(n)!=set(dates):raise RuntimeError("summaries mismatch")
stage(summ,s.replace("newest first. Full text:","one entry per article. Full text:"))
llms=dist/"llms-full.txt";n=collections.Counter()
def llmsdate(m):
 slug=m[2]
 if slug not in dates:return m[0]
 n[slug]+=1;return m[1]+dates[slug]
s=re.sub(r'(?m)(^Source: https://lowob\.com/research/([^/]+)/\nPublisher: lowob \(https://lowob\.com\)\nPublished: )\d{4}-\d{2}-\d{2}',llmsdate,llms.read_text(encoding="utf8"))
if set(n)!=set(dates):raise RuntimeError("llms-full mismatch")
stage(llms,s.replace("in Markdown, newest first.","in Markdown, one entry per article."))
sm=(dist/"sitemap.xml").read_text(encoding="utf8")
for slug in dates:
 if f'<loc>https://lowob.com/research/{slug}/</loc>' not in sm:raise RuntimeError("sitemap: "+slug)
print(f"VALIDATED: 202 dated articles; {sum(counts.values())} research cards; {len(pending)} text updates; 202 share cards")
if "--apply" not in sys.argv:
 print("DRY RUN: no files changed")
else:
 fontp=next((x for x in ("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf","/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf") if Path(x).exists()),None)
 if not fontp:raise RuntimeError("No image font available")
 font=ImageFont.truetype(fontp,24)
 for p,t in pending.items():p.write_text(t,encoding="utf8")
 for p,date in imgs:
  im=Image.open(p).convert("RGB")
  if im.size!=(1200,630):raise RuntimeError(f"Unexpected image size: {p}")
  d=ImageDraw.Draw(im)
  d.rectangle((847,557,1199,614),fill=(14,14,13))
  d.text((1120,573),human(date),font=font,anchor="ra",fill=(168,168,166))
  im.save(p,format="PNG",optimize=True)
 print("APPLIED staging article, social-image, and index dates")
