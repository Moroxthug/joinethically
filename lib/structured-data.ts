import { absoluteUrl, site } from "./site";
import { getAuthor } from "./content/authors";
import { getCategory } from "./content/categories";
import type { Post } from "./content/types";

export function organisationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: site.name,
    url: site.url,
    description: site.description,
    foundingDate: site.founded,
    email: site.editorialEmail,
    sameAs: Object.values(site.socials),
    // Declaring these is how an outlet signals its standards are public.
    ethicsPolicy: absoluteUrl("/ethics"),
    diversityPolicy: absoluteUrl("/ethics"),
    correctionsPolicy: absoluteUrl("/ethics"),
    masthead: absoluteUrl("/ethics"),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
  };
}

export function articleJsonLd(post: Post) {
  const author = getAuthor(post.authorSlug);
  const category = getCategory(post.category);

  return {
    "@context": "https://schema.org",
    "@type": post.kind === "Investigation" || post.category === "news" ? "NewsArticle" : "Article",
    headline: post.title,
    description: post.dek,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    articleSection: category.name,
    keywords: post.tags.join(", "),
    wordCount: estimateWordCount(post),
    inLanguage: "en-GB",
    url: absoluteUrl(`/blog/${post.slug}`),
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(`/blog/${post.slug}`) },
    image: post.hero ? [absoluteUrl(post.hero.src)] : [absoluteUrl("/opengraph-image")],
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
      url: absoluteUrl(`/blog/author/${author.slug}`),
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    isAccessibleForFree: !post.memberOnly,
  };
}

export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

function estimateWordCount(post: Post): number {
  return post.body.reduce((total, block) => {
    switch (block.type) {
      case "para":
      case "h2":
      case "h3":
        return total + block.text.split(/\s+/).length;
      case "quote":
        return total + block.text.split(/\s+/).length;
      case "list":
        return total + block.items.join(" ").split(/\s+/).length;
      case "callout":
        return total + block.body.split(/\s+/).length;
      default:
        return total;
    }
  }, 0);
}
