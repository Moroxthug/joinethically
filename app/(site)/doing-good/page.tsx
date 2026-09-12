import type { Metadata } from "next";
import PillarIndex from "@/components/blog/PillarIndex";

export const metadata: Metadata = {
  title: "Doing Good",
  description:
    "Vetted charities, giving guides, and volunteering — where your time or money actually goes furthest.",
};

export default function DoingGoodPage() {
  return (
    <PillarIndex
      category="doing-good"
      count="96 causes vetted"
      intro="Charities assessed on their accounts and their evidence, not their campaign videos — plus guides to giving and volunteering where it counts."
      directoryNote="The vetted-charity directory, with the assessment notes behind each entry, is in build."
    />
  );
}
