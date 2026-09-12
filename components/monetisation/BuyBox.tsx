import {
  AFFILIATE_DISCLOSURE,
  getMerchant,
  getOffer,
  offerHref,
} from "@/lib/monetisation/affiliate";

/**
 * The in-article buy box.
 *
 * Three rules, enforced here rather than left to whoever writes the article:
 *  1. The disclosure renders with the box, always, in the same words.
 *  2. The score renders with the box — the reader sees what the recommendation
 *     rests on at the moment they're asked to spend money.
 *  3. The link goes through /go, never straight to a merchant.
 */
export default function BuyBox({ offerId }: { offerId: string }) {
  const offer = getOffer(offerId);
  if (!offer) return null;
  const merchant = getMerchant(offer.merchantId);

  return (
    <aside className="buybox" aria-label={`Where to buy: ${offer.productName}`}>
      <div className="buybox-head">
        <span className="label buybox-kicker">Our pick</span>
        <span className="score-chip num">
          {offer.score} · {offer.verdict}
        </span>
      </div>
      <h3 className="buybox-title">{offer.productName}</h3>
      <p className="buybox-why">{offer.why}</p>
      <div className="buybox-action">
        <a
          className="btn"
          href={offerHref(offer.id)}
          rel="sponsored nofollow noopener"
          target="_blank"
        >
          {offer.price} at {merchant?.name ?? "the retailer"}
        </a>
        <span className="buybox-price num">
          Price checked{" "}
          {new Date(offer.priceChecked).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>
      <p className="buybox-disclosure">{AFFILIATE_DISCLOSURE}</p>
    </aside>
  );
}
