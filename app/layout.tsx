import type { Metadata, Viewport } from "next";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import { organisationJsonLd, websiteJsonLd } from "@/lib/structured-data";
import { isProductionSite, site, siteUrl } from "@/lib/site";
import "./globals.css";
import "./blog.css";
import "./home.css";
import "./commerce.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": `${siteUrl}/feed.xml` },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: siteUrl,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  // Matches robots.txt: only the declared production origin is indexable, so a
  // preview can't be indexed even if its robots.txt is cached or ignored.
  robots: isProductionSite
    ? { index: true, follow: true }
    : { index: false, follow: false },
  category: "news",
};

export const viewport: Viewport = {
  // The paper ground is a brand requirement, so the browser chrome matches it
  // rather than following the visitor's OS theme.
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <JsonLd data={organisationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
