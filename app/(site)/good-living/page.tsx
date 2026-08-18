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
        <div className="page-head-text">
          <p className="label">Good Living · 210 guides</p>
          <h1>Living with your values intact, made practical</h1>
          <p>
            Money, food, relationships, and the small daily choices — guidance that assumes you
            have a budget and a schedule, not just good intentions.
          </p>
        </div>
        <div className="page-head-spotlight">
          <p className="label">Reader favorite this month</p>
          <div className="stat-row" style={{ borderTop: "none", flexDirection: "column", alignItems: "flex-start", gap: 6 }}>
            <strong style={{ fontSize: "1rem", lineHeight: 1.4 }}>
              The 15-minute weekly habit that actually changes what you buy
            </strong>
            <span>4,200 reads this week · Habits</span>
          </div>
          <div className="stat-row">
            <span>Newest topic</span>
            <strong className="num">Relationships</strong>
          </div>
          <div className="stat-row">
            <span>Guides added this week</span>
            <strong className="num">3</strong>
          </div>
        </div>
      </div>
      <GoodLivingList />
    </div>
  );
}
