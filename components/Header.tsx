"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const NAV = [
  { href: "/products", label: "Products" },
  { href: "/companies", label: "Companies" },
  { href: "/good-living", label: "Good Living" },
  { href: "/doing-good", label: "Doing Good" },
  { href: "/news", label: "News" },
  { href: "/forum", label: "Forum" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <div className="masthead-bar">
        <div className="site-inner">
          <span>Tuesday, August 18, 2026 · Edition No. 214</span>
          <span className="masthead-tagline">Independent · ad-free · reader-funded</span>
        </div>
      </div>
      <header className="site">
        <div className="site-inner">
          <Logo />
          <nav className="primary">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname?.startsWith(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <button className="btn" type="button">
              Join free
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
