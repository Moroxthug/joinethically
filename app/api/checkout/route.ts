import { getTier, resolvePriceId } from "@/lib/monetisation/membership";
import { getStripe } from "@/lib/monetisation/stripe";
import { absoluteUrl } from "@/lib/site";

/**
 * Creates a Stripe Checkout session for a membership tier.
 *
 * Answers 503 with an explicit reason when payments aren't configured, so a
 * pre-launch deployment fails loudly in one place rather than redirecting a
 * reader into a broken flow.
 */
export async function POST(request: Request) {
  const stripe = getStripe();
  if (!stripe) {
    return Response.json(
      { ok: false, message: "Payments are not configured on this deployment." },
      { status: 503 },
    );
  }

  let tierId: unknown;
  let interval: unknown;
  try {
    const body = await request.json();
    tierId = body?.tier;
    interval = body?.interval;
  } catch {
    return Response.json({ ok: false, message: "Malformed request." }, { status: 400 });
  }

  const tier = typeof tierId === "string" ? getTier(tierId) : undefined;
  if (!tier || tier.monthly === 0) {
    return Response.json({ ok: false, message: "Unknown membership tier." }, { status: 400 });
  }

  const billing = interval === "annual" ? "annual" : "monthly";
  const priceId = resolvePriceId(tier, billing);
  if (!priceId) {
    return Response.json(
      { ok: false, message: `No price configured for ${tier.name} (${billing}).` },
      { status: 503 },
    );
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: absoluteUrl("/membership/thanks?session_id={CHECKOUT_SESSION_ID}"),
      cancel_url: absoluteUrl("/membership"),
      allow_promotion_codes: true,
      // We need the email to attach the membership to a reader; we don't need
      // an address, so we don't collect one.
      billing_address_collection: "auto",
      metadata: { tier: tier.id, interval: billing },
    });

    return Response.json({ ok: true, url: session.url });
  } catch (error) {
    console.error("[checkout] session creation failed", error);
    return Response.json({ ok: false, message: "Could not start checkout." }, { status: 502 });
  }
}
