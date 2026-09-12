import Stripe from "stripe";

/**
 * Lazily-constructed Stripe client.
 *
 * Deliberately returns null rather than throwing when unconfigured: the site
 * must build, deploy, and serve every editorial page with no payment keys
 * present. Only the two payment routes care, and they answer 503 with a clear
 * message instead of failing at import time.
 */
let client: Stripe | null = null;

export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  if (!client) {
    client = new Stripe(key, {
      // Pinning the version means a Stripe-side upgrade can never silently
      // change the shape of a webhook we depend on.
      apiVersion: "2026-08-26.dahlia",
      appInfo: { name: "JoinEthically", url: "https://joinethically.com" },
    });
  }
  return client;
}

export function isPaymentsConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}
