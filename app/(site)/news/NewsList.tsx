"use client";

import { useState } from "react";

const ARTICLES = [
  {
    tag: "Investigation",
    title: "Inside the fast-fashion supply chain: what “recycled polyester” actually means",
    dek: "We traced three major labels' recycled-fabric claims back to their mills. The certifications check out — the math behind them doesn't.",
    date: "Aug 15",
    read: "11 min read",
  },
  {
    tag: "Companies",
    title: "We asked 12 apparel brands for their factory list. Four answered.",
    dek: "A plain records request, sent the same way to every brand. The pattern in who answered is the story.",
    date: "Jul 22",
    read: "8 min read",
  },
  {
    tag: "News",
    title: "B Corp recertification is getting harder. Good.",
    dek: "The 2026 standard closes three loopholes that let large companies coast on old scores.",
    date: "Jul 6",
    read: "6 min read",
  },
  {
    tag: "Products",
    title: "Why “vegan leather” is mostly plastic — a materials primer",
    dek: "A plain-language guide to what's actually in the alternative-leather products on shelves right now.",
    date: "Jul 29",
    read: "7 min read",
  },
  {
    tag: "Investigation",
    title: "The carbon-offset shipping claim almost nobody can back up",
    dek: "Three retailers advertise “carbon-neutral shipping.” We asked for the offset registry entries. One could produce them.",
    date: "Jun 18",
    read: "10 min read",
  },
  {
    tag: "Good Living",
    title: "Reader mailbag: is secondhand always better?",
    dek: "Not always — the cases where buying new is the more honest choice, explained.",
    date: "Jun 30",
    read: "6 min read",
  },
];

const TAGS = ["Investigation", "Companies", "News", "Products", "Good Living"];

export default function NewsList() {
  const [active, setActive] = useState("All");
  const items = active === "All" ? ARTICLES : ARTICLES.filter((a) => a.tag === active);

  return (
    <>
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
        {items.map((a) => (
          <div className="article-row" key={a.title}>
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
          </div>
        ))}
        {items.length === 0 && (
          <p style={{ fontFamily: "var(--font-sans)", color: "var(--ink-faint)", padding: "24px 0" }}>
            No stories tagged {active} yet — check back soon.
          </p>
        )}
      </div>
    </>
  );
}
