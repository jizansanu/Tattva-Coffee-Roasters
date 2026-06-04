import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { posts } from "@/lib/content";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  return { title: p ? `${p.title} — Tattva` : "Journal" };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="container-narrow py-12 md:py-20">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[color:var(--color-stone)] hover:text-[color:var(--color-espresso)] transition mb-10">
          <ArrowLeft size={16} /> Back to journal
        </Link>
        <p className="text-xs uppercase tracking-widest text-[color:var(--color-stone)]">{post.date}</p>
        <h1 className="text-4xl md:text-6xl leading-tight mt-3 mb-8">{post.title}</h1>
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-12">
          <Image src={post.image} alt={post.title} fill priority sizes="100vw" className="object-cover" />
        </div>
        {/* TODO: replace with real article content (MDX/CMS) */}
        <article className="prose-tattva max-w-none space-y-6 text-lg text-[color:var(--color-bark)] leading-relaxed">
          <p>{post.excerpt}</p>
          <p>
            At Tattva, we believe the difference between a good cup and a great one
            usually comes down to a few small, repeatable habits. In this piece we
            walk through what matters most — and what you can safely ignore.
          </p>
          <p>
            Start with fresh beans and a consistent grind. Mind your water
            temperature and your ratio. Taste, adjust, and keep notes. That's most
            of it.
          </p>
          <p className="text-[color:var(--color-stone)] italic">
            Full article coming soon — we&rsquo;re still writing this one over a slow
            pour-over.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
