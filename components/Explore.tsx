import Image from "next/image";
import Link from "next/link";
import { exploreSection as s } from "@/lib/content";
import { ArrowRight } from "lucide-react";

// "Behind the Bar" — broken-grid editorial layout.
//   Left: full-bleed image to the viewport edge, dramatic 720px height
//   Floating glass "Now at the bar" card pinned bottom-left of the image
//   Right: italicized-word headline + sub + ghost CTA + 3 micro-stats
export default function Explore() {
  return (
    <section className="py-24 md:py-32 bg-[color:var(--color-bone)] overflow-hidden">
      <div className="grid md:grid-cols-2 items-center gap-12 md:gap-0">
        {/* ── Left: image bleeds to viewport edge ─────────────────── */}
        <div data-reveal className="relative h-[380px] sm:h-[460px] md:h-[640px] lg:h-[760px] md:rounded-r-2xl overflow-hidden group">
          <Image
            src={s.image}
            alt="A barista at work behind the espresso bar"
            fill
            priority={false}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
          />
          {/* Soft gradient at the bottom for card legibility */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />

          {/* Floating glass card — "Now at the bar" */}
          <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 z-10 max-w-[280px]">
            <div className="bg-white/10 backdrop-blur-xl border border-white/25 rounded-2xl p-5 shadow-2xl shadow-black/25">
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-emerald-300 animate-ping opacity-75" />
                  <span className="relative rounded-full w-2 h-2 bg-emerald-400" />
                </span>
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/90">
                  {s.nowBrewing.label}
                </p>
              </div>
              <p className="font-serif text-2xl text-white leading-tight">
                {s.nowBrewing.name}
              </p>
              <p className="mt-2 text-xs text-white/75 leading-relaxed">
                {s.nowBrewing.notes}
              </p>
              <p className="mt-3 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-[color:var(--color-peach)]">
                <span className="w-3 h-px bg-[color:var(--color-peach)]" />
                {s.nowBrewing.detail}
              </p>
            </div>
          </div>
        </div>

        {/* ── Right: copy + stats (constrained padding) ───────────── */}
        <div data-reveal-stagger className="px-6 md:pl-12 lg:pl-20 md:pr-6 lg:pr-12 max-w-2xl">
          <p className="eyebrow mb-6">{s.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-[-0.01em] text-[color:var(--color-espresso)]">
            {s.headingLead}{" "}
            <em
              className="italic font-normal"
              style={{ color: "var(--color-clay)" }}
            >
              {s.headingEmph}
            </em>
            <br />
            {s.headingTail}
          </h2>
          <p className="mt-8 text-[color:var(--color-stone)] leading-relaxed max-w-md">
            {s.sub}
          </p>

          <Link href={s.cta.href} className="btn-ghost mt-10">
            {s.cta.label}
            <ArrowRight size={16} />
          </Link>

          {/* Editorial stats — italic serif numerals, clay accent line above,
              hover extends the line for a quiet micro-interaction. */}
          <dl className="mt-14 grid grid-cols-3 gap-x-3 sm:gap-x-6 lg:gap-x-10 max-w-xl">
            {s.stats.map((stat) => (
              <div key={stat.label} className="group cursor-default">
                <span className="block h-px w-7 bg-[color:var(--color-clay)] mb-4 sm:mb-6 transition-all duration-500 ease-out group-hover:w-16" />
                <dt className="font-serif italic font-normal text-[1.75rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[-0.02em] text-[color:var(--color-espresso)] transition-colors duration-300 group-hover:text-[color:var(--color-clay)]">
                  {stat.value}
                </dt>
                <dd className="text-[0.62rem] sm:text-[0.7rem] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[color:var(--color-stone)] mt-3 sm:mt-5 leading-snug">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
