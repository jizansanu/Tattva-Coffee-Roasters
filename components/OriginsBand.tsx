import Image from "next/image";
import { originsBand as s } from "@/lib/content";

// "The Estates" — a dark espresso interstitial band that visualizes the five
// Indian origins as a horizontal journey line. The connecting clay hairline +
// ringed dots reads as a stylized route map (estate → roastery → cup), not a
// stats row. Adds the geographic story that only Tattva can tell.
export default function OriginsBand() {
  return (
    <section className="relative bg-[color:var(--color-espresso)] overflow-hidden">
      {/* Subtle grain texture for depth */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <Image
          src="/images/sections/grain.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
      </div>

      <div className="container-wide relative z-10 py-20 md:py-24 lg:py-28">
        {/* ── Header ──────────────────────────────────────────────── */}
        <p
          className="eyebrow text-center mb-6"
          style={{ color: "var(--color-peach)" }}
        >
          {s.eyebrow}
        </p>
        <h2
          className="font-serif italic font-normal text-3xl md:text-4xl lg:text-5xl text-center leading-[1.18] tracking-[-0.005em] max-w-3xl mx-auto text-[color:var(--color-cream)] mb-16 md:mb-20"
        >
          {s.heading}
        </h2>

        {/* ── 5-Origin journey line ──────────────────────────────── */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting hairline behind the dots — the "journey" */}
          <div
            className="hidden md:block absolute left-[7%] right-[7%] h-px z-0"
            style={{
              top: "8px",
              background:
                "linear-gradient(to right, transparent, var(--color-clay), transparent)",
              opacity: 0.55,
            }}
            aria-hidden
          />

          <ul className="grid grid-cols-2 md:grid-cols-5 gap-x-4 lg:gap-x-6 gap-y-12 relative z-10">
            {s.origins.map((o) => (
              <li key={o.name} className="group text-center">
                {/* Ringed dot — sits "on" the connecting line.
                    Ring matches bg so the line appears to pass behind. */}
                <span
                  className="block w-4 h-4 mx-auto mb-6 rounded-full bg-[color:var(--color-clay)] ring-4 transition-colors duration-300 group-hover:bg-[color:var(--color-peach)]"
                  style={{ "--tw-ring-color": "var(--color-espresso)" } as React.CSSProperties}
                />
                <h3 className="font-serif text-xl md:text-2xl text-[color:var(--color-cream)] leading-tight">
                  {o.name}
                </h3>
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[color:var(--color-cream)] opacity-60 mt-2">
                  {o.state}
                </p>
                <p
                  className="text-sm font-medium mt-3 transition-opacity"
                  style={{ color: "var(--color-peach)" }}
                >
                  {o.distance}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Footnote ─ closing line ──────────────────────────────── */}
        <div className="text-center mt-16 md:mt-20">
          <p className="text-sm text-[color:var(--color-cream)] opacity-75 max-w-lg mx-auto leading-relaxed">
            {s.footnote}{" "}
            <span style={{ color: "var(--color-peach)" }}>{s.promise}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
