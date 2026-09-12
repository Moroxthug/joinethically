"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app] unhandled error", error);
  }, [error]);

  return (
    <div className="wrap">
      <div className="page-head page-head-wide">
        <p className="label section-mark">Something broke</p>
        <h1>That didn&apos;t work, and it&apos;s our fault.</h1>
        <p>
          The page failed to render. Try again — and if it keeps happening, tell us at
          editors@joinethically.com and include what you were reading.
        </p>
      </div>
      <p className="thanks-actions">
        <button className="btn" type="button" onClick={reset}>
          Try again
        </button>
      </p>
    </div>
  );
}
