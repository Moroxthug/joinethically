import Link from "next/link";

/**
 * The JoinEthically wordmark — kept as the site's default logo.
 * Single source of truth so header, footer, and Studio all render identically.
 */
export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`wordmark ${className ?? ""}`.trim()} aria-label="JoinEthically home">
      Join<span className="dot">Ethically</span>
    </Link>
  );
}
