import type { Metadata } from "next";

export const metadata: Metadata = { title: "News & Investigations" };

const ARTICLES = [
  {
    tag: "Investigation",
    title: "Inside the fast-fashion supply chain: what “recycled polyester” actually means",
    dek: "We traced three major labels' recycled-fabric claims back to their mills. The certifications check out — the math behind them doesn't.",
    date: "Aug 15",
    read: "11 min read",
  },
  {
    tag: "Companies",
    title: "We asked 12 apparel brands for their factory list. Four answered.",
    dek: "A plain records request, sent the same way to every brand. The pattern in who answered is the story.",
    date: "Jul 22",
    read: "8 min read",
  },
  {
    tag: "News",
    title: "B Corp recertification is getting harder. Good.",
    dek: "The 2026 standard closes three loopholes that let large companies coast on old scores.",
    date: "Jul 6",
    read: "6 min read",
  },
  {
    tag: "Products",
    title: "Why “vegan leather” is mostly plastic — a materials primer",
    dek: "A plain-language guide to what's actually in the alternative-leather products on shelves right now.",
    date: "Jul 29",
    read: "7 min read",
  },
  {
    tag: "Investigation",
    title: "The carbon-offset shipping claim almost nobody can back up",
    dek: "Three retailers advertise “carbon-neutral shipping.” We asked for the offset registry entries. One could produce them.",
    date: "Jun 18",
    read: "10 min read",
  },
  {
    tag: "Good Living",
    title: "Reader mailbag: is secondhand always better?",
    dek: "Not always — the cases where buying new is the more honest choice, explained.",
    date: "Jun 30",
    read: "6 min read",
  },
];

const DIGEST = [
  { title: "EU supply-chain due-diligence law clears final vote", source: "Reuters" },
  { title: "Major retailer drops a supplier after audit leak", source: "The Guardian" },
  { title: "Third-party review finds gaps in a popular carbon-offset registry", source: "Bloomberg Green" },
  { title: "New FTC guidance targets vague “climate friendly” labeling", source: "AP" },
];

export default function NewsPage() {
  return (
    <div className="wrap">
      <div className="page-head">
        <p className="label">News &amp; Investigations · updated daily</p>
        <h1>Original reporting on ethics, sustainability, and accountability</h1>
        <p>
          The traffic engine of the site — investigations like this week&apos;s lead story, plus a
          curated daily digest of the stories that matter.
        </p>
      </div>

      <div style={{ paddingBottom: 64 }}>
        <div className="news-layout">
          <div className="article-list">
            {ARTICLES.map((a) => (
              <div className="article-row" key={a.title}>
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.dek}</p>
                </div>
                <div className="article-meta">
                  <span className="article-tag" style={{ color: "var(--accent-ink)" }}>
                    {a.tag}
                  </span>
                  <span className="num">{a.date}</span>
                  <span>{a.read}</span>
                </div>
              </div>
            ))}
          </div>

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
          The full archive, category filtering, and a live daily digest pulled from vetted outlets
          are the next build milestone.
        </div>
      </div>
    </div>
  );
}
