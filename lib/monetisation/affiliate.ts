/**
 * Affiliate layer — leg 2 of the revenue model in docs/brand-and-site-plan.md.
 *
 * The firewall rule, which this module exists to make structurally true rather
 * than merely promised:
 *
 *   An offer may only be attached to an entity that has already been scored.
 *   Commission rate is stored here, NOT in the ratings data, and nothing in the
 *   editorial layer can read it. A reviewer cannot see what a link pays.
 *
 * Every outbound affiliate link is routed through `/go/[offerId]` so that the
 * disclosure, the rel attributes, and click accounting live in exactly one place.
 */

export interface Merchant {
  id: string;
  name: string;
  /** The affiliate network handling the relationship, shown in our disclosure. */
  network: "direct" | "awin" | "skimlinks" | "impact";
  /** Query parameter used to attribute the click. */
  tagParam: string;
  tagValue: string;
}

export interface Offer {
  id: string;
  /** Slug of the rated entity. An offer with no scorecard must not exist. */
  entity: string;
  productName: string;
  merchantId: string;
  /** Destination before attribution parameters are added. */
  url: string;
  price: string;
  /** When a human last confirmed the price. Shown so a stale figure is obvious. */
  priceChecked: string;
  /** Displayed so readers can see the score the recommendation rests on. */
  score: number;
  verdict: string;
  /** Why we picked it — one sentence, editorial voice, written before any link existed. */
  why: string;
}

const MERCHANTS: Merchant[] = [
  {
    id: "kadu-direct",
    name: "Kadu Wool Co.",
    network: "direct",
    tagParam: "ref",
    tagValue: "joinethically",
  },
  {
    id: "ridgeway-direct",
    name: "Ridgeway Mills",
    network: "direct",
    tagParam: "ref",
    tagValue: "joinethically",
  },
];

const OFFERS: Offer[] = [
  {
    id: "kadu-200-crew",
    entity: "kadu-wool-co",
    productName: "Kadu Wool Co. 200gsm merino crew",
    merchantId: "kadu-direct",
    url: "https://example-kadu.test/products/200-merino-crew",
    price: "£95",
    priceChecked: "2026-08-14",
    score: 92,
    verdict: "Recommended",
    why: "The only base layer in our test traceable to a single named farm, with grazing records published annually.",
  },
  {
    id: "ridgeway-lambswool-crew",
    entity: "ridgeway-mills",
    productName: "Ridgeway Mills lambswool crew",
    merchantId: "ridgeway-direct",
    url: "https://example-ridgeway.test/products/lambswool-crew",
    price: "£64",
    priceChecked: "2026-08-14",
    score: 84,
    verdict: "Recommended",
    why: "British-spun and warmer at the same weight, but Ridgeway buys at auction and cannot trace lots back to farms.",
  },
];

const OFFERS_BY_ID = new Map(OFFERS.map((o) => [o.id, o]));
const MERCHANTS_BY_ID = new Map(MERCHANTS.map((m) => [m.id, m]));

export function getOffer(id: string): Offer | undefined {
  return OFFERS_BY_ID.get(id);
}

export function getMerchant(id: string): Merchant | undefined {
  return MERCHANTS_BY_ID.get(id);
}

export function getAllOffers(): Offer[] {
  return OFFERS;
}

/** The on-site URL a reader actually clicks. Never link a merchant directly. */
export function offerHref(offerId: string): string {
  return `/go/${offerId}`;
}

/**
 * Build the outbound URL, appending attribution. Returns null when the offer or
 * merchant is unknown so the redirect route can 404 rather than guess.
 */
export function resolveOutboundUrl(offerId: string): string | null {
  const offer = OFFERS_BY_ID.get(offerId);
  if (!offer) return null;
  const merchant = MERCHANTS_BY_ID.get(offer.merchantId);
  if (!merchant) return null;

  try {
    const url = new URL(offer.url);
    url.searchParams.set(merchant.tagParam, merchant.tagValue);
    return url.toString();
  } catch {
    return null;
  }
}

/** The single canonical wording. Do not paraphrase it per-page. */
export const AFFILIATE_DISCLOSURE =
  "If you buy through this link we may earn a commission. It never affects a score, a ranking, or which products we choose to review — reviewers cannot see what a link pays.";
