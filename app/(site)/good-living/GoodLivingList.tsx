"use client";

import { useState } from "react";

const TOPICS: {
  name: string;
  items: { title: string; dek: string; read: string }[];
}[] = [
  {
    name: "Money",
    items: [
      {
        title: "How to budget for ethical groceries without doubling your bill",
        dek: "A reader-tested framework for spending more where it matters and less everywhere else.",
        read: "7 min read",
      },
      {
        title: "Is it hypocritical to invest in an index fund?",
        dek: "What's actually inside the S&P 500, and three screened alternatives worth the higher fees.",
        read: "9 min read",
      },
    ],
  },
  {
    name: "Food",
    items: [
      {
        title: "The ethics of re-gifting, actually",
        dek: "Why re-gifting gets a bad reputation it mostly doesn't deserve — and when it does.",
        read: "5 min read",
      },
      {
        title: "Reader mailbag: is secondhand always better?",
        dek: "Not always — the cases where buying new is the more honest choice, explained.",
        read: "6 min read",
      },
    ],
  },
  {
    name: "Relationships",
    items: [
      {
        title: "Talking to family about where their gifts come from, without the lecture",
        dek: "Scripts that open a conversation instead of ending one at the dinner table.",
        read: "8 min read",
      },
    ],
  },
  {
    name: "Habits",
    items: [
      {
        title: "The 15-minute weekly habit that actually changes what you buy",
        dek: "A single recurring checklist, tested by our editors for three months, that beats willpower.",
        read: "4 min read",
      },
      {
        title: "When 'just do more research' becomes its own kind of avoidance",
        dek: "On decision fatigue, and why a good-enough ethical choice made today beats a perfect one made never.",
        read: "6 min read",
      },
    ],
  },
];

export default function GoodLivingList() {
  const [active, setActive] = useState("All");
  const groups = active === "All" ? TOPICS : TOPICS.filter((g) => g.name === active);

  return (
    <div style={{ paddingBottom: 64 }}>
      <div className="filter-chips">
        {["All", ...TOPICS.map((g) => g.name)].map((name) => (
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

      {groups.map((group) => (
        <div className="group-block" key={group.name}>
          <p className="group-label">{group.name}</p>
          <div className="article-list">
            {group.items.map((g) => (
              <div className="article-row" key={g.title}>
                <div>
                  <h3>{g.title}</h3>
                  <p>{g.dek}</p>
                </div>
                <div className="article-meta">
                  <span className="article-tag" style={{ color: "var(--gold-ink)" }}>
                    {group.name}
                  </span>
                  <span>{g.read}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="coming-soon" style={{ marginTop: 8 }}>
        The full 210-guide index is the next build milestone.
      </div>
    </div>
  );
}
