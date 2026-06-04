import Image from "next/image";
import { founderNote as s, brand } from "@/lib/content";

// Founder quote — mirrors the Beano layout 1:1.
// Spec from Beano CSS:
//   .section.small-padding   → py 80px
//   .quote-wrap              → flex, justify-content: space-between, gap 80→100px
//   .left-image-wrapper      → fixed 420×580 (default), 540×640 (LG)
//   .right-author-quote-wrap → flex:1, justify-content:center, align-items:flex-start
//   .author-name             → text-xs, uppercase, letter-spacing 1.6px, white
export default function Quote() {
  return (
    <section className="bg-[color:var(--color-espresso)] py-20 lg:py-24">
      <div className="container-wide flex flex-col md:flex-row md:justify-between md:items-stretch gap-10 md:gap-20 lg:gap-24">
        {/* ── Left: image at FIXED size (not full-width) ─────────────── */}
        <div className="relative w-full md:w-[420px] md:h-[580px] lg:w-[540px] lg:h-[640px] aspect-[3/4] md:aspect-auto rounded-lg overflow-hidden shrink-0">
          <Image
            src={s.image}
            alt="Coffee beans pouring from a roaster"
            fill
            sizes="(max-width: 768px) 100vw, 540px"
            className="object-cover"
            priority={false}
          />
        </div>

        {/* ── Right: quote, vertically centered, left-aligned ────────── */}
        <figure className="flex-1 flex flex-col justify-center items-start max-w-2xl">
          <p
            className="eyebrow mb-8"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            {s.eyebrow}
          </p>

          <blockquote className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] leading-[1.22] tracking-[-0.005em]">
            <span className="text-white">&ldquo;{s.quoteLead}</span>
            <span className="text-white/40">{s.quoteTail}&rdquo;</span>
          </blockquote>

          <figcaption className="mt-10 flex items-center gap-4">
            {s.avatar ? (
              <span className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                <Image src={s.avatar} alt={s.author} fill sizes="48px" className="object-cover" />
              </span>
            ) : (
              <span
                className="w-12 h-12 rounded-full shrink-0 grid place-items-center font-serif text-lg"
                style={{ backgroundColor: "var(--color-clay)", color: "var(--color-cream)" }}
                aria-hidden
              >
                {brand.name.charAt(0)}
              </span>
            )}
            <div>
              <p
                className="text-white font-medium uppercase"
                style={{ fontSize: "0.75rem", letterSpacing: "1.6px" }}
              >
                {s.author}
              </p>
              <p className="text-white/60 text-sm mt-1">{s.role}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
