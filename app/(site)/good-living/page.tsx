import type { Metadata } from "next";

export const metadata: Metadata = { title: "Good Living" };

export default function GoodLivingPage() {
  return (
    <div className="wrap">
      <div className="page-head">
        <p className="label">Good Living · 210 guides</p>
        <h1>Living with your values intact, made practical</h1>
        <p>
          Money, food, relationships, and the small daily choices — guidance that assumes you have
          a budget and a schedule, not just good intentions.
        </p>
      </div>
      <div className="wrap" style={{ padding: "0 0 64px" }}>
        <div className="coming-soon">
          The full guide index is the next build milestone. Two recent guides already appear in
          the archive on the{" "}
          <a className="section-link" href="/#the-archive">
            homepage
          </a>
          : &quot;The ethics of re-gifting, actually&quot; and &quot;Reader mailbag: is secondhand
          always better?&quot;
        </div>
      </div>
    </div>
  );
}
