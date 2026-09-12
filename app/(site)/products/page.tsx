import type { Metadata } from "next";
import PillarIndex from "@/components/blog/PillarIndex";

export const metadata: Metadata = {
  title: "Ethical Products",
  description:
    "Independently scored reviews of what to buy — fashion, home, beauty, and tech — ranked on people, planet, and honesty. No sponsored placements, no pay-to-rank.",
};

export default function ProductsPage() {
  return (
    <PillarIndex
      category="products"
      count="1,204 rated"
      intro="Fashion, home, beauty, and tech — every item ranked on the same three questions: how it treats people, how it treats the planet, and how honest the brand is about both. Where a review carries a buying link, the commission never touches the score."
      directoryNote="The filterable directory — by category, score, and verdict — is the next build milestone. Until it lands, the reviews live here."
    />
  );
}
