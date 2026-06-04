import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import { heroCopy, todaysFeature, provenance } from "@/lib/content";
import { ArrowRight, Coffee } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[760px] overflow-hidden">
      {/* Background — slow Ken Burns zoom for ambient life */}
      <div className="absolute inset-0 animate-kenburns will-change-transform">
        <Image
          src="/images/hero-crema.webp"
          alt="Close-up of espresso crema"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* Gradient — darker at top/bottom for nav + marquee legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/5 to-black/45" />

      {/* Overlay split-nav */}
      <Nav variant="dark" />

      {/* Hero content — centered, dramatic typography */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20 pb-32">
        <p
          className="eyebrow mb-8"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          {heroCopy.eyebrow}
        </p>

        <h1
          className="text-white font-serif leading-[0.94] tracking-[-0.02em] max-w-6xl"
          style={{
            fontSize: "clamp(3rem, 11vw, 8.5rem)",
            textShadow: "0 2px 30px rgba(0,0,0,0.22)",
          }}
        >
          <span className="block">{heroCopy.headlineLead}</span>
          <span
            className="block font-normal"
            style={{ fontStyle: "italic", letterSpacing: "-0.025em" }}
          >
            {heroCopy.headlineEmph}
          </span>
        </h1>

        <p className="mt-8 text-white/90 text-base md:text-lg max-w-md leading-relaxed">
          {heroCopy.sub}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Link
            href={heroCopy.primaryCta.href}
            className="inline-flex items-center gap-3 pl-7 pr-6 py-3.5 rounded-full text-sm uppercase tracking-[0.18em] transition shadow-lg shadow-black/20 hover:translate-y-[-1px]"
            style={{
              backgroundColor: "var(--color-peach)",
              color: "var(--color-espresso)",
            }}
          >
            {heroCopy.primaryCta.label}
            <ArrowRight size={16} />
          </Link>
          <Link
            href={heroCopy.secondaryCta.href}
            className="group inline-flex items-center gap-2 text-white text-sm uppercase tracking-[0.18em] border-b border-white/60 pb-1 hover:border-white transition"
          >
            {heroCopy.secondaryCta.label}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* "Today's pour-over" floating glass chip — bottom-right */}
      <div className="hidden md:block absolute bottom-24 right-6 lg:right-12 z-10 max-w-[280px]">
        <div className="bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl p-5 shadow-xl shadow-black/15">
          <div className="flex items-center gap-2 mb-2">
            <Coffee size={14} className="text-[color:var(--color-peach)]" />
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-[color:var(--color-peach)]">
              {todaysFeature.eyebrow}
            </p>
          </div>
          <p className="font-serif text-2xl text-white leading-tight">
            {todaysFeature.name}
          </p>
          <p className="mt-2 text-xs text-white/70 leading-relaxed">
            {todaysFeature.notes}
          </p>
          <p className="mt-3 text-xs uppercase tracking-widest text-white/85">
            {todaysFeature.detail}
          </p>
        </div>
      </div>

      {/* Provenance marquee — runs along the very bottom of the hero */}
      <div className="absolute bottom-0 inset-x-0 z-10 h-14 bg-black/45 backdrop-blur-sm border-t border-white/10 overflow-hidden flex items-center">
        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
              {provenance.map((p) => (
                <span
                  key={p + dup}
                  className="text-white/85 text-[0.7rem] md:text-xs uppercase tracking-[0.28em] mx-8 inline-flex items-center gap-4"
                >
                  <span className="w-1 h-1 rounded-full bg-[color:var(--color-peach)]" />
                  {p}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
