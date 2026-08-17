import type { Metadata } from "next";
import GoodLivingList from "./GoodLivingList";

export const metadata: Metadata = { title: "Good Living" };

export default function GoodLivingPage() {
  return (
    <div className="wrap">
      <div
        className="page-banner"
        style={{ ["--photo-url" as string]: "url(/images/hero-mill.jpg)", backgroundPosition: "80% center" }}
      >
        <span>Everyday choices, made practical</span>
      </div>
      <div className="page-head">
        <p className="label">Good Living · 210 guides</p>
        <h1>Living with your values intact, made practical</h1>
        <p>
          Money, food, relationships, and the small daily choices — guidance that assumes you have
          a budget and a schedule, not just good intentions.
        </p>
      </div>
      <GoodLivingList />
    </div>
  );
}
