import type { Post } from "@/lib/content/types";
import PostCard from "./PostCard";

export default function RelatedPosts({ posts }: { posts: Post[] }) {
  if (!posts.length) return null;

  return (
    <section className="related">
      <div className="section-head">
        <div>
          <p className="label section-mark">Keep reading</p>
          <h2>Related on JoinEthically</h2>
        </div>
      </div>
      <div className="card-grid">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} variant="grid" />
        ))}
      </div>
    </section>
  );
}
