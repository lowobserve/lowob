#!/usr/bin/env python3
"""Ground Control beta, built inside the research section from plain data files. Idempotent.

  python3 tools/ground_control.py --dist dist --data research-release-source/ground-control \
      --news research-release-source/news/news.json [--today YYYY-MM-DD]

Reads   deadlines.json (dated gates + always-open programmes), events.json, regulatory.json,
        directory.json (vendors covered by research) and the News Desk file.
Writes  /research/ground-control/            overview
        /research/ground-control/deadlines/  grants, accelerators, pitch competitions (the funding tracker)
        /research/ground-control/events/     events worth the trip
        /research/ground-control/regulation/ regulatory dates
        /research/ground-control/directory/  every funder, programme, organiser and vendor, organised automatically
        /research/ground-control/data/       CSV, JSON and ICS exports of everything
        the homepage Ground Control beta panel (real counts, next deadlines, links), a hub link on /research/,
        sitemap entries for the pages that pass the freshness rule.
Freshness rule: the deadlines page is indexed only when at least 80% of gates in the next 120 days were checked
against the funder's own page in the last 45 days. Otherwise it ships as noindex,follow with the beta banner.
To update: edit the JSON files, rerun, run scripts/verify-ground-control.mjs, deploy.
"""
import argparse, csv, html, io, json, re, shutil
from datetime import date, timedelta
from pathlib import Path

E = html.escape
MONTHS = 'January February March April May June July August September October November December'.split()
KINDS = {'grant': 'Grant', 'accel': 'Accelerator', 'pitch': 'Pitch competition', 'event': 'Event gate', 'research': 'Research deadline'}
CONFS = {'confirmed': 'Confirmed', 'estimated': 'Estimated', 'tba': 'Date not published'}
MARKETS = {'web3': 'Web3', 'ai': 'AI', 'both': 'AI and Web3', 'fintech': 'Fintech'}
BASE = '/research/ground-control/'
SITE = 'https://lowob.com'


def d(s): return date.fromisoformat(s)
def human(s): x = d(s); return f'{x.day} {MONTHS[x.month - 1]} {x.year}'
def short(s): x = d(s); return f'{x.day} {MONTHS[x.month - 1][:3]}'
def slug(s): return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')[:80]
def org_name(o): return re.split(r'\s*·\s*', o)[0].strip()


