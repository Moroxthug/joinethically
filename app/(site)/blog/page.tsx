import type { Metadata } from "next";
import Link from "next/link";
import CategoryRail from "@/components/blog/CategoryRail";
import PostCard, { formatLongDate } from "@/components/blog/PostCard";
import NewsletterForm from "@/components/monetisation/NewsletterForm";
import JsonLd from "@/components/JsonLd";
import { getAuthor } from "@/lib/content/authors";
import { CATEGORIES, getCategory } from "@/lib/content/categories";
import { getAllPosts, getFeaturedPost, getGuestPosts } from "@/lib/content/posts";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "The Journal",
  description:
    "Investigations, scored reviews, and practical guides on ethical products, companies, and living — independently funded by readers.",
  alternates: { canonical: absoluteUrl("/blog"), types: { "application/rss+xml": absoluteUrl("/feed.xml") } },
};

export default function BlogIndexPage() {
  const lead = getFeaturedPost();
  const all = getAllPosts();
  const rest = all.filter((post) => post.slug !== lead.slug);

  const secondary = rest.slice(0, 2);
  const river = rest.slice(2, 8);
  const leadAuthor = getAuthor(lead.authorSlug);
  const leadCategory = getCategory(lead.category);
  const guests = getGuestPosts().slice(0, 3);

  // Deliberately "Start here" rather than "Most read": we have no traffic data
  // yet, and a site that sells honesty should not invent a popularity ranking.
  const startHere = rest.slice(0, 5);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "The Journal", path: "/blog" },
        ])}
      />

      <div className="wrap">
        <header className="journal-head">
          <div>
            <p className="label section-mark">The Journal</p>
            <h1>
              Reporting and ratings for people who want the honest version
            </h1>
            <p className="journal-dek">
              Investigations, scored reviews, and practical guides. No display advertising, no paid
              placements — funded by readers so the ratings answer to you.
            </p>
          </div>
          <div className="journal-head-side">
            <p className="label">Get it weekly</p>
            <NewsletterForm source="journal-head" cta="Subscribe" compact />
            <p className="journal-head-note">
              One email a week. Unsubscribe in one click.{" "}
              <Link href="/feed.xml" className="prose-link">
                RSS
              </Link>
              .
            </p>
          </div>
        </header>

        <CategoryRail />

        {/* Lead slot: one story gets the real estate, as on any front page worth reading. */}
        <section className="lead">
          <Link href={`/blog/${lead.slug}`} className="lead-media">
            {lead.hero ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={lead.hero.src} alt={lead.hero.alt} />
            ) : (
              <span className="card-media-kind">{lead.kind}</span>
            )}
          </Link>
          <div className="lead-text">
            <p className="label lead-kicker">
              {leadCategory.shortName}
              <span className="card-kind">{lead.kind}</span>
            </p>
            <h2 className="lead-title">
              <Link href={`/blog/${lead.slug}`}>{lead.title}</Link>
            </h2>
            <p className="lead-dek">{lead.dek}</p>
            {lead.takeaways && (
              <ul className="lead-takeaways">
                {lead.takeaways.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            <p className="lead-meta">
              <span className="avatar">{leadAuthor.initials}</span>
              <span>
                {leadAuthor.name} · {leadAuthor.role}
              </span>
              <span className="num">
                {formatLongDate(lead.publishedAt)} · {lead.readingMinutes} min read
              </span>
            </p>
          </div>
          <div className="lead-secondary">
            {secondary.map((post) => (
              <PostCard key={post.slug} post={post} variant="compact" />
            ))}
            <Link href="/blog/category/news" className="section-link lead-more">
              More from News →
            </Link>
          </div>
        </section>
      </div>

      <section className="tight">
        <div className="wrap journal-body">
          <div className="journal-river">
            <div className="section-head">
              <div>
                <p className="label section-mark">Latest</p>
                <h2>Everything we&apos;ve published</h2>
              </div>
              <Link className="section-link" href="/feed.xml">
                Subscribe by RSS →
              </Link>
            </div>

            {river.map((post, index) => (
              <div key={post.slug}>
                <PostCard post={post} />
                {/* One membership ask, mid-river, rather than an interruption. */}
                {index === 2 && (
                  <aside className="river-member">
                    <p className="label">Reader-funded</p>
                    <p>
                      Every rating on this site is free to read and nobody can buy a better one.
                      Membership is what makes that possible.
                    </p>
                    <Link className="btn" href="/membership">
                      Support the work — from £5/mo
                    </Link>
                  </aside>
                )}
              </div>
            ))}
          </div>

          <aside className="journal-rail">
            <div className="rail-block">
              <p className="label section-mark">Start here</p>
              <div className="rail-list">
                {startHere.map((post, index) => (
                  <PostCard key={post.slug} post={post} variant="compact" rank={index + 1} />
                ))}
              </div>
            </div>

            <div className="rail-block rail-sections">
              <p className="label section-mark">Sections</p>
              {CATEGORIES.map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog/category/${category.slug}`}
                  className={`rail-section tone-${category.tone}`}
                >
                  <span className="rail-section-name">{category.name}</span>
                  <span className="rail-section-desc">{category.description}</span>
                </Link>
              ))}
            </div>

            <div className="rail-block rail-newsletter">
              <p className="label">The weekly email</p>
              <p className="rail-newsletter-copy">
                One honest email a week. No brand partnerships disguised as picks.
              </p>
              <NewsletterForm source="journal-rail" cta="Subscribe" compact />
            </div>
          </aside>
        </div>
      </section>

      {guests.length > 0 && (
        <section className="tight">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="label section-mark">From our community</p>
                <h2>Guest essays</h2>
              </div>
              <a className="section-link" href={`mailto:pitch@joinethically.com`}>
                Pitch us a story →
              </a>
            </div>
            <div className="card-grid">
              {guests.map((post) => (
                <PostCard key={post.slug} post={post} variant="grid" />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
