#!/usr/bin/env python3
"""Notify IndexNow (Bing, Yandex, Seznam, Naver and others; Bing feeds ChatGPT and Copilot search)
of new or changed lowob.com URLs. Run AFTER the site is live, so the key file is reachable.

  python3 indexnow.py --dist /path/to/lowob/dist                # every URL in sitemap.xml
  python3 indexnow.py --dist /path/to/lowob/dist --since 2026-11-16   # only URLs with lastmod on/after a date
  python3 indexnow.py --dist dist --only /news/ /research/what-is-sr-26-2/   # just these

The key file <key>.txt must be served at https://lowob.com/<key>.txt (it is in dist/).
"""
import argparse, json, re, urllib.request
from pathlib import Path

HOST = 'lowob.com'


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--dist', required=True)
    ap.add_argument('--since', help='YYYY-MM-DD; only URLs whose lastmod is on or after this date')
    ap.add_argument('--only', nargs='+', help='paths or full URLs to send instead of the sitemap, e.g. /news/ /research/what-is-sr-26-2/')
    ap.add_argument('--dry-run', action='store_true')
    a = ap.parse_args()
    dist = Path(a.dist)
    keys = [p for p in dist.glob('*.txt') if re.fullmatch(r'[0-9a-f]{32}', p.stem) and p.read_text().strip() == p.stem]
    if not keys:
        raise SystemExit('No IndexNow key file (32 hex characters, content equal to its name) found in dist/.')
    key = keys[0].stem
    sm = (dist / 'sitemap.xml').read_text()
    urls = []
    for loc, lastmod in re.findall(r'<loc>([^<]+)</loc>(?:<lastmod>([^<]+)</lastmod>)?', sm):
        if a.since and (not lastmod or lastmod[:10] < a.since):
            continue
        urls.append(loc)
    if a.only:
        urls = [u if u.startswith('http') else f'https://{HOST}' + (u if u.startswith('/') else '/' + u) for u in a.only]
    for extra in ([] if a.only else ['https://lowob.com/llms.txt', 'https://lowob.com/llms-full.txt', 'https://lowob.com/research/summaries.md', 'https://lowob.com/research/feed.xml', 'https://lowob.com/news/feed.xml']):
        if extra not in urls:
            urls.append(extra)
    body = {'host': HOST, 'key': key, 'keyLocation': f'https://{HOST}/{key}.txt', 'urlList': urls[:10000]}
    print(f'{len(body["urlList"])} URLs, key {key}')
    if a.dry_run:
        return
    req = urllib.request.Request('https://api.indexnow.org/indexnow', data=json.dumps(body).encode(),
                                 headers={'Content-Type': 'application/json; charset=utf-8'})
    with urllib.request.urlopen(req, timeout=60) as r:
        print('IndexNow response:', r.status, '(200 or 202 means accepted)')


if __name__ == '__main__':
    main()
