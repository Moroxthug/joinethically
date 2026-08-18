"use client";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="news-band">
          <h2>One honest email a week. No brand partnerships disguised as picks.</h2>
          <form className="news-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@email.com" aria-label="Email address" />
            <button className="btn" type="submit">
              Subscribe
            </button>
          </form>
        </div>
        <div className="foot-grid">
          <div>
            <div className="wordmark">
              Join<span className="dot" style={{ color: "var(--accent)" }}>Ethically</span>
            </div>
            <p>
              Independent ratings and reporting on ethical products, companies, and living — built
              with readers, not advertisers.
            </p>
          </div>
          <div className="foot-col">
            <h4>Explore</h4>
            <a href="/products">Products</a>
            <a href="/companies">Companies</a>
            <a href="/good-living">Good Living</a>
            <a href="/doing-good">Doing Good</a>
          </div>
          <div className="foot-col">
            <h4>Community</h4>
            <a href="/forum">Forum</a>
            <a href="/#guest-posts">Guest posts</a>
            <a href="/#editors-picks">Editor&apos;s picks</a>
          </div>
          <div className="foot-col">
            <h4>About</h4>
            <a href="/methodology">Our methodology</a>
            <a href="/methodology#independence">Editorial standards</a>
            <span className="foot-soon">Team (soon)</span>
          </div>
          <div className="foot-col">
            <h4>Support</h4>
            <a href="mailto:hello@joinethically.com">Contact</a>
            <a href="mailto:pitch@joinethically.com">Pitch a story</a>
          </div>
        </div>
        <div className="fine-print">
          <span>© 2026 JoinEthically</span>
          <span>Ratings are independent · guest and sponsored content always labeled</span>
        </div>
      </div>
    </footer>
  );
}
