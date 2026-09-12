import type { Metadata } from "next";
import PillarIndex from "@/components/blog/PillarIndex";

export const metadata: Metadata = {
  title: "Good Living",
  description:
    "Practical guidance on living with your values intact — money, food, work, relationships, and the small daily choices.",
};

export default function GoodLivingPage() {
  return (
    <PillarIndex
      category="good-living"
      count="210 guides"
      intro="Money, food, relationships, and the small daily choices — guidance that assumes you have a budget and a schedule, not just good intentions."
      directoryNote="The full guide index, organised by life area rather than by publication date, is in build."
    />
  );
}
