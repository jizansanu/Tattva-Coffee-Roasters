import Link from "next/link";
import BgVideo from "@/components/BgVideo";
import { story as s, values, makeSection } from "@/lib/content";
import { ArrowRight } from "lucide-react";

// Our Story — mirrors the Beano layout:
//   Top:    [eyebrow + huge serif heading]  |  [autoplay video]
//   ─────────────── hairline ───────────────
//   Bottom: [paras + Learn more pill]       |  [numbered values list]
export default function Story() {
  return (
    <section id="story" className="py-24 md:py-32">
      <div className="container-wide">
        {/* ── Top row ──────────────────────────────────────── */}
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="md:col-span-7">
            <p className="eyebrow mb-6">{s.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.12] text-[color:var(--color-espresso)] max-w-2xl">
              {s.heading}
            </h2>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[color:var(--color-bone)]">
              <BgVideo
                {...makeSection.video}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Subtle pause-glyph chip echoes the Beano design */}
              <span className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm grid place-items-center text-white text-xs">
                ❚❚
              </span>
            </div>
          </div>
        </div>

        {/* ── Hairline ─────────────────────────────────────── */}
        <div className="border-t hairline my-16 md:my-20" />

        {/* ── Bottom row ───────────────────────────────────── */}
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16">
          <div className="md:col-span-5">
            {s.body.map((p, i) => (
              <p
                key={p}
                className={`text-lg leading-relaxed max-w-md ${
                  i === 0
                    ? "text-[color:var(--color-espresso)]"
                    : "mt-6 text-[color:var(--color-stone)]"
                }`}
              >
                {p}
              </p>
            ))}
            <Link href={s.cta.href} className="btn-primary mt-10">
              {s.cta.label}
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="md:col-span-7">
            <ul>
              {values.map((v, i) => (
                <li
                  key={v.title}
                  className={`flex items-baseline gap-10 md:gap-16 py-5 ${
                    i < values.length - 1 ? "border-b hairline" : ""
                  }`}
                >
                  <span className="font-serif text-3xl md:text-4xl text-[color:var(--color-stone)]/60 w-14 shrink-0">
                    {v.n}
                  </span>
                  <span className="font-serif text-3xl md:text-4xl text-[color:var(--color-espresso)]">
                    {v.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
