import { redirect } from "next/navigation";
import { getMerchant, getOffer, resolveOutboundUrl } from "@/lib/monetisation/affiliate";

/**
 * Every outbound affiliate click passes through here.
 *
 * One choke point means: attribution parameters are applied consistently, the
 * merchant list is auditable in one file, and if we ever need to switch or drop
 * a network no published article has to be edited.
 *
 * Deliberately not tracked to an individual: we record nothing about the reader.
 * Networks report clicks on their side, which is enough to run the business and
 * doesn't require us to follow anyone around.
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ offerId: string }> },
) {
  const { offerId } = await params;
  const destination = resolveOutboundUrl(offerId);

  if (!destination) {
    // An unknown offer is a content bug, not a reader error — send them to the
    // reviews index rather than a dead end.
    redirect("/blog/category/products");
  }

  const offer = getOffer(offerId);
  const merchant = offer ? getMerchant(offer.merchantId) : undefined;

  return new Response(null, {
    status: 302,
    headers: {
      Location: destination,
      // Don't leak the reading history of the referring article to the merchant.
      "Referrer-Policy": "no-referrer",
      "Cache-Control": "private, no-store",
      "X-Affiliate-Network": merchant?.network ?? "unknown",
    },
  });
}
