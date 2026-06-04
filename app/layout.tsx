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
  title: "Tattva Coffee Roasters — JP Nagar, Bengaluru",
  description:
    "Single-origin Indian coffees, slow-roasted in small batches. Café and roastery in JP Nagar, Bengaluru.",
  openGraph: {
    title: "Tattva Coffee Roasters",
    description:
      "The essence, in every cup. Roastery & café in JP Nagar, Bengaluru.",
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
