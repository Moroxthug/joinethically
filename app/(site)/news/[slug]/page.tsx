import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  return { title: article ? article.title : "Article not found" };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <article className="wrap article-page">
      <div className="article-head">
        <p className="label news-lead-cat">{article.category}</p>
        <h1>{article.title}</h1>
        <p className="hero-dek">{article.dek}</p>
        <div className="byline">
          <span className="avatar">JE</span>
          <span>
            JoinEthically Editorial Team · {article.publishedDate} · {article.readTime}
          </span>
        </div>
      </div>

      <div className="article-body">
        {article.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="article-sources">
        <p className="label">Sourcing</p>
        <ul>
          {article.sources.map((source) => (
            <li key={source.label}>
              <strong>{source.label}</strong> — {source.note}
            </li>
          ))}
        </ul>
      </div>

      <Link className="section-link" href="/news">
        ← Back to News &amp; Investigations
      </Link>
    </article>
  );
}
