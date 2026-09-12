# Monetisation framework

This implements section 10 of `brand-and-site-plan.md`. The constraint that
governs every decision below: **on a site whose entire product is "you can trust
our ratings", any revenue stream that looks buyable is an existential risk.**

So the framework's job is not just to collect money. It is to make the firewall
between money and editorial *structurally true* — visible in the code, not only
promised on a policy page.

## The three legs

| Leg | Status in code | Earns when |
| --- | --- | --- |
| 1. Reader membership | Built, needs Stripe keys | Immediately |
| 2. Affiliate on already-scored products | Built, needs real programme links | Immediately |
| 3. Ratings-data licensing | API scaffolded at `v1` | Once coverage is real |

## 1. Membership — `lib/monetisation/membership.ts`

Three tiers (Reader free, Supporter £5/mo, Patron £15/mo), monthly or annual
with two months free. Prices live in code, not only in Stripe, so the pricing
page renders identically with no API keys and no network call.

- `app/(site)/membership/page.tsx` — pricing, the published cost base, FAQ.
- `components/monetisation/PricingTable.tsx` — interval toggle, checkout start.
- `app/api/checkout/route.ts` — creates a Stripe Checkout session. Answers
  **503 with a reason** when unconfigured rather than redirecting into a broken
  flow.
- `app/api/stripe/webhook/route.ts` — signature verification is mandatory;
  without it the endpoint would be an unauthenticated way to grant memberships.

**Nothing is paywalled.** Every rating and every investigation stays free.
Gating them would trade away the reach that makes the ratings useful and the
trust that makes them worth reading. Members get what costs us nothing to give:
early access, methodology notes, a members' room.

**To switch on:** create four prices in Stripe, set `STRIPE_SECRET_KEY`, the
four `STRIPE_PRICE_*` variables, and register the webhook endpoint.

**Still missing:** a member store. Checkout and webhooks work end to end, but
the webhook logs rather than persists. That is the next piece of work, and it is
only needed once there is something members-only to unlock.

## 2. Affiliate — `lib/monetisation/affiliate.ts`

The firewall, expressed as code rather than as a promise:

- An `Offer` must name an `entity` that already has a published scorecard. An
  offer for an unrated product cannot be represented in the type.
- Commission rates live in the merchant registry, **not** in ratings data, and
  nothing in the editorial layer imports it. A reviewer cannot see what a link
  pays.
- Every outbound link routes through `/go/[offerId]`, so the full list of
  commercial relationships is auditable in one file, attribution parameters are
  applied consistently, and switching or dropping a network never requires
  editing a published article.
- The redirect sends `Referrer-Policy: no-referrer` — the merchant does not
  learn which article the reader came from.
- `AFFILIATE_DISCLOSURE` is a single exported constant. It renders with every
  buy box and at the top of every article flagged `hasAffiliateLinks`. There is
  no per-page paraphrase to drift.

**To switch on:** replace the placeholder `.test` URLs in the `OFFERS` array
with real programme links and set the correct `tagParam`/`tagValue` per merchant.

## 3. Ratings-data licensing — `app/api/v1/ratings/[entity]/route.ts`

This is the long-term moat (it is Good On You's real business model), and the
reason it exists now, before there are customers, is that retrofitting a
licensable data shape onto a database designed only for page rendering is how
this revenue line gets postponed forever.

- Versioned at `/api/v1/` from day one.
- Licence terms travel in the payload's `meta`, not just in the docs.
- The public tier returns what a reader can already see, attribution required.
- The licensed tier is gated on `x-joinethically-key`. One shared key today;
  per-licensee keys need a store, same as memberships.
- `/licensing` documents the offer and restates the firewall: a licensee buys
  the data as published, and no influence, advance notice, or right of review.

## What is deliberately refused

Encoded in `/ethics` and in the CSP:

- **Programmatic display advertising.** `next.config.mjs` ships a CSP with
  `default-src 'self'` — there is no ad-tech origin allowed, so a tag could not
  be dropped in casually even if someone wanted to.
- **Paid placement, paid review, paid score review.**
- **Unlabelled sponsored content.**
- **Behavioural tracking.** Analytics are cookieless and aggregate, which is why
  the site has no consent banner.

## The funnel, in order of priority

1. **Newsletter** (`/api/newsletter`, provider-agnostic adapter). The owned
   audience. Worth wiring first even though it earns nothing directly — it is
   what membership converts from.
2. **Membership ask.** Placed once at the foot of an article and once mid-river
   on the index. Never a modal, never mid-sentence: a site whose pitch is that
   it does not interrupt you should not interrupt you to say so.
3. **Buy box**, only inside reviews, only for scored products.
4. **Licensing**, from `/licensing` and the API response itself.
