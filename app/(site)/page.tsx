import Link from "next/link";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts, getGuestPosts } from "@/lib/content/posts";
import { getAuthor } from "@/lib/content/authors";

const LEAD_SLUG = "recycled-polyester-claims-investigation";

export default function HomePage() {
  const latest = getAllPosts()
    .filter((post) => post.slug !== LEAD_SLUG)
    .slice(0, 3);

  return (
    <>
      <div className="wrap">
        <section className="hero" style={{ borderTop: "none", paddingTop: 56 }}>
          <div>
            <p className="eyebrow label">Investigation</p>
            <Link className="hero-art" href={`/blog/${LEAD_SLUG}`} aria-hidden="true" tabIndex={-1}>
              <span>Inside an independent wool mill, this spring</span>
            </Link>
            <h1>
              <Link href={`/blog/${LEAD_SLUG}`}>
                Inside the fast-fashion supply chain: what &quot;recycled polyester&quot; actually
                means
              </Link>
            </h1>
            <p className="hero-dek">
              We traced three major labels&apos; recycled-fabric claims back to their mills. The
              certifications check out — the math behind them doesn&apos;t. A six-month
              investigation.
            </p>
            <blockquote className="pullquote">
              The labels are accurate. The volume math behind them isn&apos;t — and until now, no
              one outside the mills was checking.
            </blockquote>
            <div className="byline">
              <span className="avatar">MK</span>
              <span>Mira Kessler · Investigations Editor · 11 min read</span>
            </div>
          </div>

          <div className="picks" id="editors-picks">
            <div className="picks-head">
              <div>
                <p className="label">Editor&apos;s Picks — August</p>
                <h2 style={{ fontSize: "1.2rem", marginTop: 6 }}>This month, we recommend</h2>
              </div>
              <span className="hand-tag">picked by hand, not by algorithm</span>
            </div>
            <div className="pick-item">
              <span className="pick-rank num">01</span>
              <img className="pick-thumb" src="/images/pick-wool.jpg" alt="" />
              <div>
                <h3>Kadu Wool Co. — merino base layers</h3>
                <p>Traceable to a single regenerative farm in Patagonia. No exceptions this month.</p>
              </div>
              <span className="score-chip num">92 · Great</span>
            </div>
            <div className="pick-item">
              <span className="pick-rank num">02</span>
              <img className="pick-thumb" src="/images/pick-coffee.jpg" alt="" />
              <div>
                <h3>Ledger Coffee Roasters</h3>
                <p>Direct-trade contracts published in full, farmer by farmer.</p>
              </div>
              <span className="score-chip num">88 · Great</span>
            </div>
            <div className="pick-item">
              <span className="pick-rank num">03</span>
              <img className="pick-thumb" src="/images/pick-refill.jpg" alt="" />
              <div>
                <h3>Anew Refill Pharmacy</h3>
                <p>Zero-waste household staples, priced fairly, no subscription trap.</p>
              </div>
              <span className="score-chip num">85 · Great</span>
            </div>
          </div>
        </section>
      </div>

      <section className="tight">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="label section-mark">Latest</p>
              <h2>New this week in The Journal</h2>
            </div>
            <Link className="section-link" href="/blog">
              All stories →
            </Link>
          </div>
          <div className="card-grid">
            {latest.map((post) => (
              <PostCard key={post.slug} post={post} variant="grid" />
            ))}
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="label section-mark">Explore</p>
              <h2>Six ways to go deeper</h2>
            </div>
            <Link className="section-link" href="/blog">
              Read The Journal →
            </Link>
          </div>
          <div className="pillars">
            <div className="pillar pillar-feature">
              <div className="pillar-feature-content">
                <div className="mark">◆</div>
                <span className="feature-tag">Flagship pillar</span>
                <h3>Ethical Products</h3>
                <p>
                  Independently scored reviews of what to buy — fashion, home, beauty, tech —
                  ranked on people, planet, and honesty.
                </p>
                <span className="feature-highlight">
                  Top-rated this week: <strong>Kadu Wool Co.</strong> · 92
                </span>
                <span className="count num">1,204 products rated</span>
              </div>
            </div>
            <div className="pillar pillar-b">
              <div className="mark">◆</div>
              <h3>Ethical Companies</h3>
              <p>
                Brand scorecards built from public disclosures, labor records, and supply-chain
                audits — updated as new evidence lands.
              </p>
              <span className="count num">340 companies tracked</span>
            </div>
            <div className="pillar pillar-c">
              <div className="mark">◇</div>
              <h3>Good Living</h3>
              <p>
                Practical guidance on living with your values intact — money, food, relationships,
                and the small daily choices.
              </p>
              <span className="count num">210 guides</span>
            </div>
            <div className="pillar pillar-d">
              <div className="mark">◇</div>
              <h3>Doing Good</h3>
              <p>
                Vetted charities, volunteering opportunities, and giving guides — where your time
                or money goes furthest.
              </p>
              <span className="count num">96 causes vetted</span>
            </div>
            <div className="pillar pillar-e">
              <div className="mark">◆</div>
              <h3>News &amp; Investigations</h3>
              <p>
                Original reporting and a daily digest of the ethics, sustainability, and
                accountability stories that matter.
              </p>
              <span className="count num">Updated daily</span>
            </div>
            <div className="pillar pillar-f">
              <div className="mark">◇</div>
              <h3>The Forum</h3>
              <p>
                Ask the community, get sourced answers, and let our AI companion surface the
                relevant reporting as you go.
              </p>
              <span className="count num">8,900 members</span>
            </div>
          </div>
        </div>
      </section>

      <section id="how-we-rate">
        <div className="wrap scorecard-wrap">
          <div className="scorecard-copy">
            <p className="label section-mark">How we rate</p>
            <h2>One score, three questions we actually check</h2>
            <p>
              Every product and company on JoinEthically gets the same scorecard: how it treats
              people, how it treats the planet, and how honest it is about both. Scores are
              assembled by our editors from primary sources — certifications, disclosures, factory
              audits — never brand press kits.
            </p>
            <p>
              Readers can see the sourcing behind every point. If a company changes course, the
              score moves with it.
            </p>
            <p className="hand-tag" style={{ display: "inline-block", marginBottom: 16 }}>
              — we re-check every score by hand, not just on intake
            </p>
            <br />
            <Link className="section-link" href="/ethics">
              Read the full methodology →
            </Link>
          </div>
          <div className="scorecard">
            <div className="sc-head">
              <div>
                <h3>Kadu Wool Co.</h3>
                <p className="cat">Apparel · Base layers</p>
              </div>
              <span className="sc-verdict">Recommended</span>
            </div>
            <div className="sc-score">
              <span className="n num">92</span>
              <span className="of">/ 100</span>
            </div>
            <div className="sc-bars">
              <div className="sc-bar-row">
                <span className="lbl">People</span>
                <div className="sc-bar-track">
                  <div className="sc-bar-fill" style={{ width: "95%" }} />
                </div>
                <span className="val num">95</span>
              </div>
              <div className="sc-bar-row">
                <span className="lbl">Planet</span>
                <div className="sc-bar-track">
                  <div className="sc-bar-fill" style={{ width: "88%" }} />
                </div>
                <span className="val num">88</span>
              </div>
              <div className="sc-bar-row">
                <span className="lbl">Transparency</span>
                <div className="sc-bar-track">
                  <div className="sc-bar-fill" style={{ width: "93%" }} />
                </div>
                <span className="val num">93</span>
              </div>
            </div>
            <div className="sc-foot">Sourced from 14 public disclosures · last verified 3 days ago</div>
          </div>
        </div>
      </section>

      <section className="tight" id="guest-posts">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="label section-mark">From our community</p>
              <h2>Guest posts this week</h2>
            </div>
            <a className="section-link" href="mailto:pitch@joinethically.com">
              Pitch us a story →
            </a>
          </div>
          <div className="guest-strip">
            {getGuestPosts()
              .slice(0, 3)
              .map((post) => {
                const author = getAuthor(post.authorSlug);
                return (
                  <Link className="guest-card" key={post.slug} href={`/blog/${post.slug}`}>
                    <span
                      className="guest-photo"
                      style={
                        post.hero ? { backgroundImage: `url(${post.hero.src})` } : undefined
                      }
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
                        {author.name}, {author.role.toLowerCase()}
                      </span>
                    </span>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="label section-mark">The forum</p>
              <h2>Ask the community — sourced, not vibes</h2>
            </div>
            <a className="section-link" href="/forum">
              Open the forum →
            </a>
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
                  <div className="thread-t">Anyone tried Kadu&apos;s base layers in real winter conditions?</div>
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
            {getAllPosts()
              .slice(3)
              .map((post) => (
                <Link className="archive-row" key={post.slug} href={`/blog/${post.slug}`}>
                  <span
                    className="archive-cat"
                    style={{
                      color:
                        post.category === "good-living" || post.category === "doing-good"
                          ? "var(--gold-ink)"
                          : "var(--accent-ink)",
                    }}
                  >
                    {post.category === "good-living"
                      ? "Good Living"
                      : post.category === "doing-good"
                        ? "Doing Good"
                        : post.category === "news"
                          ? "News"
                          : post.category === "products"
                            ? "Products"
                            : "Companies"}
                  </span>
                  <span className="archive-title">{post.title}</span>
                  <span className="archive-meta num">
                    {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                    })}
                  </span>
                </Link>
              ))}
          </div>

          <div className="directory-row">
            <div className="directory-card">
              <span className="n num">1,204</span>
              <span className="name">products, fully rated</span>
              <a className="go" href="/products">
                Browse the directory →
              </a>
            </div>
            <div className="directory-card">
              <span className="n num">340</span>
              <span className="name">companies tracked</span>
              <a className="go" href="/companies">
                Browse the directory →
              </a>
            </div>
            <div className="directory-card">
              <span className="n num">96</span>
              <span className="name">causes vetted</span>
              <a className="go" href="/doing-good">
                Browse the directory →
              </a>
            </div>
            <div className="directory-card">
              <span className="n num">210</span>
              <span className="name">Good Living guides</span>
              <a className="go" href="/good-living">
                Browse the directory →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
