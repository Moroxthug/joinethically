import type { Metadata } from "next";
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
        <p className="label">Ethical Products · 1,204 rated</p>
        <h1>Independently scored reviews of what to buy</h1>
        <p>
          Fashion, home, beauty, tech, and food — every item ranked on the same three questions:
          how it treats people, how it treats the planet, and how honest the brand is about both.
          No sponsored placements, no pay-to-rank.
        </p>
      </div>
      <ProductsGrid />
    </div>
  );
}
