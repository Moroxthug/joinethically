"use client";

import { useState } from "react";

type Cause = {
  name: string;
  category: string;
  blurb: string;
  metric: string;
};

const CATEGORIES: { name: string; items: Cause[] }[] = [
  {
    name: "Disaster Relief",
    items: [
      {
        name: "Frontline Relief Network",
        category: "Disaster response · Global",
        blurb: "89% of donations reach direct aid; financials independently audited annually.",
        metric: "4.6M meals delivered in 2025",
      },
      {
        name: "Rebuild Together Fund",
        category: "Disaster response · Rebuilding",
        blurb: "Focuses on long-term rebuilding after coverage fades. Full grantee list published.",
        metric: "312 homes rebuilt since 2022",
      },
    ],
  },
  {
    name: "Environment",
    items: [
      {
        name: "Understory Land Trust",
        category: "Conservation · Land",
        blurb: "Buys and protects old-growth forest parcels; deeds are public record.",
        metric: "18,400 acres protected",
      },
      {
        name: "Coastal Watch Alliance",
        category: "Conservation · Ocean",
        blurb: "Combines cleanup work with policy advocacy; lobbying spend disclosed separately.",
        metric: "62 tons of plastic removed",
      },
    ],
  },
  {
    name: "Education",
    items: [
      {
        name: "Firstline Literacy Project",
        category: "Education · Literacy",
        blurb: "Small, evidence-backed tutoring model; publishes outcome data, not just anecdotes.",
        metric: "94% of students gained a reading level",
      },
    ],
  },
  {
    name: "Health",
    items: [
      {
        name: "Open Clinic Initiative",
        category: "Health · Primary care access",
        blurb: "Runs free clinics in coverage gaps; cost-per-patient published quarterly.",
        metric: "$34 avg. cost per patient visit",
      },
    ],
  },
];

export default function DoingGoodGrid() {
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
              <div className="cause-card" key={c.name}>
                <div className="cause-card-head">
                  <div>
                    <h3>{c.name}</h3>
                    <p className="cat">{c.category}</p>
                  </div>
                  <span className="vetted-tag">Vetted</span>
                </div>
                <p>{c.blurb}</p>
                <div className="mini-card-foot num">{c.metric}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="coming-soon" style={{ marginTop: 8 }}>
        The full 96-cause directory — with direct volunteer sign-up links — is the next build
        milestone.
      </div>
    </div>
  );
}
