export type ScoreBlock = {
  type: "score";
  name: string;
  category: string;
  score: number;
  verdict: string;
  people: number;
  planet: number;
  transparency: number;
  sourced: string;
};

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "figure"; photo: string; position?: string; caption: string }
  | ScoreBlock;

export type Article = {
  slug: string;
  tag: string;
  title: string;
  dek: string;
  author: string;
  authorTitle: string;
  authorBio: string;
  authorInitials: string;
  date: string;
  read: string;
  hero: string;
  heroPosition?: string;
  heroCaption: string;
  toc: { id: string; label: string }[];
  body: Block[];
};

export const ARTICLES: Article[] = [
  {
    slug: "fast-fashion-recycled-polyester",
    tag: "Investigation",
    title: "Inside the fast-fashion supply chain: what “recycled polyester” actually means",
    dek: "We traced three major labels' recycled-fabric claims back to their mills. The certifications check out — the math behind them doesn't. A six-month investigation.",
    author: "Mira Kessler",
    authorTitle: "Investigations Editor",
    authorBio:
      "Mira has spent eight years reporting on supply chains and labor conditions across the garment industry. Before JoinEthically, she covered manufacturing for a regional business desk.",
    authorInitials: "MK",
    date: "August 15, 2026",
    read: "11 min read",
    hero: "/images/hero-mill.jpg",
    heroCaption: "Inside an independent wool mill, this spring — not one of the three mills named in this piece.",
    toc: [
      { id: "the-claim", label: "The claim on the label" },
      { id: "what-recycled-measures", label: "What “recycled” actually measures" },
      { id: "where-the-math-breaks", label: "Where the math breaks down" },
      { id: "what-the-mills-told-us", label: "What three mills told us" },
      { id: "what-to-look-for", label: "What to look for instead" },
    ],
    body: [
      {
        type: "p",
        text: "Three of the largest apparel labels sold in North America now print a version of the same claim on their care tags: made with recycled polyester. It's become shorthand for progress — proof, supposedly, that a T-shirt or a fleece jacket is doing something for the planet instead of just taking from it. The certifications behind that claim are real. The number of bottles or garments those certifications imply were actually recycled into your specific jacket is, in most cases, not something anyone can verify — including, it turns out, the brands themselves.",
      },
      {
        type: "p",
        text: "Over six months, we requested chain-of-custody documentation from twelve apparel brands making recycled-content claims on flagship products. Four responded with anything beyond a marketing one-pager. We followed those four claims as far upstream as we were allowed to go — in two cases, onto the mill floor.",
      },
      { type: "h2", id: "the-claim", text: "The claim on the label" },
      {
        type: "p",
        text: "“Made with 52% recycled polyester” is the kind of line that reads as precise. It has a number in it. Numbers read as audited. In practice, the figure on a hangtag is almost always a blend ratio set at the design stage — a spec sheet decision, not a measurement taken from the finished garment. The yarn supplier certifies that the polyester chips they sold the mill meet a recycled-content standard. What happens to that yarn after it enters a mill that also runs virgin polyester on the same lines is a separate question, and it's the one our sourcing requests kept running into.",
      },
      {
        type: "quote",
        text: "The labels are accurate. The volume math behind them isn't — and until now, no one outside the mills was checking.",
      },
      { type: "h2", id: "what-recycled-measures", text: "What “recycled” actually measures" },
      {
        type: "p",
        text: "The most common certification in play, the Global Recycled Standard, uses a mass-balance system rather than physical segregation for large processors. In plain terms: a mill is allowed to buy a certified volume of recycled input, run it through shared equipment alongside virgin material, and then allocate that certified volume across its total output on paper. It's a legitimate accounting method used across several sustainability certifications — cocoa and biofuels use versions of the same system — but it means a specific garment carrying a “recycled” hangtag was not necessarily woven from recycled thread. It was woven from the mill's general output, with a matching volume of certified input recorded somewhere in the mill's books.",
      },
      {
        type: "list",
        items: [
          "Mass balance is disclosed in GRS documentation — it isn't hidden, but it's rarely explained on the product page or the hangtag.",
          "A 100% claim under mass balance can still mean physically mixed fiber on the loom.",
          "Auditors verify the paperwork trail, not the fiber content of individual finished garments.",
        ],
      },
      { type: "h2", id: "where-the-math-breaks", text: "Where the math breaks down" },
      {
        type: "p",
        text: "The volume math is where our reporting found the real gap. Recycled polyester in apparel overwhelmingly comes from rPET — recycled plastic bottles. Global rPET supply is finite and, per multiple industry analysts we spoke with, already oversubscribed: beverage companies, carpet manufacturers, and apparel brands are all buying certified rPET credits against the same limited physical bottle-collection stream. When we compared the recycled-content claims of just the twelve brands in our initial outreach against published global rPET processing volumes, the certified tonnage claimed across their stated production runs exceeded plausible supply by a wide margin — even before accounting for every other industry drawing on the same certified pool.",
      },
      {
        type: "figure",
        photo: "/images/hero-mill.jpg",
        position: "20% center",
        caption: "Spool storage at an independent mill. Certified and virgin yarn is frequently stored, and run, on the same floor.",
      },
      {
        type: "p",
        text: "None of this means the certifications are fraudulent. It means the industry has built a claims system that is accurate at the level of an accounting ledger and misleading at the level of a single product page — and almost no consumer-facing brand explains the difference.",
      },
      { type: "h2", id: "what-the-mills-told-us", text: "What three mills told us" },
      {
        type: "p",
        text: "Two mills granted us floor access on the condition that we not name them, citing active supply contracts. Both confirmed that recycled and virgin polyester run on shared lines and that certified volume is allocated by mass balance, not physical tracking. A third mill, contacted by phone, declined to discuss sourcing at all. Of the four brands that responded to our original request, one — a mid-size outerwear label — provided a full chain-of-custody document down to the yarn lot. It was the only one of the twelve that could.",
      },
      { type: "h2", id: "what-to-look-for", text: "What to look for instead" },
      {
        type: "p",
        text: "A recycled-content claim backed only by a hangtag percentage is a starting point, not proof. The brands worth trusting on this claim publish, or will produce on request, a transaction certificate naming the specific certified supplier and lot — not just a logo. Below is one from our own scorecard database, for a brand that does.",
      },
      {
        type: "score",
        name: "Kadu Wool Co.",
        category: "Apparel · Base layers",
        score: 92,
        verdict: "Recommended",
        people: 95,
        planet: 88,
        transparency: 93,
        sourced: "Sourced from 14 public disclosures · last verified 3 days ago",
      },
      {
        type: "p",
        text: "We put our full findings, including the anonymized mill interviews and the volume comparison methodology, to all twelve brands before publication. The four who responded to the original request are named in the sourcing notes below; the eight who did not respond to either request are named as well. We'll update this piece as more brands reply.",
      },
    ],
  },
  {
    slug: "best-ethical-clothing-brands-2026",
    tag: "Ethical Products",
    title: "9 ethical clothing brands actually worth your money in 2026",
    dek: "“Ethical” gets printed on a lot of hangtags. We rated the brands behind it on the same three questions we ask about everyone: how they treat people, how they treat the planet, and how honest they are about both.",
    author: "JoinEthically Editors",
    authorTitle: "Ethical Products desk",
    authorBio:
      "Our Products desk builds and maintains the People/Planet/Transparency scorecard for every brand we cover, re-checked by hand on a rolling basis as new disclosures land.",
    authorInitials: "JE",
    date: "August 10, 2026",
    read: "13 min read",
    hero: "/images/pick-wool.jpg",
    heroCaption: "Merino base layers from Kadu Wool Co., this list's top-rated pick.",
    toc: [
      { id: "how-we-picked", label: "How we picked" },
      { id: "the-list", label: "The nine brands" },
      { id: "one-to-watch", label: "One to watch" },
      { id: "brands-we-skipped", label: "Brands we skipped, and why" },
    ],
    body: [
      {
        type: "p",
        text: "“Ethical” has become one of the most overused words on a clothing tag, which is exactly why it needs a scorecard behind it instead of a vibe. Every brand on this list has a full People/Planet/Transparency score built from disclosures, certifications, and — where we could get it — direct factory documentation, not a brand's own sustainability page. We update scores as new evidence lands, so treat this list as a snapshot of August 2026, not a permanent ranking.",
      },
      { type: "h2", id: "how-we-picked", text: "How we picked" },
      {
        type: "p",
        text: "We only included brands scoring 65 or above on our 100-point scale, with a minimum of five independently verifiable disclosures. That cutoff excluded several brands with strong marketing and thin paperwork — see the note at the bottom for who didn't make the cut and why. Within that pool, we prioritized brands covering different categories, so this isn't nine variations on the same organic-cotton T-shirt.",
      },
      { type: "h2", id: "the-list", text: "The nine brands" },
      {
        type: "p",
        text: "In score order, highest first. Full sourcing notes are linked from each scorecard.",
      },
      {
        type: "score",
        name: "Kadu Wool Co.",
        category: "Apparel · Base layers",
        score: 92,
        verdict: "Exceptional",
        people: 95,
        planet: 88,
        transparency: 93,
        sourced: "Sourced from 14 disclosures · last verified 3 days ago",
      },
      {
        type: "p",
        text: "Merino wool traced to a single regenerative farm in Patagonia, with third-party labor audits published in full rather than summarized. The best-documented supply chain in our entire apparel database, and it isn't close.",
      },
      {
        type: "score",
        name: "Amsel Studio",
        category: "Apparel · Bags & leather goods",
        score: 87,
        verdict: "Exceptional",
        people: 84,
        planet: 89,
        transparency: 88,
        sourced: "Sourced from 9 disclosures · last verified 2 weeks ago",
      },
      {
        type: "p",
        text: "A small leather-goods maker using vegetable-tanned offcuts from a single tannery it co-owns with two other studios — an unusual structure that makes its supply chain genuinely short and easy to audit.",
      },
      {
        type: "score",
        name: "Thicket Knitwear",
        category: "Apparel · Sweaters & knits",
        score: 83,
        verdict: "Recommended",
        people: 80,
        planet: 85,
        transparency: 84,
        sourced: "Sourced from 8 disclosures · last verified 1 month ago",
      },
      {
        type: "p",
        text: "Recycled-fiber knitwear from a Portugal-based mill with published wastewater treatment data — the kind of specific, checkable disclosure most competitors skip in favor of general statements.",
      },
      {
        type: "score",
        name: "Marlow Denim Co.",
        category: "Apparel · Denim",
        score: 81,
        verdict: "Recommended",
        people: 79,
        planet: 82,
        transparency: 82,
        sourced: "Sourced from 7 disclosures · last verified 3 weeks ago",
      },
      {
        type: "p",
        text: "Water usage down a documented 61% versus conventional denim finishing, with the reduction method (ozone treatment, not just “water-saving techniques”) specified in supplier documentation we could actually check.",
      },
      {
        type: "score",
        name: "Fenwick Outerwear",
        category: "Apparel · Outerwear",
        score: 78,
        verdict: "Recommended",
        people: 76,
        planet: 74,
        transparency: 83,
        sourced: "Sourced from 9 disclosures · last verified 1 week ago",
      },
      {
        type: "p",
        text: "Strong recycled-shell materials story with real chain-of-custody paperwork (see our fast-fashion investigation above) — though dyeing-facility wastewater data is still outstanding, which is why it sits mid-list rather than at the top.",
      },
      {
        type: "score",
        name: "Birchfield Basics",
        category: "Apparel · Essentials",
        score: 76,
        verdict: "Recommended",
        people: 78,
        planet: 71,
        transparency: 79,
        sourced: "Sourced from 6 disclosures · last verified 1 month ago",
      },
      {
        type: "p",
        text: "Unglamorous but consistent: organic-cotton basics at a price point that doesn't require a trust-fund to shop ethically, with a published (if modest) factory list.",
      },
      {
        type: "score",
        name: "Corrie & Vale",
        category: "Apparel · Outerwear",
        score: 74,
        verdict: "Recommended",
        people: 72,
        planet: 73,
        transparency: 76,
        sourced: "Sourced from 6 disclosures · last verified 2 weeks ago",
      },
      {
        type: "p",
        text: "A newer entrant with a smaller disclosure history than most on this list, but what's published checks out, and the brand responded fully to our right-of-reply request within a week.",
      },
      {
        type: "score",
        name: "Nettle & Bone",
        category: "Apparel · Activewear",
        score: 69,
        verdict: "Recommended",
        people: 66,
        planet: 71,
        transparency: 70,
        sourced: "Sourced from 5 disclosures · last verified 1 month ago",
      },
      {
        type: "p",
        text: "The lowest score to still clear our 65-point bar. Recycled-nylon activewear with real but limited factory-level labor data — worth watching for whether disclosure depth catches up to the materials story.",
      },
      { type: "h2", id: "one-to-watch", text: "One to watch" },
      {
        type: "score",
        name: "Loop & Warp",
        category: "Apparel · Denim",
        score: 54,
        verdict: "Improving",
        people: 51,
        planet: 58,
        transparency: 53,
        sourced: "Sourced from 5 disclosures · last verified 2 weeks ago",
      },
      {
        type: "p",
        text: "Below our list cutoff today, but included here because the trajectory is real: a published 2027 water-reduction commitment with interim targets, not just an end-date promise. If the mills behind it clear an independent audit, expect this one back on the list.",
      },
      { type: "h2", id: "brands-we-skipped", text: "Brands we skipped, and why" },
      {
        type: "p",
        text: "Several well-marketed brands didn't make this list because their public disclosures didn't clear our five-source minimum, regardless of how polished their sustainability page reads. A glossy impact report is not a disclosure if it can't be traced to an underlying certificate, audit, or factory record. We reached out to each brand we excluded on this basis; we'll update the list if any of them respond with documentation.",
      },
    ],
  },
  {
    slug: "is-vegan-leather-sustainable",
    tag: "Products",
    title: "Is “vegan leather” actually sustainable? A materials primer",
    dek: "A plain-language guide to what's actually in the alternative-leather products on shelves right now — and which versions hold up to scrutiny.",
    author: "Priya Shah",
    authorTitle: "Products Editor",
    authorBio:
      "Priya covers materials and manufacturing for the Ethical Products desk, with a background in textile science.",
    authorInitials: "PS",
    date: "July 29, 2026",
    read: "7 min read",
    hero: "/images/pick-wool.jpg",
    heroPosition: "center 70%",
    heroCaption: "Textile close-up — vegan leather is a plastics story more than a fabric one.",
    toc: [
      { id: "the-plastic-problem", label: "The plastic problem" },
      { id: "the-better-versions", label: "The better versions" },
      { id: "how-to-check", label: "How to check before you buy" },
    ],
    body: [
      {
        type: "p",
        text: "“Vegan leather” sounds like a materials innovation. Read the fiber content label on most products carrying that phrase, and what you'll usually find is polyurethane or PVC — plastic, coated to look and feel like hide. That's not automatically worse than real leather on every axis, but it is a different set of environmental questions than the phrase implies, and most product pages don't ask them.",
      },
      { type: "h2", id: "the-plastic-problem", text: "The plastic problem" },
      {
        type: "p",
        text: "Conventional leather has a real environmental cost, concentrated in cattle farming and the tanning process — chromium tanning in particular is a documented water-pollution issue in regions with weak enforcement. But swapping it for petroleum-based plastic doesn't remove environmental cost, it relocates it: to fossil-fuel extraction, to microplastic shedding over the life of the product, and to end-of-life, where PU and PVC don't biodegrade and are rarely recyclable in practice.",
      },
      {
        type: "list",
        items: [
          "PVC (“vinyl”) is the least favorable version — harder to produce and dispose of cleanly than PU.",
          "PU (polyurethane) is more common in newer products and somewhat less harmful to manufacture, but is still a plastic.",
          "Neither biodegrades on any practical timeline once it reaches a landfill.",
        ],
      },
      { type: "h2", id: "the-better-versions", text: "The better versions" },
      {
        type: "p",
        text: "A newer generation of bio-based alternatives — grown from mycelium (mushroom root structure), cactus, or reclaimed fruit waste like apple and grape pomace — are a genuine step forward on raw-material sourcing. The honest caveat: nearly all of them still use a polyurethane coating for durability and water resistance, meaning “mushroom leather” is typically a plant-based product with a partial plastic finish, not a plastic-free one. Read the composition line, not just the marketing name.",
      },
      {
        type: "quote",
        text: "“Plant-based” and “plastic-free” are not the same claim, and only one of them is usually true.",
      },
      { type: "h2", id: "how-to-check", text: "How to check before you buy" },
      {
        type: "list",
        items: [
          "Look for the actual material composition, not just the marketing name on the product page.",
          "“Bio-based” or “partially bio-based” usually means a plant backing with a plastic coating — better than pure plastic, not plastic-free.",
          "For genuine durability, well-made conventional leather from a transparent, low-impact tannery often outlasts either alternative by years, which matters more to lifecycle impact than the raw material alone.",
        ],
      },
      {
        type: "p",
        text: "None of this makes vegan leather a bad choice — for readers avoiding animal products on principle, it's the only option regardless of its plastic content. It just isn't automatically the lower-impact one, and treating it as an unqualified sustainability win is the kind of claim we'd flag on a scorecard if a brand made it without the caveats above.",
      },
    ],
  },
  {
    slug: "apparel-factory-list-request",
    tag: "Companies",
    title: "We asked 12 apparel brands for their factory list. Four answered.",
    dek: "A plain records request, sent the same way to every brand. The pattern in who answered — and how — is the story.",
    author: "Daniel Aoki",
    authorTitle: "Companies Editor",
    authorBio:
      "Daniel is a former textile auditor who joined JoinEthically to build the Companies scorecard database. He worked factory-floor compliance for six years before switching to journalism.",
    authorInitials: "DA",
    date: "July 22, 2026",
    read: "8 min read",
    hero: "/images/hero-mill.jpg",
    heroPosition: "50% 30%",
    heroCaption: "A production floor at one of the four mills that responded to our request.",
    toc: [
      { id: "the-request", label: "The request we sent" },
      { id: "who-answered", label: "Who answered, and how" },
      { id: "who-didnt", label: "Who didn't, and what they said instead" },
      { id: "what-it-means", label: "What a factory list actually proves" },
    ],
    body: [
      {
        type: "p",
        text: "In May, we sent the same email to the sustainability contact at twelve mid-size and large apparel brands: a request for their current factory list — names, locations, and the certification or audit body covering each site. No follow-up questions, no gotcha framing. Just the list, the kind of document a genuinely transparent supply chain should be able to produce in an afternoon.",
      },
      {
        type: "p",
        text: "Four brands sent one. Three sent a partial list — first-tier assembly factories only, with fabric mills and dye houses excluded. Four sent a link to their public sustainability page, which did not contain a factory list. One did not respond at all after two follow-ups.",
      },
      { type: "h2", id: "the-request", text: "The request we sent" },
      {
        type: "p",
        text: "We kept the ask deliberately narrow so no brand could reasonably claim it was burdensome: current factory name, city and country, and which third-party body last audited it. That's a subset of what the Fair Labor Association and the Fashion Revolution Transparency Index both consider baseline disclosure — nothing we asked for was a novel standard.",
      },
      { type: "h2", id: "who-answered", text: "Who answered, and how" },
      {
        type: "p",
        text: "Kadu Wool Co. replied within four days with a single-farm supply chain document that named the farm, the scouring facility, and the mill — three sites total, each independently auditable. Fenwick Outerwear took three weeks but eventually produced a full list covering both cut-and-sew and dye facilities. Two other brands sent tier-1 lists only, which is common practice but leaves the highest-risk stage of production — dyeing and finishing — unaccounted for.",
      },
      {
        type: "score",
        name: "Kadu Wool Co.",
        category: "Apparel · Base layers",
        score: 92,
        verdict: "Exceptional",
        people: 95,
        planet: 88,
        transparency: 93,
        sourced: "Sourced from 14 disclosures · last verified 3 days ago",
      },
      { id: "who-didnt", type: "h2", text: "Who didn't, and what they said instead" },
      {
        type: "p",
        text: "The four brands that redirected us to a sustainability page each used a version of the same line: “we're committed to full supply chain transparency by 2027.” None of the four pages named a single factory. A commitment to future transparency is not evidence of current transparency, and treating the two as interchangeable in marketing copy is exactly the kind of gap our scorecard is built to catch.",
      },
      {
        type: "quote",
        text: "A commitment to future transparency is not evidence of current transparency.",
      },
      { id: "what-it-means", type: "h2", text: "What a factory list actually proves" },
      {
        type: "p",
        text: "A factory list alone doesn't prove good labor conditions — it proves a brand knows, and is willing to say, where its clothes are made. That's a floor, not a ceiling. But it's a floor most of the industry still won't clear on request, which is why we treat willingness to disclose as a heavily weighted factor in the Transparency third of every company's score.",
      },
      {
        type: "list",
        items: [
          "Full factory list, all tiers, within 2 weeks: Kadu Wool Co., Fenwick Outerwear.",
          "Partial (tier-1 only) list: two brands, not yet named pending their right-of-reply window.",
          "Redirect to a sustainability page with no factory names: four brands.",
          "No response after two follow-ups: one brand.",
        ],
      },
      {
        type: "p",
        text: "We're keeping this request open. Any brand that sends a full list will have its Transparency score revisited within a week of receipt — this is not a one-time snapshot, and neither is any score on this site.",
      },
    ],
  },
  {
    slug: "vet-a-charity-in-fifteen-minutes",
    tag: "Doing Good",
    title: "How to vet a charity in fifteen minutes",
    dek: "You don't need a finance degree to check whether a donation actually does what the ad says. A practical, fifteen-minute checklist.",
    author: "Rosa Tovar",
    authorTitle: "Doing Good contributor",
    authorBio:
      "Rosa writes about household finance and giving for JoinEthically's Doing Good desk, and previously worked in nonprofit program evaluation.",
    authorInitials: "RT",
    date: "July 11, 2026",
    read: "6 min read",
    hero: "/images/hands-donation-boxes.jpg",
    heroCaption: "Vetting a cause takes less time than most people assume.",
    toc: [
      { id: "spending-ratio", label: "Check the spending ratio" },
      { id: "read-the-990", label: "Read one page of the 990" },
      { id: "outcomes-not-anecdotes", label: "Look for outcomes, not anecdotes" },
      { id: "the-checklist", label: "The 15-minute checklist" },
    ],
    body: [
      {
        type: "p",
        text: "Most people give to charity based on a story — a photo, an ad, a friend's fundraiser — and never check whether the organization behind it is actually effective. That's understandable; charity financial disclosures are dry and not built for a casual reader. But the check that matters most takes about fifteen minutes, and you don't need any special training to do it.",
      },
      { type: "h2", id: "spending-ratio", text: "Check the spending ratio" },
      {
        type: "p",
        text: "The single most useful number is the percentage of a charity's budget that goes to actual programs versus overhead and fundraising. Reputable organizations typically run 75% or higher. Sites like Charity Navigator and CharityWatch calculate this for you from public tax filings — search the charity's name, and look at the finance tab before anything else.",
      },
      {
        type: "list",
        items: [
          "80%+ to programs: strong. Most well-run mid-size and large nonprofits land here.",
          "65–80%: acceptable, but check why — some legitimate causes have higher direct-service costs.",
          "Below 65%, with no clear explanation: treat as a yellow flag and look closer.",
        ],
      },
      { id: "read-the-990", type: "h2", text: "Read one page of the 990" },
      {
        type: "p",
        text: "Every U.S. nonprofit above a small revenue threshold files a Form 990 — a public tax document — annually. You don't need to read all of it. Go straight to the compensation section: if the top executive's pay looks wildly out of proportion to the organization's budget, that's worth a second look. ProPublica's Nonprofit Explorer hosts these for free, searchable by name.",
      },
      {
        type: "quote",
        text: "You're not auditing the charity. You're checking that nothing here would embarrass them if you asked about it directly.",
      },
      { id: "outcomes-not-anecdotes", type: "h2", text: "Look for outcomes, not anecdotes" },
      {
        type: "p",
        text: "A charity's website should say, in specific numbers, what it accomplished last year — meals delivered, acres protected, students tutored, whatever its actual mission is. If the site is all photos and testimonials with no measurable outcomes anywhere, that's not disqualifying on its own, but it means you're trusting a story instead of checking a result.",
      },
      { id: "the-checklist", type: "h2", text: "The 15-minute checklist" },
      {
        type: "list",
        items: [
          "Search the name on Charity Navigator or CharityWatch — check the spending ratio (2 min).",
          "Pull the Form 990 on ProPublica's Nonprofit Explorer — scan executive compensation (5 min).",
          "Check the charity's own site for a specific, numbers-based outcomes report (5 min).",
          "Search “[charity name] complaints” or “[charity name] investigation” to rule out active controversies (3 min).",
        ],
      },
      {
        type: "p",
        text: "Every cause listed in our Doing Good directory has already cleared this bar and then some — but the same fifteen minutes works for any charity you hear about outside our list, and it's worth doing before every gift over pocket-change size.",
      },
    ],
  },
  {
    slug: "budget-ethical-groceries",
    tag: "Good Living",
    title: "How to budget for ethical groceries without doubling your bill",
    dek: "A reader-tested framework for spending more where it actually matters and less everywhere else — not just buying more expensive versions of everything.",
    author: "Dana Woods",
    authorTitle: "Good Living contributor",
    authorBio:
      "Dana writes the Good Living column's household-budget series and has been tracking her own grocery spending publicly for two years.",
    authorInitials: "DW",
    date: "June 30, 2026",
    read: "7 min read",
    hero: "/images/pick-coffee.jpg",
    heroPosition: "center 40%",
    heroCaption: "Not every category is worth the upgrade — knowing which ones are is the whole framework.",
    toc: [
      { id: "the-mistake", label: "The mistake: upgrading everything" },
      { id: "where-it-matters", label: "Where the upgrade actually matters" },
      { id: "where-it-doesnt", label: "Where it mostly doesn't" },
      { id: "the-framework", label: "The framework, in practice" },
    ],
    body: [
      {
        type: "p",
        text: "The most common way people blow up their grocery budget trying to shop more ethically is treating it as an across-the-board upgrade: swap every item for the organic, fair-trade, or sustainably-certified version, and watch the bill jump 30–40%. Most people can't sustain that, get discouraged, and quit. The reader-tested alternative is to be selective — spend more on the categories where it actually changes an outcome, and stop worrying about the rest.",
      },
      { type: "h2", id: "the-mistake", text: "The mistake: upgrading everything" },
      {
        type: "p",
        text: "Ethical certifications exist on a spectrum of how much they change the underlying product. A fair-trade label on coffee or chocolate reflects a real, auditable difference in what farmers are paid. An “eco” label on a shelf-stable pantry staple with a thin supply chain sometimes reflects very little. Treating every label the same way means paying a premium in places where it buys almost nothing.",
      },
      { id: "where-it-matters", type: "h2", text: "Where the upgrade actually matters" },
      {
        type: "list",
        items: [
          "Coffee and chocolate — direct-trade and fair-trade certifications here are well-audited and reflect real farmer pay differences.",
          "Eggs and dairy — cage-free and pasture-raised claims correspond to meaningfully different animal welfare standards, though “free-range” alone is weaker than it sounds.",
          "Seafood — wild-caught vs. farmed and MSC certification track real, large differences in sustainability.",
        ],
      },
      {
        type: "score",
        name: "Ledger Coffee Roasters",
        category: "Food · Coffee",
        score: 88,
        verdict: "Exceptional",
        people: 91,
        planet: 82,
        transparency: 90,
        sourced: "Sourced from 10 disclosures · last verified 2 days ago",
      },
      { id: "where-it-doesnt", type: "h2", text: "Where it mostly doesn't" },
      {
        type: "p",
        text: "Bottled water, most shelf-stable packaged snacks, and produce with a short, simple supply chain are places where an “organic” or “eco” label often adds cost without a proportional difference in outcome — organic produce grown in your own region, for instance, usually beats an imported “ethical” version on total footprint regardless of the sticker.",
      },
      {
        type: "quote",
        text: "The premium is worth paying where the label reflects a real audited difference — not everywhere a label appears.",
      },
      { id: "the-framework", type: "h2", text: "The framework, in practice" },
      {
        type: "p",
        text: "Pick three to five categories where you buy the most and where certifications are well-audited — for most households, that's coffee, chocolate, eggs, and one or two more. Upgrade those without hesitation. Buy everything else on price and convenience, and don't feel guilty about it. This single change is what got our test households' grocery premium down from 30%+ to roughly 8%, while covering the categories that make the largest real-world difference.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
