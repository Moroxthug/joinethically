import Link from "next/link";
import type { ReactNode } from "react";

/**
 * The inline markup the content model allows: **bold**, *italic*, [text](href).
 *
 * Parsed into React elements rather than injected as HTML — contributor copy
 * flows through here, and a rich-text field that renders raw HTML is an XSS
 * hole waiting for its first guest post.
 */
const PATTERN = /\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([^)]+)\)/g;

export function renderRichText(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let key = 0;

  for (const match of text.matchAll(PATTERN)) {
    const index = match.index ?? 0;
    if (index > cursor) nodes.push(text.slice(cursor, index));

    const [, bold, italic, linkText, href] = match;
    if (bold) {
      nodes.push(<strong key={key++}>{bold}</strong>);
    } else if (italic) {
      nodes.push(<em key={key++}>{italic}</em>);
    } else if (linkText && href) {
      nodes.push(
        href.startsWith("/") ? (
          <Link key={key++} href={href} className="prose-link">
            {linkText}
          </Link>
        ) : (
          <a
            key={key++}
            href={href}
            className="prose-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            {linkText}
          </a>
        ),
      );
    }

    cursor = index + match[0].length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

export default function RichText({ text }: { text: string }) {
  return <>{renderRichText(text)}</>;
}
