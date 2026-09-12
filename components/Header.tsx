"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const NAV = [
  { href: "/blog", label: "Journal" },
  { href: "/products", label: "Products" },
  { href: "/companies", label: "Companies" },
  { href: "/good-living", label: "Good Living" },
  { href: "/doing-good", label: "Doing Good" },
  { href: "/forum", label: "Forum" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site">
      <div className="site-inner">
        <Logo />
        <nav className="primary" id="primary-nav" data-open={open ? "true" : "false"}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={pathname?.startsWith(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link className="primary-member" href="/membership" onClick={() => setOpen(false)}>
            Membership
          </Link>
        </nav>
        <div className="header-actions">
          <Link className="btn" href="/membership">
            Support us
          </Link>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
