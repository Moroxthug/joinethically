# JoinEthically

An independent editorial, ratings, and community platform for ethical products, ethical
companies, good living, and doing good — built on the `joinethically.com` domain.

- [`docs/brand-and-site-plan.md`](docs/brand-and-site-plan.md) — brand direction, site
  architecture, ratings methodology, and design system.
- [`docs/launch.md`](docs/launch.md) — what has to be true before the domain points here.
- [`docs/monetisation.md`](docs/monetisation.md) — the three revenue legs and the firewall
  between them and editorial.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # prerenders every article, category, author page, and OG image
npm run typecheck
```

No environment variables are required. Every integration (analytics, newsletter, payments)
degrades to an explicit "not configured" response rather than a broken flow, so the site
builds and serves fully without any accounts. See `.env.example`.

## What's here

- **The Journal** (`app/(site)/blog/`) — the editorial surface: a magazine index with a lead
  slot, river, and rails; article pages with a reading-progress bar, key takeaways, contents
  rail, drop cap, pull quotes, an open sources block, a corrections log, author card, and
  related reading; plus category and author landing pages.
- **Content layer** (`lib/content/`) — typed `Post` / `Author` / `Category` models with a
  structured block body. This stands in for the headless CMS and is shaped so each type maps
  1:1 onto a Sanity/Payload document when that lands. `posts.ts` is the archive.
- **Pillars** (`app/(site)/products`, `/companies`, `/good-living`, `/doing-good`, `/news`) —
  each now lists its real published work via a shared `PillarIndex`, with an honest note about
  the structured directory still to come.
- **Monetisation** (`lib/monetisation/`, `components/monetisation/`, `app/api/`) — membership
  tiers and Stripe-ready checkout/webhook, the affiliate registry and disclosure-bearing buy
  box behind a single `/go` redirect, the versioned ratings API for data licensing, and a
  provider-agnostic newsletter adapter.
- **Policy pages** — `/ethics` (standards, corrections, and every revenue stream including the
  refused ones), `/membership`, `/licensing`.
- **Launch infrastructure** — `sitemap.ts`, `robots.ts`, `/feed.xml`, JSON-LD helpers,
  generated OG images, 404 and error pages, security headers and a tight CSP in
  `next.config.mjs`, cookieless analytics, and a CI workflow running typecheck + build.
- **Studio** (`app/studio/`) — the editorial admin prototype: article editor with live preview
  and a People/Planet/Transparency scorecard, plus a drag-and-drop homepage organiser. State
  persists to `localStorage` only; excluded from `robots.txt`.
- **Design system** (`app/globals.css`, `app/blog.css`, `app/commerce.css`) — the token set
  (white/paper ground, verdigris + gold accents, serif/sans pairing) and every shared component
  class. Single-theme by design: white is a brand requirement, not a light-mode default.

## Not built yet

No CMS, no database, no auth, no member store, no real forum backend, no AI companion
integration. The photography in `public/images/` is generated placeholder work and must be
replaced before launch. `docs/launch.md` lists the gaps in full.
