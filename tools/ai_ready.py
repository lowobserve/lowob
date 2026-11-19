#!/usr/bin/env python3
"""Make every research article easy for AI crawlers and answer engines to read.

Run after build.py and integrate.py, before site-meta.mjs --fix:
  python3 ai_ready.py --dist /path/to/lowob/dist

For every research article in dist/research/<slug>/index.html it:
  1. adds BreadcrumbList structured data (Home > Research > Article) if missing;
  2. adds <link rel="alternate" type="text/markdown"> pointing at a Markdown copy;
  3. writes that Markdown copy to dist/research/<slug>/index.md: title, URL, dates,
     the "In short" summary, key points, full body, FAQ and sources, with no site chrome.
It then writes dist/llms-full.txt (every article in Markdown, newest first) and
dist/research/summaries.md (title, URL and summary for every article). Idempotent.
"""
import argparse, html, json, re
from pathlib import Path
from markdownify import markdownify as md

ORIGIN = 'https://lowob.com'


def ld_blocks(h):
    out = []
    for j in re.findall(r'<script type="application/ld\+json">(.*?)</script>', h, re.S):
        try:
            out.append(json.loads(j))
        except Exception:
            pass
    return out


def body_html(h):
    m = re.search(r'<div class="research-article-body[^"]*"[^>]*>(.*?)</div><aside class="research-article-aside', h, re.S)
    return m.group(1) if m else ''


def clean_markdown(b):
    b = re.sub(r'<figure class="bo-figure"[^>]*>.*?<figcaption>(.*?)</figcaption></figure>',
               lambda m: f'<p><em>Figure: {m.group(1)}</em></p>', b, flags=re.S)
    b = re.sub(r'<svg.*?</svg>', '', b, flags=re.S)
    b = re.sub(r'<script.*?</script>', '', b, flags=re.S)
    text = md(b, heading_style='ATX', bullets='-', strip=['img'])
    text = re.sub(r'\]\(/', f']({ORIGIN}/', text)
    text = re.sub(r'[ \t]+\n', '\n', text)
    return re.sub(r'\n{3,}', '\n\n', text).strip()


def summary_of(text, art):
    m = re.search(r'\*\*In short:\*\*\s*(.+?)(?:\n\n|$)', text, re.S)
    if m:
        return re.sub(r'\s+', ' ', m.group(1)).strip()
    return (art or {}).get('abstract') or (art or {}).get('description', '')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--dist', required=True)
    a = ap.parse_args()
    dist = Path(a.dist)
    docs, n_bc, n_link = [], 0, 0
    for f in sorted((dist / 'research').glob('*/index.html')):
        slug = f.parent.name
        h = f.read_text()
        if 'name="robots" content="noindex' in h:
            continue
        lds = ld_blocks(h)
        art = next((x for x in lds if x.get('@type') == 'Article'), None)
        if not art:
            continue
        url = f'{ORIGIN}/research/{slug}/'
        title = html.unescape(re.sub(r'<[^>]+>', '', re.search(r'<h1[^>]*>(.*?)</h1>', h, re.S).group(1))).strip()
        if not any(x.get('@type') == 'BreadcrumbList' for x in lds):
            bc = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "lowob", "item": ORIGIN + '/'},
                {"@type": "ListItem", "position": 2, "name": "Research", "item": ORIGIN + '/research/'},
                {"@type": "ListItem", "position": 3, "name": title, "item": url}]}
            h = h.replace('</head>', f'<script type="application/ld+json">{json.dumps(bc, ensure_ascii=False)}</script></head>', 1)
            n_bc += 1
        if 'type="text/markdown"' not in h:
            h = h.replace('</head>', f'<link rel="alternate" type="text/markdown" href="/research/{slug}/index.md" title="Markdown version"></head>', 1)
            n_link += 1
        f.write_text(h)

        body = clean_markdown(body_html(h))
        summary = summary_of(body, art)
        body = re.sub(r'^\*\*In short:\*\*.+?(?:\n\n|$)', '', body, count=1, flags=re.S).strip()
        pub = (art.get('datePublished') or '')[:10]
        mod = (art.get('dateModified') or '')[:10]
        sections = [f'# {title}', '',
                    f'Source: {url}', f'Publisher: lowob (https://lowob.com)',
                    f'Published: {pub}' + (f' · Updated: {mod}' if mod and mod > pub else ''),
                    f'Function: {art.get("articleSection", "")}', '',
                    f'> Summary: {summary}', '', body]
        faq = next((x for x in lds if x.get('@type') == 'FAQPage'), None)
        if faq and 'Common questions' not in body:
            sections += ['', '## Common questions', ''] + [f'**{q["name"]}**\n\n{q["acceptedAnswer"]["text"]}\n' for q in faq['mainEntity']]
        doc = '\n'.join(sections).strip() + '\n'
        (f.parent / 'index.md').write_text(doc)
        docs.append((pub, title, url, summary, doc))

    docs.sort(key=lambda d: d[0], reverse=True)
    head = ('# lowob research: full text\n\n> Every research article published by lowob (https://lowob.com/research/), '
            'in Markdown, newest first. Each article starts with its source URL and a one-paragraph summary. '
            'Quote with attribution to lowob and link to the source URL.\n\n')
    (dist / 'llms-full.txt').write_text(head + '\n\n---\n\n'.join(d[4] for d in docs))
    summ = ('# lowob research: article summaries\n\n> One-paragraph summary of every lowob research article, newest first. '
            f'Full text: {ORIGIN}/llms-full.txt\n\n' +
            '\n'.join(f'## [{d[1]}]({d[2]})\n\nPublished {d[0]}. {d[3]}\n' for d in docs))
    (dist / 'research' / 'summaries.md').write_text(summ)
    # Atom feed of the 60 newest research articles, linked from the research hub
    from xml.sax.saxutils import escape as x
    import datetime as _dt
    newest = docs[:60]
    updated = _dt.datetime.now(_dt.timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')
    entries = ''.join(
        f'<entry><title>{x(d[1])}</title><link href="{x(d[2])}"/><id>{x(d[2])}</id>'
        f'<updated>{d[0]}T00:00:00Z</updated><summary>{x(d[3])}</summary></entry>\n' for d in newest)
    feed = ('<?xml version="1.0" encoding="utf-8"?>\n<feed xmlns="http://www.w3.org/2005/Atom">'
            f'<title>lowob research</title><link href="{ORIGIN}/research/"/><link rel="self" href="{ORIGIN}/research/feed.xml"/>'
            f'<id>{ORIGIN}/research/</id><updated>{updated}</updated><author><name>lowob</name></author>\n{entries}</feed>\n')
    (dist / 'research' / 'feed.xml').write_text(feed)
    hub = dist / 'research' / 'index.html'
    hh = hub.read_text()
    if 'application/atom+xml' not in hh:
        hub.write_text(hh.replace('</head>', f'<link rel="alternate" type="application/atom+xml" title="lowob research" href="/research/feed.xml"></head>', 1))
    print(json.dumps({'articles': len(docs), 'breadcrumbs_added': n_bc, 'markdown_links_added': n_link,
                      'llms_full_kb': round((dist / 'llms-full.txt').stat().st_size / 1024)}, indent=1))


if __name__ == '__main__':
    main()
