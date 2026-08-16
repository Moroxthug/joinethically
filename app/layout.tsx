import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "JoinEthically",
    template: "%s · JoinEthically",
  },
  description:
    "Independent editorial, ratings, and community platform for ethical products, ethical companies, good living, and doing good.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
