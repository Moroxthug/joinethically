import Link from "next/link";

export default function NotFoundBody() {
  return (
    <div className="wrap">
      <div className="page-head page-head-wide">
        <p className="label section-mark">404</p>
        <h1>That page isn&apos;t here.</h1>
        <p>
          It may have moved, or it may never have existed. Either way, the archive is a good place
          to start over.
        </p>
      </div>
      <p className="thanks-actions">
        <Link className="btn" href="/blog">
          Read The Journal
        </Link>
        <Link className="section-link" href="/">
          Back to the homepage →
        </Link>
      </p>
    </div>
  );
}
