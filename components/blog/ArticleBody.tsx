import type { Block } from "@/lib/content/types";
import RichText from "@/components/RichText";
import Scorecard from "./Scorecard";
import BuyBox from "@/components/monetisation/BuyBox";

/** Stable, readable anchors so the contents rail and deep links agree. */
export function headingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function sectionHeadings(body: Block[]): { id: string; text: string }[] {
  return body
    .filter((block): block is Extract<Block, { type: "h2" }> => block.type === "h2")
    .map((block) => ({ id: headingId(block.text), text: block.text }));
}

function BlockView({ block, first }: { block: Block; first: boolean }) {
  switch (block.type) {
    case "para":
      return (
        <p className={block.lead || first ? "prose-lead" : undefined}>
          <RichText text={block.text} />
        </p>
      );

    case "h2":
      return <h2 id={headingId(block.text)}>{block.text}</h2>;

    case "h3":
      return <h3>{block.text}</h3>;

    case "quote":
      return (
        <figure className="prose-quote">
          <blockquote>
            <RichText text={block.text} />
          </blockquote>
          {block.cite && <figcaption>{block.cite}</figcaption>}
        </figure>
      );

    case "list":
      return block.ordered ? (
        <ol className="prose-list">
          {block.items.map((item, index) => (
            <li key={index}>
              <RichText text={item} />
            </li>
          ))}
        </ol>
      ) : (
        <ul className="prose-list">
          {block.items.map((item, index) => (
            <li key={index}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );

    case "image":
      return (
        <figure className="prose-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={block.src} alt={block.alt} loading="lazy" />
          {(block.caption || block.credit) && (
            <figcaption>
              {block.caption}
              {block.credit && <span className="credit">{block.credit}</span>}
            </figcaption>
          )}
        </figure>
      );

    case "callout":
      return (
        <aside className="prose-callout">
          <p className="label">{block.title}</p>
          <p>
            <RichText text={block.body} />
          </p>
        </aside>
      );

    case "scorecard":
      return (
        <div className="prose-scorecard">
          <Scorecard data={block.scorecard} />
        </div>
      );

    case "buybox":
      return <BuyBox offerId={block.offerId} />;
  }
}

export default function ArticleBody({ body }: { body: Block[] }) {
  const firstParaIndex = body.findIndex((block) => block.type === "para");

  return (
    <div className="prose">
      {body.map((block, index) => (
        <BlockView key={index} block={block} first={index === firstParaIndex} />
      ))}
    </div>
  );
}
