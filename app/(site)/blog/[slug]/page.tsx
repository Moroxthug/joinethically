import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleBody, { sectionHeadings } from "@/components/blog/ArticleBody";
import AuthorCard from "@/components/blog/AuthorCard";
import Byline from "@/components/blog/Byline";
import ReadingProgress from "@/components/blog/ReadingProgress";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ShareRail from "@/components/blog/ShareRail";
import Sources from "@/components/blog/Sources";
import Takeaways from "@/components/blog/Takeaways";
import JsonLd from "@/components/JsonLd";
import MembershipCta from "@/components/monetisation/MembershipCta";
import { AFFILIATE_DISCLOSURE } from "@/lib/monetisation/affiliate";
import { getAuthor } from "@/lib/content/authors";
import { getCategory } from "@/lib/content/categories";
import { getAllPosts, getPost, getRelatedPosts } from "@/lib/content/posts";
import { absoluteUrl } from "@/lib/site";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return { title: "Not found" };

  const author = getAuthor(post.authorSlug);
  const url = absoluteUrl(`/blog/${post.slug}`);

  return {
    title: post.title,
    description: post.dek,
    alternates: { canonical: url },
    authors: [{ name: author.name, url: absoluteUrl(`/blog/author/${author.slug}`) }],
    keywords: post.tags,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.dek,
      url,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.dek,
    },
  };
}

export default async function ArticlePage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const author = getAuthor(post.authorSlug);
  const category = getCategory(post.category);
  const related = getRelatedPosts(post);
  const headings = sectionHeadings(post.body);
  const url = absoluteUrl(`/blog/${post.slug}`);

  return (
    <>
      <ReadingProgress />
      <JsonLd data={articleJsonLd(post)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "The Journal", path: "/blog" },
          { name: category.name, path: `/blog/category/${category.slug}` },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      <article className="article">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/blog">The Journal</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/blog/category/${category.slug}`}>{category.name}</Link>
          </nav>

          <header className="article-head">
            <p className={`label article-kicker tone-${category.tone}`}>
              {post.kind}
              {post.guest && <span className="card-guest">Guest contributor</span>}
            </p>
            <h1 className="article-title">{post.title}</h1>
            <p className="article-dek">{post.dek}</p>
            <Byline post={post} />
          </header>

          {post.hero && (
            <figure className="article-hero">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.hero.src} alt={post.hero.alt} />
              {(post.hero.caption || post.hero.credit) && (
                <figcaption>
                  {post.hero.caption}
                  {post.hero.credit && <span className="credit">{post.hero.credit}</span>}
                </figcaption>
              )}
            </figure>
          )}

          {post.hasAffiliateLinks && (
            <p className="affiliate-banner">
              <span className="label">Affiliate disclosure</span>
              {AFFILIATE_DISCLOSURE}{" "}
              <Link href="/ethics" className="prose-link">
                How we make money
              </Link>
              .
            </p>
          )}

          <div className="article-grid">
            <aside className="article-aside">
              <div className="article-aside-sticky">
                <ShareRail url={url} title={post.title} />
                {headings.length > 1 && (
                  <nav className="contents" aria-label="On this page">
                    <p className="label">On this page</p>
                    <ol>
                      {headings.map((heading) => (
                        <li key={heading.id}>
                          <a href={`#${heading.id}`}>{heading.text}</a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}
              </div>
            </aside>

            <div className="article-main">
              {post.takeaways && <Takeaways items={post.takeaways} />}
              <ArticleBody body={post.body} />

              <div className="article-tags">
                {post.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <Sources sources={post.sources} corrections={post.corrections} />
              <AuthorCard author={author} />
            </div>
          </div>
        </div>
      </article>

      <div className="wrap">
        <MembershipCta />
        <RelatedPosts posts={related} />
      </div>
    </>
  );
}
