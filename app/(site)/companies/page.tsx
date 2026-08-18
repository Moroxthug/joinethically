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
        <div className="page-head-text">
          <p className="label">Ethical Companies · 340 tracked</p>
          <h1>Brand scorecards built from primary evidence</h1>
          <p>
            Public disclosures, labor records, certifications, and supply-chain audits — never a
            brand&apos;s own press kit. Scores move when the evidence does, and every point links
            back to its source.
          </p>
        </div>
        <div className="page-head-spotlight">
          <p className="label">Score movement this week</p>
          <div className="stat-row">
            <span>Verge Studio</span>
            <strong className="num" style={{ color: "var(--accent-ink)" }}>
              66 (+4)
            </strong>
          </div>
          <div className="stat-row">
            <span>Loop &amp; Warp</span>
            <strong className="num" style={{ color: "var(--accent-ink)" }}>
              54 (+2)
            </strong>
          </div>
          <div className="stat-row">
            <span>Marrow &amp; Co.</span>
            <strong className="num" style={{ color: "#8a3324" }}>
              38 (−9)
            </strong>
          </div>
          <div className="stat-row">
            <span>Right-of-reply requests open</span>
            <strong className="num">3</strong>
          </div>
        </div>
      </div>
      <CompaniesGrid />
    </div>
  );
}
