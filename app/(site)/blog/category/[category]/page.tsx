import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryRail from "@/components/blog/CategoryRail";
import PostCard from "@/components/blog/PostCard";
import NewsletterForm from "@/components/monetisation/NewsletterForm";
import JsonLd from "@/components/JsonLd";
import { CATEGORIES, findCategory } from "@/lib/content/categories";
import { getPostsByCategory } from "@/lib/content/posts";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category: category.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/category/[category]">,
): Promise<Metadata> {
  const { category: slug } = await props.params;
  const category = findCategory(slug);
  if (!category) return { title: "Not found" };

  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: absoluteUrl(`/blog/category/${category.slug}`) },
  };
}

export default async function CategoryPage(props: PageProps<"/blog/category/[category]">) {
  const { category: slug } = await props.params;
  const category = findCategory(slug);
  if (!category) notFound();

  const posts = getPostsByCategory(category.slug);
  const [lead, ...rest] = posts;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "The Journal", path: "/blog" },
          { name: category.name, path: `/blog/category/${category.slug}` },
        ])}
      />

      <div className="wrap">
        <header className={`section-head-page tone-${category.tone}`}>
          <p className="label section-mark">Section</p>
          <h1>{category.name}</h1>
          <p className="journal-dek">{category.description}</p>
          <p className="section-count num">
            {posts.length} {posts.length === 1 ? "piece" : "pieces"} published
          </p>
        </header>

        <CategoryRail active={category.slug} />

        {lead ? (
          <div className="category-body">
            <PostCard post={lead} />
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="coming-soon">
            Nothing published in this section yet. The weekly email will tell you when there is.
          </div>
        )}

        <section className="section-newsletter">
          <div>
            <p className="label section-mark">Stay with it</p>
            <h2>New {category.shortName} work, once a week</h2>
          </div>
          <NewsletterForm source={`category-${category.slug}`} cta="Subscribe" />
        </section>
      </div>
    </>
  );
}
