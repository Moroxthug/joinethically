/**
 * Membership — leg 1 of the revenue model, and the one the brand rests on:
 * revenue from the readers the ratings serve rather than the brands being rated.
 *
 * Prices live here rather than in Stripe alone so the pricing page renders
 * identically without network access or API keys. The Stripe price IDs are read
 * from the environment, which keeps the repository free of account-specific ids
 * and lets test/live modes differ without a code change.
 */

export type TierId = "reader" | "supporter" | "patron";

export interface Tier {
  id: TierId;
  name: string;
  /** Monthly price in pence. 0 = free. */
  monthly: number;
  /** Annual price in pence — two months free, stated plainly rather than as a %. */
  annual: number;
  pitch: string;
  benefits: string[];
  /** Env var holding the Stripe price ID, when the tier is paid. */
  monthlyPriceEnv?: string;
  annualPriceEnv?: string;
  highlight?: boolean;
}

export const TIERS: Tier[] = [
  {
    id: "reader",
    name: "Reader",
    monthly: 0,
    annual: 0,
    pitch: "Everything that makes the site worth trusting, free and un-gated.",
    benefits: [
      "Every rating and scorecard, in full",
      "Every investigation and guide",
      "The weekly email",
      "No tracking, no ad targeting, no consent banner",
    ],
  },
  {
    id: "supporter",
    name: "Supporter",
    monthly: 500,
    annual: 5000,
    pitch: "Funds the reporting. The most common way readers back us.",
    benefits: [
      "Everything in Reader",
      "Investigations 48 hours early",
      "The methodology notes behind each score change",
      "Members-only forum room",
      "Your name in the annual funding report, if you want it",
    ],
    monthlyPriceEnv: "STRIPE_PRICE_SUPPORTER_MONTHLY",
    annualPriceEnv: "STRIPE_PRICE_SUPPORTER_ANNUAL",
    highlight: true,
  },
  {
    id: "patron",
    name: "Patron",
    monthly: 1500,
    annual: 15000,
    pitch: "Underwrites the expensive work — the six-month investigations.",
    benefits: [
      "Everything in Supporter",
      "Quarterly editorial call with the newsroom",
      "Early sight of the ratings methodology before revisions ship",
      "Two gift memberships a year",
    ],
    monthlyPriceEnv: "STRIPE_PRICE_PATRON_MONTHLY",
    annualPriceEnv: "STRIPE_PRICE_PATRON_ANNUAL",
  },
];

export function getTier(id: string): Tier | undefined {
  return TIERS.find((t) => t.id === id);
}

export function formatPrice(pence: number): string {
  if (pence === 0) return "Free";
  return `£${(pence / 100).toFixed(pence % 100 === 0 ? 0 : 2)}`;
}

/**
 * Resolve the Stripe price ID for a tier/interval from the environment.
 * Returns null when unconfigured — the checkout route turns that into an
 * honest 503 rather than a broken redirect.
 */
export function resolvePriceId(tier: Tier, interval: "monthly" | "annual"): string | null {
  const envName = interval === "monthly" ? tier.monthlyPriceEnv : tier.annualPriceEnv;
  if (!envName) return null;
  return process.env[envName] ?? null;
}

/**
 * Where the money goes. Published on the membership page because a
 * reader-funded outlet that won't show its cost base is asking for trust it
 * hasn't earned. Percentages are the launch plan, revised annually in public.
 */
export const FUNDING_BREAKDOWN = [
  { label: "Reporting and editorial staff", share: 62 },
  { label: "Ratings research and verification", share: 21 },
  { label: "Hosting, tooling, payment fees", share: 11 },
  { label: "Legal and fact-checking support", share: 6 },
];
