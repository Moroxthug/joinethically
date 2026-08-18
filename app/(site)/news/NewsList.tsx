"use client";

import { useState } from "react";
import Link from "next/link";

const ARTICLES = [
  {
    tag: "Investigation",
    title: "Inside the fast-fashion supply chain: what “recycled polyester” actually means",
    dek: "We traced three major labels' recycled-fabric claims back to their mills. The certifications check out — the math behind them doesn't.",
    date: "Aug 15",
    read: "11 min read",
    slug: "fast-fashion-recycled-polyester",
  },
  {
    tag: "Products",
    title: "9 ethical clothing brands actually worth your money in 2026",
    dek: "“Ethical” gets printed on a lot of hangtags. We rated the brands behind it on People, Planet, and Transparency.",
    date: "Aug 10",
    read: "13 min read",
    slug: "best-ethical-clothing-brands-2026",
  },
  {
    tag: "Companies",
    title: "We asked 12 apparel brands for their factory list. Four answered.",
    dek: "A plain records request, sent the same way to every brand. The pattern in who answered is the story.",
    date: "Jul 22",
    read: "8 min read",
    slug: "apparel-factory-list-request",
  },
  {
    tag: "Doing Good",
    title: "How to vet a charity in fifteen minutes",
    dek: "You don't need a finance degree to check whether a donation actually does what the ad says.",
    date: "Jul 11",
    read: "6 min read",
    slug: "vet-a-charity-in-fifteen-minutes",
  },
  {
    tag: "News",
    title: "B Corp recertification is getting harder. Good.",
    dek: "The 2026 standard closes three loopholes that let large companies coast on old scores.",
    date: "Jul 6",
    read: "6 min read",
    slug: null,
  },
  {
    tag: "Good Living",
    title: "How to budget for ethical groceries without doubling your bill",
    dek: "A reader-tested framework for spending more where it matters and less everywhere else.",
    date: "Jul 2",
    read: "7 min read",
    slug: "budget-ethical-groceries",
  },
  {
    tag: "Products",
    title: "Is “vegan leather” actually sustainable? A materials primer",
    dek: "A plain-language guide to what's actually in the alternative-leather products on shelves right now.",
    date: "Jul 29",
    read: "7 min read",
    slug: "is-vegan-leather-sustainable",
  },
  {
    tag: "Investigation",
    title: "The carbon-offset shipping claim almost nobody can back up",
    dek: "Three retailers advertise “carbon-neutral shipping.” We asked for the offset registry entries. One could produce them.",
    date: "Jun 18",
    read: "10 min read",
    slug: null,
  },
  {
    tag: "Good Living",
    title: "Reader mailbag: is secondhand always better?",
    dek: "Not always — the cases where buying new is the more honest choice, explained.",
    date: "Jun 30",
    read: "6 min read",
    slug: null,
  },
];

const TAGS = ["Investigation", "Companies", "News", "Products", "Good Living", "Doing Good"];

export default function NewsList() {
  const [active, setActive] = useState("All");
  const items = active === "All" ? ARTICLES : ARTICLES.filter((a) => a.tag === active);

  return (
    <div>
      <div className="filter-chips">
        {["All", ...TAGS].map((name) => (
          <button
            key={name}
            type="button"
            className={`chip${active === name ? " active" : ""}`}
            onClick={() => setActive(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="article-list">
        {items.map((a) => {
          const content = (
            <>
              <div>
                <h3>{a.title}</h3>
                <p>{a.dek}</p>
              </div>
              <div className="article-meta">
                <span className="article-tag" style={{ color: "var(--accent-ink)" }}>
                  {a.tag}
                </span>
                <span className="num">{a.date}</span>
                <span>{a.read}</span>
              </div>
            </>
          );
          return a.slug ? (
            <Link href={`/articles/${a.slug}`} className="article-row" key={a.title}>
              {content}
            </Link>
          ) : (
            <div className="article-row" key={a.title}>
              {content}
            </div>
          );
        })}
        {items.length === 0 && (
          <p style={{ fontFamily: "var(--font-sans)", color: "var(--ink-faint)", padding: "24px 0" }}>
            No stories tagged {active} yet — check back soon.
          </p>
        )}
      </div>
    </div>
  );
}
