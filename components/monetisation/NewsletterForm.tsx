"use client";

import { useState } from "react";

type State = { kind: "idle" | "sending" | "done" | "error"; message?: string };

/**
 * Newsletter capture. Posts to /api/newsletter, which is honest about being
 * unconfigured rather than pretending the signup worked.
 */
export default function NewsletterForm({
  source = "site",
  cta = "Subscribe",
  compact = false,
}: {
  source?: string;
  cta?: string;
  compact?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>({ kind: "idle" });

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (state.kind === "sending") return;
    setState({ kind: "sending" });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await response.json();
      setState(
        data.ok
          ? { kind: "done", message: data.message }
          : { kind: "error", message: data.message ?? "Something went wrong." },
      );
      if (data.ok) setEmail("");
    } catch {
      setState({ kind: "error", message: "Network error — try again in a moment." });
    }
  }

  if (state.kind === "done") {
    return (
      <p className="news-result" role="status">
        {state.message}
      </p>
    );
  }

  return (
    <form className={compact ? "news-form news-form-compact" : "news-form"} onSubmit={onSubmit}>
      <input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@email.com"
        aria-label="Email address"
        autoComplete="email"
      />
      <button className="btn" type="submit" disabled={state.kind === "sending"}>
        {state.kind === "sending" ? "Signing you up…" : cta}
      </button>
      {state.kind === "error" && (
        <p className="news-result news-result-error" role="alert">
          {state.message}
        </p>
      )}
    </form>
  );
}
