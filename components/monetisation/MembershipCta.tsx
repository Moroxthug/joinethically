import Link from "next/link";

/**
 * The in-article membership ask.
 *
 * Placed once, at the foot of a piece rather than interrupting it: this site's
 * pitch is that it doesn't interrupt you, and a modal asking for £5 halfway
 * through an investigation about corporate honesty would undercut the whole
 * argument.
 */
export default function MembershipCta({
  variant = "full",
}: {
  variant?: "full" | "inline";
}) {
  if (variant === "inline") {
    return (
      <aside className="member-inline">
        <p>
          <strong>This reporting has no advertisers.</strong> It is paid for by readers.{" "}
          <Link href="/membership" className="prose-link">
            Become a supporter from £5 a month
          </Link>
          .
        </p>
      </aside>
    );
  }

  return (
    <section className="member-cta">
      <p className="label member-cta-kicker">Reader-funded</p>
      <h2>Nobody pays us for a better score. That only works if you do.</h2>
      <p className="member-cta-body">
        We take no display advertising and no paid placements. Affiliate links appear only on
        products that already cleared an independent scorecard, and the commission never touches
        the score. Membership is what makes that refusal affordable.
      </p>
      <div className="member-cta-actions">
        <Link className="btn" href="/membership">
          See membership
        </Link>
        <Link className="section-link" href="/ethics">
          How we make money →
        </Link>
      </div>
    </section>
  );
}
