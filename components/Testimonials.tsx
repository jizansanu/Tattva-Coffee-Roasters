import Image from "next/image";
import Link from "next/link";
import { testimonials, products, ratingBadge, brand } from "@/lib/content";
import { Star } from "lucide-react";

function Stars({ size = 14 }: { size?: number }) {
  return (
    <div className="flex gap-1" style={{ color: "var(--color-clay)" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

function Monogram({ name, size = 44 }: { name: string; size?: number }) {
  return (
    <span
      className="rounded-full shrink-0 grid place-items-center font-serif"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.4,
        backgroundColor: "var(--color-bone)",
        color: "var(--color-clay)",
        border: "1px solid var(--color-clay)",
      }}
      aria-hidden
    >
      {name.charAt(0)}
    </span>
  );
}

export default function Testimonials() {
  const featured = testimonials.find((t) => t.featured) ?? testimonials[0];
  const supporting = testimonials.filter((t) => t !== featured);
  const featuredProduct = featured.mentionsProduct
    ? products.find((p) => p.slug === featured.mentionsProduct)
    : null;

  // Duplicate supporting array for seamless marquee loop
  const marqueeItems = [...supporting, ...supporting];

  return (
    <section id="testimonials" className="py-24 md:py-32 overflow-hidden">
      <div className="container-wide">
        {/* ── Header ─ eyebrow + rating ribbon ───────────────────── */}
        <div data-reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <p className="eyebrow mb-4">From the Regulars</p>
            <p className="text-sm text-[color:var(--color-stone)] max-w-sm leading-relaxed">
              Quietly loved across Bengaluru — a few words from the people who
              drink Tattva more often than they like to admit.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Stars size={16} />
            <span
              className="font-serif italic text-3xl leading-none"
              style={{ color: "var(--color-espresso)" }}
            >
              {ratingBadge.value}
            </span>
            <span className="w-px h-6 bg-[color:var(--color-line)]" />
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-stone)] leading-snug">
              From {ratingBadge.count}
              <br className="hidden sm:inline" />
              <span className="opacity-80">{ratingBadge.source}</span>
            </p>
          </div>
        </div>

        {/* ── Featured pull-quote + floating product card ────────── */}
        <div data-reveal className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 md:mb-24">
          {/* The big quote */}
          <figure className="md:col-span-8 relative">
            {/* Giant decorative opening quote */}
            <span
              className="absolute -top-8 md:-top-12 -left-2 font-serif italic select-none pointer-events-none"
              style={{
                fontSize: "clamp(8rem, 16vw, 14rem)",
                lineHeight: "1",
                color: "var(--color-clay)",
                opacity: 0.18,
              }}
              aria-hidden
            >
              &ldquo;
            </span>
            <blockquote
              className="relative font-serif italic font-normal text-[color:var(--color-bark)] tracking-[-0.005em]"
              style={{
                fontSize: "clamp(1.75rem, 4.2vw, 3.75rem)",
                lineHeight: "1.18",
              }}
            >
              {featured.quote}
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4">
              <Monogram name={featured.name} size={52} />
              <div>
                <p className="text-[color:var(--color-espresso)] font-medium uppercase tracking-[0.16em] text-sm">
                  {featured.name}
                </p>
                <p className="text-sm text-[color:var(--color-stone)] mt-1">
                  {featured.role}
                </p>
              </div>
            </figcaption>
          </figure>

          {/* "What they're drinking" — product cross-promo */}
          {featuredProduct && (
            <aside className="md:col-span-4 md:pl-6 lg:pl-10">
              <Link
                href={`/product/${featuredProduct.slug}`}
                className="group block bg-[color:var(--color-bone)] rounded-2xl p-6 lg:p-7 transition hover:shadow-lg hover:shadow-black/5"
              >
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-[color:var(--color-clay)] mb-5">
                  What they&rsquo;re drinking
                </p>
                <div className="relative aspect-square bg-[color:var(--color-cream)] rounded-lg overflow-hidden mb-5">
                  <Image
                    src={featuredProduct.image}
                    alt={featuredProduct.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-2xl text-[color:var(--color-espresso)] group-hover:text-[color:var(--color-clay)] transition">
                  {featuredProduct.name}
                </h3>
                <p className="text-xs text-[color:var(--color-stone)] mt-1.5">
                  {featuredProduct.origin}
                </p>
                <p className="mt-3 text-sm">
                  <span className="text-[color:var(--color-stone)]">Price&nbsp;&nbsp;</span>
                  <span className="text-[color:var(--color-bark)]">
                    {featuredProduct.price}{" "}
                    <span className="text-[color:var(--color-stone)]">
                      /{featuredProduct.weight}
                    </span>
                  </span>
                </p>
              </Link>
            </aside>
          )}
        </div>

        {/* ── Supporting testimonials marquee ─────────────────────── */}
        <div className="relative -mx-6 md:-mx-12">
          {/* Edge fades for premium feel */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-r from-[color:var(--color-cream)] to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-[color:var(--color-cream)] to-transparent" />

          <div className="overflow-hidden">
            <div
              className="flex animate-marquee-slow gap-6 will-change-transform hover:[animation-play-state:paused]"
              style={{ width: "max-content" }}
            >
              {marqueeItems.map((t, i) => (
                <figure
                  key={t.name + "-" + i}
                  className="shrink-0 w-[320px] md:w-[380px] bg-[color:var(--color-bone)] rounded-2xl p-7 flex flex-col"
                >
                  <Stars />
                  <blockquote className="mt-4 font-serif italic text-base md:text-lg leading-snug text-[color:var(--color-bark)] flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <Monogram name={t.name} size={40} />
                    <div>
                      <p className="text-[color:var(--color-espresso)] font-medium text-sm tracking-wide">
                        {t.name}
                      </p>
                      <p className="text-xs text-[color:var(--color-stone)] mt-0.5">
                        {t.role}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* Quiet invitation to leave a review */}
        <p className="mt-14 text-sm text-[color:var(--color-stone)] max-w-md mx-auto text-center">
          Tried something at the bar you loved? Tell us — we read every Google
          review, and the {brand.name} team appreciates it more than they let on.
        </p>
      </div>
    </section>
  );
}
