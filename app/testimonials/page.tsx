import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { testimonials } from "@/lib/content";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials — Tattva Coffee Roasters",
  description: "What our regulars say about Tattva.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Nav />
      <PageBanner eyebrow="What our clients say" title="Loved by regulars" sub="A few words from the people who drink Tattva every day." />
      <main className="container-wide py-20 md:py-28">
        <div data-reveal-stagger className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-[color:var(--color-bone)] rounded-lg p-10 flex flex-col gap-5">
              <div className="flex gap-1 text-[color:var(--color-clay)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="font-serif text-2xl text-[color:var(--color-bark)] leading-snug">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-[color:var(--color-espresso)] font-medium">{t.name}</p>
                <p className="text-sm text-[color:var(--color-stone)]">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
