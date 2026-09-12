import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};

export default function MembershipThanksPage() {
  return (
    <div className="wrap">
      <header className="page-head page-head-wide">
        <p className="label section-mark">Membership</p>
        <h1>That&apos;s the whole business model, and you&apos;re it.</h1>
        <p>
          Your receipt is on its way by email, along with the link to manage or cancel the
          membership — no retention call, as promised. Members-only access appears on your next
          visit once the member area ships; until then nothing you can read is locked.
        </p>
      </header>
      <p className="thanks-actions">
        <Link className="btn" href="/blog">
          Read the latest
        </Link>
        <Link className="section-link" href="/ethics">
          How we make money →
        </Link>
      </p>
    </div>
  );
}
