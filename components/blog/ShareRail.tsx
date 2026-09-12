"use client";

import { useState } from "react";

/**
 * Share controls. No third-party share widgets — they are tracking scripts
 * wearing a button costume, and this site promises not to load those.
 */
export default function ShareRail({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="share-rail">
      <span className="label share-label">Share</span>
      <a
        className="share-btn"
        href={`https://bsky.app/intent/compose?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Bluesky
      </a>
      <a
        className="share-btn"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a className="share-btn" href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}>
        Email
      </a>
      <button className="share-btn" type="button" onClick={copy}>
        {copied ? "Link copied" : "Copy link"}
      </button>
    </div>
  );
}
