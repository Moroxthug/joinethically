# JoinEthically

An independent editorial, ratings, and community platform for ethical products, ethical
companies, good living, and doing good — built on the `joinethically.com` domain.

See [`docs/brand-and-site-plan.md`](docs/brand-and-site-plan.md) for the brand direction, site
architecture, ratings methodology, revenue model, and design system this app implements.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
```

`npm run build && npm run start` for a production build.

## What's here

- **Public site** (`app/(site)/`) — homepage, and one page per pillar (Products, Companies,
  Good Living, Doing Good, News, Forum). Shares a header/footer via `app/(site)/layout.tsx`.
- **Studio** (`app/studio/`) — the editorial admin tool: an article editor with a live preview
  and a People/Planet/Transparency scorecard, and a drag-and-drop homepage organiser with layout
  templates. Deliberately outside the `(site)` route group, so it doesn't inherit the marketing
  header/footer. State currently persists to `localStorage` only — no backend yet.
- **Design system** (`app/globals.css`) — the full token set (white/paper background, verdigris +
  gold accents, serif/sans pairing) and every shared component class. The site is intentionally
  single-theme (no dark mode): white is a brand requirement, not a light-mode default.
- **Logo** (`components/Logo.tsx`) — the `Join`/`Ethically` wordmark, kept as the site's default
  logo. Used in the header, footer, and Studio's sidebar so it never drifts.
- Generated placeholder photography lives in `public/images/`; swap for real photography before
  launch.

## Not built yet

Everything here is static/mocked — no CMS, no database, no auth, no real forum backend, no AI
companion integration. The pillar pages (`/products`, `/companies`, etc.) are placeholders pointing
back at the homepage content until the real directories are built. See the plan doc's phased
roadmap for what's next.
