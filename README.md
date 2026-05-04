# Sterling Autonomous Systems — v3

A bilingual (EN / AR) Next.js 14 application for Sterling Autonomous Systems: a sovereign-defense platform positioning to partner with regional sovereign programs to design, deploy, and indigenize a full-stack unmanned-vehicle industry across air, land, and maritime domains.

> Sterling Autonomous Systems is a joint venture with Integrated Dynamics, operating as a DBA of Sterling Ridge Management LP.

---

## Stack

- **Framework:** Next.js 14 (App Router, TypeScript strict)
- **Styling:** Tailwind CSS 3.4
- **i18n:** `next-intl` 3.x · `/en` and `/ar` route segments · full RTL
- **Motion:** `framer-motion` (respects `prefers-reduced-motion`)
- **Fonts:** Inter, JetBrains Mono, IBM Plex Sans Arabic, Noto Kufi Arabic (via `next/font/google`)
- **Email:** `resend` (engage flow, optional via env)
- **Validation:** `zod`
- **Deploy:** Vercel (Frankfurt `fra1`)

---

## Local development

```bash
npm install
npm run dev          # http://localhost:3000 → redirects to /en
```

Production build:

```bash
npm run build
npm start
```

Lint:

```bash
npm run lint
```

---

## Project structure

```
src/
  app/
    [locale]/                  # /en + /ar route group
      layout.tsx               # fonts, RTL handling, NextIntlClientProvider
      page.tsx                 # home
      portfolio/               # capability catalog
        page.tsx               # filterable index
        [family]/page.tsx
        [family]/[slug]/page.tsx
      platform/page.tsx
      platform/manufacturing/page.tsx
      missions/page.tsx        # mission × capability matrix
      strategy/page.tsx
      partnership/page.tsx
      leadership/page.tsx
      perspectives/page.tsx
      perspectives/[slug]/page.tsx
      press/page.tsx
      compliance/page.tsx
      engage/page.tsx
    api/engage/route.ts        # Zod-validated, rate-limited, Resend-wired
    layout.tsx                 # root metadata
    page.tsx                   # redirects to /en
    sitemap.ts
    robots.ts
  components/
    site/                      # TopBar, BrandMark, LangToggle, Footer
    hero/cross-domain-scene.tsx
    motion/reveal.tsx          # Reveal · Stagger · StaggerItem
    portfolio/portfolio-grid.tsx
    engage/engage-form.tsx
  content/
    products.ts                # 19 products · EN/AR · spec rows
    perspectives.ts            # 3 long-form essays · EN/AR
    missions.ts                # mission × family matrix data
  i18n/
    request.ts
    messages/{en,ar}.json
  lib/i18n.ts                  # locale picker
  middleware.ts
  styles/globals.css           # design tokens preserved from v2
legacy/
  v2-en.html · v2-ar.html      # archived prior version (do not edit)
```

---

## Content authoring

### Products

Edit `src/content/products.ts`. The `Product` type is bilingual (`{ en, ar }` for every prose field). Mark numeric specs as `'design-target'` or `'tktk'` (pending Integrated Dynamics confirmation) — the UI surfaces these labels automatically.

### Perspectives essays

Edit `src/content/perspectives.ts`. Each essay has `title`, `dek`, and `body[]` paragraphs in both EN and AR.

### UI strings

Edit `src/i18n/messages/en.json` and `src/i18n/messages/ar.json`. Keep keys identical between locales.

---

## Environment

Copy `.env.example` to `.env.local`:

```bash
RESEND_API_KEY=                        # optional. Engage form silently no-ops without it.
ENGAGE_FROM=engage@sterlingautonomoussystems.com
ENGAGE_RECIPIENT=engagement@sterlingautonomoussystems.com
NEXT_PUBLIC_SITE_URL=https://sterlingautonomoussystems.com
```

---

## Deployment

```bash
npm run deploy   # vercel --prod
```

Domain DNS: see `PUNCHLIST.md`.

---

## Open items

See [`PUNCHLIST.md`](./PUNCHLIST.md). See [`CHANGELOG.md`](./CHANGELOG.md) for v2 → v3 deltas.
