import type { Metadata } from "next";
import PillarIndex from "@/components/blog/PillarIndex";

export const metadata: Metadata = {
  title: "News & Investigations",
  description:
    "Original reporting on ethics, sustainability, and corporate accountability, plus the curated digest of what else matters this week.",
};

export default function NewsPage() {
  return (
    <PillarIndex
      category="news"
      count="updated weekly"
      intro="Original reporting on ethics, sustainability, and corporate accountability — the work that takes months and answers to no advertiser."
      directoryNote="The daily curated digest of reporting from elsewhere is the next addition here."
    />
  );
}