def load(p): return json.loads(Path(p).read_text())


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--dist', default='dist'); ap.add_argument('--data', required=True); ap.add_argument('--news', required=True)
    ap.add_argument('--today', default=date.today().isoformat())
    ap.add_argument('--homepage', action='store_true', help='also rebuild the homepage Ground Control panel (off by default; the homepage is left alone)')
    ap.add_argument('--css', default=str(Path(__file__).with_name('ground-control.css')))
    a = ap.parse_args()
    dist, src, today = Path(a.dist), Path(a.data), d(a.today)
    dl, ev, rg, dr, news = load(src / 'deadlines.json'), load(src / 'events.json'), load(src / 'regulatory.json'), load(src / 'directory.json'), load(a.news)
    gates = sorted(dl['items'], key=lambda x: (x['date'], x['name']))
    for g in gates:
        g['id'] = slug(g['date'] + '-' + g['name']); g['checked'] = g.get('checked', dl['checked'])
    upcoming = [g for g in gates if d(g['date']) >= today and g.get('status') != 'closed']
    closed = [g for g in gates if g not in upcoming]
    events = sorted(ev['items'], key=lambda x: (x['start'] or '9999', x['name']))
    for e in events: e['id'] = slug(e['name'])
    ev_up = [e for e in events if not e['start'] or d(e['start']) >= today - timedelta(days=3)]
    ev_past = [e for e in events if e not in ev_up]
    regs = rg['items']
    for r in regs: r['id'] = slug(r['when'] + '-' + r['what'][:40])
    stories = sorted(news['items'], key=lambda x: x['date'], reverse=True)
    for st in stories: st.setdefault('id', re.sub(r'[^a-z0-9]+', '-', (st['date'] + '-' + st['headline']).lower()).strip('-')[:70])
    YEAR = str(today.year + 1 if today.month >= 10 else today.year)  # the watch year: next year from October
    norm = lambda x: re.sub(r'[^a-z]+', '', re.sub(r'20\d\d', '', x.lower()))
    watch = ([{'date': g['date'], 'name': g['name'], 'tag': 'Funding' if g['kind'] in ('grant', 'accel', 'pitch') else 'Event', 'href': f'{BASE}deadlines/#{g["id"]}', 'conf': g['conf']} for g in upcoming if g['date'].startswith(YEAR) and not (g['kind'] == 'event' and any(norm(e['name']) in norm(g['name']) or norm(g['name']) in norm(e['name']) for e in events))]
             + [{'date': e['start'], 'name': e['name'], 'tag': 'Event', 'href': f'{BASE}events/#{e["id"]}', 'conf': 'confirmed'} for e in ev_up if (e['start'] or '').startswith(YEAR)]
             + [{'date': r['date'], 'name': r.get('title') or r['what'][:100], 'tag': 'Rule', 'href': f'{BASE}regulation/#{r["id"]}', 'conf': 'confirmed'} for r in regs if (r['date'] or '').startswith(YEAR)])
    watch.sort(key=lambda x: x['date'])
    STREAMS = 'AI, applied AI, Web3 and fundraising'

    # ---------- directory, organised automatically from every record
    ent = {}
    def add(name, typ, market, cat, link=None, research=None, url=None, desc=None):
        name = dr.get('aliases', {}).get(name, name)
        k = slug(name)
        e = ent.setdefault(k, {'name': name, 'types': set(), 'markets': set(), 'cats': set(), 'links': [], 'research': set(), 'url': url, 'desc': desc})
        if desc and not e.get('desc'): e['desc'] = desc
        e['types'].add(typ); e['markets'].add(market); e['cats'].add(cat)
        if link and link not in e['links']: e['links'].append(link)
        for r in research or []: e['research'].add(r)
        if url and not e['url']: e['url'] = url
    for g in gates:
        typ = 'Accelerator' if g['kind'] == 'accel' else 'Event organiser' if g['kind'] in ('event', 'pitch', 'research') else 'Funder'
        add(org_name(g['org']), typ, g['market'], KINDS[g['kind']], (f'{BASE}deadlines/#{g["id"]}', g['name']))
    for r in dl['rolling']:
        add(dr.get('rolling_funders', {}).get(r['name'], r['name']),
            'Accelerator' if r['kind'] == 'accel' else 'Funder', r['market'], 'Always-open programme', (f'{BASE}deadlines/#always-open', r['name']), url=r['url'])
    for e in events:
        add(e['name'], 'Event', e['market'], 'Event', (f'{BASE}events/#{e["id"]}', e['name']), [e['source'].strip('/').split('/')[-1]], e['url'] or None)
    for v in dr['items']:
        add(v['name'], 'Vendor', v['market'], v['category'], None, v['research'])
    for c in dr.get('companies', []):
        add(c['name'], 'Company', c['market'], c['category'], None, None, c.get('url'), c.get('description'))
    titles = {}
    def rtitle(s):
        if s not in titles:
            p = dist / 'research' / s / 'index.html'
            m = re.search(r'<h1[^>]*>(.*?)</h1>', p.read_text(), re.S) if p.exists() else None
            titles[s] = re.sub(r'<[^>]+>', '', m.group(1)).strip() if m else s
        return titles[s]
    for s in news['items']:
        for r in s['research']: rtitle(r)
    entities = sorted(ent.values(), key=lambda x: x['name'].lower())

    # ---------- shell from the research hub
    hub = (dist / 'research' / 'index.html').read_text()
    head_end = hub.index('</head>'); ws = hub.index('<div class="detail-workspace">') + len('<div class="detail-workspace">')
    foot = hub.index('<footer'); main_end = hub.index('</main>') + len('</main>')
    shutil.copy(a.css, dist / 'assets' / 'ground-control.css')
    css = '<link rel="stylesheet" href="/assets/news.css?v=gc"><link rel="stylesheet" href="/assets/ground-control.css?v=' + today.isoformat().replace('-', '') + '">'

    fresh_window = [g for g in upcoming if d(g['date']) <= today + timedelta(days=120)]
    fresh_ok = [g for g in fresh_window if d(g['checked']) >= today - timedelta(days=45)]
    deadlines_indexable = bool(fresh_window) and len(fresh_ok) / len(fresh_window) >= 0.8
    last_checked = max(g['checked'] for g in gates)
    n_fresh = sum(1 for g in gates + dl['rolling'] if g.get('checked', dl['checked']) == last_checked)

    def page(path, title, desc, h1, lead, body, ld_extra, index=True, crumb=None):
        url = SITE + path
        head = hub[:head_end]
        head = re.sub(r'<title>.*?</title>', f'<title>{E(title)} | lowob</title>', head)
        for prop in ['name="description"', 'property="og:description"', 'name="twitter:description"']:
            head = re.sub(rf'(<meta {prop} content=")[^"]*', r'\g<1>' + E(desc).replace('\\', '\\\\'), head)
        for prop in ['property="og:title"', 'name="twitter:title"']:
            head = re.sub(rf'(<meta {prop} content=")[^"]*', r'\g<1>' + E(title).replace('\\', '\\\\'), head)
        head = head.replace(f'{SITE}/research/"', url + '"')
        head = re.sub(r'<link rel="alternate"[^>]*>', '', head)
        head = re.sub(r'<style id="topic-select-css">.*?</style>', '', head, flags=re.S)
        head = re.sub(r'<meta name="robots" content="[^"]*">', f'<meta name="robots" content="{"index, follow" if index else "noindex, follow"}">', head)
        crumbs = [('Home', SITE + '/'), ('Research', SITE + '/research/'), ('Ground Control', SITE + BASE)] + ([(crumb, url)] if crumb else [])
        ld = {"@context": "https://schema.org", "@graph": [
            {"@type": "CollectionPage", "@id": url, "url": url, "name": title, "description": desc, "dateModified": today.isoformat(),
             "isPartOf": {"@type": "WebSite", "name": "lowob", "url": SITE + "/"}, "publisher": {"@type": "Organization", "name": "lowob", "url": SITE + "/"}},
            {"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": i + 1, "name": n, "item": u} for i, (n, u) in enumerate(crumbs)]}] + ld_extra}
        head += css + '<script type="application/ld+json">' + json.dumps(ld, ensure_ascii=False) + '</script>'
        tabs = [('', 'Overview'), ('deadlines/', 'Deadlines and grants'), ('events/', 'Events'), ('regulation/', 'Regulatory dates'), ('directory/', 'Directory')]
        nav = ''.join(f'<a href="{BASE}{p}"{" aria-current=\"page\"" if BASE + p == path else ""}>{n}</a>' for p, n in tabs)
        banner = (f'<div class="gc-banner"><span class="gc-chip-beta">BETA</span><p>Dates are checked against each funder\'s or organiser\'s own page and carry a flag: '
                  f'<b class="c-confirmed">confirmed</b>, <b class="c-estimated">estimated</b> from the last cycle, or <b class="c-tba">date not published</b>. '
                  f'Check the source before you apply. {n_fresh} of {len(gates) + len(dl["rolling"])} records checked on {human(last_checked)}; each row shows its own check date.</p>'
                  f'<a class="gc-banner-cta" href="/#ground-control-beta">Get alerts: join the beta</a></div>')
        hero = (f'<section class="detail-hero research-hero gc-hero"><span><strong>lowob</strong> GROUND CONTROL · BETA</span><h1>{h1}</h1><p>{lead}</p></section>'
                f'<nav class="gc-tabs" aria-label="Ground Control">{nav}</nav>{banner}')
        script = ('<script>(()=>{const now=new Date();now.setHours(0,0,0,0);document.querySelectorAll("[data-due]").forEach(el=>{const t=new Date(el.dataset.due+"T00:00:00");const n=Math.round((t-now)/864e5);'
                  'const c=el.querySelector(".gc-countdown");if(c)c.textContent=n<0?"closed":n===0?"today":n===1?"tomorrow":"in "+n+" days";if(n<0)el.classList.add("is-past");if(n>=0&&n<=30)el.classList.add("is-near")});'
                  'const bs=[...document.querySelectorAll("[data-gc-filter]")],rows=[...document.querySelectorAll("[data-gc-row]")],st=document.getElementById("gc-status");const f={};'
                  'function run(){let n=0;rows.forEach(r=>{const ok=Object.entries(f).every(([k,v])=>!v||(r.dataset[k]||"").split(" ").includes(v));r.hidden=!ok;if(ok)n++});'
                  'document.querySelectorAll("[data-gc-month]").forEach(m=>{m.hidden=![...m.querySelectorAll("[data-gc-row]")].some(r=>!r.hidden)});if(st)st.textContent=n+" shown"}'
                  'bs.forEach(b=>b.addEventListener("click",()=>{const k=b.dataset.gcFilter;f[k]=b.dataset.value;bs.filter(x=>x.dataset.gcFilter===k).forEach(x=>x.setAttribute("aria-pressed",String(x===b)));run()}));})();</script>')
        out = head + '</head>' + hub[head_end + 7:ws].replace('<body class="research-live"', '<body class="research-live gc-page"') + hero + body + hub[foot:main_end] + '<script src="/assets/clone.js?v=4" defer></script>' + script + '</body></html>'
        p = dist / path.strip('/'); p.mkdir(parents=True, exist_ok=True); (p / 'index.html').write_text(out)
        return index

    def filters(groups):
        out = ''
        for key, label, opts in groups:
            out += f'<div class="gc-filter" role="group" aria-label="{E(label)}"><span>{E(label)}</span><button type="button" data-gc-filter="{key}" data-value="" aria-pressed="true">All</button>'
            out += ''.join(f'<button type="button" data-gc-filter="{key}" data-value="{k}" aria-pressed="false">{E(v)}</button>' for k, v in opts)
            out += '</div>'
        return f'<div class="gc-filters">{out}<p id="gc-status" aria-live="polite"></p></div>'

    def gate_row(g):
        mk = g['market'] if g['market'] != 'both' else 'ai web3 both'
        return (f'<li class="gc-row" id="{g["id"]}" data-gc-row data-kind="{g["kind"]}" data-market="{mk}" data-conf="{g["conf"]}" data-due="{g["date"]}">'
                f'<div class="gc-date c-{g["conf"]}"><time datetime="{g["date"]}">{short(g["date"])}</time><span>{d(g["date"]).year}</span><em class="gc-countdown"></em></div>'
                f'<div class="gc-main"><h3><a href="{E(g["url"])}" target="_blank" rel="noopener">{E(g["name"])}</a></h3><p class="gc-org">{E(g["org"])}</p>'
                f'<p class="gc-chips"><span>{KINDS[g["kind"]]}</span><span class="c-{g["conf"]}">{CONFS[g["conf"]]}</span><span>{MARKETS[g["market"]]}</span>'
                + ('<span class="c-confirmed">Open now</span>' if g.get('status') == 'open' else '') + f'</p><p class="gc-detail">{E(g["detail"])}</p></div>'
                f'<div class="gc-side"><a href="{E(g["url"])}" target="_blank" rel="noopener">Source ↗</a><span>Checked {human(g["checked"])}</span></div></li>')

    def by_month(items, fn, key):
        out, cur = '', None
        for it in items:
            k = it[key][:7] if it.get(key) else 'tbc'
            if k != cur:
                if cur is not None: out += '</ol></section>'
                lab = f'{MONTHS[int(k[5:7]) - 1]} {k[:4]}' if k != 'tbc' else 'Date not announced'
                out += f'<section class="gc-month" data-gc-month><h2>{lab}</h2><ol class="gc-list">'; cur = k
            out += fn(it)
        return out + ('</ol></section>' if cur is not None else '')

    # ---------- deadlines (funding tracker)
    rolling = ''.join(f'<li class="gc-roll" data-gc-row data-kind="{r["kind"]}" data-market="{r["market"] if r["market"] != "both" else "ai web3 both"}" data-conf="rolling"><h3><a href="{E(r["url"])}" target="_blank" rel="noopener">{E(r["name"])}</a></h3>'
                      f'<p class="gc-org">{E(r["org"])}</p><p class="gc-amt">{E(r["amount"])}</p><p class="gc-detail">{E(r["detail"])}</p></li>' for r in dl['rolling'])
    body = (filters([('kind', 'Type', [(k, KINDS[k]) for k in ['grant', 'accel', 'pitch', 'event', 'research']]),
                     ('market', 'Market', [('ai', 'AI'), ('web3', 'Web3')]), ('conf', 'Date', list(CONFS.items()))])
            + f'<div class="gc-section">{by_month(upcoming, gate_row, "date")}</div>'
            + f'<section class="gc-section" id="always-open"><h2 class="gc-h2">Always open</h2><p class="gc-sub">No deadline to work against. Apply when ready.</p><ul class="gc-rollgrid">{rolling}</ul></section>'
            + f'<details class="gc-closed"><summary>Closed this cycle ({len(closed)})</summary><ol class="gc-list">{"".join(gate_row(g) for g in reversed(closed))}</ol></details>'
            + listing_box(f'{BASE}deadlines/', 'grant, accelerator or pitch competition') + downloads(['deadlines.csv', 'deadlines.json', 'deadlines.ics']))
    ld = [{"@type": "ItemList", "name": "Upcoming funding deadlines", "numberOfItems": len(upcoming),
           "itemListElement": [{"@type": "ListItem", "position": i + 1, "name": g['name'], "url": f'{SITE}{BASE}deadlines/#{g["id"]}'} for i, g in enumerate(upcoming)]}]
    idx_dead = page(f'{BASE}deadlines/', 'AI and Web3 Funding Deadlines: Grants and Accelerators',
                    f'{len(upcoming)} upcoming grant, accelerator and pitch competition deadlines for AI and Web3 founders, each with a date-confidence flag and source.',
                    'Funding deadlines.<br>Grants, accelerators, pitch competitions.',
                    f'{len(upcoming)} dated gates ahead and {len(dl["rolling"])} always-open programmes for AI and Web3 founders. Every date shows how sure we are of it and where it came from.',
                    body, ld, index=deadlines_indexable, crumb='Deadlines and grants')

    # ---------- events
    def ev_row(e):
        loc = {"@type": "Place", "name": e['where']}
        return (f'<li class="gc-row" id="{e["id"]}" data-gc-row data-market="{e["market"]}" ' + (f'data-due="{e["start"]}"' if e['start'] else '') + '>'
                f'<div class="gc-date"><time' + (f' datetime="{e["start"]}"' if e['start'] else '') + f'>{short(e["start"]) if e["start"] else "TBC"}</time><span>{d(e["start"]).year if e["start"] else ""}</span><em class="gc-countdown"></em></div>'
                f'<div class="gc-main"><h3>' + (f'<a href="{E(e["url"])}" target="_blank" rel="noopener">{E(e["name"])}</a>' if e['url'] else E(e['name'])) + f'</h3><p class="gc-org">{E(e["dates"])} · {E(e["where"])}</p>'
                f'<p class="gc-chips"><span>{MARKETS[e["market"]]}</span><span>Ranked #{e["rank"]}</span></p><p class="gc-detail"><b>Best for:</b> {E(e["best_for"])}. <b>Watch out:</b> {E(e["watch"])}</p></div>'
                f'<div class="gc-side"><a href="{e["source"]}">Why it ranks</a></div></li>')
    ev_ld = [{"@type": "Event", "name": e['name'], "startDate": e['start'], "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "eventStatus": "https://schema.org/EventScheduled", "location": {"@type": "Place", "name": e['where'], "address": e['where']}, **({"url": e['url']} if e['url'] else {})}
             for e in ev_up if e['start']]
    body = (filters([('market', 'Market', [('ai', 'AI'), ('web3', 'Web3')])]) + f'<div class="gc-section">{by_month(ev_up, ev_row, "start")}</div>'
            + (f'<details class="gc-closed"><summary>Already happened ({len(ev_past)})</summary><ol class="gc-list">{"".join(ev_row(e) for e in ev_past)}</ol></details>' if ev_past else '')
            + listing_box(f'{BASE}events/', 'event') + downloads(['events.csv', 'events.ics']))
    page(f'{BASE}events/', 'AI and Crypto Events Worth the Trip, 2026 to 2027', f'{len(ev_up)} AI and crypto events ranked for deal-making, with dates, venues, who each suits and what to watch for.',
         'Events worth the trip.', 'The AI and crypto events where deals get done, from our two rankings. Dates as organisers publish them; confirm before you book.', body, ev_ld, crumb='Events')

    # ---------- regulatory dates
    rrows = ''.join(f'<li class="gc-row" id="{r["id"]}" ' + (f'data-due="{r["date"]}"' if r['date'] else '') + f'><div class="gc-date"><time' + (f' datetime="{r["date"]}"' if r['date'] else '') + f'>{E(r["when"])}</time><em class="gc-countdown"></em></div>'
                    f'<div class="gc-main"><h3>{E(r.get("title") or r["what"])}</h3><p class="gc-org">Affects: {E(r["who"])}</p><p class="gc-detail">{E(r["what"])} <b>Do now:</b> {E(r["todo"])}</p></div>'
                    f'<div class="gc-side"><a href="{r["source"]}">Full analysis</a></div></li>' for r in regs)
    page(f'{BASE}regulation/', 'AI Regulatory Dates to Watch Through 2027', 'The AI regulatory dates that matter for financial and commercial teams through 2027, with who each affects and what to do now.',
         'Regulatory dates.', 'What changes, who it affects and what to do now, from our regulatory tracker. Undated items are listed where we expect them.',
         f'<ol class="gc-list gc-section">{rrows}</ol>' + downloads(['regulatory.csv']), [], crumb='Regulatory dates')

    # ---------- directory
    groups = {}
    for e in entities:
        t = 'Company' if 'Company' in e['types'] else 'Vendor' if 'Vendor' in e['types'] else 'Event' if e['types'] == {'Event'} else 'Accelerator' if 'Accelerator' in e['types'] else 'Event organiser' if e['types'] <= {'Event organiser', 'Event'} else 'Funder'
        groups.setdefault(t, []).append(e)
    order = [('Funder', 'Funders and grant programmes'), ('Accelerator', 'Accelerators and investors'), ('Event organiser', 'Pitch competitions and event gates'), ('Event', 'Events'), ('Vendor', 'Vendors our research ranks'), ('Company', 'Companies and protocols')]
    dbody = filters([('type', 'Type', [(slug(k), v) for k, v in order]), ('market', 'Market', [('ai', 'AI'), ('web3', 'Web3'), ('fintech', 'Fintech')])])
    for k, label in order:
        es = groups.get(k, [])
        if not es: continue
        cards = ''
        for e in es:
            mk = ' '.join(sorted({'ai', 'web3'} if 'both' in e['markets'] else e['markets']))
            links = ''.join(f'<a href="{u}">{E(n)}</a>' for u, n in e['links'][:6])
            res = ''.join(f'<a href="/research/{s}/">{E(rtitle(s))}</a>' for s in sorted(e['research']))
            cards += (f'<li class="gc-card" id="{slug(e["name"])}" data-gc-row data-type="{slug(k)}" data-market="{mk}"><h3>' + (f'<a href="{E(e["url"])}" target="_blank" rel="noopener">{E(e["name"])}</a>' if e['url'] else E(e['name'])) + '</h3>'
                      f'<p class="gc-chips">' + ''.join(f'<span>{E(c)}</span>' for c in sorted(e['cats'])) + '</p>'
                      + (f'<p class="gc-detail">{E(e["desc"])}</p>' if e.get('desc') else '')
                      + (f'<div class="gc-links"><span>Tracked</span>{links}</div>' if links else '') + (f'<div class="gc-links"><span>Our research</span>{res}</div>' if res else '') + '</li>')
        dbody += f'<section class="gc-section gc-dir" data-gc-month><h2 class="gc-h2">{label} <small>{len(es)}</small></h2><ul class="gc-cards">{cards}</ul></section>'
    dbody += listing_box(f'{BASE}directory/', 'product, programme or event') + downloads(['directory.csv'])
    page(f'{BASE}directory/', 'Ground Control Directory: AI and Web3 Funders, Events and Vendors',
         f'{len(entities)} funders, accelerators, events and vendors across AI, Web3 and fintech, each linked to its deadlines, events and lowob research.',
         'The directory.', f'{len(entities)} organisations, built automatically from every deadline, event and research ranking in Ground Control. Add a record anywhere and it appears here.',
         dbody, [], crumb='Directory')

    # ---------- overview
    nxt = upcoming[:6]
    def mini(items, fn): return '<ol class="gc-mini">' + ''.join(fn(x) for x in items) + '</ol>'
    quarters = ''
    for q in range(1, 5):
        items = [w for w in watch if (int(w['date'][5:7]) - 1) // 3 + 1 == q]
        quarters += (f'<section><h2 class="gc-h2">Q{q} {YEAR} <small>{len(items)}</small></h2><ol class="gc-mini">' + ''.join(
            f'<li data-due="{w["date"]}"><time datetime="{w["date"]}">{short(w["date"])}</time><a href="{w["href"]}">{E(w["name"])}</a><em class="gc-countdown"></em><b class="c-{w["conf"]}">{w["tag"]}</b></li>' for w in items) + '</ol></section>')
    ov = (f'<div class="gc-overview gc-watch">{quarters}</div>'
          f'<section class="gc-stats">'
          f'<a href="{BASE}deadlines/"><strong>{len([g for g in upcoming if d(g["date"]) <= today + timedelta(days=90)])}</strong><span>funding deadlines in the next 90 days</span></a>'
          f'<a href="{BASE}deadlines/#always-open"><strong>{len(dl["rolling"])}</strong><span>always-open programmes</span></a>'
          f'<a href="{BASE}events/"><strong>{len(ev_up)}</strong><span>events ahead</span></a>'
          f'<a href="{BASE}regulation/"><strong>{len(regs)}</strong><span>regulatory dates</span></a>'
          f'<a href="{BASE}directory/"><strong>{len(entities)}</strong><span>organisations in the directory</span></a>'
          f'<a href="/news/"><strong>{len(stories)}</strong><span>news stories with our read</span></a></section>'
          f'<div class="gc-overview">'
          f'<section><h2 class="gc-h2">Next deadlines</h2>' + mini(nxt, lambda g: f'<li data-due="{g["date"]}"><time datetime="{g["date"]}">{short(g["date"])}</time><a href="{BASE}deadlines/#{g["id"]}">{E(g["name"])}</a><em class="gc-countdown"></em><b class="c-{g["conf"]}">{CONFS[g["conf"]]}</b></li>') + f'<a class="gc-more" href="{BASE}deadlines/">All deadlines</a></section>'
          f'<section><h2 class="gc-h2">Next events</h2>' + mini([e for e in ev_up if e['start']][:5], lambda e: f'<li data-due="{e["start"]}"><time datetime="{e["start"]}">{short(e["start"])}</time><a href="{BASE}events/#{e["id"]}">{E(e["name"])}</a><em class="gc-countdown"></em><b>{E(e["where"])}</b></li>') + f'<a class="gc-more" href="{BASE}events/">All events</a></section>'
          f'<section><h2 class="gc-h2">Regulatory dates</h2>' + mini([r for r in regs if r['date'] and d(r['date']) >= today][:4], lambda r: f'<li data-due="{r["date"]}"><time datetime="{r["date"]}">{short(r["date"])} {r["date"][:4]}</time><a href="{BASE}regulation/#{r["id"]}">{E(r.get("title") or r["what"][:110])}</a><em class="gc-countdown"></em></li>') + f'<a class="gc-more" href="{BASE}regulation/">All regulatory dates</a></section>'
          f'<section><h2 class="gc-h2">Latest news</h2>' + mini(stories[:5], lambda s: f'<li><time datetime="{s["date"]}">{short(s["date"])}</time><a href="/news/#{s["id"]}">{E(s["headline"])}</a><b>{E(s["source"])}</b></li>') + '<a class="gc-more" href="/news/">News Desk</a></section>'
          f'</div><section class="gc-section gc-join"><h2 class="gc-h2">Get the alerts</h2><p>Beta members get a note when a deadline in their category opens, and a monthly Ground Control letter. No paid placement, ever.</p><a class="gc-banner-cta" href="/#ground-control-beta">Join the beta</a></section>'
          + downloads(['ground-control.json', 'deadlines.csv', 'deadlines.ics', 'events.csv', 'events.ics', 'regulatory.csv', 'directory.csv']))
    page(BASE, f'Ground Control: What to Watch in {YEAR} in AI, Web3 and Fundraising',
         f'The {YEAR} watchlist for {STREAMS}: funding deadlines, events, regulatory dates and a directory, each checked at the source. Ground Control by lowob, in beta.',
         f'Get ahead of {YEAR}.', f'Every deadline, event and rule change that will move {STREAMS} in {YEAR}, on one dated map. Mark your dates. Apply before the window closes. Every date is checked at the source.', ov, [])

    # ---------- exports
    out = dist / BASE.strip('/') / 'data'; out.mkdir(parents=True, exist_ok=True)
    def wcsv(name, rows, cols):
        buf = io.StringIO(); w = csv.DictWriter(buf, fieldnames=cols, extrasaction='ignore', lineterminator='\n'); w.writeheader(); w.writerows(rows); (out / name).write_text(buf.getvalue())
    wcsv('deadlines.csv', [dict(g, kind=KINDS[g['kind']], conf=CONFS[g['conf']], market=MARKETS[g['market']], status=g.get('status', 'closed' if g in closed else 'upcoming')) for g in gates] +
         [dict(r, date='', conf='Always open', kind=KINDS[r['kind']], market=MARKETS[r['market']], status='rolling', checked=dl['checked']) for r in dl['rolling']],
         ['date', 'name', 'org', 'kind', 'market', 'conf', 'status', 'detail', 'amount', 'url', 'checked'])
    (out / 'deadlines.json').write_text(json.dumps({'checked': last_checked, 'items': gates, 'rolling': dl['rolling']}, ensure_ascii=False, indent=1, default=str))
    wcsv('events.csv', events, ['start', 'dates', 'name', 'where', 'market', 'rank', 'best_for', 'watch', 'url', 'source'])
    wcsv('regulatory.csv', regs, ['when', 'date', 'what', 'who', 'todo', 'source'])
    wcsv('directory.csv', [{'name': e['name'], 'types': '; '.join(sorted(e['types'])), 'categories': '; '.join(sorted(e['cats'])), 'markets': '; '.join(sorted(e['markets'])), 'url': e['url'] or '', 'description': e.get('desc') or '',
                            'tracked': '; '.join(n for _, n in e['links']), 'research': '; '.join(f'{SITE}/research/{s}/' for s in sorted(e['research']))} for e in entities],
         ['name', 'types', 'categories', 'markets', 'description', 'url', 'tracked', 'research'])
    def ics(items, fn):
        lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//lowob//Ground Control//EN', 'CALSCALE:GREGORIAN', f'X-WR-CALNAME:{fn}']
        for it in items:
            s = it.get('date') or it.get('start')
            if not s: continue
            day = d(s).strftime('%Y%m%d'); nxt_day = (d(s) + timedelta(days=1)).strftime('%Y%m%d')
            desc = (it.get('detail') or f"{it.get('dates', '')} · {it.get('where', '')}").replace(',', '\\,').replace(';', '\\;')
            lines += ['BEGIN:VEVENT', f'UID:{it["id"]}@lowob.com', f'DTSTAMP:{today.strftime("%Y%m%d")}T000000Z', f'DTSTART;VALUE=DATE:{day}', f'DTEND;VALUE=DATE:{nxt_day}',
                      'SUMMARY:' + it['name'].replace(',', '\\,').replace(';', '\\;'), 'DESCRIPTION:' + desc[:600], f'URL:{it.get("url") or SITE + BASE}', 'END:VEVENT']
        return '\n'.join(lines + ['END:VCALENDAR']) + '\n'
    (out / 'deadlines.ics').write_text(ics(upcoming, 'lowob Ground Control: funding deadlines'))
    (out / 'events.ics').write_text(ics([e for e in ev_up if e['start']], 'lowob Ground Control: events'))
    (out / 'ground-control.json').write_text(json.dumps({'built': today.isoformat(), 'deadlines': gates, 'rolling': dl['rolling'], 'events': events, 'regulatory': regs,
        'directory': [{'name': e['name'], 'types': sorted(e['types']), 'categories': sorted(e['cats']), 'markets': sorted(e['markets']), 'url': e['url'], 'research': sorted(e['research'])} for e in entities],
        'news': stories}, ensure_ascii=False, indent=1))

    # ---------- homepage beta panel (opt-in with --homepage): real numbers, real links
    n90 = len([g for g in upcoming if d(g['date']) <= today + timedelta(days=90)])
    if a.homepage:
        hp = dist / 'index.html'; h = hp.read_text()
        m = re.search(r'<figure class="gc-product-preview[^"]*".*?</figure>', h, re.S)
        if not m: raise SystemExit('homepage Ground Control panel not found')
        n90 = len([g for g in upcoming if d(g['date']) <= today + timedelta(days=90)])
        conf_n = len([g for g in upcoming if g['conf'] == 'confirmed'])
        rows = ''.join(f'<li data-due="{w["date"]}"><time datetime="{w["date"]}">{short(w["date"])}</time><a href="{w["href"]}">{E(w["name"])}</a><b class="c-{w["conf"]}">{w["tag"]}</b></li>' for w in watch[:5])
        nf = len([w for w in watch if w['tag'] == 'Funding']); ne = len([w for w in watch if w['tag'] == 'Event']); nr = len([w for w in watch if w['tag'] == 'Rule'])
        fig = (f'<figure class="gc-product-preview gc-live" aria-labelledby="gc-preview-caption"><div class="gc-preview-chrome"><div class="gc-preview-browser"><i></i><i></i><i></i><span>GROUND CONTROL / BETA</span></div>'
               f'<div class="gc-preview-state"><i></i>UPDATED {human(today.isoformat()).upper()}</div></div><div class="gc-preview-shell"><aside class="gc-preview-rail"><div class="gc-preview-brand"><strong>groundcontrol</strong><span>by <strong>lowob</strong></span></div>'
               f'<span class="gc-preview-label">OPEN THE BETA</span><nav aria-label="Ground Control sections"><a class="active" href="{BASE}"><i></i><b>Overview</b></a><a href="{BASE}deadlines/"><i></i><b>Deadlines</b><span>{len(upcoming)}</span></a>'
               f'<a href="{BASE}events/"><i></i><b>Events</b><span>{len(ev_up)}</span></a><a href="{BASE}regulation/"><i></i><b>Regulation</b><span>{len(regs)}</span></a><a href="{BASE}directory/"><i></i><b>Directory</b><span>{len(entities)}</span></a><a href="/news/"><i></i><b>News Desk</b><span>{len(stories)}</span></a></nav>'
               f'<dl><div><dt>CONFIRMED DATES</dt><dd>{conf_n}</dd></div><div><dt>ALWAYS OPEN</dt><dd>{len(dl["rolling"])}</dd></div><div><dt>LAST CHECK</dt><dd>{short(last_checked).upper()}</dd></div></dl></aside>'
               f'<div class="gc-preview-main"><div class="gc-preview-dashboard"><header class="gc-preview-heading"><div><span>THE {YEAR} WATCHLIST</span><h3>Mark these dates.</h3><p>What opens, closes and changes next year in {STREAMS}.</p></div><div class="gc-preview-orbit" aria-hidden="true"><span></span><i></i></div></header>'
               f'<div class="gc-preview-metrics"><a href="{BASE}deadlines/"><span>FUNDING GATES {YEAR}</span><strong>{nf}</strong><small>grants, accelerators, pitches</small></a><a href="{BASE}events/"><span>EVENTS {YEAR}</span><strong>{ne}</strong><small>worth the trip</small></a><a href="{BASE}regulation/"><span>RULE CHANGES {YEAR}</span><strong>{nr}</strong><small>dated</small></a></div>'
               f'<ol class="gc-preview-next">{rows}</ol><a class="gc-preview-open" href="{BASE}">See all of {YEAR} <span aria-hidden="true">→</span></a></div></div></div>'
               f'<figcaption id="gc-preview-caption"><span>LIVE FROM THE BETA</span><span>GROUND CONTROL BY <strong>lowob</strong></span></figcaption><div class="gc-preview-corner corner-a"></div><div class="gc-preview-corner corner-b"></div></figure>')
        h = h[:m.start()] + fig + h[m.end():]
        h = re.sub(r'<p class="gc-entry-lead">.*?</p>', lambda _: f'<p class="gc-entry-lead">Every deadline, event and rule change that will move {STREAMS} in {YEAR}, on one dated map. Mark your dates. Apply early. Get the alert before each window closes.</p>', h, count=1, flags=re.S)
        h = re.sub(r'(<section class="gc-entry" id="ground-control-beta">.*?)<h2>.*?</h2>', lambda mm: mm.group(1) + f'<h2>Get ahead of {YEAR}.</h2>', h, count=1, flags=re.S)
        h = re.sub(r'(<form class="gc-beta-form".*?<button type="submit">)[^<]*(</button>)', lambda mm: mm.group(1) + 'Get the alerts' + mm.group(2), h, count=1, flags=re.S)
        h = re.sub(r'<a class="gc-entry-open"[^>]*>.*?</a>', '', h, flags=re.S)
        h = h.replace('<form class="gc-beta-form"', f'<a class="gc-entry-open" href="{BASE}">See what is coming in {YEAR} <span aria-hidden="true">→</span></a><form class="gc-beta-form"', 1)
        h = h.replace('<p class="gc-beta-note">Get beta access, launch notes, and selected intelligence drops.</p>', '<p class="gc-beta-note">Beta access, an alert when a window in your category opens, and the monthly Ground Control letter.</p>')
        if 'assets/ground-control.css' not in h: h = h.replace('</head>', '<link rel="stylesheet" href="/assets/ground-control.css?v=' + today.isoformat().replace('-', '') + '"></head>', 1)
        else: h = re.sub(r'/assets/ground-control\.css\?v=[0-9]+', '/assets/ground-control.css?v=' + today.isoformat().replace('-', ''), h)
        hp.write_text(h)

    # ---------- research hub link
    rh = dist / 'research' / 'index.html'; t = rh.read_text()
    t = re.sub(r'<!--gc-hub-->.*?<!--/gc-hub-->', '', t, flags=re.S)
    card = (f'<!--gc-hub--><a class="gc-hub-card" href="{BASE}"><span><strong>lowob</strong> GROUND CONTROL · BETA</span><strong>Get ahead of {YEAR}: the dates that move {STREAMS}</strong>'
            f'<em>{n90} deadlines in the next 90 days · {len(ev_up)} events · {len(entities)} organisations</em></a><!--/gc-hub-->')
    t = t.replace('<section class="research-library preview-research-library">', card + '<section class="research-library preview-research-library">', 1)
    if 'assets/ground-control.css' not in t: t = t.replace('</head>', '<link rel="stylesheet" href="/assets/ground-control.css?v=' + today.isoformat().replace('-', '') + '"></head>', 1)
    rh.write_text(t)

    # ---------- 'get listed' box on every ranked list in the research library
    LISTS = re.compile(r'^(top-\d+-|the-\d+-(?!ai-regulatory)|the-financial-data-providers)')
    nlist = 0
    for p in (dist / 'research').glob('*/index.html'):
        if not LISTS.match(p.parent.name): continue
        t = re.sub(r'<!--gc-listing-->.*?<!--/gc-listing-->', '', p.read_text(), flags=re.S)
        kind = 'event' if 'event' in p.parent.name else 'product or service'
        anchor = '<section class="kol-sources'
        if anchor in t:
            t = t.replace(anchor, listing_box(f'/research/{p.parent.name}/', kind) + anchor, 1); nlist += 1
            if 'assets/ground-control.css' not in t: t = t.replace('</head>', '<link rel="stylesheet" href="/assets/ground-control.css?v=' + today.isoformat().replace('-', '') + '"></head>', 1)
        p.write_text(t)

    # ---------- research portal navigation: Library · Ground Control (beta) · News Desk on every portal page
    _hub = (dist / 'research' / 'index.html').read_text()
    nart = len(re.findall(r'<a class="research-card"[^>]*data-library-card', _hub[_hub.find('id="library-all"'):])) or ''
    def rxnav(cur):
        items = [('/research/', 'Library', f'<span>{nart}</span>' if nart else ''), (BASE, 'Ground Control', '<em>BETA</em>'), ('/news/', 'News Desk', '')]
        return ('<!--rx-nav--><nav class="rx-nav" aria-label="Research portal">' + ''.join(
            f'<a href="{u}"' + (' aria-current="page"' if u == cur else '') + f'>{n}{x}</a>' for u, n, x in items) + '</nav><!--/rx-nav-->')
    targets = [(dist / 'research' / 'index.html', '/research/'), (dist / 'news' / 'index.html', '/news/')] + \
              [(q, BASE) for q in (dist / 'research' / 'ground-control').rglob('index.html')]
    for q, cur in targets:
        if not q.exists(): continue
        t = re.sub(r'<!--rx-nav-->.*?<!--/rx-nav-->', '', q.read_text(), flags=re.S)
        t = t.replace('<div class="detail-workspace">', '<div class="detail-workspace">' + rxnav(cur), 1)
        if 'assets/ground-control.css' not in t: t = t.replace('</head>', '<link rel="stylesheet" href="/assets/ground-control.css?v=' + today.isoformat().replace('-', '') + '"></head>', 1)
        q.write_text(t)

    # ---------- sitemap
    sm = dist / 'sitemap.xml'; s = sm.read_text()
    s = re.sub(r'\s*<url><loc>https://lowob\.com/research/ground-control/[^<]*</loc>(<lastmod>[^<]*</lastmod>)?</url>', '', s)
    pages = [BASE, f'{BASE}events/', f'{BASE}regulation/', f'{BASE}directory/'] + ([f'{BASE}deadlines/'] if idx_dead else [])
    s = s.replace('</urlset>', ''.join(f'  <url><loc>{SITE}{p}</loc><lastmod>{today.isoformat()}</lastmod></url>\n' for p in pages) + '</urlset>')
    sm.write_text(s)
    print(f'ground control: {len(upcoming)} upcoming + {len(closed)} closed gates, {len(dl["rolling"])} always open, {len(ev_up)} events, {len(regs)} regulatory dates, '
          f'{len(entities)} directory entries, listing box on {nlist} ranked lists; deadlines page {"indexed" if idx_dead else "noindex until re-verified"} ({len(fresh_ok)}/{len(fresh_window)} fresh)')


def listing_box(where, kind='product, programme or event'):
    return ('<!--gc-listing--><section class="gc-listing" aria-labelledby="gc-listing-h"><div><span>LISTED HERE, OR SHOULD BE?</span>'
            f'<h2 id="gc-listing-h">Tell us what is new.</h2><p>Building a {kind} that belongs here? Running a raise, a programme or a deadline founders should know about? Changed your pricing, terms or dates? Brief us and we will review it for the next update. '
            'We check every claim at the source, and listings are never paid for.</p></div>'
            '<form class="gc-listing-form" action="https://formspree.io/f/myeyngpb" method="POST">'
            '<input type="hidden" name="form_type" value="Listing submission"><input type="hidden" name="_subject" value="New listing submission">'
            f'<input type="hidden" name="page" value="{E(where)}">'
            '<label>Your email<input name="email" type="email" autocomplete="email" required placeholder="you@company.com"></label>'
            '<label>Company, programme or event<input name="listing" required placeholder="Name"></label>'
            '<label>What is it<select name="type"><option>Product or tool</option><option>Event</option><option>Grant or programme</option><option>Fundraising date or deadline</option><option>Something else</option></select></label>'
            '<label>Link<input name="link" type="url" placeholder="https://"></label>'
            '<label class="wide">What should we know?<textarea name="message" rows="3" required placeholder="What it does, what changed, dates or terms, and where we can verify it"></textarea></label>'
            '<button type="submit">Send for review</button></form></section><!--/gc-listing-->')


def downloads(files):
    return ('<section class="gc-downloads"><h2 class="gc-h2">Download the data</h2><p>Free to use with a link back. CSV for spreadsheets, ICS for your calendar, JSON for code.</p><div>'
            + ''.join(f'<a href="/research/ground-control/data/{f}" download>{f}</a>' for f in files) + '</div></section>')


if __name__ == '__main__':
    main()
