# Research article design system — five-article pilot (Oct 2026)

Only these five published article files are changed. Changes live in a review branch, and are **not merged or deployed to production**.

- Accessible, mobile-scrollable HTML tables and reusable lowob-styled example/operator-note cards.
- Descriptive SEO metadata on the five pages (all other page metadata unchanged), synchronized with Open Graph, Twitter and Article JSON-LD.
- Verified related-article navigation and contextual contact CTA. Original article arguments, headers, dates and routes are otherwise preserved.
- KOL article: draft firsthand observation from Robert's prior wallet growth work, referencing approximately 155k MAUs achieved by the wider product/growth effort. **No claim of creator-specific incremental attribution.** Robert to edit and approve this wording.
- Programmatic article: **no Chris anecdote yet**; he and Claude will add a verified observation after review. Adlo sign-off required before changing or endorsing specialized CPM/rejection-rate claims.
- Distribution Diagnostic: retain the current 'Sounding' product name until Chris confirms whether that is The Read.
- The diagnostic, GTM and KOL pieces receive illustrative tables; the AI piece receives a labeled hypothetical case. These are editorial proposals for user/Chris review.

The shared builder now runs `applyResearchPilotEnhancements(dist)` before metadata normalization. This is deliberately idempotent and scoped, so re-running the build does not duplicate cards. `dist` page snapshots are committed because Cloudflare serves compiled static files. Styling is opt-in under `data-research-design="pilot-1"` in `dist/assets/refined.css`.

Run `node scripts/validate-research-pilot.mjs`, then existing site validations and a mobile/desktop visual review. Never merge until the copy, offer language, 155k attribution context and programmatic technical claims receive owner approval.