/** @type {import('next').NextConfig} */

/**
 * Security headers.
 *
 * The CSP is deliberately tight because this site loads almost nothing from
 * anywhere else: no ad tech, no share widgets, no font CDN. `script-src` allows
 * 'unsafe-inline' only because Next.js inlines its bootstrap and our JSON-LD;
 * tightening that further needs a nonce, which needs a proxy — a worthwhile
 * follow-up, not a launch blocker.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://plausible.io",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  // Stripe Checkout is a redirect, not an embed; the connect entry covers the
  // checkout session call and Plausible's aggregate pings.
  "connect-src 'self' https://plausible.io https://api.stripe.com",
  "form-action 'self' https://checkout.stripe.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // We ask for none of these, so deny them all up front.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=()",
  },
];

const nextConfig = {
  // Don't advertise the framework version to scanners.
  poweredByHeader: false,
  headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
