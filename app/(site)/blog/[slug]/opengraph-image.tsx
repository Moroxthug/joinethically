import { ImageResponse } from "next/og";
import { getAuthor } from "@/lib/content/authors";
import { getCategory } from "@/lib/content/categories";
import { getAllPosts, getPost } from "@/lib/content/posts";

export const alt = "JoinEthically article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Prerender a card per article so sharing never waits on a cold render. */
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function ArticleOgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  const title = post?.title ?? "JoinEthically";
  const kicker = post ? getCategory(post.category).name : "Independent ratings and reporting";
  const author = post ? getAuthor(post.authorSlug) : null;
  const tone = post && (post.category === "good-living" || post.category === "doing-good")
    ? "#7a561e"
    : "#1e4a3d";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(160deg, #ffffff 0%, #efece3 100%)",
          padding: "68px 76px",
          fontFamily: "Georgia, serif",
          borderTop: `14px solid ${tone}`,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: tone,
          }}
        >
          {kicker}
          {post?.kind ? ` · ${post.kind}` : ""}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: title.length > 90 ? 52 : 64,
            color: "#191b17",
            lineHeight: 1.12,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            color: "#5b5e54",
          }}
        >
          <span style={{ display: "flex" }}>
            {author ? `${author.name} · ${author.role}` : "JoinEthically"}
          </span>
          <span style={{ display: "flex", color: "#191b17" }}>
            Join<span style={{ color: "#2f6f5e" }}>Ethically</span>
          </span>
        </div>
      </div>
    ),
    size,
  );
}
