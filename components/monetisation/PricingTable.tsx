"use client";

import { useState } from "react";
import { TIERS, formatPrice } from "@/lib/monetisation/membership";

export default function PricingTable() {
  const [interval, setInterval] = useState<"monthly" | "annual">("monthly");
  const [pending, setPending] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout(tierId: string) {
    setPending(tierId);
    setError(null);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier: tierId, interval }),
      });
      const data = await response.json();
      if (data.ok && data.url) {
        window.location.href = data.url;
        return;
      }
      setError(data.message ?? "Checkout is unavailable right now.");
    } catch {
      setError("Network error — try again in a moment.");
    } finally {
      setPending(null);
    }
  }

  return (
    <div className="pricing">
      <div className="pricing-toggle" role="group" aria-label="Billing interval">
        <button
          type="button"
          className={interval === "monthly" ? "is-active" : ""}
          onClick={() => setInterval("monthly")}
          aria-pressed={interval === "monthly"}
        >
          Monthly
        </button>
        <button
          type="button"
          className={interval === "annual" ? "is-active" : ""}
          onClick={() => setInterval("annual")}
          aria-pressed={interval === "annual"}
        >
          Annual — two months free
        </button>
      </div>

      <div className="pricing-grid">
        {TIERS.map((tier) => {
          const amount = interval === "monthly" ? tier.monthly : tier.annual;
          const free = amount === 0;
          return (
            <div key={tier.id} className={`tier${tier.highlight ? " tier-highlight" : ""}`}>
              {tier.highlight && <span className="tier-flag label">Most chosen</span>}
              <h3 className="tier-name">{tier.name}</h3>
              <p className="tier-price">
                <span className="num">{formatPrice(amount)}</span>
                {!free && <span className="tier-interval">/{interval === "monthly" ? "mo" : "yr"}</span>}
              </p>
              <p className="tier-pitch">{tier.pitch}</p>
              <ul className="tier-benefits">
                {tier.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
              {free ? (
                <span className="tier-current">No account needed — just read.</span>
              ) : (
                <button
                  className="btn tier-btn"
                  type="button"
                  onClick={() => startCheckout(tier.id)}
                  disabled={pending !== null}
                >
                  {pending === tier.id ? "Opening checkout…" : `Join as ${tier.name}`}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {error && (
        <p className="pricing-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
