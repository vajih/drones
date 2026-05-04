# Changelog

## v3.0.0 — Cross-domain platform site

The v3 rebuild repositions the site from a single-page strategic announcement to a full bilingual platform site for the Sterling Autonomous Systems platform.

### Architecture
- Migrated from static `index.html` (preserved verbatim under [`legacy/`](./legacy)) to **Next.js 14 (App Router)** with TypeScript strict mode.
- Introduced full **bilingual EN / AR routing** under `/en` and `/ar`, with `next-intl` for messages and proper RTL handling for Arabic typography (IBM Plex Sans Arabic body, Noto Kufi Arabic display).
- Established **Tailwind CSS** design system on top of the v2 visual tokens (desert-brass `#c8a96a`, `#070708` ground, JetBrains Mono labels).

### Information architecture
- Replaced the v2 single-pager with twelve top-level routes:
  - `/` (home — cinematic cross-domain scene)
  - `/platform`, `/platform/manufacturing`
  - `/portfolio` (filterable) → `/portfolio/[family]` → `/portfolio/[family]/[slug]`
  - `/missions` (interactive mission × capability matrix)
  - `/strategy`, `/partnership`, `/leadership`
  - `/perspectives` → `/perspectives/[slug]`
  - `/press`, `/compliance`, `/engage`
- Catalogued **19 capabilities** across six families (Kinetic Effects, Counter-UAS, High-Altitude Vigilance, Maritime Autonomy, Ground Autonomy, Mobile Production), each with bilingual ConOps, design-target spec rows, and deployment posture.
- Authored **three long-form perspectives essays** in EN + AR.

### Engineering
- Choreographed motion via `framer-motion` (Reveal / Stagger primitives) with `prefers-reduced-motion` honored throughout.
- Replaced the planned WebGL hero with a **motion-driven SVG `CrossDomainScene`** (Arabian-peninsula-stylized topographic contours, three vector tracks for air / land / sea, mesh constellation) — accessible, sub-budget, and bandwidth-cheap.
- Engage flow with **Zod-validated API route**, in-memory rate limit, honeypot field, optional Resend dispatch.
- Sitemap, robots, security headers, dynamic metadata.

### Repositioning
- Removed all explicit KSA / sovereign-wealth-fund / specific-program partnership claims; reframed as **positioning to potentially partner** with regional sovereign programs.
- Foregrounded the **Integrated Dynamics** depth (active since 1997, the only Pakistani UAS firm with U.S. State Department export-license approvals).
- Strengthened the **Mobile / Dispersed Production** doctrine (M1–M5) as the platform's strategic moat.
- Preserved v2 sovereign-partnership disclaimer verbatim across both locales.

---

## v1.2 (legacy)
See [`legacy/v2-en.html`](./legacy/v2-en.html) and [`legacy/v2-ar.html`](./legacy/v2-ar.html).
