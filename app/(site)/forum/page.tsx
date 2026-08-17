import type { Metadata } from "next";
import ForumBoard from "./ForumBoard";

export const metadata: Metadata = { title: "Forum" };

export default function ForumPage() {
  return (
    <>
      <div className="live-strip">
        <span className="pulse-dot" aria-hidden="true" />
        <span>
          <strong>212 online now</strong>
        </span>
        <span className="sep">·</span>
        <span>New reply in &quot;B Corp vs. Fair Trade&quot; · 2 min ago</span>
        <span className="sep">·</span>
        <span>AI companion flagged a claim in Good Living · 6 min ago</span>
      </div>

      <div className="wrap">
        <div
          className="page-banner"
          style={{ ["--photo-url" as string]: "url(/images/pick-refill.jpg)", backgroundPosition: "center 45%" }}
        >
          <span>Ask the community — sourced, not vibes</span>
        </div>
        <div className="page-head">
          <p className="label">The Forum · 8,900 members</p>
          <h1>Ask the community — sourced, not vibes</h1>
          <p>
            Every thread has an AI companion that footnotes claims, flags unverified statements
            with a link to sourcing, and surfaces JoinEthically&apos;s own reporting when it&apos;s
            relevant. It never asserts a bare opinion of its own.
          </p>
        </div>
      </div>

      <section style={{ borderTop: "none", paddingTop: 0 }}>
        <ForumBoard />
      </section>
    </>
  );
}
