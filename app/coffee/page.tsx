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
        eyebrow="What we pour"
        title="The Tattva lineup"
        sub="Filter coffee on a fresh decoction, signature decoction drinks, cold coffee, and single-origin Coorg powder to take home."
      />
      <main>
        <CoffeeBrowser />
      </main>
      <Footer />
    </>
  );
}
