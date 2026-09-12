import Link from "next/link";
import NewsletterForm from "./monetisation/NewsletterForm";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="news-band">
          <h2>One honest email a week. No brand partnerships disguised as picks.</h2>
          <NewsletterForm source="footer" cta="Subscribe" />
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
            <h4>Read</h4>
            <Link href="/blog">The Journal</Link>
            <Link href="/products">Products</Link>
            <Link href="/companies">Companies</Link>
            <Link href="/good-living">Good Living</Link>
            <Link href="/doing-good">Doing Good</Link>
          </div>
          <div className="foot-col">
            <h4>Community</h4>
            <Link href="/forum">Forum</Link>
            <Link href="/blog">Guest posts</Link>
            <a href={`mailto:${site.pitchEmail}`}>Pitch a story</a>
          </div>
          <div className="foot-col">
            <h4>About</h4>
            <Link href="/ethics">Editorial standards</Link>
            <Link href="/ethics">Ratings methodology</Link>
            <Link href="/ethics">Corrections policy</Link>
          </div>
          <div className="foot-col">
            <h4>Support us</h4>
            <Link href="/membership">Membership</Link>
            <Link href="/licensing">License the data</Link>
            <Link href="/feed.xml">RSS</Link>
            <a href={`mailto:${site.editorialEmail}`}>Contact</a>
          </div>
        </div>
        <div className="fine-print">
          <span>© {site.founded} {site.name}</span>
          <span>
            Ratings are independent · no display advertising · affiliate links always labelled
          </span>
        </div>
      </div>
    </footer>
  );
}
