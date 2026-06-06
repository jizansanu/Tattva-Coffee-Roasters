import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ClosingCta from "@/components/ClosingCta";
import BgVideo from "@/components/BgVideo";
import {
  aboutHero,
  aboutStory,
  aboutTimeline,
  aboutPeople,
  aboutCommunity,
  brand,
} from "@/lib/content";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Tattva Coffee Roasters",
  description:
    "Tattva is a Bengaluru roastery and café making single-origin Indian coffee. Read our story, meet the team, and find out when the next cupping is.",
};

/* ─────────────────────────── HERO ─────────────────────────── */
function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[760px] overflow-hidden">
      <BgVideo
        {...aboutHero.video}
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/55" />

      <Nav variant="dark" />

      <div data-hero-rise className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20 pb-24">
        <p
          className="eyebrow mb-8"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          {aboutHero.eyebrow}
        </p>
        <h1
          className="text-white font-serif leading-[0.96] tracking-[-0.02em] max-w-5xl"
          style={{
            fontSize: "clamp(2.75rem, 9vw, 7.5rem)",
            textShadow: "0 2px 30px rgba(0,0,0,0.22)",
          }}
        >
          {aboutHero.headingLead}{" "}
          <em
            className="italic font-normal"
            style={{ color: "var(--color-peach)" }}
          >
            {aboutHero.headingEmph}
          </em>{" "}
          {aboutHero.headingTail}
        </h1>
        <p className="mt-9 text-white/90 text-base md:text-lg max-w-xl leading-relaxed">
          {aboutHero.sub}
        </p>
        <Link
          href={aboutHero.cta.href}
          className="mt-10 inline-flex items-center gap-3 pl-7 pr-6 py-3.5 rounded-full text-sm uppercase tracking-[0.18em] transition shadow-lg shadow-black/20 hover:translate-y-[-1px]"
          style={{
            backgroundColor: "var(--color-peach)",
            color: "var(--color-espresso)",
          }}
        >
          {aboutHero.cta.label}
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

