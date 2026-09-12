import type { Category, CategorySlug } from "./types";

export const CATEGORIES: Category[] = [
  {
    slug: "news",
    name: "News & Investigations",
    shortName: "News",
    description:
      "Original reporting on ethics, sustainability, and corporate accountability — plus the stories from elsewhere that are worth your time.",
    tone: "accent",
  },
  {
    slug: "products",
    name: "Ethical Products",
    shortName: "Products",
    description:
      "Independently scored reviews of what to buy. One clear recommendation per need, with the full People/Planet/Transparency scorecard underneath.",
    tone: "accent",
  },
  {
    slug: "companies",
    name: "Ethical Companies",
    shortName: "Companies",
    description:
      "Brand scorecards built from disclosures, certifications, labour records, and audits. Scores move when the evidence does.",
    tone: "accent",
  },
  {
    slug: "good-living",
    name: "Good Living",
    shortName: "Good Living",
    description:
      "Practical guidance for living with your values intact — money, food, work, relationships, and the small daily choices.",
    tone: "gold",
  },
  {
    slug: "doing-good",
    name: "Doing Good",
    shortName: "Doing Good",
    description:
      "Vetted charities, giving guides, and volunteering — where your time or money actually goes furthest.",
    tone: "gold",
  },
];

const BY_SLUG = new Map(CATEGORIES.map((c) => [c.slug, c]));

export function getCategory(slug: CategorySlug): Category {
  const category = BY_SLUG.get(slug);
  if (!category) throw new Error(`Unknown category: ${slug}`);
  return category;
}

export function findCategory(slug: string): Category | undefined {
  return BY_SLUG.get(slug as CategorySlug);
}
