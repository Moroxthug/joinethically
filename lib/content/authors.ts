import type { Author } from "./types";

export const AUTHORS: Author[] = [
  {
    slug: "mira-kessler",
    name: "Mira Kessler",
    role: "Investigations Editor",
    initials: "MK",
    bio: "Mira spent eight years covering supply chains for trade press before joining JoinEthically to run investigations. She reports on textiles, certification bodies, and the gap between what a label claims and what a mill can actually prove.",
    contact: "mira@joinethically.com",
    beats: ["Supply chains", "Textiles", "Certification"],
  },
  {
    slug: "tomas-oyelaran",
    name: "Tomás Oyelaran",
    role: "Ratings Editor",
    initials: "TO",
    bio: "Tomás owns the People/Planet/Transparency methodology and the review process behind every score on the site. Before this he built ESG data pipelines for a pensions manager, which is where he learned how much of that data is self-reported.",
    contact: "tomas@joinethically.com",
    beats: ["Ratings methodology", "Corporate disclosure", "Data"],
  },
  {
    slug: "hana-brecht",
    name: "Hana Brecht",
    role: "Good Living Editor",
    initials: "HB",
    bio: "Hana writes the practical end of ethics: what it costs, what it saves, and what it's reasonable to ask of yourself on a normal Tuesday. She is allergic to the word 'journey'.",
    contact: "hana@joinethically.com",
    beats: ["Personal finance", "Food", "Everyday ethics"],
  },
  {
    slug: "isaac-pemberton",
    name: "Isaac Pemberton",
    role: "Doing Good Editor",
    initials: "IP",
    bio: "Isaac evaluates charities and giving vehicles, with a background in grant assessment at a community foundation. He is more interested in a charity's audited accounts than its campaign video.",
    contact: "isaac@joinethically.com",
    beats: ["Philanthropy", "Charity finance", "Volunteering"],
  },
  {
    slug: "priya-lall",
    name: "Priya Lall",
    role: "Founder, Anew Refill — contributor",
    initials: "PL",
    bio: "Priya runs a zero-waste refill pharmacy in Bristol. She writes for JoinEthically as a contributor about the economics of running a small business that refuses the cheap option.",
    beats: ["Small business", "Retail", "Packaging"],
  },
  {
    slug: "rosa-tovar",
    name: "Rosa Tovar",
    role: "Reader contributor",
    initials: "RT",
    bio: "Rosa is a JoinEthically reader and a project manager in Manchester. She writes occasionally about the administrative reality of acting on your values — the phone calls, the forms, and the hold music.",
    beats: ["Pensions", "Household money"],
  },
  {
    slug: "daniel-aoki",
    name: "Daniel Aoki",
    role: "Former textile auditor — contributor",
    initials: "DA",
    bio: "Daniel audited apparel factories across three continents for a major certification body. He now writes and consults on what social audits can and cannot see.",
    beats: ["Factory audits", "Labour standards"],
  },
];

const BY_SLUG = new Map(AUTHORS.map((a) => [a.slug, a]));

export function getAuthor(slug: string): Author {
  const author = BY_SLUG.get(slug);
  if (!author) throw new Error(`Unknown author: ${slug}`);
  return author;
}

export function findAuthor(slug: string): Author | undefined {
  return BY_SLUG.get(slug);
}
