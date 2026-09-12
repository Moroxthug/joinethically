import { isValidEmail, newsletterProvider, subscribe } from "@/lib/monetisation/newsletter";

export async function POST(request: Request) {
  let email: unknown;
  let source: unknown;

  try {
    const body = await request.json();
    email = body?.email;
    source = body?.source;
  } catch {
    return Response.json({ ok: false, message: "Malformed request." }, { status: 400 });
  }

  if (typeof email !== "string" || !isValidEmail(email.trim())) {
    return Response.json(
      { ok: false, message: "That doesn't look like an email address." },
      { status: 400 },
    );
  }

  const result = await subscribe(
    email.trim().toLowerCase(),
    typeof source === "string" && source.length <= 40 ? source : "site",
  );

  switch (result.status) {
    case "subscribed":
      return Response.json({ ok: true, message: "You're in. One email a week, no more." });
    case "already":
      return Response.json({ ok: true, message: "You're already on the list." });
    case "unconfigured":
      return Response.json(
        {
          ok: false,
          message: "The mailing list isn't connected yet — no provider is configured.",
        },
        { status: 503 },
      );
    case "error":
      return Response.json({ ok: false, message: result.message }, { status: 502 });
  }
}

/** Lets the deploy checklist confirm the list is wired without sending a signup. */
export async function GET() {
  return Response.json({ configured: newsletterProvider() !== null });
}
