import type { MetadataRoute } from "next";
import { ARTICLES } from "./(site)/articles/data";

const BASE_URL = "https://joinethically.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "daily" as const },
    { path: "/products", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/companies", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/good-living", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/doing-good", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/news", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/forum", priority: 0.7, changeFrequency: "hourly" as const },
  ].map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const articleRoutes = ARTICLES.map((a) => ({
    url: `${BASE_URL}/articles/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes];
}
