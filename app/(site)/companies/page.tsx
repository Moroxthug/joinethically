import type { Metadata } from "next";

export const metadata: Metadata = { title: "Ethical Companies" };

export default function CompaniesPage() {
  return (
    <div className="wrap">
      <div className="page-head">
        <p className="label">Ethical Companies · 340 tracked</p>
        <h1>Brand scorecards built from primary evidence</h1>
        <p>
          Public disclosures, labor records, certifications, and supply-chain audits — never a
          brand&apos;s own press kit. Scores move when the evidence does, and every point links back
          to its source.
        </p>
      </div>
      <div className="wrap" style={{ padding: "0 0 64px" }}>
        <div className="coming-soon">
          The full company directory — searchable, sortable by score and category — is the next
          build milestone. See the &quot;How we rate&quot; scorecard example on the{" "}
          <a className="section-link" href="/#how-we-rate">
            homepage
          </a>{" "}
          for how a single company scorecard reads today.
        </div>
      </div>
    </div>
  );
}