/* ───────────────────────── STORY ─────────────────────────── */
function Story() {
  return (
    <section className="py-24 md:py-32">
      <div data-reveal className="container-wide grid md:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Copy */}
        <div className="md:col-span-7">
          <p className="eyebrow mb-6">{aboutStory.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-[-0.01em] text-[color:var(--color-espresso)] max-w-2xl">
            {aboutStory.heading}
          </h2>

          <div className="mt-10 space-y-6 max-w-xl">
            {aboutStory.paras.map((p, i) => (
              <p
                key={i}
                className={`leading-relaxed ${
                  i === 0
                    ? "text-lg md:text-xl text-[color:var(--color-bark)] italic font-serif"
                    : "text-[color:var(--color-stone)]"
                }`}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Pull-quote band — Sanskrit translation as brand watermark */}
          <div className="mt-12 border-l-2 pl-6" style={{ borderColor: "var(--color-clay)" }}>
            <p className="font-serif italic text-xl md:text-2xl text-[color:var(--color-bark)] leading-snug">
              तत्त्व — <span className="text-[color:var(--color-clay)]">{aboutStory.pullquote}</span>
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="md:col-span-5 relative aspect-[4/5] rounded-lg overflow-hidden md:sticky md:top-24">
          <Image
            src={aboutStory.image}
            alt="Inside Tattva"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Stats row — editorial signature */}
      <div className="container-wide mt-24">
        <div data-reveal-stagger className="border-t hairline pt-12 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
          {aboutStory.stats.map((stat) => (
            <div key={stat.label} className="group cursor-default">
              <span className="block h-px w-7 bg-[color:var(--color-clay)] mb-5 transition-all duration-500 ease-out group-hover:w-16" />
              <p className="font-serif italic font-normal text-4xl md:text-5xl leading-[0.9] tracking-[-0.02em] text-[color:var(--color-espresso)] transition-colors duration-300 group-hover:text-[color:var(--color-clay)]">
                {stat.value}
              </p>
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[color:var(--color-stone)] mt-4 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── TIMELINE ────────────────────────── */
// Editorial chapter spreads. Each chapter is its own asymmetric layout with a
// massive italic year as the visual anchor, contextual image, and micro-stats.
function Timeline() {
  return (
    <section className="relative bg-[color:var(--color-espresso)] overflow-hidden">
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

      <div className="relative z-10 py-24 md:py-32 lg:py-40">
        {/* ── Section opener ──────────────────────────────────── */}
        <div className="container-wide text-center max-w-2xl mx-auto mb-24 md:mb-32">
          <p
            className="eyebrow mb-6"
            style={{ color: "var(--color-peach)" }}
          >
            {aboutTimeline.eyebrow}
          </p>
          <h2 className="font-serif italic font-normal text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] text-[color:var(--color-cream)] tracking-[-0.01em]">
            {aboutTimeline.heading}
          </h2>
          <p className="mt-6 text-[color:var(--color-cream)]/65 max-w-md mx-auto leading-relaxed">
            {aboutTimeline.sub}
          </p>
        </div>

        {/* ── Chapter spreads ────────────────────────────────── */}
        <ol className="space-y-28 md:space-y-40">
          {aboutTimeline.items.map((item, i) => {
            const isLast = i === aboutTimeline.items.length - 1;
            const imageOnLeft = i % 2 === 0;
            return (
              <li key={item.year} className="container-wide">
                <article data-reveal className="grid md:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-center">
                  {/* Image — alternates side every chapter */}
                  <div
                    className={`md:col-span-5 ${
                      imageOnLeft ? "" : "md:col-start-8 md:row-start-1"
                    }`}
                  >
                    <div className="relative aspect-[4/5] rounded-lg overflow-hidden group">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                        aria-hidden
                      />
                      {/* Chapter number stamp */}
                      <div className="absolute top-5 left-5 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/12 backdrop-blur-md border border-white/25 text-white text-[0.65rem] uppercase tracking-[0.22em]">
                        <span
                          className="w-1 h-1 rounded-full"
                          style={{ backgroundColor: "var(--color-peach)" }}
                        />
                        {item.chapter}
                      </div>
                    </div>
                  </div>

                  {/* Content — paired column */}
                  <div
                    className={`md:col-span-6 ${
                      imageOnLeft ? "md:col-start-7" : "md:col-start-1 md:row-start-1"
                    }`}
                  >
                    {/* Clay accent line — editorial signature */}
                    <span className="block h-px w-7 bg-[color:var(--color-peach)] mb-6" />

                    {/* HUGE italic year — the visual anchor */}
                    <p
                      className="font-serif italic font-normal leading-[0.92] tracking-[-0.02em]"
                      style={{
                        color: "var(--color-peach)",
                        fontSize: "clamp(3.25rem, 9vw, 8rem)",
                      }}
                    >
                      {item.year}
                    </p>

                    <h3 className="mt-6 font-serif text-3xl md:text-4xl text-[color:var(--color-cream)] leading-tight">
                      {item.title}
                    </h3>

                    <p className="mt-6 text-[color:var(--color-cream)]/80 text-base md:text-lg leading-relaxed max-w-lg">
                      {item.body}
                    </p>

                    {/* Micro-stats — concrete & credible */}
                    <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-4">
                      {item.stats.map((stat) => (
                        <div key={stat.label}>
                          <dt
                            className="font-serif italic font-normal text-2xl md:text-3xl leading-none tracking-[-0.01em]"
                            style={{ color: "var(--color-cream)" }}
                          >
                            {stat.value}
                          </dt>
                          <dd className="text-[0.65rem] uppercase tracking-[0.22em] text-[color:var(--color-cream)]/55 mt-2">
                            {stat.label}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>

                {/* Chapter break — only between, not after last */}
                {!isLast && (
                  <div className="mt-28 md:mt-40 flex items-center justify-center gap-3">
                    <span
                      className="w-10 h-px"
                      style={{
                        backgroundColor: "var(--color-peach)",
                        opacity: 0.35,
                      }}
                    />
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{
                        backgroundColor: "var(--color-peach)",
                        opacity: 0.6,
                      }}
                    />
                    <span
                      className="w-10 h-px"
                      style={{
                        backgroundColor: "var(--color-peach)",
                        opacity: 0.35,
                      }}
                    />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ──────────────────────── PEOPLE ─────────────────────────── */
// Staggered portrait grid — each card lives at a different vertical offset
// to create an editorial, magazine-feature feel.
function People() {
  // Vertical offsets per card (visual rhythm — not aligned at top)
  const stagger = ["lg:mt-0", "lg:mt-20", "lg:mt-10", "lg:mt-28"];

  return (
    <section className="py-24 md:py-32 bg-[color:var(--color-bone)]">
      <div className="container-wide">
        {/* Heading row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <p className="eyebrow mb-5">{aboutPeople.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-[-0.01em] max-w-2xl">
              Small team.
              <br />
              <em
                className="italic font-normal"
                style={{ color: "var(--color-clay)" }}
              >
                Big opinions
              </em>{" "}
              about coffee.
            </h2>
          </div>
          <p className="text-sm text-[color:var(--color-stone)] max-w-xs leading-relaxed">
            {aboutPeople.intro}
          </p>
        </div>

        {/* Staggered portrait grid */}
        <ul data-reveal-stagger className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-12">
          {aboutPeople.members.map((m, i) => (
            <li key={m.name} className={`group ${stagger[i] ?? ""}`}>
              {/* Portrait */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-[color:var(--color-cream)]">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                />
                {/* "Since 'YY" chip — top-left, glassmorphism */}
                <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[0.65rem] uppercase tracking-[0.22em]">
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ backgroundColor: "var(--color-peach)" }}
                  />
                  {m.since}
                </div>
              </div>

              {/* Clay accent line — editorial signature */}
              <span className="block h-px w-7 bg-[color:var(--color-clay)] mb-4 transition-all duration-500 ease-out group-hover:w-16" />

              {/* Name */}
              <h3 className="text-sm uppercase tracking-[0.2em] font-medium text-[color:var(--color-espresso)] group-hover:text-[color:var(--color-clay)] transition-colors duration-300">
                {m.name}
              </h3>

              {/* Role */}
              <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-stone)] mt-2">
                {m.role}
              </p>

              {/* Bio */}
              <p className="mt-5 text-sm text-[color:var(--color-bark)] leading-relaxed">
                {m.bio}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────────────────── COMMUNITY ───────────────────────── */
function Community() {
  return (
    <section className="py-24 md:py-32 bg-[color:var(--color-bone)]">
      <div data-reveal className="container-wide grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="md:col-span-5 relative aspect-[4/5] rounded-lg overflow-hidden order-last md:order-first">
          <Image
            src={aboutCommunity.image}
            alt="A cupping in progress"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
          {/* Live "this Saturday" pill */}
          <div className="absolute top-5 left-5 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[0.7rem] uppercase tracking-[0.2em] shadow-lg shadow-black/10">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-emerald-300 animate-ping opacity-75" />
              <span className="relative rounded-full w-1.5 h-1.5 bg-emerald-400" />
            </span>
            This Saturday
          </div>
        </div>

        <div className="md:col-span-7 md:pl-6">
          <p className="eyebrow mb-5">{aboutCommunity.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-[-0.01em] max-w-xl">
            {aboutCommunity.heading}
          </h2>
          <p className="mt-8 text-lg text-[color:var(--color-bark)] leading-relaxed max-w-lg">
            {aboutCommunity.body}
          </p>

          {/* When & where, micro-detail */}
          <dl className="mt-10 grid grid-cols-3 gap-x-6 max-w-md">
            {[
              { k: "When",  v: "Sat · 10:30 AM" },
              { k: "Where", v: "JP Nagar bar" },
              { k: "Cost",  v: "Free" },
            ].map((row) => (
              <div key={row.k}>
                <dt className="text-[0.65rem] uppercase tracking-[0.22em] text-[color:var(--color-stone)] mb-2">
                  {row.k}
                </dt>
                <dd className="font-serif text-lg text-[color:var(--color-espresso)]">
                  {row.v}
                </dd>
              </div>
            ))}
          </dl>

          <Link
            href={aboutCommunity.cta.href}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-10"
          >
            {aboutCommunity.cta.label}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── PAGE ROOT ───────────────────────── */
export default function AboutPage() {
  return (
    <>
      <main>
        <Hero />
        <Story />
        <Timeline />
        <People />
        <Community />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
