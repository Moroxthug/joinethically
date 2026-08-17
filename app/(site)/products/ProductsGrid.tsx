"use client";

import { useState } from "react";

type Product = {
  name: string;
  brand: string;
  score: number;
  verdict: "Exceptional" | "Recommended" | "Improving" | "Avoid";
  blurb: string;
  sourced: string;
};

const CATEGORIES: { name: string; items: Product[] }[] = [
  {
    name: "Fashion",
    items: [
      {
        name: "Merino base layers",
        brand: "Kadu Wool Co.",
        score: 92,
        verdict: "Exceptional",
        blurb: "Traceable to a single regenerative farm in Patagonia. No exceptions this month.",
        sourced: "Sourced from 14 disclosures · verified 3 days ago",
      },
      {
        name: "Recycled-shell rain jacket",
        brand: "Fenwick Outerwear",
        score: 78,
        verdict: "Recommended",
        blurb: "Solid recycled-poly shell; supply chain audited, dyeing wastewater still unclear.",
        sourced: "Sourced from 9 disclosures · verified 1 week ago",
      },
      {
        name: "Everyday denim",
        brand: "Loop & Warp",
        score: 54,
        verdict: "Improving",
        blurb: "Committed to a 2027 water-reduction target; current mills still unaudited.",
        sourced: "Sourced from 5 disclosures · verified 2 weeks ago",
      },
    ],
  },
  {
    name: "Home",
    items: [
      {
        name: "Zero-waste refill starter kit",
        brand: "Anew Refill Pharmacy",
        score: 85,
        verdict: "Exceptional",
        blurb: "Zero-waste household staples, priced fairly, no subscription trap.",
        sourced: "Sourced from 11 disclosures · verified 5 days ago",
      },
      {
        name: "Organic cotton bedding",
        brand: "Harlow Home",
        score: 71,
        verdict: "Recommended",
        blurb: "GOTS-certified cotton; factory labor audit published but a year out of date.",
        sourced: "Sourced from 7 disclosures · verified 3 weeks ago",
      },
    ],
  },
  {
    name: "Beauty",
    items: [
      {
        name: "Refillable SPF 30",
        brand: "Solace Skin",
        score: 81,
        verdict: "Recommended",
        blurb: "Reef-safe formula, refill pods cut packaging waste by an estimated 70%.",
        sourced: "Sourced from 6 disclosures · verified 4 days ago",
      },
      {
        name: "Plastic-free shampoo bar",
        brand: "Marrow & Co.",
        score: 38,
        verdict: "Avoid",
        blurb: "Palm-derived surfactant sourcing untraceable despite repeated requests.",
        sourced: "Sourced from 3 disclosures · verified 1 month ago",
      },
    ],
  },
  {
    name: "Tech",
    items: [
      {
        name: "Modular repairable phone",
        brand: "Halden Devices",
        score: 88,
        verdict: "Exceptional",
        blurb: "Ten-year parts guarantee, published conflict-mineral sourcing map.",
        sourced: "Sourced from 13 disclosures · verified 6 days ago",
      },
      {
        name: "Recycled-aluminum laptop stand",
        brand: "Verge Studio",
        score: 66,
        verdict: "Recommended",
        blurb: "Good materials story; factory labor practices self-reported, not yet audited.",
        sourced: "Sourced from 4 disclosures · verified 2 weeks ago",
      },
    ],
  },
  {
    name: "Food",
    items: [
      {
        name: "Direct-trade whole bean coffee",
        brand: "Ledger Coffee Roasters",
        score: 88,
        verdict: "Exceptional",
        blurb: "Direct-trade contracts published in full, farmer by farmer.",
        sourced: "Sourced from 10 disclosures · verified 2 days ago",
      },
      {
        name: "Regenerative-grain granola",
        brand: "Fieldnote Foods",
        score: 74,
        verdict: "Recommended",
        blurb: "Regenerative-ag claims verified on 2 of 3 supplying farms so far.",
        sourced: "Sourced from 5 disclosures · verified 3 weeks ago",
      },
    ],
  },
];

const CATEGORY_PHOTO: Record<string, string> = {
  Fashion: "/images/pick-wool.jpg",
  Home: "/images/pick-refill.jpg",
  Beauty: "/images/skincare-shelf.jpg",
  Tech: "/images/phone-repair.jpg",
  Food: "/images/pick-coffee.jpg",
};

export default function ProductsGrid() {
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
            {group.items.map((p) => (
              <div className="mini-card" key={p.name}>
                <div className="mini-card-head">
                  <div className="mini-card-name-row">
                    <div
                      className="mini-card-thumb"
                      style={{ ["--photo-url" as string]: `url(${CATEGORY_PHOTO[group.name]})` }}
                      aria-hidden="true"
                    />
                    <div>
                      <h3>{p.name}</h3>
                      <p className="cat">{p.brand}</p>
                    </div>
                  </div>
                  <span className="score-chip num">
                    {p.score} · {p.verdict}
                  </span>
                </div>
                <p>{p.blurb}</p>
                <div className="mini-card-foot">{p.sourced}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="coming-soon" style={{ marginTop: 8 }}>
        Sorting by score, full-text search, and pagination across all 1,204 rated products is the
        next build milestone. Affiliate links (where present) never affect score, ranking, or
        which items get reviewed — see our{" "}
        <a className="section-link" href="#">
          affiliate policy
        </a>
        .
      </div>
    </div>
  );
}
