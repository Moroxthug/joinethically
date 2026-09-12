import type { Metadata } from "next";
import PillarIndex from "@/components/blog/PillarIndex";

export const metadata: Metadata = {
  title: "Ethical Companies",
  description:
    "Brand scorecards built from disclosures, certifications, labour records, and audits — updated as new evidence lands.",
};

export default function CompaniesPage() {
  return (
    <PillarIndex
      category="companies"
      count="340 tracked"
      intro="Scorecards built from public disclosures, labour records, certification data, and supply-chain audits. Scores move when the evidence moves, and every company gets a right of reply before publication."
      directoryNote="The searchable company database, with score history per entity, is in build."
    />
  );
}
