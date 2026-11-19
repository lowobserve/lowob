#!/usr/bin/env python3
"""lowob news desk builder. Idempotent; run after the research build and before ai_ready / site-meta.

  python3 tools/news.py --dist dist --data research-release-source/news/news.json

Writes  dist/news/index.html, dist/news/feed.xml, dist/news/news.json, dist/assets/news.css
Injects the "Latest from the desk" strip on the homepage (before the research band)
Injects an "In the news" box on every research article a story links to
Adds /news/ to sitemap.xml
To add a story: append an item to news.json (date, headline, source, url, kind, topic, why, research[]) and rerun.
"""
import argparse, html, json, re, shutil
from datetime import date
from pathlib import Path

E = html.escape
MONTHS = 'January February March April May June July August September October November December'.split()
def human(d):
    y, m, dd = map(int, d.split('-')); return f'{dd} {MONTHS[m-1]} {y}'
def short(d):
    y, m, dd = map(int, d.split('-')); return f'{dd} {MONTHS[m-1][:3]}'
def slugify(s): return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')[:70]

def article_title(dist, slug):
    p = dist / 'research' / slug / 'index.html'
    if not p.exists(): raise SystemExit(f'news.json links a missing article: {slug}')
    m = re.search(r'<h1[^>]*>(.*?)</h1>', p.read_text(), re.S)
    return re.sub(r'<[^>]+>', '', m.group(1)).strip() if m else slug

