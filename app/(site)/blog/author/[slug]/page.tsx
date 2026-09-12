import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostCard from "@/components/blog/PostCard";
import JsonLd from "@/components/JsonLd";
import { AUTHORS, findAuthor } from "@/lib/content/authors";
import { getPostsByAuthor } from "@/lib/content/posts";
import { absoluteUrl, site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return AUTHORS.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/author/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const author = findAuthor(slug);
  if (!author) return { title: "Not found" };

  return {
    title: author.name,
    description: `${author.role} at ${site.name}. ${author.bio}`,
    alternates: { canonical: absoluteUrl(`/blog/author/${author.slug}`) },
  };
}

export default async function AuthorPage(props: PageProps<"/blog/author/[slug]">) {
  const { slug } = await props.params;
  const author = findAuthor(slug);
  if (!author) notFound();

  const posts = getPostsByAuthor(author.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          mainEntity: {
            "@type": "Person",
            name: author.name,
            jobTitle: author.role,
            description: author.bio,
            knowsAbout: author.beats,
            url: absoluteUrl(`/blog/author/${author.slug}`),
            worksFor: { "@type": "Organization", name: site.name, url: site.url },
          },
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "The Journal", path: "/blog" },
          { name: author.name, path: `/blog/author/${author.slug}` },
        ])}
      />

      <div className="wrap">
        <header className="author-page-head">
          <span className="avatar avatar-xl">{author.initials}</span>
          <div>
            <p className="label section-mark">{author.role}</p>
            <h1>{author.name}</h1>
            <p className="journal-dek">{author.bio}</p>
            <p className="author-card-beats">
              {author.beats.map((beat) => (
                <span className="beat" key={beat}>
                  {beat}
                </span>
              ))}
            </p>
            {author.contact && (
              <p className="author-card-contact">
                Tips and corrections:{" "}
                <a className="prose-link" href={`mailto:${author.contact}`}>
                  {author.contact}
                </a>
              </p>
            )}
          </div>
        </header>

        <div className="section-head">
          <div>
            <p className="label section-mark">Work</p>
            <h2>
              {posts.length} {posts.length === 1 ? "piece" : "pieces"} for {site.name}
            </h2>
          </div>
        </div>

        <div className="category-body">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
