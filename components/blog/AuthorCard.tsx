import Link from "next/link";
import type { Author } from "@/lib/content/types";

export default function AuthorCard({ author }: { author: Author }) {
  return (
    <aside className="author-card">
      <span className="avatar avatar-lg">{author.initials}</span>
      <div>
        <p className="label author-card-kicker">About the author</p>
        <h2 className="author-card-name">
          <Link href={`/blog/author/${author.slug}`}>{author.name}</Link>
        </h2>
        <p className="author-card-role">{author.role}</p>
        <p className="author-card-bio">{author.bio}</p>
        <p className="author-card-beats">
          {author.beats.map((beat) => (
            <span className="beat" key={beat}>
              {beat}
            </span>
          ))}
        </p>
        {author.contact && (
          <p className="author-card-contact">
            Tips and corrections:{" "}
            <a className="prose-link" href={`mailto:${author.contact}`}>
              {author.contact}
            </a>
          </p>
        )}
      </div>
    </aside>
  );
}
