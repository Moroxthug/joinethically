/**
 * Newsletter subscription, behind a provider-agnostic adapter.
 *
 * The list is an owned audience — the asset that makes membership conversion
 * possible later — so the integration is deliberately thin and swappable. Two
 * providers are supported out of the box; anything else needs one function.
 *
 * With no provider configured, `subscribe` returns `{ status: "unconfigured" }`
 * and the form tells the reader the truth instead of pretending to sign them up.
 */

export type SubscribeResult =
  | { status: "subscribed" }
  | { status: "already" }
  | { status: "unconfigured" }
  | { status: "error"; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email) && email.length <= 254;
}

export function newsletterProvider(): "buttondown" | "convertkit" | null {
  if (process.env.BUTTONDOWN_API_KEY) return "buttondown";
  if (process.env.CONVERTKIT_API_KEY && process.env.CONVERTKIT_FORM_ID) return "convertkit";
  return null;
}

export async function subscribe(email: string, source: string): Promise<SubscribeResult> {
  const provider = newsletterProvider();
  if (!provider) return { status: "unconfigured" };

  try {
    if (provider === "buttondown") return await subscribeButtondown(email, source);
    return await subscribeConvertKit(email, source);
  } catch (error) {
    // Never surface provider internals to the reader.
    console.error("[newsletter] subscribe failed", error);
    return { status: "error", message: "We couldn't reach the mailing list just now." };
  }
}

async function subscribeButtondown(email: string, source: string): Promise<SubscribeResult> {
  const response = await fetch("https://api.buttondown.com/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email_address: email, tags: [source] }),
  });

  if (response.status === 409) return { status: "already" };
  if (!response.ok) {
    return { status: "error", message: "The mailing list rejected that address." };
  }
  return { status: "subscribed" };
}

async function subscribeConvertKit(email: string, source: string): Promise<SubscribeResult> {
  const formId = process.env.CONVERTKIT_FORM_ID;
  const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: process.env.CONVERTKIT_API_KEY,
      email,
      tags: [source],
    }),
  });

  if (!response.ok) {
    return { status: "error", message: "The mailing list rejected that address." };
  }
  return { status: "subscribed" };
}
