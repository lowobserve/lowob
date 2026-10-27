# lowob

Lowob website source migrated from ChatGPT Sites for deployment through the
existing Cloudflare Worker.

## Deployment source

- Deploy the prebuilt static files in `dist/`.
- No framework build step is required.
- `main` is the branch connected to the existing Cloudflare deployment.
- Verify changes at `https://lowob.chris-211.workers.dev/` before changing the
  `lowob.com` DNS or custom-domain configuration.

The source-generation and validation utilities are stored in `scripts/`. Run
`node scripts/validate-refined-site.mjs` before deployment.

## October 2026 research release

The release branch contains 133 new articles alongside the original 33. The
public manifest in `scripts/research-release.mjs` supplies hub labels and dates;
published article HTML in `dist/research/` remains authoritative during rebuilds.
The homepage uses the three approved editorial headlines, while 88 article
heads use the supplied search titles.

Run these checks before publication:

```sh
node scripts/test-site-meta.mjs
node scripts/validate-refined-site.mjs
node scripts/site-meta.mjs --site dist --report /tmp/lowob-site-meta-report.md
```

`site-meta.mjs --fix` only normalizes public page heads. It retains intentional
robots directives and excludes noindex/private/preview pages from sitemap.xml
and llms.txt. Supply `--modified-at` only for a real update, using its actual ISO
UTC timestamp; publication dates remain separate. Unknown sitemap modification
dates are omitted. Every research article has its own social image.

The full generator retains existing research pages and can rebuild the merged
hub without losing the new articles or search titles. The validator checks the
original body hashes, supplied release-body hashes, all publication dates,
search titles, Article/FAQ schemas, local links, and public indexing policy.

Only tracked `dist/` is published. Never add internal `content/`, `data/`, package
notes, metadata reports, backup files, or the local-only `_review/` mobile review
surface to deployment assets. Production remains on the existing Cloudflare
integration; this release must receive preview approval before merging to main.
Cloudflare account/build settings must be verified before that production step.
