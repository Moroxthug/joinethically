import type { Scorecard as ScorecardData } from "@/lib/content/types";

export function overallScore(s: ScorecardData): number {
  return Math.round((s.people + s.planet + s.transparency) / 3);
}

export function verdictFor(score: number): string {
  if (score >= 90) return "Exceptional";
  if (score >= 75) return "Recommended";
  if (score >= 55) return "Improving";
  return "Avoid";
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * The scorecard, shared by the homepage, article bodies, and (eventually) the
 * directories. The sourcing line is never collapsed behind a tooltip — it is
 * the credibility mechanism, per the ratings methodology.
 */
export default function Scorecard({ data }: { data: ScorecardData }) {
  const score = overallScore(data);
  const rows = [
    { label: "People", value: data.people },
    { label: "Planet", value: data.planet },
    { label: "Transparency", value: data.transparency },
  ];

  return (
    <div className="scorecard">
      <div className="sc-head">
        <div>
          <h3>{data.entity}</h3>
          <p className="cat">{data.category}</p>
        </div>
        <span className="sc-verdict">{verdictFor(score)}</span>
      </div>
      <div className="sc-score">
        <span className="n num">{score}</span>
        <span className="of">/ 100</span>
      </div>
      <div className="sc-bars">
        {rows.map((row) => (
          <div className="sc-bar-row" key={row.label}>
            <span className="lbl">{row.label}</span>
            <div className="sc-bar-track">
              <div className="sc-bar-fill" style={{ width: `${row.value}%` }} />
            </div>
            <span className="val num">{row.value}</span>
          </div>
        ))}
      </div>
      <div className="sc-foot">
        Sourced from {data.sourceCount} public disclosures · last verified{" "}
        {formatDate(data.lastVerified)}
      </div>
    </div>
  );
}
