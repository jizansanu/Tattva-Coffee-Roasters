import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/lib/content";

const CATEGORY_MAP: Record<string, { label: string; filter: string; blurb: string }> = {
  decaf: { label: "Decaf", filter: "Decaf", blurb: "All the flavour, none of the caffeine. Gently processed to keep the character intact." },
  filter: { label: "Filter", filter: "Filter", blurb: "Clean, bright and aromatic — roasts that shine through paper, cloth or a South Indian filter." },
  espresso: { label: "Espresso", filter: "Espresso", blurb: "Rounded, full-bodied roasts built to pull rich shots and stand up to milk." },
  "cold-brew": { label: "Cold Brew", filter: "Cold Brew", blurb: "Smooth, low-acid coffees made for long, slow steeps over ice." },
  "single-origin": { label: "Single Origin", filter: "Single Origin", blurb: "One estate, one harvest, one story — coffees that taste of exactly where they're from." },
  "signature-blends": { label: "Signature Blends", filter: "Signature", blurb: "Our house blends — balanced, consistent, and made for everyday." },
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
