import { values } from "@/lib/content";

type Props = {
  /** Italic serif statement that bridges the surrounding sections. */
  quote: string;
  /** Render the four brand values as an accent strip beneath. Default: true. */
  showValues?: boolean;
};

// Editorial interstitial — sits between two full sections to give the page
// a breath. Hairline top/bottom, clay-dot accent, italic Fraunces line.
export default function SectionDivider({ quote, showValues = true }: Props) {
  return (
    <section className="relative">
      <div className="border-t border-b hairline py-14 md:py-20">
        <div className="container-narrow text-center px-6">
          {/* Top accent — short hairlines around a clay dot (brand signature) */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-8 h-px bg-[color:var(--color-clay)] opacity-60" />
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-clay)]" />
            <span className="w-8 h-px bg-[color:var(--color-clay)] opacity-60" />
          </div>

          <p
            className="font-serif italic text-2xl md:text-[1.75rem] lg:text-3xl leading-[1.32] text-[color:var(--color-bark)] max-w-3xl mx-auto tracking-[-0.005em]"
          >
            {quote}
          </p>

          {showValues && (
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
              {values.map((v, i) => (
                <li key={v.title} className="flex items-center gap-7">
                  <span className="text-[0.7rem] uppercase tracking-[0.28em] text-[color:var(--color-stone)]">
                    {v.title}
                  </span>
                  {i < values.length - 1 && (
                    <span className="w-1 h-1 rounded-full bg-[color:var(--color-clay)] opacity-50" />
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
