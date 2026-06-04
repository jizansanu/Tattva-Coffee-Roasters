import Image from "next/image";
import Link from "next/link";
import { brewSection as s } from "@/lib/content";
import { ArrowRight } from "lucide-react";

// Brew section — left copy + right two-glass composition.
// Editorial pattern: italic clay emphasis in headline, method-label strip,
// clay-accent features (same signature as Stats and Process).
export default function Brew() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-wide flex flex-col-reverse md:flex-row md:items-stretch gap-12 md:gap-16">
        {/* ── Left column ─ copy + method strip + CTA + features ─── */}
        <div className="w-full md:max-w-[460px] lg:max-w-[600px]">
          <p className="eyebrow mb-6">{s.eyebrow}</p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.12] tracking-[-0.01em] text-[color:var(--color-espresso)] max-w-xl">
            {s.headingLead}{" "}
            <em
              className="italic font-normal"
              style={{ color: "var(--color-clay)" }}
            >
              {s.headingEmph}
            </em>{" "}
            {s.headingTail}
          </h2>

          <p className="mt-7 text-[color:var(--color-stone)] leading-relaxed max-w-md">
            {s.body}
          </p>

          {/* Method strip — proves the "4 methods" claim visually */}
          <ul className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            {s.methods.map((m, i) => (
              <li key={m} className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-bark)]">
                  {m}
                </span>
                {i < s.methods.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-[color:var(--color-clay)]/70" />
                )}
              </li>
            ))}
          </ul>

          <Link href={s.cta.href} className="btn-primary mt-10">
            {s.cta.label}
            <ArrowRight size={16} />
          </Link>

          {/* Features — editorial style with clay accent lines (matches stats) */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 max-w-xl">
            {s.features.map((f) => (
              <div key={f.title} className="group cursor-default">
                <span className="block h-px w-7 bg-[color:var(--color-clay)] mb-5 transition-all duration-500 ease-out group-hover:w-16" />
                <h3 className="text-sm uppercase tracking-[0.18em] font-medium text-[color:var(--color-espresso)] group-hover:text-[color:var(--color-clay)] transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--color-stone)] leading-relaxed max-w-[280px]">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column ─ two cup cutouts, flush bottom-right ───── */}
        <div className="flex-1 flex justify-end items-end relative min-h-[400px] md:min-h-[600px]">
          <Image
            src="/images/sections/frame7.webp"
            alt="Espresso in a glass"
            width={624}
            height={720}
            sizes="(max-width: 1024px) 230px, 315px"
            className="w-[230px] lg:w-[315px] h-auto object-contain relative z-10 transition-transform duration-700 hover:-translate-y-2"
          />
          <Image
            src="/images/sections/frame8.webp"
            alt="Cold brew in a tall glass"
            width={292}
            height={600}
            sizes="(max-width: 1024px) 200px, 290px"
            className="w-[200px] lg:w-[290px] h-auto object-contain -ml-6 lg:-ml-10 transition-transform duration-700 hover:-translate-y-2"
          />
        </div>
      </div>
    </section>
  );
}
