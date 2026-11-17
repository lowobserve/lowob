#!/usr/bin/env python3
"""Research hub: sync card titles with article pages, add topic tags and a topic filter. Idempotent.
  python3 tools/hub_topics.py --dist dist --topics research-release-source/topic-tags.json"""
import argparse, html, json, re
from pathlib import Path

ap = argparse.ArgumentParser(); ap.add_argument('--dist', default='dist'); ap.add_argument('--topics', required=True); a = ap.parse_args()
dist = Path(a.dist); topics = json.loads(Path(a.topics).read_text())
hub_p = dist / 'research' / 'index.html'; h = hub_p.read_text()
TOPICS = sorted({t for v in topics.values() for t in v})

def h1(slug):
    p = dist / 'research' / slug / 'index.html'
    if not p.exists(): return None
    m = re.search(r'<h1[^>]*>(.*?)</h1>', p.read_text(), re.S)
    return m.group(1).strip() if m else None

cache = {}
def card(m):
    tag = m.group(0); slug = m.group(1)
    tags = [t for t in re.search(r'data-tags="([^"]*)"', tag).group(1).split('|') if t and not t.startswith('topic:')]
    tags += ['topic:' + t for t in topics.get(slug, [])]
    tag = re.sub(r'data-tags="[^"]*"', 'data-tags="' + html.escape('|'.join(tags)) + '"', tag)
    return tag

h = re.sub(r'<a class="research-card" href="/research/([^/]+)/"[^>]*>', card, h)
def retitle(m):
    slug = m.group(1)
    if slug not in cache: cache[slug] = h1(slug)
    t = cache[slug]
    return m.group(0) if not t else re.sub(r'<h2>.*?</h2>', '<h2>' + t + '</h2>', m.group(0), count=1)
h = re.sub(r'<a class="research-card" href="/research/([^/]+)/".*?</a>', retitle, h, flags=re.S)

h = re.sub(r'<label class="preview-topic-select">.*?</label>', '', h, flags=re.S)
sel = ('<label class="preview-topic-select"><span>Topic</span><select id="preview-library-topic"><option value="">All topics</option>'
       + ''.join(f'<option value="{html.escape(t)}">{html.escape(t)}</option>' for t in TOPICS) + '</select></label>')
anchor = '<p id="preview-library-status"'
assert anchor in h; h = h.replace(anchor, sel + anchor, 1)

js_cond = "(func==='All'||tags.includes(func))"
if 'topicSel' not in h:
    h = h.replace(js_cond, js_cond + "&&(!topicSel.value||tags.includes('topic:'+topicSel.value))", 1)
    h = h.replace("const query=root.querySelector('#preview-library-query')", "const topicSel=root.querySelector('#preview-library-topic');const query=root.querySelector('#preview-library-query')", 1)
    h = h.replace("query.addEventListener('input',()=>{limit=20;render();});", "query.addEventListener('input',()=>{limit=20;render();});topicSel.addEventListener('change',()=>{limit=20;render();});", 1)
css = ('<style id="topic-select-css">.preview-topic-select{font:500 13px/1 Arial,Helvetica,sans-serif;color:#888}'
       '.preview-topic-select select{background:#0c0c0c;color:#fff;border:1px solid var(--line);padding:10px 12px;font:15px Arial,Helvetica,sans-serif;border-radius:0;min-width:240px}'
       '.preview-topic-select{display:flex;align-items:center;gap:14px;margin:22px 0 6px}</style>')
h = re.sub(r'<style id="topic-select-css">.*?</style>', '', h, flags=re.S).replace('</head>', css + '</head>', 1)
h = h.replace('Practical Lowob research', 'Practical lowob research')
assert 'topicSel.value' in h, 'filter script not patched'
hub_p.write_text(h)
print('hub: topics', len(TOPICS), 'cards', len(re.findall(r'class="research-card"', h)), 'titles synced', sum(1 for v in cache.values() if v))
