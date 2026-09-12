import type { Metadata } from "next";
import Link from "next/link";
import PricingTable from "@/components/monetisation/PricingTable";
import NewsletterForm from "@/components/monetisation/NewsletterForm";
import { FUNDING_BREAKDOWN } from "@/lib/monetisation/membership";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "JoinEthically is funded by readers, not advertisers. Membership from £5 a month keeps every rating free to read and impossible to buy.",
  alternates: { canonical: absoluteUrl("/membership") },
};

const FAQS = [
  {
    q: "Is anything behind a paywall?",
    a: "No rating, scorecard, or investigation is. Every score stays free to read — gating them would trade away the reach that makes the ratings useful, and the trust that makes them worth reading. Members get things that cost us nothing to give away: early access, methodology notes, and a members' room in the forum.",
  },
  {
    q: "Why not just run ads?",
    a: "Because programmatic advertising puts unvetted brands directly next to editorial judgements about brands, and neither we nor you would be able to tell which was which. It is the one revenue stream that structurally contradicts the product.",
  },
  {
    q: "You have affiliate links. Isn't that the same thing?",
    a: "It would be if the commission could reach the score. It can't: an affiliate offer may only attach to a product that already cleared an independent scorecard, commission rates are stored outside the editorial system, and reviewers cannot see what a link pays. The disclosure appears on every article that carries one.",
  },
  {
    q: "Can I cancel?",
    a: "Any time, from the link in your receipt. No retention call, no dark pattern, no 'are you sure' carousel.",
  },
  {
    q: "Can my company sponsor you instead?",
    a: "Not in a way that touches editorial. We license our ratings data commercially, which is a clean, arm's-length relationship — see the licensing page. We do not sell placement, coverage, or scores, and we never will.",
  },
];

export default function MembershipPage() {
  return (
    <div className="wrap">
      <header className="page-head page-head-wide">
        <p className="label section-mark">Membership</p>
        <h1>Nobody can buy a better score. Readers are why.</h1>
        <p>
          JoinEthically takes no display advertising and no paid placements. That refusal has a
          price, and membership is how we pay it. Every rating stays free to read whether you join
          or not — this is a request, not a gate.
        </p>
      </header>

      <PricingTable />

      <section className="funding">
        <div className="funding-copy">
          <p className="label section-mark">Where it goes</p>
          <h2>The cost base, published</h2>
          <p>
            A reader-funded outlet that won&apos;t show its numbers is asking for trust it
            hasn&apos;t earned. This is the launch plan; we revise it annually, in public, in the
            funding report.
          </p>
          <p className="hand-tag">— revised every year, whether it flatters us or not</p>
        </div>
        <div className="funding-bars">
          {FUNDING_BREAKDOWN.map((row) => (
            <div className="funding-row" key={row.label}>
              <span className="funding-label">{row.label}</span>
              <div className="funding-track">
                <div className="funding-fill" style={{ width: `${row.share}%` }} />
              </div>
              <span className="funding-share num">{row.share}%</span>
            </div>
          ))}
        </div>
      </section>

      <section className="faq">
        <div className="section-head">
          <div>
            <p className="label section-mark">Questions</p>
            <h2>The ones worth asking</h2>
          </div>
          <Link className="section-link" href="/ethics">
            Read the full revenue policy →
          </Link>
        </div>
        <div className="faq-list">
          {FAQS.map((item) => (
            <div className="faq-item" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-newsletter">
        <div>
          <p className="label section-mark">Not ready to join?</p>
          <h2>Take the free weekly email instead</h2>
        </div>
        <NewsletterForm source="membership" cta="Subscribe" />
      </section>
    </div>
  );
}
