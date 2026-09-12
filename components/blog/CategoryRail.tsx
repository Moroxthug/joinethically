import Link from "next/link";
import { CATEGORIES } from "@/lib/content/categories";

/** The horizontal section nav that sits under the masthead on every blog page. */
export default function CategoryRail({ active }: { active?: string }) {
  return (
    <nav className="cat-rail" aria-label="Sections">
      <Link href="/blog" className={`cat-chip${active ? "" : " is-active"}`}>
        All
      </Link>
      {CATEGORIES.map((category) => (
        <Link
          key={category.slug}
          href={`/blog/category/${category.slug}`}
          className={`cat-chip tone-${category.tone}${active === category.slug ? " is-active" : ""}`}
          aria-current={active === category.slug ? "page" : undefined}
        >
          {category.shortName}
        </Link>
      ))}
    </nav>
  );
}
