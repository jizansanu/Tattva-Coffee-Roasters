"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, productFilters, collectionSection } from "@/lib/content";
import { ArrowRight } from "lucide-react";

// Homepage Collection — Tattva-specific copy and card details.
//   Eyebrow → freshness signal
//   Inline-text filter h2 (Beano's strongest design feature)
//   Sub paragraph telling the Tattva story
//   4 cards with origin + "Fresh this week" pill
//   CTA + helper line
const VISIBLE = 4;

export default function Collection() {
  const [active, setActive] = useState("All Coffee");
  const filtered =
    active === "All Coffee"
      ? products
      : products.filter((p) => p.category === active);
  const shown = filtered.slice(0, VISIBLE);

  return (
    <section id="coffee" className="py-24 md:py-32">
      <div className="container-wide">
        <p className="eyebrow mb-6">{collectionSection.eyebrow}</p>

        {/* Inline-text filter heading — click to filter */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
          {productFilters.map((f, i) => (
            <span key={f}>
              <button
                onClick={() => setActive(f)}
                className={`transition ${
                  active === f
                    ? "text-[color:var(--color-espresso)]"
                    : "text-[color:var(--color-stone)]/55 hover:text-[color:var(--color-bark)]"
                }`}
              >
                {f}
              </button>
              {i < productFilters.length - 1 && (
                <span className="text-[color:var(--color-stone)]/55">, </span>
              )}
            </span>
          ))}
        </h2>

        <p className="mt-8 mb-16 max-w-xl text-[color:var(--color-stone)] leading-relaxed">
          {collectionSection.sub}
        </p>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {shown.map((p) => (
            <Link key={p.slug} href={`/product/${p.slug}`} className="group">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-[color:var(--color-bone)] mb-5">
                {p.fresh && (
                  <span
                    className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[0.65rem] uppercase tracking-[0.2em] font-medium shadow-sm"
                    style={{
                      backgroundColor: "var(--color-peach)",
                      color: "var(--color-espresso)",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ backgroundColor: "var(--color-espresso)" }}
                    />
                    Fresh this week
                  </span>
                )}
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1"
                />
                <span className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[color:var(--color-cream)] grid place-items-center shadow-sm">
                  <Image
                    src="/images/sections/beans-icon.svg"
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden
                  />
                </span>
              </div>
              <h3 className="text-sm uppercase tracking-[0.14em] font-medium text-[color:var(--color-espresso)] group-hover:text-[color:var(--color-clay)] transition">
                {p.name}
              </h3>
              <p className="text-xs text-[color:var(--color-stone)] mt-1.5">
                {p.origin}
              </p>
              <p className="text-sm text-[color:var(--color-bark)] mt-3 leading-snug italic">
                {p.notes}
              </p>
              <p className="mt-3 text-sm">
                <span className="text-[color:var(--color-stone)]">Price&nbsp;&nbsp;</span>
                <span className="text-[color:var(--color-bark)]">
                  {p.price}{" "}
                  <span className="text-[color:var(--color-stone)]">
                    /{p.weight}
                  </span>
                </span>
              </p>
            </Link>
          ))}
        </div>

        {/* Footer — honest CTA + helpful detail */}
        <div className="mt-16 flex flex-col sm:flex-row sm:items-baseline gap-y-4 gap-x-10">
          <Link href="/coffee" className="btn-primary">
            All {products.length} coffees
            <ArrowRight size={16} />
          </Link>
          <p className="text-sm text-[color:var(--color-stone)] max-w-md leading-relaxed">
            {collectionSection.pickupNote}
          </p>
        </div>
      </div>
    </section>
  );
}
