import type { Metadata } from "next";

export const metadata: Metadata = { title: "Ethical Products" };

export default function ProductsPage() {
  return (
    <div className="wrap">
      <div className="page-head">
        <p className="label">Ethical Products · 1,204 rated</p>
        <h1>Independently scored reviews of what to buy</h1>
        <p>
          Fashion, home, beauty, and tech — every item ranked on the same three questions: how it
          treats people, how it treats the planet, and how honest the brand is about both. No
          sponsored placements, no pay-to-rank.
        </p>
      </div>
      <div className="wrap" style={{ padding: "0 0 64px" }}>
        <div className="coming-soon">
          This directory — filterable by category, score, and verdict — is the next build
          milestone. For now, see the flagship pillar and Editor&apos;s Picks on the{" "}
          <a className="section-link" href="/">
            homepage
          </a>
          , including the current top-rated pick, Kadu Wool Co.&apos;s merino base layers (92 ·
          Great).
        </div>
      </div>
    </div>
  );
}
