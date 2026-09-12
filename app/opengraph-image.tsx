import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The site-wide social card. Uses the brand's paper ground rather than a photo,
 * so it reads as a masthead rather than as stock imagery.
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(160deg, #ffffff 0%, #efece3 100%)",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#191b17",
              color: "#74bda3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            J
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#191b17", letterSpacing: "-0.01em" }}>
            Join<span style={{ color: "#2f6f5e" }}>Ethically</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 62, color: "#191b17", lineHeight: 1.1, maxWidth: 900 }}>
            {site.tagline}
          </div>
          <div style={{ fontSize: 26, color: "#5b5e54", maxWidth: 820 }}>
            Reader-funded. No display advertising, no paid placements.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#7a561e",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <span>People · Planet · Transparency</span>
          <span>joinethically.com</span>
        </div>
      </div>
    ),
    size,
  );
}