def main():
    ap = argparse.ArgumentParser(); ap.add_argument('--dist', default='dist'); ap.add_argument('--data', required=True)
    ap.add_argument('--css', default=str(Path(__file__).with_name('news.css'))); a = ap.parse_args()
    dist = Path(a.dist); data = json.loads(Path(a.data).read_text())
    items = sorted(data['items'], key=lambda x: x['date'], reverse=True)
    for it in items:
        it['id'] = it.get('id') or slugify(it['date'] + '-' + it['headline'])
        it['links'] = [(s, article_title(dist, s)) for s in it['research']]
    topics = sorted({it['topic'] for it in items})
    shutil.copy(a.css, dist / 'assets' / 'news.css')
    css = '<link rel="stylesheet" href="/assets/news.css?v=' + data['updated'].replace('-', '') + '">'

    # ---- /news/ page, built on the research hub shell
    hub = (dist / 'research' / 'index.html').read_text()
    head_end = hub.index('</head>'); ws = hub.index('<div class="detail-workspace">') + len('<div class="detail-workspace">')
    foot = hub.index('<footer'); main_end = hub.index('</main>') + len('</main>')
    head = hub[:head_end]
    title = 'News Desk: What Changed in AI, Fintech and Crypto | lowob'
    desc = 'Dated regulation, platform and market news for AI, fintech, crypto and media, each tied to the lowob research that explains what it means.'
    url = 'https://lowob.com/news/'
    head = re.sub(r'<title>.*?</title>', f'<title>{E(title)}</title>', head)
    head = re.sub(r'(<meta name="description" content=")[^"]*', r'\g<1>' + E(desc), head)
    head = re.sub(r'(<meta (?:property="og:description"|name="twitter:description") content=")[^"]*', r'\g<1>' + E(desc), head)
    head = re.sub(r'(<meta (?:property="og:title"|name="twitter:title") content=")[^"]*', r'\g<1>News Desk', head)
    head = head.replace('https://lowob.com/research/"', url + '"')
    head = re.sub(r'<link rel="alternate"[^>]*>', '', head)
    head += css + f'<link rel="alternate" type="application/rss+xml" title="lowob news desk" href="/news/feed.xml">'
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "CollectionPage", "@id": url, "url": url, "name": "lowob News Desk", "description": desc, "dateModified": data['updated'],
         "isPartOf": {"@type": "WebSite", "name": "lowob", "url": "https://lowob.com/"}, "publisher": {"@type": "Organization", "name": "lowob", "url": "https://lowob.com/"}},
        {"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://lowob.com/"}, {"@type": "ListItem", "position": 2, "name": "News Desk", "item": url}]},
        {"@type": "ItemList", "name": "Recent news tracked by lowob", "itemListOrder": "https://schema.org/ItemListOrderDescending", "numberOfItems": len(items),
         "itemListElement": [{"@type": "ListItem", "position": i + 1, "url": url + '#' + it['id'], "name": it['headline']} for i, it in enumerate(items)]}]}
    head += '<script type="application/ld+json">' + json.dumps(ld, ensure_ascii=False) + '</script>'

    ann = ''.join(f'<a href="{E(x["url"])}"><span>From <b>lowob</b></span><time datetime="{x["date"]}">{human(x["date"])}</time><strong>{E(x["title"])}</strong><p>{E(x["text"])}</p></a>' for x in data.get('announcements', []))
    rows = []
    for it in items:
        links = ''.join(f'<a href="/research/{s}/">{E(t)}</a>' for s, t in it['links'])
        rows.append(f'<li class="news-item" id="{it["id"]}" data-topic="{E(it["topic"])}"><div class="news-meta"><time datetime="{it["date"]}">{human(it["date"])}</time><span class="news-kind">{E(it["kind"])}</span><span>{E(it["topic"])}</span></div>'
                    f'<div><h2><a href="{E(it["url"])}" rel="noopener" target="_blank">{E(it["headline"])}</a></h2><p class="news-source">{E(it["source"])}</p><p class="news-why"><strong>Why it matters.</strong> {E(it["why"])}</p></div>'
                    f'<div class="news-links"><span>Our research</span>{links}</div></li>')
    filt = '<button type="button" data-news-topic="" aria-pressed="true">All</button>' + ''.join(f'<button type="button" data-news-topic="{E(t)}" aria-pressed="false">{E(t)}</button>' for t in topics)
    body = (f'<section class="detail-hero research-hero"><span><strong>lowob</strong> NEWS DESK</span><h1>What changed.<br>What it means.</h1>'
            f'<p>Regulation, platform and market news we track for AI, fintech, crypto and media. Each story links to the research that explains what to do about it. Updated {human(data["updated"])}.</p></section>'
            f'<section class="news-desk" aria-label="News desk"><div class="news-announce">{ann}</div>'
            f'<div class="news-desk-bar"><div class="news-filters" role="group" aria-label="Filter by topic">{filt}</div><p id="news-status" aria-live="polite">{len(items)} stories</p></div>'
            f'<ol class="news-list">{"".join(rows)}</ol><p class="news-empty" hidden>No stories in this topic yet.</p></section>')
    script = ('<script>(()=>{const b=[...document.querySelectorAll("[data-news-topic]")],r=[...document.querySelectorAll(".news-item")],s=document.getElementById("news-status"),e=document.querySelector(".news-empty");'
              'function f(t){let n=0;r.forEach(x=>{const ok=!t||x.dataset.topic===t;x.hidden=!ok;if(ok)n++});b.forEach(x=>x.setAttribute("aria-pressed",String(x.dataset.newsTopic===t)));s.textContent=n+" stories";e.hidden=n>0}'
              'b.forEach(x=>x.addEventListener("click",()=>f(x.dataset.newsTopic)))})();</script>')
    page = head + '</head>' + hub[head_end + 7:ws] + body + hub[foot:main_end] + '<script src="/assets/clone.js?v=4" defer></script>' + script + '</body></html>'
    page = page.replace('<body class="research-live"', '<body class="research-live news-page"')
    (dist / 'news').mkdir(exist_ok=True); (dist / 'news' / 'index.html').write_text(page)

    # ---- feeds
    (dist / 'news' / 'news.json').write_text(json.dumps({"updated": data['updated'], "announcements": data.get('announcements', []),
        "items": [{k: it[k] for k in ['id', 'date', 'headline', 'source', 'url', 'kind', 'topic', 'why']} | {"research": [f'https://lowob.com/research/{s}/' for s in it['research']]} for it in items]}, ensure_ascii=False, indent=1))
    rss = ['<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>lowob News Desk</title><link>https://lowob.com/news/</link><description>' + E(desc) + '</description>']
    for it in items:
        y, m, d = map(int, it['date'].split('-'))
        rss.append(f'<item><title>{E(it["headline"])}</title><link>{url}#{it["id"]}</link><guid isPermaLink="false">{it["id"]}</guid><pubDate>{date(y, m, d).strftime("%a, %d %b %Y")} 12:00:00 +0000</pubDate><description>{E(it["why"])} Source: {E(it["source"])}.</description></item>')
    rss.append('</channel></rss>'); (dist / 'news' / 'feed.xml').write_text(''.join(rss))

    # ---- homepage strip
    hp = dist / 'index.html'; h = hp.read_text()
    h = re.sub(r'<!--news-strip-->.*?<!--/news-strip-->', '', h, flags=re.S)
    if 'assets/news.css' not in h: h = h.replace('</head>', css + '</head>', 1)
    else: h = re.sub(r'<link rel="stylesheet" href="/assets/news\.css[^"]*">', css, h)
    lis = ''.join(f'<li><a href="/news/#{it["id"]}"><time datetime="{it["date"]}">{short(it["date"])} · {E(it["kind"])}</time><span><strong>{E(it["headline"])}</strong><em>{E(it["source"])}</em></span></a></li>' for it in items[:5])
    strip = (f'<!--news-strip--><section class="news-strip" aria-labelledby="home-news-title"><div class="news-strip-head"><div><span><strong>lowob</strong> NEWS DESK</span>'
             f'<h2 id="home-news-title">What changed this month.</h2></div><a href="/news/">All news and what it means</a></div><ol>{lis}</ol></section><!--/news-strip-->')
    anchor = '<section class="research-band'
    if anchor not in h: raise SystemExit('homepage research band not found')
    h = h.replace(anchor, strip + anchor, 1); hp.write_text(h)

    # ---- in-article boxes
    by = {}
    for it in items:
        for s in it['research']: by.setdefault(s, []).append(it)
    n = 0
    for p in (dist / 'research').glob('*/index.html'):
        t = p.read_text(); t2 = re.sub(r'<!--bo-news-->.*?<!--/bo-news-->', '', t, flags=re.S)
        slug = p.parent.name
        if slug in by:
            box = ('<!--bo-news--><section class="bo-news" aria-labelledby="in-the-news"><h2 id="in-the-news">In the news</h2><ul>' +
                   ''.join(f'<li><time datetime="{it["date"]}">{human(it["date"])} · {E(it["source"])}</time><a href="/news/#{it["id"]}">{E(it["headline"])}</a><span>{E(it["why"])}</span></li>' for it in by[slug][:3]) +
                   '</ul><p>Tracked on the <a href="/news/"><strong>lowob</strong> News Desk</a>.</p></section><!--/bo-news-->')
            anchor = '<section class="kol-sources'
            if anchor in t2:
                t2 = t2.replace(anchor, box + anchor, 1); n += 1
                if 'assets/news.css' not in t2: t2 = t2.replace('</head>', css + '</head>', 1)
        if t2 != t: p.write_text(t2)
        elif slug in by: p.write_text(t2)

    # ---- sitemap
    sm = dist / 'sitemap.xml'
    if sm.exists():
        s = sm.read_text()
        if '<loc>https://lowob.com/news/</loc>' not in s:
            s = s.replace('</urlset>', f'  <url><loc>https://lowob.com/news/</loc><lastmod>{data["updated"]}</lastmod></url>\n</urlset>'); sm.write_text(s)
    print(f'news desk: {len(items)} stories, {len(topics)} topics, homepage strip 5, article boxes {n}')

if __name__ == '__main__':
    main()
