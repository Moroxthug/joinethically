import type { MetadataRoute } from "next";
import { AUTHORS } from "@/lib/content/authors";
import { CATEGORIES } from "@/lib/content/categories";
import { getAllPosts } from "@/lib/content/posts";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const newest = new Date(posts[0]?.updatedAt ?? posts[0]?.publishedAt ?? Date.now());

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: newest, changeFrequency: "daily", priority: 1 },
    { url: absoluteUrl("/blog"), lastModified: newest, changeFrequency: "daily", priority: 0.9 },
    { url: absoluteUrl("/membership"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/ethics"), changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/licensing"), changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/forum"), changeFrequency: "weekly", priority: 0.5 },
  ];

  const pillars: MetadataRoute.Sitemap = CATEGORIES.map((category) => ({
    url: absoluteUrl(`/blog/category/${category.slug}`),
    lastModified: newest,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const articles: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly",
    priority: post.featured ? 0.9 : 0.8,
  }));

  const authors: MetadataRoute.Sitemap = AUTHORS.map((author) => ({
    url: absoluteUrl(`/blog/author/${author.slug}`),
    lastModified: newest,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticPages, ...pillars, ...articles, ...authors];
}
