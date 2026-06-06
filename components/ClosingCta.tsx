import Image from "next/image";
import Link from "next/link";
import { closingCta as s, images } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export default function ClosingCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[460px] flex items-center">
        <Image
          src={images.beans2}
          alt="Roasted coffee beans"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[color:var(--color-espresso)]/75" />
        <div data-reveal-stagger className="container-narrow relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl text-[color:var(--color-cream)] leading-tight">
            {s.heading}
          </h2>
          <p className="mt-6 text-[color:var(--color-cream)]/80 max-w-xl mx-auto leading-relaxed">
            {s.body}
          </p>
          <Link
            href={s.cta.href}
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm uppercase tracking-[0.18em] transition"
            style={{ backgroundColor: "var(--color-peach)", color: "var(--color-espresso)" }}
          >
            {s.cta.label}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
