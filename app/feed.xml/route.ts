import { getAuthor } from "@/lib/content/authors";
import { getCategory } from "@/lib/content/categories";
import { getAllPosts } from "@/lib/content/posts";
import { absoluteUrl, site } from "@/lib/site";

/** XML-escape. Editorial copy contains ampersands and quotes constantly. */
function escape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getAllPosts();
  const updated = new Date(posts[0]?.updatedAt ?? posts[0]?.publishedAt ?? Date.now());

  const items = posts
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`);
      const author = getAuthor(post.authorSlug);
      const category = getCategory(post.category);

      return `    <item>
      <title>${escape(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description>${escape(post.dek)}</description>
      <category>${escape(category.name)}</category>
      <dc:creator>${escape(author.name)}</dc:creator>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escape(site.name)}</title>
    <link>${site.url}</link>
    <description>${escape(site.description)}</description>
    <language>en-gb</language>
    <lastBuildDate>${updated.toUTCString()}</lastBuildDate>
    <atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
