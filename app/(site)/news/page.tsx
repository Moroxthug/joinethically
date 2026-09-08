import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/articles";

export const metadata: Metadata = { title: "News & Investigations" };

export default function NewsPage() {
  const [lead, ...rest] = articles;

  return (
    <div>
      <div className="page-head">
        <p className="label">News &amp; Investigations</p>
        <h1>Original reporting on ethics, sustainability, and accountability</h1>
        <p>
          Explainers and analysis on what certifications, labels, and claims actually verify —
          sourced from the published standards and reports behind them, not brand marketing.
        </p>
      </div>

      <div className="wrap" style={{ paddingBottom: 72 }}>
        {lead && (
          <Link href={`/news/${lead.slug}`} className="news-lead">
            <span className="label news-lead-cat">{lead.category}</span>
            <h2>{lead.title}</h2>
            <p>{lead.dek}</p>
            <span className="news-lead-meta">
              JoinEthically Editorial Team · {lead.publishedDate} · {lead.readTime}
            </span>
          </Link>
        )}

        <div className="news-grid">
          {rest.map((article) => (
            <Link key={article.slug} href={`/news/${article.slug}`} className="news-card">
              <span className="label news-card-cat">{article.category}</span>
              <h3>{article.title}</h3>
              <p>{article.dek}</p>
              <span className="news-card-meta">
                {article.publishedDate} · {article.readTime}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
