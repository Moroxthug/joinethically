import Link from "next/link";
import type { Post } from "@/lib/content/types";
import { getCategory } from "@/lib/content/categories";
import { getAuthor } from "@/lib/content/authors";

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function formatLongDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * One card, three densities.
 *
 * "river" is the default index card (photo left, text right).
 * "grid" is the three-up card used under section heads.
 * "compact" is the text-only list row used in rails and archives — the archive
 * pattern from the design plan, which avoids re-using the same few photos.
 */
export default function PostCard({
  post,
  variant = "river",
  rank,
}: {
  post: Post;
  variant?: "river" | "grid" | "compact";
  rank?: number;
}) {
  const category = getCategory(post.category);
  const author = getAuthor(post.authorSlug);
  const href = `/blog/${post.slug}`;
  const tone = category.tone === "gold" ? "tone-gold" : "tone-accent";

  if (variant === "compact") {
    return (
      <Link href={href} className={`card-compact ${tone}`}>
        {rank !== undefined && <span className="card-rank num">{String(rank).padStart(2, "0")}</span>}
        <span className="card-compact-body">
          <span className="card-cat label">{category.shortName}</span>
          <span className="card-compact-title">{post.title}</span>
          <span className="card-compact-meta num">
            {formatDate(post.publishedAt)} · {post.readingMinutes} min
          </span>
        </span>
      </Link>
    );
  }

  return (
    <article className={`card card-${variant} ${tone}`}>
      {post.hero ? (
        <Link href={href} className="card-media" tabIndex={-1} aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.hero.src} alt="" loading="lazy" />
        </Link>
      ) : (
        <Link href={href} className="card-media card-media-blank" tabIndex={-1} aria-hidden="true">
          <span className="card-media-kind">{post.kind}</span>
        </Link>
      )}
      <div className="card-text">
        <p className="card-cat label">
          {category.shortName}
          <span className="card-kind">{post.kind}</span>
          {post.guest && <span className="card-guest">Guest</span>}
        </p>
        <h3 className="card-title">
          <Link href={href}>{post.title}</Link>
        </h3>
        <p className="card-dek">{post.dek}</p>
        <p className="card-meta">
          <span className="card-author">{author.name}</span>
          <span className="num">
            {formatDate(post.publishedAt)} · {post.readingMinutes} min read
          </span>
        </p>
      </div>
    </article>
  );
}
