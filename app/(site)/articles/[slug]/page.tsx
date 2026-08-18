import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticle, type Block } from "../data";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article" };
  return { title: article.title, description: article.dek };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "p":
      return <p key={i}>{block.text}</p>;
    case "h2":
      return (
        <h2 key={i} id={block.id}>
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote className="pullquote" key={i}>
          {block.text}
        </blockquote>
      );
    case "list":
      return (
        <ul key={i}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "figure":
      return (
        <figure key={i}>
          <div
            className="figure-photo"
            style={{ ["--photo-url" as string]: `url(${block.photo})`, backgroundPosition: block.position || "center" }}
          />
          <figcaption>{block.caption}</figcaption>
        </figure>
      );
    case "score":
      return (
        <div className="scorecard article-inline-score" key={i}>
          <div className="sc-head">
            <div>
              <h3>{block.name}</h3>
              <p className="cat">{block.category}</p>
            </div>
            <span className="sc-verdict">{block.verdict}</span>
          </div>
          <div className="sc-score">
            <span className="n num">{block.score}</span>
            <span className="of">/ 100</span>
          </div>
          <div className="sc-bars">
            <div className="sc-bar-row">
              <span className="lbl">People</span>
              <div className="sc-bar-track">
                <div className="sc-bar-fill" style={{ width: `${block.people}%` }} />
              </div>
              <span className="val num">{block.people}</span>
            </div>
            <div className="sc-bar-row">
              <span className="lbl">Planet</span>
              <div className="sc-bar-track">
                <div className="sc-bar-fill" style={{ width: `${block.planet}%` }} />
              </div>
              <span className="val num">{block.planet}</span>
            </div>
            <div className="sc-bar-row">
              <span className="lbl">Transparency</span>
              <div className="sc-bar-track">
                <div className="sc-bar-fill" style={{ width: `${block.transparency}%` }} />
              </div>
              <span className="val num">{block.transparency}</span>
            </div>
          </div>
          <div className="sc-foot">{block.sourced}</div>
        </div>
      );
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <div className="article-wrap">
        <p className="article-crumb">
          <Link href="/news">News &amp; Investigations</Link> · {article.tag}
        </p>
        <div className="article-head">
          <p className="eyebrow label">{article.tag}</p>
          <h1>{article.title}</h1>
          <p className="article-dek">{article.dek}</p>
          <div className="article-meta-row">
            <div className="byline">
              <span className="avatar">{article.authorInitials}</span>
              <span>
                {article.author} · {article.authorTitle} · {article.date} · {article.read}
              </span>
            </div>
            <div className="article-share">
              <span>Share</span>
              <span>Copy link</span>
            </div>
          </div>
        </div>
      </div>

      <div className="article-wrap">
        <div
          className="article-cover"
          style={{ ["--photo-url" as string]: `url(${article.hero})`, backgroundPosition: article.heroPosition || "center" }}
        />
        <p className="article-cover-cap">{article.heroCaption}</p>
      </div>

      <div className="article-layout">
        <div className="article-body">
          {article.body.map((b, i) => renderBlock(b, i))}

          <div className="author-card">
            <span className="avatar">{article.authorInitials}</span>
            <div>
              <h4>{article.author}</h4>
              <p>{article.authorBio}</p>
            </div>
          </div>
        </div>

        <aside className="article-toc">
          <p className="label">In this piece</p>
          <ol>
            {article.toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`}>{t.label}</a>
              </li>
            ))}
          </ol>

          <div className="toc-support">
            <p className="label">Support this</p>
            <p>
              Reporting like this takes months and costs us nothing to your inbox in ads. Readers
              fund it directly.
            </p>
            <button className="btn" type="button" style={{ width: "100%" }}>
              Join free
            </button>
          </div>

          <div className="toc-support">
            <p className="label">Sourcing</p>
            <p>{article.read} · last fact-checked {article.date}.</p>
            <Link className="section-link" href="/#how-we-rate">
              How we rate →
            </Link>
          </div>
        </aside>
      </div>

      <section className="tight related-strip">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="label section-mark">Keep reading</p>
              <h2>More from JoinEthically</h2>
            </div>
            <Link className="section-link" href="/news">
              All stories →
            </Link>
          </div>
          <div className="item-grid">
            {related.map((r) => (
              <Link href={`/articles/${r.slug}`} className="mini-card" key={r.slug} style={{ display: "block" }}>
                <div className="mini-card-head">
                  <div className="mini-card-name-row">
                    <div
                      className="mini-card-thumb"
                      style={{ ["--photo-url" as string]: `url(${r.hero})` }}
                      aria-hidden="true"
                    />
                    <div>
                      <h3>{r.title}</h3>
                      <p className="cat">{r.tag}</p>
                    </div>
                  </div>
                </div>
                <p>{r.dek}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
