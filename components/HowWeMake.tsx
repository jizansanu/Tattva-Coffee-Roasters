import Link from "next/link";
import BgVideo from "@/components/BgVideo";
import { makeSection as s } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export default function HowWeMake() {
  return (
    <section className="relative w-full min-h-[560px] md:h-[80vh] overflow-hidden flex items-center">
      <BgVideo
        {...s.video}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="container-wide relative z-10">
        <div className="max-w-2xl" data-reveal-stagger>
          <p className="eyebrow mb-5" style={{ color: "var(--color-peach)" }}>
            {s.eyebrow}
          </p>
          <h2 className="text-white text-4xl md:text-6xl leading-[1.08]">
            {s.heading}
          </h2>
          <Link
            href={s.cta.href}
            className="mt-10 inline-flex items-center gap-2 text-white text-sm uppercase tracking-[0.16em] border-b border-white/60 pb-1 hover:border-white transition"
          >
            {s.cta.label}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
