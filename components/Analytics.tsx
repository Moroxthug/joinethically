import Script from "next/script";

/**
 * Cookieless, privacy-preserving analytics — Plausible by default.
 *
 * This is a monetisation decision as much as a privacy one: with no cookies and
 * no cross-site identifiers there is no consent banner, no vendor reading our
 * readers, and nothing that contradicts the promise on /ethics. It renders only
 * when a domain is configured, so development and preview builds stay silent.
 */
export default function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;

  const src = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC ?? "https://plausible.io/js/script.js";

  return <Script defer data-domain={domain} src={src} strategy="afterInteractive" />;
}
