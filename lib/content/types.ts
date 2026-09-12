/**
 * The editorial content model.
 *
 * These types are deliberately shaped like a headless-CMS schema (see the
 * "Suggested tech stack" section of docs/brand-and-site-plan.md): every field
 * here should map 1:1 onto a Sanity/Payload document when the CMS lands, so the
 * page components never have to change. Until then, `posts.ts` is the "CMS".
 */

export type CategorySlug =
  | "news"
  | "products"
  | "companies"
  | "good-living"
  | "doing-good";

export interface Category {
  slug: CategorySlug;
  name: string;
  /** Short label used on cards and rails where `name` is too long. */
  shortName: string;
  description: string;
  /** Which accent the category colour system uses. */
  tone: "accent" | "gold";
}

export interface Author {
  slug: string;
  name: string;
  role: string;
  /** Two-letter monogram used by the avatar component. */
  initials: string;
  bio: string;
  /** Where readers can reach them — a real newsroom publishes this. */
  contact?: string;
  beats: string[];
}

/** Inline text supports a tiny subset of markdown: **bold**, *italic*, [link](/href). */
export type RichText = string;

export type Block =
  | { type: "para"; text: RichText; lead?: boolean }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: RichText; cite?: string }
  | { type: "list"; items: RichText[]; ordered?: boolean }
  | { type: "image"; src: string; alt: string; caption?: string; credit?: string }
  | { type: "callout"; title: string; body: RichText }
  | { type: "scorecard"; scorecard: Scorecard }
  /** Renders the affiliate buy box for a product in `lib/monetisation/partners.ts`. */
  | { type: "buybox"; offerId: string };

export interface Scorecard {
  entity: string;
  category: string;
  people: number;
  planet: number;
  transparency: number;
  /** Number of primary sources the score was assembled from. */
  sourceCount: number;
  lastVerified: string;
}

export interface Source {
  label: string;
  publisher?: string;
  href?: string;
  date?: string;
}

export interface Correction {
  date: string;
  note: string;
}

export interface Post {
  slug: string;
  title: string;
  /** The standfirst / deck: one sentence that earns the click honestly. */
  dek: string;
  category: CategorySlug;
  /** "Investigation", "Guide", "Review", "Essay", "Analysis" — shown as the eyebrow. */
  kind: "Investigation" | "Guide" | "Review" | "Essay" | "Analysis" | "Explainer";
  authorSlug: string;
  /** ISO date, used for sorting, <time> elements, sitemaps, and structured data. */
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  tags: string[];
  hero?: { src: string; alt: string; caption?: string; credit?: string };
  /** Bullet summary shown above the fold. Powerhouse newsrooms all ship one. */
  takeaways?: string[];
  body: Block[];
  /** The trust asset: what this piece was built from. */
  sources?: Source[];
  corrections?: Correction[];
  /** Lead story on the blog index. At most one post should set this. */
  featured?: boolean;
  /** Contributor piece rather than staff reporting — always labelled as such. */
  guest?: boolean;
  /** Set when the piece carries affiliate links, so the disclosure renders. */
  hasAffiliateLinks?: boolean;
  /** Members-only pieces render a paywall teaser instead of the full body. */
  memberOnly?: boolean;
}
