import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tattva Coffee Roasters — Filter Coffee, JP Nagar Bengaluru",
  description:
    "South Indian filter coffee on a fresh decoction, single-origin beans from Coorg, and signature pours like the Filter Tonic. Café & roastery in JP Nagar, Bengaluru.",
  openGraph: {
    title: "Tattva Coffee Roasters",
    description:
      "South Indian filter coffee, done properly. Single-origin Coorg beans. JP Nagar, Bengaluru.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
