import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/lib/content";

const CATEGORY_MAP: Record<string, { label: string; filter: string; blurb: string }> = {
  filter: { label: "Filter Coffee", filter: "Filter", blurb: "The everyday cup, built on a fresh decoction and single-origin Coorg beans." },
  signature: { label: "Signature Drinks", filter: "Signature", blurb: "Decoction, reimagined — Filter Tonic, Filter Ale, and the Filter Affogato." },
  cold: { label: "Cold Coffee", filter: "Cold", blurb: "Smooth, sweet, properly cold. For Bengaluru afternoons." },
  black: { label: "Black Coffee", filter: "Black", blurb: "Just decoction and water, hot or cold. Nowhere to hide." },
  "take-home": { label: "Take Home", filter: "Take Home", blurb: "Our single-origin Coorg powder — House Blend and Pure Blend — to brew at home." },
};

export function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const c = CATEGORY_MAP[category];
  return { title: c ? `${c.label} — Tattva Coffee Roasters` : "Coffee" };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const c = CATEGORY_MAP[category];
  if (!c) notFound();

  const items = products.filter((p) => p.category === c.filter);

  return (
    <>
      <Nav />
      <PageBanner eyebrow="Coffee" title={c.label} sub={c.blurb} />
      <main className="container-wide py-20 md:py-28">
        {items.length ? (
          <ProductGrid items={items} />
        ) : (
          <p className="text-center text-[color:var(--color-stone)]">
            New {c.label.toLowerCase()} coffees are roasting. Check back soon.
          </p>
        )}
      </main>
      <Footer />
    </>
  );
}
