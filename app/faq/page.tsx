import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import Faq from "./Faq";

export const metadata: Metadata = {
  title: "FAQ — Tattva Coffee Roasters",
  description: "Answers to common questions about our coffee, roasting, and café.",
};

export default function FaqPage() {
  return (
    <>
      <Nav />
      <PageBanner eyebrow="Good to know" title="Frequently asked" sub="Everything you might want to know before your first bag." />
      <main>
        <Faq />
      </main>
      <Footer />
    </>
  );
}
