import type { Metadata } from "next";
import Link from "next/link";
import { AFFILIATE_DISCLOSURE } from "@/lib/monetisation/affiliate";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Editorial standards & how we make money",
  description:
    "Our ratings methodology, corrections policy, and every revenue stream we take — stated plainly, including the ones we refuse.",
  alternates: { canonical: absoluteUrl("/ethics") },
};

export default function EthicsPage() {
  return (
    <div className="wrap policy">
      <header className="page-head page-head-wide">
        <p className="label section-mark">Standards</p>
        <h1>Editorial standards, and exactly how we make money</h1>
        <p>
          Everything on this page is a commitment we expect to be held to. If we break one, tell
          us at{" "}
          <a className="prose-link" href={`mailto:${site.editorialEmail}`}>
            {site.editorialEmail}
          </a>{" "}
          and we will correct it in public.
        </p>
      </header>

      <section className="policy-section">
        <h2>How we rate</h2>
        <p>
          Every product and company gets one JoinEthically Score out of 100, built from three
          sub-scores: <strong>People</strong> (labour practices, wages, safety, supply-chain
          audits), <strong>Planet</strong> (emissions, materials, waste, water), and{" "}
          <strong>Transparency</strong> (how much is disclosed, and how well the claims survive
          checking).
        </p>
        <p>
          Scores are assembled from primary evidence — certifications, public disclosures, factory
          audits, court and regulatory records, and our own reporting. Brand press kits are not
          evidence. Every scorecard shows how many sources it rests on and when it was last
          verified, on the card itself, never behind a tooltip.
        </p>
        <p>
          Scores move when the evidence moves. Companies are contacted before publication and again
          whenever a score changes by more than five points. Factual corrections are made
          immediately; disagreements about weighting are published next to the score rather than
          settled privately.
        </p>
      </section>

      <section className="policy-section">
        <h2>Corrections</h2>
        <p>
          Corrections are appended to the article they affect, dated, and kept there permanently.
          We do not silently edit a published claim. If a correction changes the conclusion of a
          piece, it goes at the top, not the bottom.
        </p>
      </section>

      <section className="policy-section">
        <h2>How we make money</h2>
        <p>
          Three streams, in order of how much of the business we want each to be. Nothing else. If
          that ever changes, this page changes first.
        </p>

        <ol className="policy-list">
          <li>
            <strong>Reader membership.</strong> The spine. Readers pay us, so we answer to readers.{" "}
            <Link href="/membership" className="prose-link">
              Membership costs and the full cost base are published here
            </Link>
            .
          </li>
          <li>
            <strong>Affiliate commission on products that already passed a scorecard.</strong>{" "}
            {AFFILIATE_DISCLOSURE} Structurally: an affiliate offer can only be attached to an
            entity that already has a published score; commission rates live in a separate system
            the editorial tools cannot read; and every outbound link is routed through our own
            redirect so the list of commercial relationships is auditable in one place.
          </li>
          <li>
            <strong>Ratings-data licensing.</strong> Retailers, publishers, and procurement teams
            can license our scorecard data through a documented API.{" "}
            <Link href="/licensing" className="prose-link">
              Terms are here
            </Link>
            . A licensee buys access to the data as published. It buys no influence over the data,
            no advance notice of a score change, and no right to have a score reviewed.
          </li>
        </ol>
      </section>

      <section className="policy-section">
        <h2>What we refuse</h2>
        <ul className="policy-list">
          <li>
            <strong>Programmatic display advertising.</strong> It puts unvetted brands next to
            judgements about brands, and no disclosure makes that legible to a reader.
          </li>
          <li>
            <strong>Paid placement, paid review, or paid score review.</strong> There is no price.
          </li>
          <li>
            <strong>Sponsored content dressed as a guest post.</strong> Guest contributors are
            labelled as contributors and are editorially reviewed. If a piece were ever paid for by
            its subject, it would carry a sponsorship label at the top and would not be indexed as
            editorial. We have not published one.
          </li>
          <li>
            <strong>Behavioural tracking.</strong> Our analytics are cookieless and aggregate. There
            is no consent banner because there is nothing to consent to.
          </li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Guest contributions</h2>
        <p>
          We publish practitioners, whistleblowers, and small ethical business owners. Contributor
          pieces are labelled distinctly from staff reporting, fact-checked to the same standard,
          and never cover a company the contributor has a financial relationship with unless that
          relationship is disclosed in the byline.
        </p>
        <p>
          Pitches:{" "}
          <a className="prose-link" href={`mailto:${site.pitchEmail}`}>
            {site.pitchEmail}
          </a>
          .
        </p>
      </section>

      <section className="policy-section">
        <h2>Use of AI</h2>
        <p>
          No article on this site is written by a language model. The forum companion is scoped to
          three jobs — surfacing our related coverage, flagging unverified claims with a link to
          sourcing, and summarising long threads — and every one of its replies is visibly labelled
          and carries a citation. It does not rate anything, and it does not post opinions.
        </p>
      </section>
    </div>
  );
}
