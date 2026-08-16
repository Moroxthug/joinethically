import type { Metadata } from "next";

export const metadata: Metadata = { title: "Doing Good" };

export default function DoingGoodPage() {
  return (
    <div className="wrap">
      <div className="page-head">
        <p className="label">Doing Good · 96 causes vetted</p>
        <h1>Vetted charities, giving guides, and volunteering</h1>
        <p>
          Where your time or money actually goes furthest — vetted the same way as a product or
          company scorecard, not a list of logos.
        </p>
      </div>
      <div className="wrap" style={{ padding: "0 0 64px" }}>
        <div className="coming-soon">
          The full causes directory is the next build milestone. &quot;How to vet a charity in
          fifteen minutes&quot; is already in the archive on the{" "}
          <a className="section-link" href="/#the-archive">
            homepage
          </a>
          .
        </div>
      </div>
    </div>
  );
}
