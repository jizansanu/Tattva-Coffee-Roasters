import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/content";

export default function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
      {items.map((p) => (
        <Link key={p.slug + p.name} href={`/product/${p.slug}`} className="group">
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
              className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-[color:var(--color-cream)]/90 backdrop-blur-sm text-[0.6rem] uppercase tracking-[0.18em] text-[color:var(--color-bark)] shadow-sm">
              {p.category}
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
  );
}
