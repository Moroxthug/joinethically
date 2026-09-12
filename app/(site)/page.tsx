import Link from "next/link";
import PostCard, { formatLongDate } from "@/components/blog/PostCard";
import Scorecard from "@/components/blog/Scorecard";
import NewsletterForm from "@/components/monetisation/NewsletterForm";
import { getAuthor } from "@/lib/content/authors";
import { CATEGORIES } from "@/lib/content/categories";
import {
  getAllPosts,
  getFeaturedPost,
  getGuestPosts,
  getPostsByCategory,
} from "@/lib/content/posts";

/**
 * The front page.
 *
 * Structured as a publication front rather than a marketing page: a lead story
 * that gets the space, a brief rail of what else broke, and section fronts that
 * show real work instead of describing it. Everything renders from the same
 * content layer as The Journal, so the homepage can never drift from what has
 * actually been published.
 */
export default function HomePage() {
  const lead = getFeaturedPost();
  const leadAuthor = getAuthor(lead.authorSlug);
  const rest = getAllPosts().filter((post) => post.slug !== lead.slug);

  const brief = rest.slice(0, 4);
  const products = getPostsByCategory("products");
  const companies = getPostsByCategory("companies");
  const living = [...getPostsByCategory("good-living"), ...getPostsByCategory("doing-good")]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 4);
  const guests = getGuestPosts().slice(0, 3);
  const archive = rest.slice(4);

  const updated = getAllPosts()[0];

  return (
    <>
      <div className="wrap">
        {/* Publication furniture: date and scale, the two things a front page
            states before anything else. */}
        <div className="today-bar">
          <span className="label today-mark">Independent · reader-funded</span>
          <time className="num" dateTime={updated.updatedAt ?? updated.publishedAt}>
            {formatLongDate(updated.updatedAt ?? updated.publishedAt)}
          </time>
          <span className="today-stats num">
            1,204 products rated · 340 companies tracked · 96 causes vetted
          </span>
        </div>

        <section className="front">
          <div className="front-brief">
            <p className="label section-mark">The brief</p>
            <div className="front-brief-list">
              {brief.map((post) => (
                <PostCard key={post.slug} post={post} variant="compact" />
              ))}
            </div>
            <Link className="section-link" href="/blog">
              Everything we&apos;ve published →
            </Link>
          </div>

          <article className="front-lead">
            <p className="label front-kicker">
              Investigation
              <span className="front-kicker-time num">{lead.readingMinutes} min read</span>
            </p>
            <h1 className="front-title">
              <Link href={`/blog/${lead.slug}`}>{lead.title}</Link>
            </h1>
            <p className="front-dek">{lead.dek}</p>
            <Link className="front-media" href={`/blog/${lead.slug}`} tabIndex={-1} aria-hidden="true">
              {lead.hero && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={lead.hero.src} alt="" />
              )}
              {lead.hero?.caption && <span className="front-media-cap">{lead.hero.caption}</span>}
            </Link>
            <blockquote className="pullquote">
              The labels are accurate. The volume maths behind them isn&apos;t — and until now, no
              one outside the mills was checking.
            </blockquote>
            <p className="front-byline">
              <span className="avatar">{leadAuthor.initials}</span>
              <span>
                {leadAuthor.name} · {leadAuthor.role}
              </span>
              <Link className="section-link" href={`/blog/${lead.slug}`}>
                Read the investigation →
              </Link>
            </p>
          </article>

          <aside className="front-picks" id="editors-picks">
            <div className="picks-head">
              <div>
                <p className="label">Editor&apos;s Picks — August</p>
                <h2>This month, we recommend</h2>
              </div>
              <span className="hand-tag">picked by hand, not by algorithm</span>
            </div>
            <div className="pick-item">
              <span className="pick-rank num">01</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="pick-thumb" src="/images/pick-wool.jpg" alt="" />
              <div>
                <h3>Kadu Wool Co. — merino base layers</h3>
                <p>Traceable to a single regenerative farm in Patagonia.</p>
              </div>
              <span className="score-chip num">92</span>
            </div>
            <div className="pick-item">
              <span className="pick-rank num">02</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="pick-thumb" src="/images/pick-coffee.jpg" alt="" />
              <div>
                <h3>Ledger Coffee Roasters</h3>
                <p>Direct-trade contracts published in full, farmer by farmer.</p>
              </div>
              <span className="score-chip num">88</span>
            </div>
            <div className="pick-item">
              <span className="pick-rank num">03</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="pick-thumb" src="/images/pick-refill.jpg" alt="" />
              <div>
                <h3>Anew Refill Pharmacy</h3>
                <p>Zero-waste household staples, priced fairly, no subscription trap.</p>
              </div>
              <span className="score-chip num">85</span>
            </div>

            <div className="front-member">
              <p className="label">No advertisers</p>
              <p>
                Nobody can pay us for a better score. Readers are the entire business model.
              </p>
              <Link className="btn" href="/membership">
                Support us — from £5/mo
              </Link>
            </div>
          </aside>
        </section>
      </div>

      {/* --- Section front: what to buy ---------------------------------- */}
      <section className="tight">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="label section-mark">Ethical Products</p>
              <h2>What to buy, and what it scored</h2>
            </div>
            <Link className="section-link" href="/products">
              All reviews →
            </Link>
          </div>
          <div className="split-front">
            <div className="split-main">
              {products.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
            <div className="split-side">
              <p className="label section-mark">A scorecard, in full</p>
              <Scorecard
                data={{
                  entity: "Kadu Wool Co.",
                  category: "Apparel · Base layers",
                  people: 95,
                  planet: 88,
                  transparency: 93,
                  sourceCount: 14,
                  lastVerified: "2026-08-14",
                }}
              />
              <p className="split-side-note">
                Every product and company gets the same three questions: how it treats people, how
                it treats the planet, and how honest it is about both. Scores are built from
                primary evidence — never brand press kits.
              </p>
              <p className="hand-tag">— we re-check every score by hand, not just on intake</p>
              <Link className="section-link" href="/ethics">
                Read the full methodology →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section front: companies ------------------------------------ */}
      <section className="tight">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="label section-mark">Ethical Companies</p>
              <h2>Who deserves the benefit of the doubt</h2>
            </div>
            <Link className="section-link" href="/companies">
              All company coverage →
            </Link>
          </div>
          <div className="card-grid">
            {companies.map((post) => (
              <PostCard key={post.slug} post={post} variant="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* --- Section front: living + giving ------------------------------ */}
      <section className="tight">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="label section-mark">Good Living &amp; Doing Good</p>
              <h2>The practical end of it</h2>
            </div>
            <Link className="section-link" href="/good-living">
              All guides →
            </Link>
          </div>
          <div className="living-front">
            <PostCard post={living[0]} variant="grid" />
            <div className="living-list">
              {living.slice(1).map((post) => (
                <PostCard key={post.slug} post={post} variant="compact" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Guest essays ------------------------------------------------ */}
      <section className="tight" id="guest-posts">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="label section-mark">From our community</p>
              <h2>Guest essays</h2>
            </div>
            <a className="section-link" href="mailto:pitch@joinethically.com">
              Pitch us a story →
            </a>
          </div>
          <div className="guest-strip">
            {guests.map((post) => {
              const author = getAuthor(post.authorSlug);
              return (
                <Link className="guest-card" key={post.slug} href={`/blog/${post.slug}`}>
                  <span
                    className="guest-photo"
                    style={post.hero ? { backgroundImage: `url(${post.hero.src})` } : undefined}
                  />
                  <span className="guest-tag">Guest essay</span>
                  <h3>{post.title}</h3>
                  <span className="guest-by">
                    <span
                      className="avatar"
                      style={{ background: "var(--gold-soft)", color: "var(--gold-ink)" }}
                    >
                      {author.initials}
                    </span>
                    <span>
                      {author.name}, {author.role}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- Forum ------------------------------------------------------- */}
      <section className="tight">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="label section-mark">The forum</p>
              <h2>Ask the community — sourced, not vibes</h2>
            </div>
            <Link className="section-link" href="/forum">
              Open the forum →
            </Link>
          </div>
          <div className="forum-wrap">
            <div className="thread-list">
              <div className="thread">
                <div>
                  <div className="thread-t">
                    Is there an actually ethical fast-shipping option, or is that a contradiction?
                  </div>
                  <div className="thread-meta">Started by @noahb · Good Living</div>
                </div>
                <span className="thread-replies num">34 replies</span>
              </div>
              <div className="thread">
                <div>
                  <div className="thread-t">Best vetted charities for disaster relief right now?</div>
                  <div className="thread-meta">Started by @kimosei · Doing Good</div>
                </div>
                <span className="thread-replies num">21 replies</span>
              </div>
              <div className="thread">
                <div>
                  <div className="thread-t">
                    B Corp vs. Fair Trade Certified — which actually means more?
                  </div>
                  <div className="thread-meta">Started by @lena_h · Ethical Companies</div>
                </div>
                <span className="thread-replies num">57 replies</span>
              </div>
              <div className="thread">
                <div>
                  <div className="thread-t">
                    Anyone tried Kadu&apos;s base layers in real winter conditions?
                  </div>
                  <div className="thread-meta">Started by @travisr · Ethical Products</div>
                </div>
                <span className="thread-replies num">12 replies</span>
              </div>
            </div>

            <div className="panel">
              <div className="panel-head">
                <p className="label">Thread preview</p>
                <span className="label" style={{ color: "var(--gold-ink)" }}>
                  AI companion active
                </span>
              </div>
              <div className="msg">
                <span className="avatar">NB</span>
                <div className="msg-body">
                  <div className="who">@noahb</div>
                  Is there an actually ethical fast-shipping option, or is that a contradiction in
                  terms?
                </div>
              </div>
              <div className="msg ai">
                <span className="avatar">✦</span>
                <div className="msg-body">
                  <div className="who">AI companion</div>
                  Related reading: our review of <strong>Ledger Coffee&apos;s</strong> regional
                  micro-fulfillment model, and a 2026 investigation on carbon-offset shipping
                  claims. Flagging that &quot;carbon neutral shipping&quot; is an unverified claim
                  in 3 of the top 5 replies below — want the sourcing?
                </div>
              </div>
              <div className="msg">
                <span className="avatar">KO</span>
                <div className="msg-body">
                  <div className="who">@kimosei</div>
                  Yes please — I keep seeing that claim and don&apos;t trust it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Membership band --------------------------------------------- */}
      <section className="home-member">
        <div className="wrap home-member-inner">
          <div>
            <p className="label home-member-kicker">Why this is free</p>
            <h2>We take no advertising, so a brand can never become our customer.</h2>
            <p>
              Every rating stays free to read. Affiliate links appear only on products that
              already cleared an independent scorecard, and reviewers cannot see what a link pays.
              Membership is what makes that refusal affordable.
            </p>
            <div className="home-member-actions">
              <Link className="btn" href="/membership">
                See membership
              </Link>
              <Link className="section-link" href="/ethics">
                How we make money →
              </Link>
            </div>
          </div>
          <div className="home-member-news">
            <p className="label">The weekly email</p>
            <p className="home-member-news-copy">
              One honest email a week. No brand partnerships disguised as picks.
            </p>
            <NewsletterForm source="home-band" cta="Subscribe" compact />
          </div>
        </div>
      </section>

      {/* --- Archive + directories --------------------------------------- */}
      <section className="tight">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="label section-mark">The archive</p>
              <h2>Older, but not less true</h2>
            </div>
            <Link className="section-link" href="/blog">
              View the full archive →
            </Link>
          </div>
          <div className="archive-grid">
            {archive.map((post) => {
              const gold = post.category === "good-living" || post.category === "doing-good";
              const name = CATEGORIES.find((c) => c.slug === post.category)?.shortName ?? "";
              return (
                <Link className="archive-row" key={post.slug} href={`/blog/${post.slug}`}>
                  <span
                    className="archive-cat"
                    style={{ color: gold ? "var(--gold-ink)" : "var(--accent-ink)" }}
                  >
                    {name}
                  </span>
                  <span className="archive-title">{post.title}</span>
                  <span className="archive-meta num">
                    {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                    })}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="directory-row">
            <Link className="directory-card" href="/products">
              <span className="n num">1,204</span>
              <span className="name">products, fully rated</span>
              <span className="go">Browse the directory →</span>
            </Link>
            <Link className="directory-card" href="/companies">
              <span className="n num">340</span>
              <span className="name">companies tracked</span>
              <span className="go">Browse the directory →</span>
            </Link>
            <Link className="directory-card" href="/doing-good">
              <span className="n num">96</span>
              <span className="name">causes vetted</span>
              <span className="go">Browse the directory →</span>
            </Link>
            <Link className="directory-card" href="/good-living">
              <span className="n num">210</span>
              <span className="name">Good Living guides</span>
              <span className="go">Browse the directory →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
