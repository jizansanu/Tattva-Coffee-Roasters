import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/lib/content";
import { ArrowLeft, Check } from "lucide-react";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  return { title: p ? `${p.name} — Tattva Coffee Roasters` : "Coffee" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);
  const notesList = product.notes.split(",").map((n) => n.trim());

  return (
    <>
      <Nav />
      <main className="container-wide py-12 md:py-20">
        <Link
          href="/coffee"
          className="inline-flex items-center gap-2 text-sm text-[color:var(--color-stone)] hover:text-[color:var(--color-espresso)] transition mb-10"
        >
          <ArrowLeft size={16} /> Back to coffee
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-[color:var(--color-bone)]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-12"
            />
          </div>

          <div className="md:pt-6">
            <p className="eyebrow mb-4">{product.category}</p>
            <h1 className="text-4xl md:text-5xl text-[color:var(--color-espresso)] leading-tight">
              {product.name}
            </h1>
            <p className="mt-6 font-serif text-3xl text-[color:var(--color-bark)]">
              {product.price}{" "}
              <span className="text-base text-[color:var(--color-stone)]">
                / {product.weight}
              </span>
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-[color:var(--color-stone)] mb-3">
                Tasting notes
              </p>
              <ul className="space-y-2">
                {notesList.map((n) => (
                  <li key={n} className="flex items-center gap-3 text-[color:var(--color-bark)]">
                    <Check size={16} className="text-[color:var(--color-clay)]" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-[color:var(--color-stone)] leading-relaxed max-w-md">
              Roasted in small batches at our JP Nagar roastery. Whole bean by
              default — ask us to grind for your brew method when you pick up.
            </p>

            {/* Honest CTAs — we don't sell online (yet). Route to Instagram DM
                + the café visit page. TODO: wire to real cart when launched. */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`https://www.instagram.com/tattvacoffeeroasters/`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Reserve on Instagram
              </a>
              <Link href="/contact-us" className="btn-ghost">
                Visit the café
              </Link>
            </div>
            <p className="mt-5 text-xs text-[color:var(--color-stone)] max-w-md leading-relaxed">
              We don&apos;t ship online yet. Drop us a DM on Instagram to reserve
              a bag, or come pick it up at the JP Nagar café — we&apos;ll grind
              to your brew method.
            </p>
          </div>
        </div>

        <div className="mt-28">
          <h2 className="text-3xl md:text-4xl mb-12">You might also like</h2>
          <ProductGrid items={related} />
        </div>
      </main>
      <Footer />
    </>
  );
}
