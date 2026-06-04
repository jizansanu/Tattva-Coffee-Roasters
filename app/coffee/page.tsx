import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import CoffeeBrowser from "./CoffeeBrowser";

export const metadata: Metadata = {
  title: "Coffee — Tattva Coffee Roasters",
  description: "Browse our full range of single-origin Indian coffees and signature blends.",
};

export default function CoffeePage() {
  return (
    <>
      <Nav />
      <PageBanner
        eyebrow="Crafted coffee collection"
        title="Our coffee"
        sub="A curated selection of coffees, each with its own flavour story and brewing style."
      />
      <main>
        <CoffeeBrowser />
      </main>
      <Footer />
    </>
  );
}
