import { getStripe } from "@/lib/monetisation/stripe";

/**
 * Stripe webhook receiver.
 *
 * Signature verification is mandatory: without it this endpoint is an
 * unauthenticated way to grant memberships. The raw body must be read as text —
 * any JSON parsing first would break the signature check.
 */
export async function POST(request: Request) {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripe || !secret) {
    return Response.json(
      { ok: false, message: "Webhooks are not configured on this deployment." },
      { status: 503 },
    );
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return Response.json({ ok: false, message: "Missing signature." }, { status: 400 });
  }

  const payload = await request.text();

  let event;
  try {
    event = await stripe.webhooks.constructEventAsync(payload, signature, secret);
  } catch (error) {
    console.error("[stripe] signature verification failed", error);
    return Response.json({ ok: false, message: "Invalid signature." }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
      // TODO(persistence): create or upgrade the member record once the member
      // store exists. Until then we log so a launch deployment can be verified
      // end to end with the Stripe CLI.
      console.info("[stripe] membership started", {
        id: event.data.object.id,
        tier: event.data.object.metadata?.tier,
      });
      break;

    case "customer.subscription.updated":
    case "customer.subscription.deleted":
      console.info("[stripe] membership changed", {
        id: event.data.object.id,
        status: event.data.object.status,
      });
      break;

    case "invoice.payment_failed":
      console.warn("[stripe] payment failed", { id: event.data.object.id });
      break;

    default:
      // Acknowledge everything else so Stripe stops retrying.
      break;
  }

  return Response.json({ received: true });
}
