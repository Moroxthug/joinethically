import type { Metadata } from "next";
import Link from "next/link";
import NewsList from "./NewsList";

export const metadata: Metadata = {
  title: "News & Investigations",
  description:
    "Original reporting and investigations on ethics, sustainability, and corporate accountability, plus a curated daily digest of the stories that matter.",
};

const DIGEST = [
  { title: "EU supply-chain due-diligence law clears final vote", source: "Reuters" },
  { title: "Major retailer drops a supplier after audit leak", source: "The Guardian" },
  { title: "Third-party review finds gaps in a popular carbon-offset registry", source: "Bloomberg Green" },
  { title: "New FTC guidance targets vague “climate friendly” labeling", source: "AP" },
];

export default function NewsPage() {
  return (
    <div className="wrap">
      <Link
        href="/articles/fast-fashion-recycled-polyester"
        className="video-card"
        style={{
          ["--photo-url" as string]: "url(/images/hero-mill.jpg)",
          margin: "32px 0 8px",
          aspectRatio: "21 / 6",
        }}
        aria-label="Read: inside the fast-fashion supply chain"
      >
        <span className="video-duration">3:12</span>
        <span className="video-play" aria-hidden="true">▶</span>
        <div className="video-caption">
          <div className="vc-title">This week&apos;s lead investigation, on video</div>
          <div className="vc-meta">Watch the mini-documentary</div>
        </div>
      </Link>
      <div className="page-head">
        <div className="page-head-text">
          <p className="label">News &amp; Investigations · updated daily</p>
          <h1>Original reporting on ethics, sustainability, and accountability</h1>
          <p>
            The traffic engine of the site — investigations like this week&apos;s lead story, plus
            a curated daily digest of the stories that matter.
          </p>
        </div>
        <div className="page-head-spotlight">
          <p className="label">Newsroom pulse</p>
          <div className="stat-row">
            <span>Stories this week</span>
            <strong className="num">6</strong>
          </div>
          <div className="stat-row">
            <span>Open records requests</span>
            <strong className="num">8</strong>
          </div>
          <div className="stat-row">
            <span>Longest-running investigation</span>
            <strong className="num">6 months</strong>
          </div>
        </div>
      </div>

      <div style={{ paddingBottom: 64 }}>
        <div className="news-layout">
          <NewsList />

          <div className="digest-panel">
            <p className="label">Today&apos;s digest</p>
            {DIGEST.map((d) => (
              <div className="digest-item" key={d.title}>
                <a href="#">{d.title}</a>
                <span className="digest-source">{d.source}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="coming-soon" style={{ marginTop: 40 }}>
          The full archive, pagination, and a live daily digest pulled from vetted outlets are the
          next build milestone.
        </div>
      </div>
    </div>
  );
}
