import { getAllPosts } from "@/lib/content/posts";

/**
 * Read-only ratings API — the scaffold for leg 3 of the revenue model
 * (ratings-data licensing). It exists now, at v1, because retrofitting a
 * licensable data shape onto a database designed only for page rendering is
 * how that revenue line gets postponed forever.
 *
 * Access: unauthenticated callers get the same data a reader can see on the
 * page, rate-limited by the CDN. A licence key unlocks nothing extra yet; the
 * gate is here so the contract is established before there are customers.
 */

interface RatingRecord {
  entity: string;
  name: string;
  category: string;
  score: number;
  verdict: string;
  subscores: { people: number; planet: number; transparency: number };
  sourceCount: number;
  lastVerified: string;
  citation: string;
}

function verdictFor(score: number): string {
  if (score >= 90) return "Exceptional";
  if (score >= 75) return "Recommended";
  if (score >= 55) return "Improving";
  return "Avoid";
}

/** Scorecards published inside articles are the current source of record. */
function collectRatings(): RatingRecord[] {
  const records: RatingRecord[] = [];

  for (const post of getAllPosts()) {
    for (const block of post.body) {
      if (block.type !== "scorecard") continue;
      const { scorecard } = block;
      const score = Math.round(
        (scorecard.people + scorecard.planet + scorecard.transparency) / 3,
      );
      records.push({
        entity: scorecard.entity.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
        name: scorecard.entity,
        category: scorecard.category,
        score,
        verdict: verdictFor(score),
        subscores: {
          people: scorecard.people,
          planet: scorecard.planet,
          transparency: scorecard.transparency,
        },
        sourceCount: scorecard.sourceCount,
        lastVerified: scorecard.lastVerified,
        citation: `/blog/${post.slug}`,
      });
    }
  }

  return records;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ entity: string }> },
) {
  const { entity } = await params;
  const record = collectRatings().find((r) => r.entity === entity);

  if (!record) {
    return Response.json(
      { error: "not_found", message: `No rating published for "${entity}".` },
      { status: 404 },
    );
  }

  const licenceKey = request.headers.get("x-joinethically-key");
  const tier = licenceKey && licenceKey === process.env.RATINGS_API_KEY ? "licensed" : "public";

  // Commercial redistribution terms travel with the payload, not just the docs.
  return Response.json(
    {
      data: record,
      meta: {
        version: "v1",
        tier,
        licence:
          tier === "licensed"
            ? "Commercial redistribution permitted under your JoinEthically data licence."
            : "Attribution required. Commercial redistribution requires a licence: /licensing",
        attribution: "Rating by JoinEthically",
      },
    },
    {
      headers: {
        // Ratings change on the order of weeks, not seconds.
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    },
  );
}
