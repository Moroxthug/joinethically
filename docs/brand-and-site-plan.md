# JoinEthically — Brand & Site Plan

Status: early direction, for discussion. Not yet implemented.

## 1. Premise

`joinethically.com` was acquired at auction; it was previously Jade McLean's startup before it
rebranded to Groflo. We're not reviving the old product — we're using the domain and name to build
something new: an independent editorial + ratings + community platform about living, buying, and
doing business ethically.

## 2. Positioning

**What it is:** A single home for "how do I act ethically" questions — what to buy, who to buy it
from, how to be a better person day-to-day, and where to put time or money to do real good.

**What it is not:** Not a marketplace (we don't sell anything ourselves), not a green-washed brand
partner content mill, not preachy. The trust asset is editorial independence — ratings and
recommendations that read as earned, not purchased.

**Closest comparables** (researched for direction, not to copy):
- [Good On You](https://goodonyou.eco) — fashion brand ratings, 1–5 scale across people/planet/animals, ~1,000 data points per brand. Strong ratings methodology, weak on general editorial/community.
- [The Good Trade](https://www.thegoodtrade.com) — soft editorial design, in-house review team, lifestyle-magazine feel. Strong tone and design, thin on structured ratings and no community.
- [Ethical Consumer](https://theethicalconsumer.info) — deep, structured ratings across many product categories; UK-focused, utilitarian design, dated UX.
- Wirecutter — the model for "editor tested, one clear pick" product review architecture, applied here to ethics instead of pure performance.

JoinEthically's gap to fill: combine Good On You's rigor, The Good Trade's editorial warmth, and
add two things none of them have — a real community forum, and an AI layer that sources claims and
surfaces related coverage in real time.

## 3. Information architecture — six pillars

1. **Ethical Products** — reviewed and scored items across fashion, home, beauty, tech, food.
   Structured like Wirecutter: one clear recommendation per need, full scorecard underneath.
2. **Ethical Companies** — brand/company scorecards built from disclosures, certifications, labor
   and environmental records. Scores move when evidence changes (versioned, dated).
3. **Good Living** — personal ethics and daily-life guidance: money, food, relationships, habits.
   The "being a good person" category, made practical rather than preachy.
4. **Doing Good** — vetted charities, giving guides, volunteering, causes. Think Charity
   Navigator's rigor with magazine-style presentation.
5. **News & Investigations** — original reporting plus a curated daily digest of the ethics /
   sustainability / accountability stories that matter. This is the traffic engine.
6. **Forum** — reader Q&A and discussion, with an AI companion that footnotes claims, flags
   unverified statements, and links back to the site's own reporting and ratings.

Cutting across all six: **Editor's Picks of the month** (a curated shortlist, not a leaderboard)
and **Guest posts** (labeled contributor essays — practitioners, whistleblowers, small ethical
business owners — clearly distinguished from staff reporting and from any sponsored content).

## 4. Ratings methodology (proposal)

A single JoinEthically Score (0–100) per product/company, built from three sub-scores:
- **People** — labor practices, wages, safety, supply-chain audits
- **Planet** — emissions, materials, waste, water
- **Transparency** — how much the entity discloses, and how well its claims survive fact-checking

Sourced from primary evidence (certifications, disclosures, audits, journalism) rather than brand
self-reporting, with a visible "sourced from N disclosures, last verified [date]" line on every
scorecard — this is the credibility mechanism and should never be hidden behind a tooltip.
Verdict band (e.g. Avoid / Improving / Recommended / Exceptional) sits alongside the number so the
score is legible at a glance, matching Good On You's "We Avoid → Great" pattern but with the
sourcing exposed, which none of the comparables do well.

## 5. Design direction

Full direction is expressed as a working homepage mockup (see artifact delivered alongside this
plan). Summary of the system:

- **Palette:** nameable, not a gradient — paper white ground (`#faf9f6`), near-black ink
  (`#191b17`), a considered deep verdigris-green accent (`#2f6f5e`) for trust/interactive elements,
  and a muted gold (`#b9822e`) reserved for editorial signals (Editor's Picks, guest-post tags,
  ratings emphasis). Deliberately avoids both the "eco bright green" cliché and the "warm
  cream + terracotta" AI-generated-blog cliché.
- **Type:** literary serif (Iowan Old Style / Palatino / Georgia stack, upgrade to a licensed
  serif such as Canela or GT Sectra in production) for headlines and editorial voice; clean
  system sans for UI, captions, and data, so ratings and numbers stay legible and utilitarian
  against the editorial voice of headlines.
  contra the "warm" editorial layer.
- **Layout:** magazine homepage — asymmetric hero (lead investigation + Editor's Picks rail),
  hairline-divided pillar grid, a real scorecard component (not just stars), guest-post strip,
  and a forum preview panel that visibly shows the AI companion's role (sourcing and flagging
  claims — assistive, not a chatbot gimmick).
- Full light/dark token system; production build should support both.

## 6. AI-assisted forum, scoped

- **Not** an open-ended chatbot bolted onto a generic forum.
- Concrete jobs: (1) surface related site coverage/ratings when a thread mentions a product or
  claim, (2) flag unverified or contested claims in replies with a link to sourcing, (3) summarize
  long threads, (4) route questions to the right pillar/editor when unanswered.
- Every AI reply is visually distinct and labeled, and always cites or links rather than asserting
  bare opinions — this protects the site's core asset (perceived independence/trust).

## 7. Content operations

- Staff editors own the rating methodology and Editor's Picks; guest posts go through a lightweight
  editorial review and are labeled distinctly from staff reporting.
- Sponsored/affiliate content (if any) must be clearly labeled — this is non-negotiable for a site
  whose entire value proposition is trustworthy, non-brand-captured recommendations.
- Suggested cadence: 2–3 news/investigation pieces per week, 1 new company or product scorecard
  batch per week, monthly Editor's Picks, guest posts as they come in (target 2/month at launch).

## 8. Suggested tech stack

- **Frontend:** Next.js (App Router), static/ISR for editorial content, React for interactive
  scorecards and forum.
- **CMS:** headless (Sanity or Payload) so editors can publish without touching code; content
  models for Article, ProductReview, CompanyScorecard, GuestPost, EditorsPick.
- **Ratings data:** structured schema (JSON per entity) versioned so score history is queryable —
  needed for the "score moves when evidence changes" promise.
- **Forum:** could start on a proven open-source base (e.g., Discourse) embedded/skinned to match,
  rather than building a forum engine from scratch, with the AI companion as a bot integration
  posting into threads via webhook — much faster to a credible v1 than a bespoke forum.
- **Search:** Algolia or Meilisearch across articles + ratings.
- **Auth:** simple email/social login for forum + newsletter, gated only where needed (rating
  browsing should stay open — SEO and trust depend on it being publicly readable).

## 9. Phased roadmap

- **Phase 1 — MVP:** Editorial site live (News, Good Living, Doing Good pillars), first 50–100
  product/company scorecards, newsletter, no forum yet. Goal: prove the voice and the ratings
  methodology.
- **Phase 2 — Community signal:** Guest posts pipeline, Editor's Picks monthly cadence formalized,
  first company/brand outreach for factual right-of-reply on scorecards.
- **Phase 3 — Forum + AI:** Launch forum (likely on Discourse or similar), ship the AI companion
  scoped to sourcing/flagging/summarizing as above.
- **Phase 4 — Scale the ratings database:** Expand category coverage, add score-change alerts
  ("this brand's score dropped — here's why"), explore an API/widget so other sites can embed
  JoinEthically scores (this is Good On You's actual moat and worth targeting later).

## 10. Open questions for the founder

- Category priority for launch — fashion/beauty first (largest existing comparable audience) or
  broader from day one?
- Revenue model — newsletter/membership, non-brand-conflicted affiliate links on Products, or ad
  supported? This has real design and editorial-independence implications.
- Forum: build vs. embed a proven engine (recommend embed for speed to credible v1).
