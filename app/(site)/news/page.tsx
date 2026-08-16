import type { Metadata } from "next";

export const metadata: Metadata = { title: "News & Investigations" };

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
      <div className="wrap" style={{ padding: "0 0 64px" }}>
        <div className="coming-soon">
          The full news index is the next build milestone. This week&apos;s lead investigation,
          &quot;Inside the fast-fashion supply chain,&quot; is on the{" "}
          <a className="section-link" href="/">
            homepage
          </a>
          .
        </div>
      </div>
    </div>
  );
}
