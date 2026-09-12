# Going live

What has to be true before `joinethically.com` points at this app, in the order
it has to be true. Nothing in this list requires code changes — the build
succeeds today with none of it configured, and every integration degrades to an
honest message rather than a broken flow.

## 1. Hosting

The app is a standard Next.js App Router build with no platform-specific APIs,
so any Node host works:

```bash
npm ci
npm run build
npm run start      # listens on $PORT, default 3000
```

Vercel is the lowest-friction option (zero config; the RSS route, sitemap, OG
images, and API routes all map onto its primitives). A Node container behind a
CDN works identically — see `node_modules/next/dist/docs/01-app/01-getting-started/17-deploying.md`
for the self-hosting variants, including `output: "standalone"` for Docker.

Everything except the five API/redirect routes prerenders at build time, so the
origin serves mostly static files.

## 2. Environment

Copy `.env.example` and set, at minimum:

| Variable | Why |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap, RSS, OG tags — **and the indexing switch**. Indexing is opt-in: `robots.txt` allows crawling, and pages carry `index,follow`, only when this exactly equals `https://joinethically.com`. Leave it unset on previews, staging, and local runs so they can never compete with production in search. |

Everything else can wait. The site is fully readable without analytics, a
mailing list, or payments.

## 3. DNS and TLS

- `joinethically.com` and `www.joinethically.com` → the host, with `www`
  redirecting to the apex (or the reverse — pick one and make the other a 301).
- HSTS is already sent by `next.config.mjs` with `preload`. Do **not** submit to
  the preload list until you are certain every subdomain will be HTTPS forever.

## 4. Search and syndication

Already built, nothing to configure:

- `/sitemap.xml` — every article, category, author page, and static page.
- `/robots.txt` — blocks `/api/`, `/go/`, `/studio`, and the post-checkout page.
- `/feed.xml` — full RSS.
- JSON-LD on every page: `NewsMediaOrganization`, `WebSite`, `NewsArticle` /
  `Article`, `BreadcrumbList`, `ProfilePage`.
- Open Graph images generated per article at build time.

After launch: submit the sitemap in Google Search Console and Bing Webmaster
Tools, and verify the `NewsMediaOrganization` block resolves in the Rich Results
test — the `ethicsPolicy` / `correctionsPolicy` fields are what let an outlet
claim editorial standards in a machine-readable way.

## 5. Analytics

Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`. This is deliberately cookieless and
aggregate: it keeps the promise on `/ethics`, removes the need for a consent
banner entirely, and means no third party is profiling readers of a site whose
whole pitch is that it isn't for sale.

## 6. Monetisation (see docs/monetisation.md)

In the order they should be switched on:

1. **Newsletter** — one provider key. This is the owned audience everything
   else converts from, so wire it first even though it earns nothing directly.
2. **Membership** — Stripe keys plus four price IDs.
3. **Affiliate** — replace the placeholder merchant URLs in
   `lib/monetisation/affiliate.ts` with real programme links.
4. **Ratings licensing** — not before the apparel database has real coverage.

## 7. Pre-launch checklist

- [ ] `npm run typecheck && npm run build` clean (CI runs both on every push).
- [ ] `NEXT_PUBLIC_SITE_URL` set in production, unset in preview.
- [ ] `/robots.txt` on production allows crawling; on preview it returns `Disallow: /` (check this after the first deploy — it is the one setting that silently costs traffic if wrong in either direction).
- [ ] Replace the generated placeholder photography in `public/images/` with
      licensed or commissioned images, and update the `credit` fields in
      `lib/content/posts.ts` to match.
- [ ] Legal pages beyond `/ethics`: privacy notice, terms, cookie statement
      (short, because there are no cookies to declare).
- [ ] Decide the `www` vs apex canonical and set the redirect.
- [ ] Stripe in live mode, with the webhook endpoint registered at
      `/api/stripe/webhook` and `STRIPE_WEBHOOK_SECRET` set from that endpoint.
- [ ] Confirm `/go/[offerId]` redirects resolve with the real affiliate tags
      before any article carrying one is published.

## Known gaps at launch

Stated plainly so nobody discovers them in production:

- **No CMS.** `lib/content/posts.ts` is the archive. Publishing means a commit.
  The types are shaped to map onto Sanity/Payload documents when that lands.
- **No member store.** Stripe checkout and the webhook work end to end, but
  there is nowhere to persist a membership yet, so nothing is actually gated —
  which is fine, because nothing is meant to be gated at launch.
- **No forum backend.** `/forum` is still a mock.
- **`/studio` persists to `localStorage` only** and is excluded from robots.
- **OG images render in a sans fallback.** Satori has no access to the site's
  serif stack, so the generated cards use the default sans. Fixing it means
  shipping a licensed serif as a font buffer to `ImageResponse` — do it at the
  same time as the production type licence.
- **CSP allows `'unsafe-inline'` for scripts**, because Next inlines its
  bootstrap. Tightening that needs a nonce and a proxy — worth doing, not a
  launch blocker.
