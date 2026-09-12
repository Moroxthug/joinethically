import type { MetadataRoute } from "next";
import { absoluteUrl, isProductionSite, siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Preview deployments must never be indexed — they'd compete with the real
  // site for the same content. Indexing is opt-in via NEXT_PUBLIC_SITE_URL.
  if (!isProductionSite) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /go is the affiliate redirector: crawling it is pointless and would
        // pass link equity to merchants.
        disallow: ["/api/", "/go/", "/studio", "/membership/thanks"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl,
  };
}
