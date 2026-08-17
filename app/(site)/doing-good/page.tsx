import type { Metadata } from "next";
import DoingGoodGrid from "./DoingGoodGrid";

export const metadata: Metadata = { title: "Doing Good" };

export default function DoingGoodPage() {
  return (
    <div className="wrap">
      <div
        className="page-banner"
        style={{ ["--photo-url" as string]: "url(/images/pick-coffee.jpg)", backgroundPosition: "center 70%" }}
      >
        <span>Where your time or money goes furthest</span>
      </div>
      <div className="page-head">
        <p className="label">Doing Good · 96 causes vetted</p>
        <h1>Vetted charities and causes, where your time or money goes furthest</h1>
        <p>
          Charity Navigator&apos;s rigor with a more readable format — every listing checked for
          financial transparency, spending ratio, and measurable outcomes before it appears here.
        </p>
      </div>
      <DoingGoodGrid />
    </div>
  );
}
