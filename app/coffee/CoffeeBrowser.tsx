"use client";

import { useState } from "react";
import { products, productFilters } from "@/lib/content";
import ProductGrid from "@/components/ProductGrid";

export default function CoffeeBrowser({ initial }: { initial?: string }) {
  const [active, setActive] = useState(initial ?? "All");
  const shown =
    active === "All"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <div className="container-wide py-20 md:py-28">
      <div className="flex flex-wrap gap-2 justify-center mb-14">
        {productFilters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.12em] border transition ${
              active === f
                ? "bg-[color:var(--color-espresso)] text-[color:var(--color-cream)] border-[color:var(--color-espresso)]"
                : "border-[color:var(--color-line)] text-[color:var(--color-stone)] hover:border-[color:var(--color-espresso)] hover:text-[color:var(--color-espresso)]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <ProductGrid items={shown} />
    </div>
  );
}
