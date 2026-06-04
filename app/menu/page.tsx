import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Menu — Tattva Coffee Roasters",
  description: "Café menu: espresso, filter, pour-over, cold brew and more.",
};

// TODO: replace with the café's real menu + prices
const menu = [
  {
    section: "Espresso bar",
    items: [
      { name: "Espresso", price: "₹120" },
      { name: "Cortado", price: "₹150" },
      { name: "Flat White", price: "₹180" },
      { name: "Cappuccino", price: "₹180" },
      { name: "Café Latte", price: "₹190" },
      { name: "Mocha", price: "₹220" },
    ],
  },
  {
    section: "Filter & brew",
    items: [
      { name: "South Indian Filter Coffee", price: "₹110" },
      { name: "Pour Over (single origin)", price: "₹220" },
      { name: "AeroPress", price: "₹210" },
      { name: "French Press (for two)", price: "₹320" },
    ],
  },
  {
    section: "Cold",
    items: [
      { name: "Cold Brew", price: "₹220" },
      { name: "Iced Latte", price: "₹220" },
      { name: "Affogato", price: "₹240" },
      { name: "Tonic & Espresso", price: "₹250" },
    ],
  },
  {
    section: "Not coffee",
    items: [
      { name: "Masala Chai", price: "₹100" },
      { name: "Hot Chocolate", price: "₹200" },
      { name: "Filter Cold Chocolate", price: "₹220" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <Nav />
      <PageBanner eyebrow="At the café" title="Our menu" sub="Made to order, with beans roasted a few steps away." />
      <main className="container-narrow py-20 md:py-28">
        <div className="space-y-16">
          {menu.map((m) => (
            <div key={m.section}>
              <h2 className="text-2xl md:text-3xl text-[color:var(--color-clay)] mb-8">{m.section}</h2>
              <ul className="divide-y hairline">
                {m.items.map((it) => (
                  <li key={it.name} className="flex items-baseline justify-between py-4">
                    <span className="font-serif text-xl text-[color:var(--color-espresso)]">{it.name}</span>
                    <span className="flex-1 mx-4 border-b border-dotted border-[color:var(--color-line)]" />
                    <span className="text-[color:var(--color-bark)]">{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
