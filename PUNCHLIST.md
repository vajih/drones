# Punchlist

Open items required to take v3 from launch-quality to fully production-hardened. None block initial deploy.

## Content

- **Integrated Dynamics principal biographies.** `LeadershipPage` currently ships only the founder bio. Replace the `idP` placeholder copy with named principals once Integrated Dynamics confirms.
- **Real product photography.** Product pages currently render without imagery. When official Integrated Dynamics photography becomes available, populate `public/products/<slug>.jpg` and add `<Image>` blocks to `src/app/[locale]/portfolio/[family]/[slug]/page.tsx`.
- **Capability brief PDF.** Wire the home / partnership "Capability Brief" CTA to a gated download once the brief is approved. Place the PDF under `public/brief/sas-capability-brief.pdf` and gate behind the `/api/brief` route (route file pending).
- **Press releases.** `/press` currently shows only the press contact. Add 2–3 release teasers under `src/content/press.ts` once approved.
- **`tktk` spec rows.** The `parameters` arrays in [`src/content/products.ts`](./src/content/products.ts) carry `status: 'tktk'` markers on items pending Integrated Dynamics confirmation. Update to `'design-target'` once confirmed.

## Operations

- **Domain DNS.** Point `sterlingautonomoussystems.com` (and `www`) at Vercel. Update `NEXT_PUBLIC_SITE_URL` in production env.
- **Resend API key.** Provision a production Resend domain and key, set `RESEND_API_KEY`, `ENGAGE_FROM`, `ENGAGE_RECIPIENT` in Vercel project env. Without it, the engage form returns a successful response but no email is dispatched.
- **Rate-limit backend.** The current rate limiter is in-memory per Lambda — sufficient at low traffic but resets per cold start. Replace with Vercel KV / Upstash Redis at scale.

## Legal & compliance

- **ITAR / EAR review.** `/compliance` content reflects the platform's intended posture but should be validated by the U.S. export-control attorney of record before public launch.
- **Joint-venture entity confirmation.** Footer language describes the JV with Integrated Dynamics and DBA-of-Sterling-Ridge structure. Confirm with counsel that the structure is documented and authorized.

## Engineering polish

- **Per-product OG cards.** Wire `@vercel/og` for `/api/og/[...slug]/route.tsx` so that each product page generates a unique social-share card.
- **Lighthouse / axe audit.** Run on production build before launch. The architecture targets ≥ 95 across all four Lighthouse pillars and zero serious axe findings, but this has not been measured in this environment.
- **Three.js hero (optional).** v3 ships with a motion-driven SVG hero. If a future budget allows, swap in a Three.js scene under `src/components/hero/` while retaining the SVG as the `prefers-reduced-motion` fallback.
- **Schema.org Organization markup.** Add JSON-LD to root layout once entity attributes are finalized.
