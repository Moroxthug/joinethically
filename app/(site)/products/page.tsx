import type { Metadata } from "next";
import Link from "next/link";
import ProductsGrid from "./ProductsGrid";

export const metadata: Metadata = { title: "Ethical Products" };

export default function ProductsPage() {
  return (
    <div className="wrap">
      <div
        className="page-banner"
        style={{ ["--photo-url" as string]: "url(/images/pick-wool.jpg)", backgroundPosition: "center 35%" }}
      >
        <span>Fashion · this week&apos;s top-rated pick</span>
      </div>
      <div className="page-head">
        <div className="page-head-text">
          <p className="label">Ethical Products · 1,204 rated</p>
          <h1>Independently scored reviews of what to buy</h1>
          <p>
            Fashion, home, beauty, tech, and food — every item ranked on the same three questions:
            how it treats people, how it treats the planet, and how honest the brand is about
            both. No sponsored placements, no pay-to-rank.
          </p>
          <Link href="/articles/best-ethical-clothing-brands-2026" className="section-link">
            Start here: 9 ethical clothing brands worth your money in 2026 →
          </Link>
        </div>
        <div className="page-head-spotlight">
          <p className="label">This week, by the numbers</p>
          <div className="stat-row">
            <span>Top score</span>
            <strong className="num">92 · Kadu Wool Co.</strong>
          </div>
          <div className="stat-row">
            <span>New this week</span>
            <strong className="num">14 products</strong>
          </div>
          <div className="stat-row">
            <span>Avg. score, Fashion</span>
            <strong className="num">74 / 100</strong>
          </div>
          <div className="stat-row">
            <span>Flagged &quot;Avoid&quot;</span>
            <strong className="num">1 this week</strong>
          </div>
        </div>
      </div>
      <ProductsGrid />
    </div>
  );
}
