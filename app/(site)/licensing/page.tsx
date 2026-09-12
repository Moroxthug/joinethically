import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "License the ratings data",
  description:
    "Retailers, publishers, and procurement teams can license JoinEthically's People/Planet/Transparency scorecard data through a documented, versioned API.",
  alternates: { canonical: absoluteUrl("/licensing") },
};

const SAMPLE = `GET /api/v1/ratings/kadu-wool-co
x-joinethically-key: <your licence key>

{
  "data": {
    "entity": "kadu-wool-co",
    "name": "Kadu Wool Co.",
    "category": "Apparel · Base layers",
    "score": 92,
    "verdict": "Exceptional",
    "subscores": { "people": 95, "planet": 88, "transparency": 93 },
    "sourceCount": 14,
    "lastVerified": "2026-08-14",
    "citation": "/blog/best-ethical-merino-base-layers"
  },
  "meta": { "version": "v1", "tier": "licensed", "attribution": "Rating by JoinEthically" }
}`;

export default function LicensingPage() {
  return (
    <div className="wrap policy">
      <header className="page-head page-head-wide">
        <p className="label section-mark">Data licensing</p>
        <h1>License the scorecard data</h1>
        <p>
          The People/Planet/Transparency database is available to retailers, publishers, and
          procurement teams through a versioned JSON API. A licence buys the data as published. It
          buys nothing else — not influence, not advance notice, not a review of your own score.
        </p>
      </header>

      <section className="policy-section">
        <h2>What&apos;s in it</h2>
        <ul className="policy-list">
          <li>Overall score, verdict band, and the three sub-scores for every rated entity.</li>
          <li>Source count and last-verified date, so you can show your users how fresh it is.</li>
          <li>A citation link back to the published reasoning.</li>
          <li>Score history, so you can show movement rather than a static badge.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>The endpoint</h2>
        <pre className="code-sample">
          <code>{SAMPLE}</code>
        </pre>
        <p className="policy-note">
          The public tier returns the same data any reader can see on the page, with attribution
          required and commercial redistribution reserved. The licensed tier adds history,
          bulk export, and a commercial redistribution grant.
        </p>
      </section>

      <section className="policy-section">
        <h2>The firewall, in writing</h2>
        <p>
          Licensing revenue sits behind the same wall as affiliate revenue. Our ratings team is not
          told who licenses the data. A licensee who disputes a score uses the same right-of-reply
          process as any other company, and the outcome is published the same way.
        </p>
        <p>
          Full terms sit alongside our{" "}
          <Link href="/ethics" className="prose-link">
            editorial standards
          </Link>
          .
        </p>
      </section>

      <section className="policy-section">
        <h2>Talk to us</h2>
        <p>
          Licensing is available once an entity category has enough coverage to be genuinely useful
          — apparel first. To discuss scope and pricing, email{" "}
          <a className="prose-link" href={`mailto:${site.editorialEmail}`}>
            {site.editorialEmail}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
