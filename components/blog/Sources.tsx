import type { Correction, Source } from "@/lib/content/types";
import { formatLongDate } from "./PostCard";

/**
 * The sourcing block, and the corrections log beneath it.
 *
 * These render at the foot of every article that has them, open by default.
 * A site whose product is trustworthiness does not hide its working behind a
 * disclosure triangle.
 */
export default function Sources({
  sources,
  corrections,
}: {
  sources?: Source[];
  corrections?: Correction[];
}) {
  if (!sources?.length && !corrections?.length) return null;

  return (
    <section className="sources" aria-labelledby="sources-heading">
      {sources?.length ? (
        <>
          <h2 id="sources-heading" className="sources-head">
            How we sourced this
          </h2>
          <ul className="sources-list">
            {sources.map((source, index) => (
              <li key={index}>
                <span className="sources-label">
                  {source.href ? (
                    <a
                      href={source.href}
                      className="prose-link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {source.label}
                    </a>
                  ) : (
                    source.label
                  )}
                </span>
                {source.publisher && <span className="sources-pub">{source.publisher}</span>}
                {source.date && <span className="sources-date num">{source.date}</span>}
              </li>
            ))}
          </ul>
        </>
      ) : null}

      {corrections?.length ? (
        <div className="corrections">
          <p className="label corrections-head">Corrections &amp; updates</p>
          {corrections.map((correction, index) => (
            <p key={index} className="correction">
              <time dateTime={correction.date} className="num">
                {formatLongDate(correction.date)}
              </time>{" "}
              — {correction.note}
            </p>
          ))}
        </div>
      ) : null}
    </section>
  );
}
