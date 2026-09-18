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
