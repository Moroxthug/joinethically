import type { Metadata } from "next";
import "./globals.css";

const SITE_DESCRIPTION =
  "Independent ratings, reporting, and community for ethical products, ethical companies, good living, and doing good — reader-funded, ad-free, no pay-to-rank.";

export const metadata: Metadata = {
  metadataBase: new URL("https://joinethically.com"),
  title: {
    default: "JoinEthically — Independent Ethical Ratings & Reporting",
    template: "%s · JoinEthically",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "JoinEthically",
    title: "JoinEthically — Independent Ethical Ratings & Reporting",
    description: SITE_DESCRIPTION,
    images: [{ url: "/images/hero-mill.jpg", width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JoinEthically — Independent Ethical Ratings & Reporting",
    description: SITE_DESCRIPTION,
    images: ["/images/hero-mill.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
