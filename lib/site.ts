/**
 * Single source of truth for anything that has to agree across metadata, feeds,
 * sitemaps, structured data, and email. Read the canonical origin from the
 * environment so preview deployments don't advertise production URLs.
 */

/** The live origin. Also the fallback, so build-time URLs are never relative. */
export const PRODUCTION_URL = "https://joinethically.com";

function readSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  // Vercel (and several other hosts) expose the deployment host but not a scheme.
  const vercel = process.env.NEXT_PUBLIC_VERCEL_URL ?? process.env.VERCEL_URL;
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;

  return PRODUCTION_URL;
}

export const siteUrl = readSiteUrl();

/**
 * Indexing is opt-in, not opt-out: a deployment is only treated as production
 * when NEXT_PUBLIC_SITE_URL explicitly names the live origin. Anything else —
 * a preview, a staging box, a local run, a forgotten variable — is excluded
 * from search rather than left to compete with the real site.
 */
export const isProductionSite =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") === PRODUCTION_URL;

export const site = {
  name: "JoinEthically",
  url: siteUrl,
  tagline: "Independent ratings and reporting for living, buying, and doing business ethically",
  description:
    "Independent editorial, ratings, and community platform for ethical products, ethical companies, good living, and doing good. Reader-funded, never brand-funded.",
  locale: "en_GB",
  founded: "2026",
  editorialEmail: "editors@joinethically.com",
  pitchEmail: "pitch@joinethically.com",
  socials: {
    mastodon: "https://mastodon.social/@joinethically",
    bluesky: "https://bsky.app/profile/joinethically.com",
    linkedin: "https://www.linkedin.com/company/joinethically",
  },
} as const;

export function absoluteUrl(path: string): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
