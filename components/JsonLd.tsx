/**
 * Structured data. `<` is escaped per the Next.js JSON-LD guidance, since the
 * payload contains editorial copy that we don't otherwise sanitise.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
