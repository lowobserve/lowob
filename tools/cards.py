#!/usr/bin/env python3
"""Share cards for the News Desk and Ground Control: our own branded images, no third-party screenshots.
Run after news.py and ground_control.py. Idempotent. Needs Pillow (pip install pillow).

  python3 tools/cards.py --dist dist --news research-release-source/news/news.json --gc research-release-source/ground-control

Writes  /news/cards/<story-id>.png      one 1200x630 card per story (for LinkedIn and X posts), linked from each story
        /news/share.png                  social preview for /news/
        /research/ground-control/share.png and one per tab  social previews for Ground Control
and points og:image / twitter:image on those pages at them.
"""
import argparse, json, math, re, textwrap
from datetime import date
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

FD = Path(__file__).with_name('fonts')
INK, PAPER, LIME, MUTED, RULE = (14, 14, 13), (244, 244, 241), (57, 255, 20), (170, 170, 165), (60, 60, 56)
MONTHS = 'January February March April May June July August September October November December'.split()
def font(w, s): return ImageFont.truetype(str(FD / f'Inter-{w}.otf'), s)
def human(s): y, m, d = map(int, s.split('-')); return f'{d} {MONTHS[m - 1]} {y}'
def slugify(s): return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')[:70]


def fit(d, text, weight, max_size, width, max_lines, min_size=28):
    size = max_size
    while size >= min_size:
        f = font(weight, size)
        lines = textwrap.wrap(text, width=max(10, int(width / (size * 0.52))))
        if len(lines) <= max_lines and all(d.textlength(l, font=f) <= width for l in lines): return f, lines, size
        size -= 2
    f = font(weight, min_size); return f, textwrap.wrap(text, width=int(width / (min_size * 0.52)))[:max_lines], min_size


def card(path, kicker, title, body=None, foot_left='lowob.com', foot_right=''):
    W, H = 1200, 630
    im = Image.new('RGB', (W, H), INK); d = ImageDraw.Draw(im)
    cx, cy, s = 108, 99, 0.73
    for k in range(8):
        a = math.radians(k * 45)
        d.line([(cx + math.sin(a) * 7 * s, cy - math.cos(a) * 7 * s), (cx + math.sin(a) * 29 * s, cy - math.cos(a) * 29 * s)], fill=PAPER, width=5)
    d.text((150, 74), 'lowob', font=font('Bold', 42), fill=PAPER)
    d.text((80, 182), kicker.upper(), font=font('SemiBold', 22), fill=LIME)
    f, lines, size = fit(d, title, 'Bold', 60 if body else 66, 1040, 3 if body else 4)
    y = 226
    for l in lines: d.text((80, y), l, font=f, fill=PAPER); y += int(size * 1.17)
    if body:
        y += 14
        fb, bl, bs = fit(d, body, 'Medium', 28, 1040, max(1, min(3, (520 - y) // 36)), 22)
        d.text((80, y), 'WHY IT MATTERS', font=font('SemiBold', 18), fill=LIME); y += 30
        for l in bl: d.text((80, y), l, font=fb, fill=(214, 214, 210)); y += int(bs * 1.3)
    d.line([(80, 548), (1120, 548)], fill=RULE, width=2)
    ff = font('Medium', 24)
    d.text((80, 572), foot_left, font=ff, fill=MUTED)
    d.text((1120 - d.textlength(foot_right, font=ff), 572), foot_right, font=ff, fill=MUTED)
    path.parent.mkdir(parents=True, exist_ok=True); im.save(path, optimize=True)


def set_og(page, img_url, alt):
    if not page.exists(): return
    h = page.read_text()
    for prop in ['property="og:image"', 'name="twitter:image"']:
        h = re.sub(rf'(<meta {prop} content=")[^"]*', r'\g<1>' + img_url, h)
    h = re.sub(r'(<meta property="og:image:alt" content=")[^"]*', r'\g<1>' + alt.replace('"', '&quot;'), h)
    page.write_text(h)


def main():
    ap = argparse.ArgumentParser(); ap.add_argument('--dist', default='dist'); ap.add_argument('--news', required=True); ap.add_argument('--gc', required=True)
    a = ap.parse_args(); dist = Path(a.dist)
    news = json.loads(Path(a.news).read_text())
    n = 0
    for it in news['items']:
        sid = it.get('id') or slugify(it['date'] + '-' + it['headline'])
        card(dist / 'news' / 'cards' / f'{sid}.png', f'News Desk  ·  {it["kind"]}  ·  {it["topic"]}', it['headline'], it['why'],
             f'Source: {it["source"]}', human(it['date'])); n += 1
    card(dist / 'news' / 'share.png', 'lowob News Desk', 'What changed. What it means.', None, 'lowob.com/news', human(news['updated']))
    set_og(dist / 'news' / 'index.html', 'https://lowob.com/news/share.png', 'lowob News Desk: what changed and what it means')
    # link each story to its card
    p = dist / 'news' / 'index.html'
    if p.exists():
        h = re.sub(r'<a class="news-card-link"[^>]*>.*?</a>', '', p.read_text())
        h = re.sub(r'(<li class="news-item" id="([^"]+)".*?<div class="news-links"><span>Our research</span>)',
                   lambda m: m.group(1).replace('<span>Our research</span>', f'<a class="news-card-link" href="/news/cards/{m.group(2)}.png" download>Share card (PNG)</a><span>Our research</span>'), h, flags=re.S)
        p.write_text(h)
    gc = json.loads((Path(a.gc) / 'deadlines.json').read_text())
    t = date.today(); year = str(t.year + 1 if t.month >= 10 else t.year)
    base = dist / 'research' / 'ground-control'
    pages = {'': ('Ground Control  ·  Beta', f'Get ahead of {year}.', 'Funding deadlines, events, regulatory dates and a directory for AI, Web3 and fundraising.'),
             'deadlines': ('Ground Control  ·  Funding deadlines', 'Grants, accelerators and pitch competitions, dated.', None),
             'events': ('Ground Control  ·  Events', 'The AI and crypto events worth the trip.', None),
             'regulation': ('Ground Control  ·  Regulation', 'The AI regulatory dates to watch.', None),
             'directory': ('Ground Control  ·  Directory', 'Funders, accelerators, events and vendors in one place.', None)}
    for sub, (k, t, b) in pages.items():
        out = (base / sub / 'share.png') if sub else (base / 'share.png')
        card(out, k, t, None, 'lowob.com/research/ground-control', 'Beta')
        set_og((base / sub / 'index.html') if sub else (base / 'index.html'), f'https://lowob.com/research/ground-control/{sub + "/" if sub else ""}share.png', t)
    print(f'cards: {n} story cards, News Desk and {len(pages)} Ground Control previews')


if __name__ == '__main__':
    main()
