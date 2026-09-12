import type { CategorySlug, Post } from "./types";

/**
 * The editorial archive.
 *
 * This stands in for the headless CMS until it lands. Ordering here is
 * irrelevant — every query below sorts by `publishedAt`.
 */
export const POSTS: Post[] = [
  {
    slug: "recycled-polyester-claims-investigation",
    title: 'Inside the fast-fashion supply chain: what "recycled polyester" actually means',
    dek: "We traced three major labels' recycled-fabric claims back to their mills. The certifications check out. The volume maths behind them doesn't.",
    category: "news",
    kind: "Investigation",
    authorSlug: "mira-kessler",
    publishedAt: "2026-08-28",
    updatedAt: "2026-09-04",
    readingMinutes: 11,
    tags: ["Fast fashion", "Recycled materials", "Certification", "Textiles"],
    featured: true,
    hero: {
      src: "/images/hero-mill.jpg",
      alt: "A worker inspecting a bolt of undyed cloth in a spinning mill",
      caption: "An independent spinner in Yorkshire, one of four mills that opened their books to us.",
      credit: "JoinEthically",
    },
    takeaways: [
      "Three high-street labels sold roughly 4.1 million garments described as containing recycled polyester in 2025.",
      "The mills supplying them hold valid chain-of-custody certificates — but certificate volume and shipped volume are reconciled annually, by the brand, on an honour basis.",
      "Two of the three brands could not produce a transaction certificate covering more than 60% of the garments they labelled.",
      "Nobody outside the certification scheme is checking the arithmetic, and the scheme audits paperwork rather than throughput.",
    ],
    body: [
      {
        type: "para",
        lead: true,
        text: "The label sewn into the collar says 50% recycled polyester. The hangtag says the bottles came from a collection scheme in Taiwan. Both statements are, in the narrow sense that matters to a trading standards officer, true. What neither tells you is that the mill which spun that yarn shipped more certified recycled fibre last year than it bought.",
      },
      {
        type: "para",
        text: "Over six months we obtained chain-of-custody paperwork for three high-street labels — referred to here as **Label A**, **Label B**, and **Label C** pending their responses to our final findings — and reconciled it against the garment volumes they reported to investors. The certificates are real. The auditors are accredited. The maths does not work.",
      },
      { type: "h2", text: "How the certificate actually travels" },
      {
        type: "para",
        text: "A recycled-content claim rests on a chain-of-custody standard: a document that follows the material from the recycler to the spinner to the mill to the garment factory. At each handover the seller issues a transaction certificate stating how much certified material changed hands.",
      },
      {
        type: "para",
        text: "In principle this is airtight. In practice, the standard permits what the industry calls *mass balance*: a mill may blend certified and uncertified inputs and then allocate the certified share across its output, provided the totals reconcile at the end of the year. Reconciliation is an annual, document-based exercise. No one weighs anything.",
      },
      {
        type: "quote",
        text: "We audit the paperwork. If a mill's paperwork balances, the mill passes. We have never had the mandate to stand on the loading dock and count pallets.",
        cite: "A senior auditor at one of the two largest certification bodies, speaking on condition of anonymity",
      },
      { type: "h2", text: "Where the numbers stop agreeing" },
      {
        type: "para",
        text: "Label B's 2025 annual report claims 1.6 million units containing at least 50% recycled polyester. Working from garment weights published in its own product data, that implies roughly 340 tonnes of recycled fibre. The transaction certificates its suppliers were able to produce, when we asked through an intermediary buyer, covered 196 tonnes.",
      },
      {
        type: "list",
        items: [
          "**Label A** — claimed volume 1.2m units; certificates located for an estimated 71% of implied fibre weight.",
          "**Label B** — claimed volume 1.6m units; certificates located for an estimated 58%.",
          "**Label C** — claimed volume 1.3m units; declined to provide supplier references, and its mills declined to comment.",
        ],
      },
      {
        type: "callout",
        title: "What we are not saying",
        body: "We found no evidence that any of the three brands knowingly mislabelled a garment, and none of the certificates we examined was forged. The failure we are describing is structural: a scheme that reconciles on paper, annually, cannot detect a shortfall that occurs on a loading dock, daily.",
      },
      { type: "h2", text: "The mills that let us in" },
      {
        type: "para",
        text: "Four independent spinners agreed to show us their intake records — none of them supplying the three labels above, all of them frustrated. Their complaint was consistent and unglamorous: recycled polyester chip costs more than virgin, sometimes 20-40% more, and the price premium the brands pay does not always cover it. A spinner who buys honestly is bidding against one who buys creatively.",
      },
      {
        type: "image",
        src: "/images/pick-wool.jpg",
        alt: "Cones of undyed yarn stacked on a wooden rack",
        caption: "Certified and uncertified fibre are physically identical once spun. This is the entire problem.",
        credit: "JoinEthically",
      },
      {
        type: "para",
        text: "One mill manager put the incentive plainly: the certificate is worth more than the fibre. If the premium a brand pays for a certified claim exceeds the cost of the input, the rational move for a bad actor is to sell the certificate and keep the cheaper material. That is not a loophole in the standard. It is the standard's economics.",
      },
      { type: "h2", text: "What the brands said" },
      {
        type: "para",
        text: "Label A told us its supplier assurance programme \"meets or exceeds all applicable standards\" and declined to address the volume gap. Label B said it was \"reviewing chain-of-custody reconciliation with our certification partner\" and asked us not to publish supplier names, which we have not. Label C did not respond to four requests over eleven weeks.",
      },
      { type: "h2", text: "What would actually fix it" },
      {
        type: "list",
        ordered: true,
        items: [
          "**Publish transaction certificates, not summaries.** A brand that claims recycled content should publish the certificate IDs backing it. Several outdoor brands already do; nothing prevents the high street from following.",
          "**Reconcile quarterly, at the mill, against throughput.** Annual document review is the cheapest possible audit and it buys the least possible assurance.",
          "**Price the premium properly.** A certified claim that a spinner loses money honouring is a claim someone will eventually fake.",
        ],
      },
      {
        type: "para",
        text: "None of this requires new law. It requires the brands that benefit most from the claim to pay for the verification that makes it true — which is, unsurprisingly, the part nobody has volunteered for.",
      },
    ],
    sources: [
      { label: "Label A 2025 Annual Report and Sustainability Data Supplement", date: "March 2026" },
      { label: "Label B 2025 Annual Report", date: "February 2026" },
      { label: "Chain-of-custody standard v4.2, section 7 (mass balance)", publisher: "Certification body documentation" },
      { label: "Interviews with four independent spinning mills", date: "March–July 2026" },
      { label: "Interviews with two accredited auditors, both on background", date: "May 2026" },
      { label: "Garment weight data published in brand product catalogues", date: "Accessed June 2026" },
    ],
    corrections: [
      {
        date: "2026-09-04",
        note: "An earlier version implied Label B had refused to comment. It responded within our deadline; the response has been added in full.",
      },
    ],
  },

  {
    slug: "best-ethical-merino-base-layers",
    title: "The best ethical merino base layers, tested through one very cold winter",
    dek: "We wore eleven base layers from brands that clear our scorecard, in real conditions, for four months. One is clearly better than the rest.",
    category: "products",
    kind: "Review",
    authorSlug: "tomas-oyelaran",
    publishedAt: "2026-08-19",
    readingMinutes: 9,
    tags: ["Merino", "Outdoor", "Apparel", "Buying guide"],
    hasAffiliateLinks: true,
    hero: {
      src: "/images/pick-wool.jpg",
      alt: "Folded merino base layers in undyed and charcoal tones",
      caption: "Eleven base layers, four months, one Scottish winter.",
      credit: "JoinEthically",
    },
    takeaways: [
      "Our pick is Kadu Wool Co.'s 200gsm crew — traceable to a single named farm, and the only one in the test whose full supply chain we could verify end to end.",
      "Mulesing-free claims are near-universal and near-unverifiable; farm-level traceability is the claim that actually survives checking.",
      "Price tracks traceability more closely than it tracks performance. The two most expensive shirts were not the two best shirts.",
    ],
    body: [
      {
        type: "para",
        lead: true,
        text: "A base layer is a good test case for ethical buying, because the ethical questions and the performance questions have the same answer surprisingly often. Wool that comes from a farm someone can name tends to come from a farm someone is willing to be judged on.",
      },
      {
        type: "para",
        text: "We bought eleven shirts at retail — no samples, no press loans, no exceptions — from brands scoring 70 or above on our [People/Planet/Transparency scorecard](/ethics). Four of us wore them across a Scottish winter: commuting, hill walking, and two genuinely unpleasant nights under canvas.",
      },
      { type: "h2", text: "Our pick: Kadu Wool Co. 200gsm crew" },
      {
        type: "para",
        text: "Kadu wins on the thing almost nobody else can do: it will tell you which farm your shirt came from, and that farm will talk to you. Every batch carries a lot number that resolves to a single regenerative property in Patagonia, with grazing and shearing records published annually.",
      },
      { type: "buybox", offerId: "kadu-200-crew" },
      {
        type: "para",
        text: "The shirt itself is unremarkable in the best way. 200gsm is the right weight for three-season use, the flatlock seams sat still under a pack strap, and after four months of weekly wear it has no pilling at the shoulders — the failure point that killed two of the cheaper shirts in this test.",
      },
      { type: "scorecard", scorecard: {
        entity: "Kadu Wool Co.",
        category: "Apparel · Base layers",
        people: 95,
        planet: 88,
        transparency: 93,
        sourceCount: 14,
        lastVerified: "2026-08-14",
      } },
      { type: "h3", text: "Where it loses points" },
      {
        type: "para",
        text: "Planet sits at 88 rather than higher for one reason: air freight. Kadu ships small replenishment orders by air to avoid stockouts, and says so openly in its own reporting, which is more than most. Until that changes, it is the honest ceiling on the score.",
      },
      { type: "h2", text: "Also good: Ridgeway Mills lambswool crew" },
      {
        type: "para",
        text: "Cheaper, British-spun, and warmer at the same weight. It scores 84, held back by a supply chain that is transparent at the mill and opaque at the farm — Ridgeway buys at auction and does not track lots back to properties.",
      },
      { type: "h2", text: "What we'd skip" },
      {
        type: "para",
        text: "Two shirts in the test carried \"ethically sourced\" wording with no scheme, no scope, and no auditor named. That is not a claim, it is a mood. Both scored below 60 on transparency and neither is included here.",
      },
      {
        type: "callout",
        title: "How to check a wool claim in two minutes",
        body: "Ask the brand three questions: which scheme, which auditor, and what proportion of your wool it covers. A brand that can answer all three will answer fast. A brand that can't will answer with adjectives.",
      },
    ],
    sources: [
      { label: "Kadu Wool Co. grazing and shearing records, 2024–2025", date: "Published March 2026" },
      { label: "Ridgeway Mills supplier disclosure", date: "Accessed July 2026" },
      { label: "Four months of wear testing by four reviewers", date: "November 2025 – March 2026" },
    ],
  },

  {
    slug: "we-asked-twelve-brands-for-their-factory-list",
    title: "We asked twelve apparel brands for their factory list. Four answered.",
    dek: "Supplier transparency is the cheapest ethical commitment a brand can make, and two thirds of the ones we contacted still won't make it.",
    category: "companies",
    kind: "Analysis",
    authorSlug: "mira-kessler",
    publishedAt: "2026-07-22",
    readingMinutes: 7,
    tags: ["Transparency", "Apparel", "Supplier lists"],
    takeaways: [
      "Four of twelve brands published or supplied a tier-1 factory list within our deadline.",
      "Three published a list that was more than two years old.",
      "Publishing a supplier list costs a brand almost nothing and is the single strongest predictor of a decent transparency score in our data.",
    ],
    body: [
      {
        type: "para",
        lead: true,
        text: "There is a short list of ethical commitments that cost a company essentially nothing. Publishing the factories you already audit is at the top of it. So we wrote to twelve apparel brands and asked for theirs.",
      },
      {
        type: "para",
        text: "Four answered with a usable tier-1 list. Three pointed us to a document last updated in 2024. Five did not reply at all, including two whose homepages carry the word \"transparency\".",
      },
      { type: "h2", text: "Why the list matters more than the pledge" },
      {
        type: "para",
        text: "A supplier list is falsifiable. A pledge is not. If a brand names the factory, a union organiser, a local journalist, or a labour NGO can check what happens inside it — which is precisely why the list is the commitment brands resist hardest and the one our Transparency sub-score weights most heavily.",
      },
      {
        type: "quote",
        text: "Everyone wants credit for the audit. Nobody wants to tell you where the audit happened.",
        cite: "Daniel Aoki, former textile auditor",
      },
      { type: "h2", text: "The four who answered" },
      {
        type: "para",
        text: "All four are already above 75 on our scorecard, which is not a coincidence: in our dataset of 340 tracked companies, publishing a current tier-1 list correlates with a transparency sub-score roughly 26 points higher than the median. It is the closest thing we have found to a single reliable signal.",
      },
      {
        type: "callout",
        title: "Right of reply",
        body: "Every company we score is contacted before publication and again whenever a score changes by more than five points. Factual corrections are made immediately; disagreements about weighting are published alongside the score rather than resolved in private.",
      },
    ],
    sources: [
      { label: "Correspondence with twelve apparel brands", date: "May–July 2026" },
      { label: "JoinEthically ratings database, 340 companies", date: "As at July 2026" },
    ],
  },

  {
    slug: "ethics-filter-grocery-budget",
    title: "I ran my family's grocery budget through an ethics filter for a month. Here's the real cost.",
    dek: "Not the theoretical cost. The receipts, week by week, and the three swaps that turned out to be free.",
    category: "good-living",
    kind: "Essay",
    authorSlug: "hana-brecht",
    publishedAt: "2026-08-11",
    readingMinutes: 8,
    tags: ["Food", "Money", "Household"],
    takeaways: [
      "Total monthly increase: 11%, or about £38 on a £340 baseline shop.",
      "Two thirds of that increase came from one category — meat and dairy.",
      "Three swaps cost nothing at all, and one saved money.",
    ],
    body: [
      {
        type: "para",
        lead: true,
        text: "The honest version of this article has numbers in it. Most don't, because the numbers are awkward: ethical shopping usually costs more, and telling people otherwise is how you lose them in week two.",
      },
      {
        type: "para",
        text: "So: a family of four, a £340 monthly baseline, one rule — for every item, buy the best-evidenced option available in the shops I can actually reach, or don't buy it.",
      },
      { type: "h2", text: "Week one: the expensive lesson" },
      {
        type: "para",
        text: "I spent £27 more than usual and most of it went on meat. Free-range, higher-welfare, named-farm chicken costs roughly double the value line, and there is no clever trick that makes it not.",
      },
      { type: "h2", text: "The swaps that were free" },
      {
        type: "list",
        items: [
          "**Own-brand staples from retailers with published sourcing policies.** Same price, materially better paper trail.",
          "**Loose fruit and veg instead of pre-packed.** Cheaper per kilo almost everywhere, less packaging, no downside except carrying it.",
          "**Dried pulses instead of tinned.** A quarter of the cost and the thing that absorbed most of the meat reduction.",
        ],
      },
      {
        type: "para",
        text: "By week three the increase had settled at about 9%, because I had stopped buying the same basket more expensively and started buying a slightly different basket. That distinction is the whole exercise.",
      },
      {
        type: "callout",
        title: "The part nobody says out loud",
        body: "If your budget has no slack at all, the honest advice is not \"shop ethically\". It is: change the two or three things that are free, ignore the rest without guilt, and put your effort somewhere it costs you nothing — like who you vote for, or where you work.",
      },
    ],
    sources: [
      { label: "One month of itemised household receipts", date: "July 2026" },
      { label: "Retailer published sourcing policies (four UK supermarkets)", date: "Accessed July 2026" },
    ],
  },

  {
    slug: "how-to-vet-a-charity-in-fifteen-minutes",
    title: "How to vet a charity in fifteen minutes",
    dek: "You don't need a finance degree. You need four documents, and you need to know which number in each one is lying to you.",
    category: "doing-good",
    kind: "Guide",
    authorSlug: "isaac-pemberton",
    publishedAt: "2026-07-11",
    readingMinutes: 6,
    tags: ["Giving", "Charity finance", "Due diligence"],
    takeaways: [
      "The overhead ratio is the most cited and least useful number in charity assessment. Ignore it.",
      "Read the reserves policy and the trustees' report before you read anything the charity wrote for donors.",
      "A charity that can't explain what it would do with more money doesn't need more money yet.",
    ],
    body: [
      {
        type: "para",
        lead: true,
        text: "Most charity \"research\" advice sends you to a ratio: how much of each pound goes to the cause. It is the wrong number. A charity that spends nothing on fundraising, evaluation, or staff retention is not efficient; it is usually about to stop existing.",
      },
      { type: "h2", text: "The four documents" },
      {
        type: "list",
        ordered: true,
        items: [
          "**The latest annual accounts.** Go straight to the reserves policy. Fewer than three months of free reserves is fragile; more than two years, unexplained, deserves a question.",
          "**The trustees' report.** This is written for a regulator, not a donor, which is exactly why it's worth reading.",
          "**The most recent evaluation, if one exists.** Not testimonials — an actual attempt to find out whether the programme worked.",
          "**The regulator's register entry.** Filing late, repeatedly, is a governance signal long before it's a scandal.",
        ],
      },
      { type: "h2", text: "The question that does the most work" },
      {
        type: "quote",
        text: "What would you do with an extra £50,000 tomorrow, and why haven't you done it yet?",
      },
      {
        type: "para",
        text: "A well-run charity answers this in one sentence and has a costed plan behind it. An adrift one answers with its mission statement. You will learn more from this question than from an hour of accounts.",
      },
      {
        type: "callout",
        title: "Where we land on giving platforms",
        body: "Platforms that take a cut of your donation are not automatically bad — the cut buys payment processing and, sometimes, real due diligence. What matters is whether the fee is disclosed at the point of giving. Several major platforms still don't do this clearly.",
      },
    ],
    sources: [
      { label: "Charity Commission register and filing history", date: "Accessed June 2026" },
      { label: "Annual accounts for 30 charities in our vetted directory", date: "2024–2025 filings" },
    ],
  },

  {
    slug: "what-a-sustainable-factory-taught-me",
    title: 'What working inside a "sustainable" factory actually taught me',
    dek: "I spent four years auditing apparel plants. Here is what a social audit can see, and the much longer list of what it can't.",
    category: "companies",
    kind: "Essay",
    authorSlug: "daniel-aoki",
    publishedAt: "2026-08-05",
    readingMinutes: 7,
    guest: true,
    tags: ["Factory audits", "Labour", "Certification"],
    hero: {
      src: "/images/hero-mill.jpg",
      alt: "Interior of a textile mill with rows of machinery",
      credit: "JoinEthically",
    },
    takeaways: [
      "An announced audit measures a factory's ability to prepare for an audit.",
      "Wage records are the easiest document to falsify and the hardest finding to prove.",
      "The most useful signal an auditor gets is usually the thing nobody scheduled.",
    ],
    body: [
      {
        type: "para",
        lead: true,
        text: "I have walked perhaps two hundred factory floors with a clipboard. On maybe six of those visits did I believe I was seeing the factory as it normally is.",
      },
      {
        type: "para",
        text: "This is not because factory managers are villains. It is because we told them we were coming, we told them what we would measure, and then we measured it. Any organisation, given that information, prepares. Yours would too.",
      },
      { type: "h2", text: "What the audit genuinely catches" },
      {
        type: "list",
        items: [
          "Blocked fire exits, missing guards on machinery, absent PPE — physical facts that are expensive to stage.",
          "Structural building risk, when the auditor is qualified to assess it, which is rarer than you'd hope.",
          "Gross documentation failures, where a factory hasn't bothered to prepare at all.",
        ],
      },
      { type: "h2", text: "What it does not catch" },
      {
        type: "para",
        text: "Wage theft executed through double books. Unpaid overtime recorded as voluntary. Subcontracting to an unlisted site forty minutes away. Harassment, almost always, because the interview happens in a room the employer chose, with a translator the employer supplied.",
      },
      {
        type: "quote",
        text: "The workers who most needed to talk to me were the ones the factory made sure I never met. That wasn't subtle. It was just unprovable.",
      },
      { type: "h2", text: "What would make it better" },
      {
        type: "para",
        text: "Unannounced visits. Off-site worker interviews arranged by someone other than the employer. And publishing the findings — not the pass/fail, the findings. Brands buy audits and then treat the result as commercially confidential, which means the one party with no access to the evidence is the person wearing the shirt.",
      },
    ],
    sources: [
      { label: "The author's audit practice, 2019–2023", date: "Recollection, with dates verified against retained records" },
    ],
  },

  {
    slug: "b-corp-vs-fair-trade-certified",
    title: "B Corp vs. Fair Trade Certified: which actually means more?",
    dek: "They measure different things, at different scopes, with different consequences for failing. Here's how to read each one.",
    category: "companies",
    kind: "Explainer",
    authorSlug: "tomas-oyelaran",
    publishedAt: "2026-07-30",
    readingMinutes: 6,
    tags: ["Certification", "B Corp", "Fair Trade"],
    takeaways: [
      "B Corp assesses a whole company across five areas; Fair Trade certifies a product's supply chain against specific standards.",
      "B Corp's threshold is a single aggregate score, so a company can pass while doing badly on one dimension.",
      "Neither is a guarantee. Both are far better than an uncertified claim.",
    ],
    body: [
      {
        type: "para",
        lead: true,
        text: "Readers ask us this more than any other certification question, usually while standing in a shop. The short answer: they aren't comparable, because they don't certify the same object.",
      },
      { type: "h2", text: "B Corp certifies a company" },
      {
        type: "para",
        text: "The assessment covers governance, workers, community, environment, and customers, scored to a single total. A company passes at 80 points out of 200. That aggregation is the thing to watch: strong governance and community scores can carry a mediocre environmental performance over the line.",
      },
      { type: "h2", text: "Fair Trade certifies a supply chain" },
      {
        type: "para",
        text: "It sets floor prices, a premium paid to producer organisations, and standards on labour and environmental practice for a specific commodity. Its scope is narrow and its requirements are concrete — which is both its strength and its limit. A Fair Trade chocolate bar tells you about the cocoa. It tells you nothing about the company that made the bar.",
      },
      {
        type: "callout",
        title: "How we weight them",
        body: "In our scorecard, a current certification of either kind contributes to the Transparency sub-score but never to People or Planet on its own. Certification tells us a claim was checked by someone; it doesn't tell us what they found. We go looking for the findings.",
      },
    ],
    sources: [
      { label: "B Impact Assessment methodology documentation", date: "Accessed June 2026" },
      { label: "Fairtrade International standards for small-scale producer organisations", date: "Accessed June 2026" },
    ],
  },

  {
    slug: "small-business-pricing-fairly",
    title: "Small business, big conscience: pricing fairly when your costs are 20% higher",
    dek: "Running a refill shop taught me that the ethical choice and the survivable price are not always the same number.",
    category: "good-living",
    kind: "Essay",
    authorSlug: "priya-lall",
    publishedAt: "2026-07-25",
    readingMinutes: 6,
    guest: true,
    tags: ["Small business", "Pricing", "Retail"],
    hero: {
      src: "/images/pick-refill.jpg",
      alt: "Refill dispensers and glass jars on a shop shelf",
      credit: "JoinEthically",
    },
    takeaways: [
      "Refill retail carries structurally higher labour cost per pound of revenue than packaged retail.",
      "Transparent pricing — showing customers the breakdown — reduced complaints more than discounting did.",
      "The subscription model most consultants recommend would have been the wrong call for us.",
    ],
    body: [
      {
        type: "para",
        lead: true,
        text: "Every few months someone tells me refill shops should be cheaper, because we're not paying for packaging. They are right about the packaging and wrong about everything else.",
      },
      {
        type: "para",
        text: "Packaging is a small line. Labour is a large one, and refill is labour: decanting, weighing, cleaning, restocking in small quantities, and answering questions from people who have never done this before and deserve a patient answer.",
      },
      { type: "h2", text: "What we tried" },
      {
        type: "list",
        items: [
          "**Discounting to match supermarket prices.** Unsustainable within two months; it also implicitly conceded that our price was wrong.",
          "**A subscription box.** Popular with consultants, hated by our actual customers, who wanted to buy what they needed when they needed it.",
          "**Publishing the breakdown.** A small card on each dispenser: product cost, our margin, what the margin pays for. Complaints dropped noticeably.",
        ],
      },
      {
        type: "quote",
        text: "People don't object to paying more. They object to not knowing why.",
      },
      {
        type: "para",
        text: "That is the only pricing advice I'd give another small ethical business with confidence. You will not win on price. You can absolutely win on not being evasive about it.",
      },
    ],
  },


  {
    slug: "moving-my-pension-out-of-fossil-fuels",
    title: "I moved my pension out of fossil fuels. It took four phone calls.",
    dek: "The single largest ethical decision most people can make is sitting in a workplace pension they have never logged into. Here is what it actually took to change mine.",
    category: "good-living",
    kind: "Essay",
    authorSlug: "rosa-tovar",
    publishedAt: "2026-08-22",
    readingMinutes: 6,
    guest: true,
    tags: ["Pensions", "Money", "Divestment"],
    hero: {
      src: "/images/pick-coffee.jpg",
      alt: "A kitchen table with paperwork and a cup of coffee",
      credit: "JoinEthically",
    },
    takeaways: [
      "A workplace pension is usually the largest pot of money an ordinary person controls, and almost nobody has chosen what it is invested in.",
      "Switching funds within an existing scheme is usually free and takes one form.",
      "The hardest part is not the decision. It is finding out what you are currently invested in.",
    ],
    body: [
      {
        type: "para",
        lead: true,
        text: "I have spent years agonising over whether to buy the more expensive washing-up liquid, while £40,000 of my money sat in a fund I had never looked at. The maths on that is not flattering.",
      },
      {
        type: "para",
        text: "My workplace pension was in the scheme default, which is where roughly nine in ten people leave theirs. The default is designed to be inoffensive and cheap, not to reflect anything you believe.",
      },
      { type: "h2", text: "Call one: finding out what I owned" },
      {
        type: "para",
        text: "This took longest. The provider could tell me the fund name immediately and its holdings not at all; the factsheet was a PDF with a top-ten list and a note that full holdings were published annually. Six of the ten were fine. Two were oil majors.",
      },
      { type: "h2", text: "Calls two and three: what else was on the menu" },
      {
        type: "para",
        text: "Every large scheme now has at least one screened or climate-tilted fund. Mine had three, with fees between 0.12% and 0.41%. The cheapest excluded thermal coal and tobacco and not much else. The dearest was genuinely restrictive and, over ten years, would cost me roughly the price of a decent bicycle.",
      },
      {
        type: "callout",
        title: "The question to ask",
        body: "Not \"is this fund ESG?\" — that word means almost nothing on a factsheet. Ask: what does this fund exclude, and what proportion of the index does that remove? A fund that excludes 2% of the market is a marketing exercise. One that excludes 15% has made a decision.",
      },
      { type: "h2", text: "Call four: the form" },
      {
        type: "para",
        text: "Twelve minutes. One form. No fee. The switch completed in nine working days and the only consequence I have noticed is that I now read the annual statement.",
      },
      {
        type: "para",
        text: "I am not going to claim this saved anything. One person's pension does not move a capital allocation. But it is the largest lever I personally had, it cost me an afternoon, and I had spent a decade not pulling it while thinking hard about washing-up liquid.",
      },
    ],
    sources: [
      { label: "Scheme fund factsheets and charges disclosures", date: "Accessed August 2026" },
    ],
  },

  {
    slug: "b-corp-recertification-getting-harder",
    title: "B Corp recertification is getting harder. Good.",
    dek: "New standards mean some well-known certified companies won't requalify. That's the system working, not failing.",
    category: "news",
    kind: "Analysis",
    authorSlug: "tomas-oyelaran",
    publishedAt: "2026-07-06",
    readingMinutes: 5,
    tags: ["B Corp", "Certification", "Standards"],
    takeaways: [
      "The revised standards replace a single aggregate threshold with minimum requirements across every topic.",
      "Companies that passed on a lopsided score will have to fix the weak dimension or drop out.",
      "Expect a wave of quiet non-renewals rather than public decertifications.",
    ],
    body: [
      {
        type: "para",
        lead: true,
        text: "A certification that nobody ever fails is a marketing scheme. The move away from a single aggregate score towards minimum performance requirements per topic is the most consequential thing to happen to B Corp in a decade.",
      },
      {
        type: "para",
        text: "The effect is straightforward: you can no longer average your way past a weak area. A company with excellent worker policies and an unexamined supply chain now has to examine the supply chain.",
      },
      { type: "h2", text: "What to watch for" },
      {
        type: "para",
        text: "Not announcements. Non-renewals. A company that quietly stops mentioning its certification in the year its term expires has usually made a decision it doesn't want discussed. We track expiry dates across our companies database for exactly this reason, and we'll report the gaps.",
      },
    ],
    sources: [
      { label: "B Lab revised standards documentation", date: "Accessed June 2026" },
      { label: "JoinEthically certification expiry tracker", date: "As at July 2026" },
    ],
  },

  {
    slug: "vegan-leather-materials-primer",
    title: 'Why "vegan leather" is mostly plastic — a materials primer',
    dek: "Removing the animal from a material does not automatically improve it. What the alternatives are actually made of, and which ones hold up.",
    category: "products",
    kind: "Explainer",
    authorSlug: "hana-brecht",
    publishedAt: "2026-07-29",
    readingMinutes: 7,
    tags: ["Materials", "Leather", "Plastics"],
    takeaways: [
      "Most vegan leather sold today is polyurethane on a polyester backing.",
      "Plant-based alternatives are usually plant material bound with plastic — the plant share is often under 50%.",
      "Durability is an ethical variable: a bag that lasts fifteen years beats one that lasts two, on almost any measure.",
    ],
    body: [
      {
        type: "para",
        lead: true,
        text: "\"Vegan\" describes what a material is not. It says nothing about what it is. For most products on sale right now, what it is happens to be plastic.",
      },
      { type: "h2", text: "The three families" },
      {
        type: "list",
        items: [
          "**PU (polyurethane) coated fabric.** The default. Softer and less toxic to produce than PVC, still a fossil-derived polymer on a synthetic backing.",
          "**Bio-based composites.** Cactus, apple, grape, mycelium. Genuinely interesting, and almost always bound with a polymer — read the percentage, which brands rarely volunteer.",
          "**Actual leather.** A by-product of meat with a real tanning footprint and a real welfare question, and a lifespan the alternatives have not yet matched.",
        ],
      },
      {
        type: "callout",
        title: "The question that cuts through it",
        body: "How many years will you own this, and can it be repaired? A durable item amortises its footprint. Nothing on the label will tell you this, but the presence of replaceable hardware and stitched (not glued) seams is a decent proxy.",
      },
      {
        type: "para",
        text: "Our position, reflected in how we score bags and shoes: material choice matters less than lifespan and repairability, and any brand that markets on the material while designing for two seasons is selling you the wrong variable.",
      },
    ],
    sources: [
      { label: "Manufacturer technical data sheets for eleven alternative leather products", date: "Accessed May 2026" },
      { label: "Interviews with two materials scientists", date: "April 2026" },
    ],
  },

  {
    slug: "is-secondhand-always-better",
    title: "Reader mailbag: is secondhand always better?",
    dek: "Almost always — with three exceptions worth knowing, and one that surprises people.",
    category: "good-living",
    kind: "Guide",
    authorSlug: "hana-brecht",
    publishedAt: "2026-06-30",
    readingMinutes: 5,
    tags: ["Secondhand", "Reader questions"],
    takeaways: [
      "Buying secondhand avoids essentially all manufacturing impact, which dominates most product footprints.",
      "Exceptions: some appliances, some safety equipment, and anything you'll replace quickly because it doesn't fit.",
      "Resale platforms that encourage volume buying can undo the benefit entirely.",
    ],
    body: [
      {
        type: "para",
        lead: true,
        text: "Yes, mostly. The manufacturing stage dominates the footprint of nearly everything you can buy secondhand, so not manufacturing it again is the single biggest lever available to a shopper.",
      },
      { type: "h2", text: "The exceptions" },
      {
        type: "list",
        ordered: true,
        items: [
          "**Old, inefficient appliances.** A fifteen-year-old fridge run for another decade can cost more in energy than a new one costs in everything.",
          "**Safety equipment with a service life.** Helmets, climbing gear, car seats. Buy new, no debate.",
          "**Things you buy because they were cheap.** A secondhand item you never wear has a worse footprint per wear than a new one you wear for a decade.",
        ],
      },
      {
        type: "para",
        text: "The surprising one is the third. Resale apps have made secondhand shopping fast and gamified, and volume undoes the benefit quietly. The ethics of secondhand live in the *hand*, not in the *second*.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Queries                                                             */
/* ------------------------------------------------------------------ */

function byDateDesc(a: Post, b: Post): number {
  return b.publishedAt.localeCompare(a.publishedAt);
}

/** Every post, newest first. */
export function getAllPosts(): Post[] {
  return [...POSTS].sort(byDateDesc);
}

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** The lead story for the blog index — the flagged post, else the newest. */
export function getFeaturedPost(): Post {
  return POSTS.find((p) => p.featured) ?? getAllPosts()[0];
}

export function getPostsByCategory(category: CategorySlug): Post[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getPostsByAuthor(authorSlug: string): Post[] {
  return getAllPosts().filter((p) => p.authorSlug === authorSlug);
}

export function getGuestPosts(): Post[] {
  return getAllPosts().filter((p) => p.guest);
}

/**
 * Related reading: same category first, then shared tags, never the post itself.
 * Deterministic so the prerendered output is stable between builds.
 */
export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const scored = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .map((p) => {
      const sharedTags = p.tags.filter((t) => post.tags.includes(t)).length;
      return { post: p, score: (p.category === post.category ? 3 : 0) + sharedTags };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || byDateDesc(a.post, b.post));

  const related = scored.slice(0, limit).map((entry) => entry.post);

  // Top up with recent posts if the category is thin, so the rail is never ragged.
  if (related.length < limit) {
    for (const candidate of getAllPosts()) {
      if (related.length >= limit) break;
      if (candidate.slug === post.slug || related.includes(candidate)) continue;
      related.push(candidate);
    }
  }

  return related;
}

/** Most recently updated date across the archive — used for sitemap freshness. */
export function getArchiveLastModified(): Date {
  const latest = getAllPosts()[0];
  return new Date(latest.updatedAt ?? latest.publishedAt);
}

export function getAllTags(): string[] {
  return [...new Set(POSTS.flatMap((p) => p.tags))].sort();
}
