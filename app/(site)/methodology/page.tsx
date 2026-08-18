import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Methodology",
  description:
    "How JoinEthically scores products and companies, how we stay editorially independent, and how our affiliate revenue is firewalled from ratings.",
};

export default function MethodologyPage() {
  return (
    <div className="wrap">
      <div className="page-head" style={{ gridTemplateColumns: "1fr" }}>
        <div className="page-head-text">
          <p className="label">About JoinEthically</p>
          <h1>Our methodology, sourcing, and independence</h1>
          <p>
            Every score on this site is built the same way, checked the same way, and disclosed
            the same way — whether the entity is a small refill shop or a large apparel label.
            This page explains how.
          </p>
        </div>
      </div>

      <div className="article-wrap" style={{ paddingBottom: 64 }}>
        <div className="article-body" id="scoring">
          <h2 id="scoring-heading">The score</h2>
          <p>
            Every product and company gets a single JoinEthically Score out of 100, built from
            three equally-weighted sub-scores:
          </p>
          <ul>
            <li>
              <strong>People</strong> — labor practices, wages, safety records, and supply-chain
              audits.
            </li>
            <li>
              <strong>Planet</strong> — emissions, materials sourcing, waste, and water use.
            </li>
            <li>
              <strong>Transparency</strong> — how much the entity discloses, and how well its
              claims survive our fact-checking.
            </li>
          </ul>
          <p>
            Scores are assembled by our editors from primary evidence — certifications,
            disclosures, factory audits, and original reporting — never from a brand&apos;s own
            press kit or sustainability page alone. Every scorecard shows a &quot;sourced from N
            disclosures, last verified [date]&quot; line. That line is never hidden behind a
            tooltip, and it is the credibility mechanism the whole rating system depends on.
          </p>

          <h2 id="sourcing">Sourcing and re-checks</h2>
          <p>
            Scores are not a one-time intake snapshot. We re-check every score by hand on a
            rolling basis, and immediately when new evidence lands — a leaked audit, a factual
            right-of-reply from the company, an investigative finding of our own. When a score
            changes, the change and the reason for it are visible on the scorecard, not quietly
            overwritten.
          </p>
          <p>
            Companies can request a factual right-of-reply on any scorecard. We review the
            evidence they provide and update the score if it changes the underlying facts —
            disagreement with a verdict, without new evidence, does not change a score.
          </p>

          <h2 id="independence">Editorial independence</h2>
          <p>
            No brand or company can pay for a better score, a review, or placement in Editor&apos;s
            Picks. Guest posts are labeled distinctly from staff reporting and go through
            editorial review before publishing; any sponsored or contributor content is always
            disclosed as such, never presented as independent staff reporting.
          </p>

          <h2 id="affiliate-policy">Affiliate policy</h2>
          <p>
            Some product pages include affiliate links on items that have already cleared an
            independent scorecard. The commission rate never affects a product&apos;s score,
            ranking, or whether it gets reviewed at all — that firewall applies before an
            affiliate relationship exists, not after. We do not run programmatic display
            advertising: on a site whose entire product is trustworthy, non-brand-captured
            recommendations, ads from unvetted advertisers next to editorial judgment would
            undermine the thing readers are here for.
          </p>

          <h2 id="revenue">How we make money</h2>
          <p>
            In priority order: reader membership (funded directly by readers, not brands), the
            non-conflicted affiliate links described above, and — longer-term, once our ratings
            database has real scale — licensing the underlying People/Planet/Transparency data to
            retailers and other publishers. No display ads, no pay-for-placement, no
            pay-for-a-better-score.
          </p>
        </div>
      </div>
    </div>
  );
}
