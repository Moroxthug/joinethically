import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="live-strip">
        <span className="pulse-dot" aria-hidden="true" />
        <span>
          <strong>Just added:</strong> Verge Studio scorecard · 4 min ago
        </span>
        <span className="sep">·</span>
        <span>New thread in Good Living · 12 min ago</span>
        <span className="sep">·</span>
        <span>Loop &amp; Warp score updated to 54 · 1 hr ago</span>
      </div>

      <div className="wrap">
        <section style={{ borderTop: "none", paddingTop: 48, paddingBottom: 0 }}>
          <div className="hero-top fade-up">
            <p className="eyebrow label">Investigation</p>
            <h1>
              <Link href="/articles/fast-fashion-recycled-polyester" className="title-link">
                Inside the fast-fashion supply chain: what &quot;recycled polyester&quot; actually
                means
              </Link>
            </h1>
            <p className="hero-dek">
              We traced three major labels&apos; recycled-fabric claims back to their mills. The
              certifications check out — the math behind them doesn&apos;t. A six-month
              investigation.{" "}
              <Link href="/articles/fast-fashion-recycled-polyester" className="section-link">
                Read the full investigation →
              </Link>
            </p>
          </div>
        </section>

        <section className="hero" style={{ borderTop: "none", paddingTop: 32 }}>
          <div className="fade-up" style={{ animationDelay: "0.08s" }}>
            <Link
              href="/articles/fast-fashion-recycled-polyester"
              className="video-card"
              style={{ ["--photo-url" as string]: "url(/images/hero-mill.jpg)", marginBottom: 22, aspectRatio: "16 / 10" }}
              aria-label="Read the investigation: inside an independent wool mill, this spring"
            >
              <span className="video-duration">3:12</span>
              <span className="video-play" aria-hidden="true">▶</span>
              <div className="video-caption">
                <div className="vc-title">Inside an independent wool mill, this spring</div>
                <div className="vc-meta">Watch the mini-documentary</div>
              </div>
            </Link>
            <blockquote className="pullquote">
              The labels are accurate. The volume math behind them isn&apos;t — and until now, no
              one outside the mills was checking.
            </blockquote>
            <div className="byline">
              <span className="avatar">MK</span>
              <span>Mira Kessler · Investigations Editor · 11 min read</span>
            </div>
            <span className="trust-chip" style={{ marginTop: 18 }}>
              ✦ Independent · ad-free · reader-funded
            </span>
          </div>

          <div className="picks fade-up" id="editors-picks" style={{ animationDelay: "0.15s" }}>
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
            <div className="pick-item">
              <span className="pick-rank num">04</span>
              <img className="pick-thumb" src="/images/skincare-shelf.jpg" alt="" />
              <div>
                <h3>Solace Skin — refillable SPF 30</h3>
                <p>Reef-safe formula, refill pods cut packaging waste by an estimated 70%.</p>
              </div>
              <span className="score-chip num">81 · Great</span>
            </div>
            <a className="section-link" href="/products" style={{ marginTop: 18, display: "inline-block" }}>
              See the full shortlist →
            </a>
          </div>
        </section>
      </div>

      <section className="tight">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="label section-mark">Explore</p>
              <h2>Six ways to go deeper</h2>
            </div>
            <a className="section-link" href="#">
              View full directory →
            </a>
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
            <div
              className="pillar pillar-b pillar-photo tint-accent"
              style={{ ["--photo-url" as string]: "url(/images/pick-refill.jpg)" }}
            >
              <div className="pillar-photo-content">
                <div className="mark">◆</div>
                <h3>Ethical Companies</h3>
                <p>
                  Brand scorecards built from public disclosures, labor records, and supply-chain
                  audits — updated as new evidence lands.
                </p>
                <span className="count num">340 companies tracked</span>
              </div>
            </div>
            <div
              className="pillar pillar-c pillar-photo tint-gold"
              style={{ ["--photo-url" as string]: "url(/images/hero-mill.jpg)", backgroundPosition: "68% center" }}
            >
              <div className="pillar-photo-content">
                <div className="mark">◇</div>
                <h3>Good Living</h3>
                <p>
                  Practical guidance on living with your values intact — money, food,
                  relationships, and the small daily choices.
                </p>
                <span className="count num">210 guides</span>
              </div>
            </div>
            <div
              className="pillar pillar-d pillar-photo tint-accent"
              style={{ ["--photo-url" as string]: "url(/images/hands-donation-boxes.jpg)" }}
            >
              <div className="pillar-photo-content">
                <div className="mark">◇</div>
                <h3>Doing Good</h3>
                <p>
                  Vetted charities, volunteering opportunities, and giving guides — where your
                  time or money goes furthest.
                </p>
                <span className="count num">96 causes vetted</span>
              </div>
            </div>
            <div
              className="pillar pillar-e pillar-photo tint-ink"
              style={{ ["--photo-url" as string]: "url(/images/newsroom-desk.jpg)" }}
            >
              <div className="pillar-photo-content">
                <div className="mark">◆</div>
                <h3>News &amp; Investigations</h3>
                <p>
                  Original reporting and a daily digest of the ethics, sustainability, and
                  accountability stories that matter.
                </p>
                <span className="count num">Updated daily</span>
              </div>
            </div>
            <div
              className="pillar pillar-f pillar-photo tint-gold"
              style={{ ["--photo-url" as string]: "url(/images/pick-refill.jpg)", backgroundPosition: "80% center" }}
            >
              <div className="pillar-photo-content">
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
            <a className="section-link" href="#">
              Read the full methodology →
            </a>
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

      <section className="tight section-dark" id="watch">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="label section-mark">Watch</p>
              <h2>This week&apos;s reporting, on video</h2>
            </div>
            <a className="section-link" href="#">
              All videos →
            </a>
          </div>
          <div className="guest-strip">
            <div
              className="video-card"
              style={{ ["--photo-url" as string]: "url(/images/pick-coffee.jpg)", backgroundPosition: "30% 65%" }}
              role="button"
              aria-label="Play: how we verify a direct-trade claim"
            >
              <span className="video-duration">4:47</span>
              <span className="video-play" aria-hidden="true">▶</span>
              <div className="video-caption">
                <div className="vc-title">How we verify a direct-trade claim</div>
                <div className="vc-meta">Behind the scorecard</div>
              </div>
            </div>
            <div
              className="video-card"
              style={{ ["--photo-url" as string]: "url(/images/pick-refill.jpg)", backgroundPosition: "70% 30%" }}
              role="button"
              aria-label="Play: a tour of a zero-waste refill shop"
            >
              <span className="video-duration">2:35</span>
              <span className="video-play" aria-hidden="true">▶</span>
              <div className="video-caption">
                <div className="vc-title">Inside a zero-waste refill shop</div>
                <div className="vc-meta">Editor&apos;s Pick spotlight</div>
              </div>
            </div>
            <div
              className="video-card"
              style={{ ["--photo-url" as string]: "url(/images/pick-wool.jpg)" }}
              role="button"
              aria-label="Play: reader Q and A on fast fashion"
            >
              <span className="video-duration">6:02</span>
              <span className="video-play" aria-hidden="true">▶</span>
              <div className="video-caption">
                <div className="vc-title">Reader Q&amp;A: is any fast fashion defensible?</div>
                <div className="vc-meta">From the forum</div>
              </div>
            </div>
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
            <a className="section-link" href="#">
              Pitch us a story →
            </a>
          </div>
          <div className="guest-strip">
            <div className="guest-card">
              <div className="guest-photo coffee" />
              <span className="guest-tag">Guest essay</span>
              <h3>
                I ran my family&apos;s grocery budget through an ethics filter for a month.
                Here&apos;s the real cost.
              </h3>
              <div className="guest-by">
                <span className="avatar" style={{ background: "var(--gold-soft)", color: "var(--gold-ink)" }}>
                  RT
                </span>
                <span>Rosa Tovar, reader contributor</span>
              </div>
            </div>
            <div className="guest-card">
              <div className="guest-photo mill" />
              <span className="guest-tag">Guest essay</span>
              <h3>What working inside a &quot;sustainable&quot; factory actually taught me</h3>
              <div className="guest-by">
                <span className="avatar" style={{ background: "var(--gold-soft)", color: "var(--gold-ink)" }}>
                  DA
                </span>
                <span>Daniel Aoki, former textile auditor</span>
              </div>
            </div>
            <div className="guest-card">
              <div className="guest-photo refill" />
              <span className="guest-tag">Guest essay</span>
              <h3>Small business, big conscience: pricing fairly when your costs are 20% higher</h3>
              <div className="guest-by">
                <span className="avatar" style={{ background: "var(--gold-soft)", color: "var(--gold-ink)" }}>
                  PL
                </span>
                <span>Priya Lall, founder, Anew Refill</span>
              </div>
            </div>
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
                <span
                  className="label"
                  style={{ color: "var(--gold-ink)", display: "inline-flex", alignItems: "center", gap: 7 }}
                >
                  <span className="pulse-dot" style={{ background: "var(--gold)" }} aria-hidden="true" />
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
            <a className="section-link" href="#">
              View the full archive →
            </a>
          </div>
          <div className="archive-grid">
            <Link href="/articles/is-vegan-leather-sustainable" className="archive-row">
              <span className="archive-cat" style={{ color: "var(--accent-ink)" }}>
                Products
              </span>
              <span className="archive-title">
                Is &quot;vegan leather&quot; actually sustainable? A materials primer
              </span>
              <span className="archive-meta num">Jul 29</span>
            </Link>
            <div className="archive-row">
              <span className="archive-cat" style={{ color: "var(--gold-ink)" }}>
                Doing Good
              </span>
              <span className="archive-title">How to vet a charity in fifteen minutes</span>
              <span className="archive-meta num">Jul 11</span>
            </div>
            <div className="archive-row">
              <span className="archive-cat" style={{ color: "var(--accent-ink)" }}>
                Companies
              </span>
              <span className="archive-title">
                We asked 12 apparel brands for their factory list. Four answered.
              </span>
              <span className="archive-meta num">Jul 22</span>
            </div>
            <div className="archive-row">
              <span className="archive-cat" style={{ color: "var(--accent-ink)" }}>
                News
              </span>
              <span className="archive-title">B Corp recertification is getting harder. Good.</span>
              <span className="archive-meta num">Jul 6</span>
            </div>
            <div className="archive-row">
              <span className="archive-cat" style={{ color: "var(--gold-ink)" }}>
                Good Living
              </span>
              <span className="archive-title">The ethics of re-gifting, actually</span>
              <span className="archive-meta num">Jul 18</span>
            </div>
            <div className="archive-row">
              <span className="archive-cat" style={{ color: "var(--gold-ink)" }}>
                Good Living
              </span>
              <span className="archive-title">Reader mailbag: is secondhand always better?</span>
              <span className="archive-meta num">Jun 30</span>
            </div>
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
