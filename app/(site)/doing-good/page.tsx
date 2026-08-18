import type { Metadata } from "next";
import DoingGoodGrid from "./DoingGoodGrid";

export const metadata: Metadata = { title: "Doing Good" };

export default function DoingGoodPage() {
  return (
    <div className="wrap">
      <div
        className="page-banner"
        style={{ ["--photo-url" as string]: "url(/images/hands-donation-boxes.jpg)" }}
      >
        <span>Where your time or money goes furthest</span>
      </div>
      <div className="page-head">
        <div className="page-head-text">
          <p className="label">Doing Good · 96 causes vetted</p>
          <h1>Vetted charities and causes, where your time or money goes furthest</h1>
          <p>
            Charity Navigator&apos;s rigor with a more readable format — every listing checked for
            financial transparency, spending ratio, and measurable outcomes before it appears
            here.
          </p>
        </div>
        <div className="page-head-spotlight">
          <p className="label">Vetting, by the numbers</p>
          <div className="stat-row">
            <span>Avg. spending ratio</span>
            <strong className="num">86% to programs</strong>
          </div>
          <div className="stat-row">
            <span>Causes added this month</span>
            <strong className="num">6</strong>
          </div>
          <div className="stat-row">
            <span>Failed our vetting bar</span>
            <strong className="num">11 this quarter</strong>
          </div>
        </div>
      </div>
      <DoingGoodGrid />
    </div>
  );
}
