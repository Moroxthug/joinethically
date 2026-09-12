import Link from "next/link";
import type { Post } from "@/lib/content/types";
import { getAuthor } from "@/lib/content/authors";
import { formatLongDate } from "./PostCard";

export default function Byline({ post }: { post: Post }) {
  const author = getAuthor(post.authorSlug);

  return (
    <div className="article-byline">
      <span className="avatar">{author.initials}</span>
      <div className="article-byline-text">
        <p className="article-byline-name">
          By{" "}
          <Link href={`/blog/author/${author.slug}`} className="prose-link">
            {author.name}
          </Link>
          <span className="article-byline-role">{author.role}</span>
        </p>
        <p className="article-byline-meta num">
          <time dateTime={post.publishedAt}>{formatLongDate(post.publishedAt)}</time>
          {post.updatedAt && (
            <>
              {" · Updated "}
              <time dateTime={post.updatedAt}>{formatLongDate(post.updatedAt)}</time>
            </>
          )}
          {` · ${post.readingMinutes} min read`}
        </p>
      </div>
    </div>
  );
}
