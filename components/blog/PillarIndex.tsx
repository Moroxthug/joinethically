import Link from "next/link";
import PostCard from "./PostCard";
import NewsletterForm from "@/components/monetisation/NewsletterForm";
import { getCategory } from "@/lib/content/categories";
import { getPostsByCategory } from "@/lib/content/posts";
import type { CategorySlug } from "@/lib/content/types";

/**
 * A pillar landing page: the published work in that pillar, plus an honest note
 * about the structured directory that hasn't been built yet.
 *
 * Shared by all five pillar routes so the directory promise is worded once.
 */
export default function PillarIndex({
  category: slug,
  count,
  intro,
  directoryNote,
}: {
  category: CategorySlug;
  /** The headline figure for the pillar, e.g. "1,204 rated". */
  count: string;
  intro: string;
  directoryNote: string;
}) {
  const category = getCategory(slug);
  const posts = getPostsByCategory(slug);

  return (
    <div className="wrap">
      <header className={`section-head-page tone-${category.tone}`}>
        <p className="label section-mark">
          {category.name} · {count}
        </p>
        <h1>{category.shortName === "News" ? "Original reporting, and the digest" : category.name}</h1>
        <p className="journal-dek">{intro}</p>
      </header>

      {posts.length > 0 && (
        <div className="category-body">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      <div className="coming-soon">
        {directoryNote}{" "}
        <Link className="section-link" href="/blog">
          Read everything in The Journal →
        </Link>
      </div>

      <section className="section-newsletter">
        <div>
          <p className="label section-mark">Stay with it</p>
          <h2>New {category.shortName} work, once a week</h2>
        </div>
        <NewsletterForm source={`pillar-${slug}`} cta="Subscribe" />
      </section>
    </div>
  );
}
