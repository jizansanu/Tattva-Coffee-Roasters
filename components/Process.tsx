import Image from "next/image";
import { process as s } from "@/lib/content";

// Full-bleed image section with a strong bottom-weighted gradient for
// readability. Steps use the editorial signature: clay accent line + big
// italic serif numeral + uppercase label + concrete Tattva body copy.
export default function Process() {
  return (
    <section
      id="process"
      className="relative w-full min-h-[860px] md:min-h-[100vh] overflow-hidden"
    >
      <Image
        src={s.image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden
      />
      {/* Strong gradient — bright at top for the image, deeply darkened over
          the lower 60% where all the body text lives. */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/75" />
      <div className="absolute inset-0 bg-black/10" />

      <div className="container-wide relative z-10 h-full min-h-[860px] md:min-h-[100vh] flex flex-col justify-between pt-24 pb-20 md:pt-32 md:pb-28">
        {/* ── Top row ─ eyebrow left, heading + body right ───────── */}
        <div data-reveal className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
          <p
            className="eyebrow md:col-span-5"
            style={{ color: "rgba(255,255,255,0.92)" }}
          >
            {s.eyebrow}
          </p>
          <div className="md:col-span-7">
            <h2
              className="text-white text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-[-0.01em] max-w-2xl"
              style={{ textShadow: "0 1px 18px rgba(0,0,0,0.35)" }}
            >
              {s.heading}
            </h2>
            <p
              className="mt-8 text-white text-base md:text-[1.05rem] leading-relaxed max-w-lg"
              style={{ textShadow: "0 1px 14px rgba(0,0,0,0.4)" }}
            >
              {s.body}
            </p>
          </div>
        </div>

        {/* ── Bottom row ─ three steps with big italic numerals ──── */}
        <div>
          {/* Connecting hairline above the steps */}
          <div className="h-px w-full bg-white/35 mb-14 md:mb-16" />

          <div data-reveal-stagger className="grid md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
            {s.steps.map((step, i) => (
              <div key={step.n} className="group">
                {/* Clay accent line — signature element across the brand */}
                <span className="block h-px w-7 bg-[color:var(--color-peach)] mb-5 transition-all duration-500 ease-out group-hover:w-16" />
                {/* Big italic serif number */}
                <span
                  className="font-serif italic font-normal text-5xl md:text-6xl leading-[0.9] tracking-[-0.02em] text-white block"
                  style={{ textShadow: "0 1px 18px rgba(0,0,0,0.35)" }}
                >
                  {step.n}
                </span>
                {/* Label */}
                <h3
                  className="mt-6 text-white text-sm uppercase tracking-[0.24em] font-medium"
                  style={{
                    fontFamily: "var(--font-sans)",
                    textShadow: "0 1px 12px rgba(0,0,0,0.4)",
                  }}
                >
                  {step.title}
                </h3>
                {/* Body — bumped to text-base for readability */}
                <p
                  className="mt-3 text-white/90 leading-relaxed max-w-sm text-[0.95rem]"
                  style={{ textShadow: "0 1px 10px rgba(0,0,0,0.4)" }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
