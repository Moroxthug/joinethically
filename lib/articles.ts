export type Article = {
  slug: string;
  category: "Products" | "Companies" | "Good Living" | "Doing Good" | "News";
  title: string;
  dek: string;
  readTime: string;
  publishedDate: string; // display string, e.g. "Aug 14, 2026"
  sources: { label: string; note: string }[];
  body: string[]; // paragraphs
};

/**
 * Editorial note: every article here is staff-written by the JoinEthically
 * editorial team and grounded in publicly documented, verifiable facts about
 * how certification and labeling schemes actually work. None of these are
 * bylined to an individual reporter, and no investigation, quote, interview,
 * or named source is invented — where a claim needs a named source, it's a
 * real organization whose published standards or reports back it up.
 */
export const articles: Article[] = [
  {
    slug: "what-recycled-polyester-labels-actually-mean",
    category: "Products",
    title: "What \"recycled polyester\" labels actually mean",
    dek: "Most recycled polyester in clothing comes from recycled plastic bottles, not old clothes — and textile-to-textile recycling is still a rounding error. Here's what the certifications on the tag do and don't verify.",
    readTime: "7 min read",
    publishedDate: "Aug 14, 2026",
    sources: [
      { label: "Textile Exchange — Global Recycled Standard", note: "Sets chain-of-custody rules for recycled content claims on textiles." },
      { label: "Ellen MacArthur Foundation — A New Textiles Economy", note: "Documents that under 1% of material used to produce clothing is recycled into new clothing." },
      { label: "Changing Markets Foundation — Fossil Fashion reports", note: "Ongoing analysis of brand recycled-content claims and their sourcing." },
    ],
    body: [
      "When a garment tag says \"made with recycled polyester,\" most shoppers picture old clothes being turned into new ones. In practice, the recycled polyester (rPET) used in apparel overwhelmingly comes from recycled plastic bottles, not recycled textiles. Bottle-to-fiber recycling is a mature, well-established process; fiber-to-fiber (garment-to-garment) recycling at scale is not — the Ellen MacArthur Foundation's widely cited research puts the share of clothing material that comes from recycled clothing at under 1% globally.",
      "That distinction matters because it changes what the claim is actually telling you. \"Recycled polyester\" verified under a scheme like Textile Exchange's Global Recycled Standard (GRS) confirms a chain-of-custody: the recycled input can be traced back through the supply chain to a legitimate recycled source, and a minimum recycled-content threshold is met. It does not tell you the material came from textile waste, and it does not make a garment recyclable at end of life — most recycled-polyester garments are blended with other fibers or finishes that make them just as hard to recycle again as virgin-polyester garments.",
      "There's also a demand-side wrinkle worth knowing: recycled-polyester bottles are also wanted by the beverage industry to make new bottles, which is a closed loop that keeps plastic in circulation longer than turning a bottle into a T-shirt (a T-shirt is much less likely to be recycled again afterward). Some sustainability researchers have argued that diverting bottle-grade PET into apparel isn't a straightforward environmental win over recycling it back into bottles.",
      "None of this means the certifications are meaningless. A GRS-certified recycled-content claim is a real, audited chain-of-custody guarantee — it's a meaningfully higher bar than a brand's own unverified \"eco\" label. The point is narrower: it verifies where the material was sourced from and how much of it is in the garment, not that the garment solves textile waste. If a brand's marketing implies the latter without the former being true, that's the gap worth reading for.",
      "What to look for on a label: a named certification (GRS, or the Recycled Claim Standard for lower-threshold claims) with a license or certificate number you can look up, rather than an unverified \"recycled\" or \"eco\" claim with no scheme behind it. And treat \"recycled\" and \"recyclable\" as two different, unrelated claims — a garment can be one without being the other.",
    ],
  },
  {
    slug: "what-b-corp-certification-checks",
    category: "Companies",
    title: "What B Corp certification actually checks — and what it doesn't",
    dek: "A B Corp badge means a company cleared a scored assessment across five categories and legally changed its governance. It doesn't mean the company is carbon neutral, pays a living wage, or has clean supply chains — those are separate, narrower questions.",
    readTime: "6 min read",
    publishedDate: "Jul 22, 2026",
    sources: [
      { label: "B Lab — B Impact Assessment methodology", note: "The scored assessment (governance, workers, community, environment, customers) companies must pass to certify." },
      { label: "B Lab — Certification requirements", note: "Minimum verified score of 80 out of 200 points, plus a legal governance requirement, and recertification every three years." },
    ],
    body: [
      "B Corp certification, administered by the nonprofit B Lab, requires a company to complete the B Impact Assessment — a scored questionnaire covering five areas: governance, workers, community, environment, and customers. To certify, a company must score at least 80 out of a possible 200 points, and B Lab verifies a sample of the answers with supporting documentation rather than taking every answer on trust. Companies must also make a legal change — amending their governing documents (or adopting a stakeholder-governance structure where available) to formally commit to considering workers, community, and environment alongside shareholders, not just shareholder return.",
      "That's a real, structural commitment most companies don't make. But it's worth being precise about what an 80/200 score does and doesn't mean. The 200 points are spread across all five categories, so a company can certify with real weaknesses in one area if it scores well in others — a strong governance and community score can offset a weaker environmental score, for instance. The badge is a floor-clearing pass/fail on an aggregate score, not a report card broken out by category on the storefront tag.",
      "It also doesn't automatically verify specific claims consumers often assume come with it. B Corp certification is not a carbon-neutral certification, not a living-wage certification, and not a supply-chain-audit certification — those are separate, narrower standards (Fair Trade Certified, SA8000, or a company's own published climate targets, for example) that a B Corp may or may not also hold. A B Corp can still have real, documented labor or environmental controversies in its supply chain; certification measures a scored assessment and a governance change, not an ongoing guarantee against every possible violation.",
      "Recertification happens every three years, with the scoring bar generally rising over time as B Lab updates its standards — so an older certification isn't necessarily evidence of current practice without checking the recertification date. B Lab publishes each certified company's score breakdown by category, which is the most useful thing to actually check rather than relying on the badge alone.",
      "The practical takeaway: treat B Corp as a real, verified floor on governance structure and a scored (not perfect) assessment across worker, community, and environmental practices — useful evidence, not a substitute for checking the specific claim you actually care about.",
    ],
  },
  {
    slug: "fair-trade-vs-direct-trade-coffee",
    category: "Good Living",
    title: "Fair Trade vs. direct trade coffee: what the labels actually guarantee",
    dek: "Fair Trade Certified is an audited standard with a published minimum price and social premium. \"Direct trade\" is not a certification at all — it's a marketing term any roaster can use, with no independent verification behind it.",
    readTime: "5 min read",
    publishedDate: "Jun 30, 2026",
    sources: [
      { label: "Fairtrade International — Fairtrade Minimum Price and Premium", note: "Published, audited price floor and additional social premium paid to certified cooperatives." },
      { label: "Fair Trade USA — certification standards", note: "A separate US-based certifier with its own audited standard, distinct from Fairtrade International." },
    ],
    body: [
      "\"Fair Trade\" (as Fairtrade International, and separately Fair Trade USA, certify it) is an audited certification. Certified cooperatives are guaranteed a published Fairtrade Minimum Price when market prices fall below it, plus an additional Fairtrade Premium paid on top of the sale price for the cooperative to invest in community projects it votes on. Certification requires an independent audit against a published standard, and buyers pay into that system to use the label — this is a real, verifiable floor, not a brand's self-description.",
      "\"Direct trade,\" by contrast, has no certifying body, no published standard, and no independent audit behind it. It's a term roasters use to describe buying green coffee directly from a farm or cooperative rather than through a commodity exchange or multiple layers of middlemen. Some roasters using the term do pay well above Fair Trade minimums and publish the prices they pay; others use the term with no disclosure of price at all. Because there's no scheme enforcing the term, \"direct trade\" on a bag tells you a roaster is making a claim about its sourcing relationship — not that any specific price or labor standard was met or checked by anyone outside the company.",
      "This is the opposite pattern from most ethical-sourcing confusion: usually the concern is that a real certification is being misread as guaranteeing more than it does. Here, the certified term (Fair Trade) is the one with an external audit trail, and the uncertified term (direct trade) is the one that sounds more rigorous but has no independent verification requirement at all.",
      "Neither fact makes one automatically \"better\" — a genuinely well-paying direct relationship can exceed Fair Trade minimums, and Fair Trade's minimum price is a floor, not a ceiling. The practical difference is verifiability: a Fair Trade Certified claim can be checked against a published standard and an audit; a direct-trade claim, on its own, can't be independently verified unless the roaster separately discloses and documents the price it actually pays.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
