import type { Metadata } from "next";
import CompaniesGrid from "./CompaniesGrid";

export const metadata: Metadata = { title: "Ethical Companies" };

export default function CompaniesPage() {
  return (
    <div className="wrap">
      <div
        className="page-banner"
        style={{ ["--photo-url" as string]: "url(/images/pick-refill.jpg)" }}
      >
        <span>Beauty &amp; Home · Anew Refill Pharmacy</span>
      </div>
      <div className="page-head">
        <p className="label">Ethical Companies · 340 tracked</p>
        <h1>Brand scorecards built from primary evidence</h1>
        <p>
          Public disclosures, labor records, certifications, and supply-chain audits — never a
          brand&apos;s own press kit. Scores move when the evidence does, and every point links
          back to its source.
        </p>
      </div>
      <CompaniesGrid />
    </div>
  );
}
