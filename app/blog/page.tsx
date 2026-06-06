import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Journal — Tattva Coffee Roasters",
  description: "Notes on coffee, brewing, and the people behind the beans.",
};

export default function BlogPage() {
  return (
    <>
      <Nav />
      <PageBanner eyebrow="Journal" title="Notes on coffee" sub="Brewing tips, origin stories, and the occasional opinion." />
      <main className="container-wide py-20 md:py-28">
        <div data-reveal-stagger className="grid md:grid-cols-3 gap-10">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-5">
                <Image src={p.image} alt={p.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <p className="text-xs uppercase tracking-widest text-[color:var(--color-stone)]">{p.date}</p>
              <h2 className="font-serif text-2xl text-[color:var(--color-espresso)] mt-2 group-hover:text-[color:var(--color-clay)] transition">{p.title}</h2>
              <p className="mt-2 text-[color:var(--color-stone)] leading-relaxed">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
