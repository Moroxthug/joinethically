"use client";

import { useState } from "react";

type Company = {
  name: string;
  category: string;
  score: number;
  verdict: "Exceptional" | "Recommended" | "Improving" | "Avoid";
  blurb: string;
  sourced: string;
};

const VERDICT_CLASS: Record<Company["verdict"], string> = {
  Exceptional: "exceptional",
  Recommended: "recommended",
  Improving: "improving",
  Avoid: "avoid",
};

const CATEGORIES: { name: string; items: Company[] }[] = [
  {
    name: "Apparel & Footwear",
    items: [
      {
        name: "Kadu Wool Co.",
        category: "Apparel · Base layers",
        score: 92,
        verdict: "Exceptional",
        blurb: "Single-farm traceability, third-party labor audits published in full.",
        sourced: "Sourced from 14 disclosures · last verified 3 days ago",
      },
      {
        name: "Fenwick Outerwear",
        category: "Apparel · Outerwear",
        score: 78,
        verdict: "Recommended",
        blurb: "Strong materials disclosure; dyeing-facility wastewater data still withheld.",
        sourced: "Sourced from 9 disclosures · last verified 1 week ago",
      },
      {
        name: "Loop & Warp",
        category: "Apparel · Denim",
        score: 54,
        verdict: "Improving",
        blurb: "Published a 2027 water-reduction commitment; mills not yet independently audited.",
        sourced: "Sourced from 5 disclosures · last verified 2 weeks ago",
      },
    ],
  },
  {
    name: "Food & Beverage",
    items: [
      {
        name: "Ledger Coffee Roasters",
        category: "Food · Coffee",
        score: 88,
        verdict: "Exceptional",
        blurb: "Direct-trade contracts published farmer by farmer, prices included.",
        sourced: "Sourced from 10 disclosures · last verified 2 days ago",
      },
      {
        name: "Fieldnote Foods",
        category: "Food · Grocery",
        score: 74,
        verdict: "Recommended",
        blurb: "Regenerative-ag claims verified on two of three supplying farms so far.",
        sourced: "Sourced from 5 disclosures · last verified 3 weeks ago",
      },
    ],
  },
  {
    name: "Beauty & Home",
    items: [
      {
        name: "Anew Refill Pharmacy",
        category: "Home · Refill retail",
        score: 85,
        verdict: "Exceptional",
        blurb: "Zero-waste household staples, priced fairly, no subscription trap.",
        sourced: "Sourced from 11 disclosures · last verified 5 days ago",
      },
      {
        name: "Marrow & Co.",
        category: "Beauty · Personal care",
        score: 38,
        verdict: "Avoid",
        blurb: "Palm-derived surfactant sourcing untraceable despite three requests for records.",
        sourced: "Sourced from 3 disclosures · last verified 1 month ago",
      },
    ],
  },
  {
    name: "Tech & Electronics",
    items: [
      {
        name: "Halden Devices",
        category: "Tech · Consumer electronics",
        score: 88,
        verdict: "Exceptional",
        blurb: "Ten-year parts guarantee; published conflict-mineral sourcing map by component.",
        sourced: "Sourced from 13 disclosures · last verified 6 days ago",
      },
      {
        name: "Verge Studio",
        category: "Tech · Accessories",
        score: 66,
        verdict: "Recommended",
        blurb: "Good recycled-materials story; factory labor practices are self-reported only.",
        sourced: "Sourced from 4 disclosures · last verified 2 weeks ago",
      },
    ],
  },
];

const CATEGORY_PHOTO: Record<string, string> = {
  "Apparel & Footwear": "/images/pick-wool.jpg",
  "Food & Beverage": "/images/pick-coffee.jpg",
  "Beauty & Home": "/images/skincare-shelf.jpg",
  "Tech & Electronics": "/images/phone-repair.jpg",
};

export default function CompaniesGrid() {
  const [active, setActive] = useState("All");
  const groups = active === "All" ? CATEGORIES : CATEGORIES.filter((g) => g.name === active);

  return (
    <div style={{ paddingBottom: 64 }}>
      <div className="filter-chips">
        {["All", ...CATEGORIES.map((g) => g.name)].map((name) => (
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
          <div className="item-grid">
            {group.items.map((c) => (
              <div className="mini-card" key={c.name}>
                <div className="mini-card-head">
                  <div className="mini-card-name-row">
                    <div
                      className="mini-card-thumb"
                      style={{ ["--photo-url" as string]: `url(${CATEGORY_PHOTO[group.name]})` }}
                      aria-hidden="true"
                    />
                    <div>
                      <h3>{c.name}</h3>
                      <p className="cat">{c.category}</p>
                    </div>
                  </div>
                  <span className={`verdict-tag ${VERDICT_CLASS[c.verdict]} num`}>
                    {c.score} · {c.verdict}
                  </span>
                </div>
                <p>{c.blurb}</p>
                <div className="mini-card-foot">{c.sourced}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="coming-soon" style={{ marginTop: 8 }}>
        The full 340-company directory — searchable, sortable by score, with score-change history
        per entity — is the next build milestone. Companies can request a factual right-of-reply
        on any scorecard; see{" "}
        <a className="section-link" href="/#how-we-rate">
          how we rate
        </a>
        .
      </div>
    </div>
  );
}
