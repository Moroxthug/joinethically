import RichText from "@/components/RichText";

/** The "what to know" summary that sits above the fold on every serious longread. */
export default function Takeaways({ items }: { items: string[] }) {
  return (
    <aside className="takeaways" aria-labelledby="takeaways-heading">
      <p className="label takeaways-head" id="takeaways-heading">
        What to know
      </p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <RichText text={item} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
