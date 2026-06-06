import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { gallery } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery — Tattva Coffee Roasters",
  description: "A look inside the Tattva roastery and café in JP Nagar.",
};

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <PageBanner
        eyebrow="Coffee worth exploring"
        title="Gallery"
        sub="A look inside the roastery, the beans, and the cup."
      />
      <main className="container-wide py-20 md:py-28">
        <div data-reveal-stagger className="columns-1 sm:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
          {gallery.map((src, i) => (
            <div key={src} className="relative w-full overflow-hidden rounded-lg break-inside-avoid">
              <Image
                src={src}
                alt={`Tattva gallery image ${i + 1}`}
                width={800}
                height={i % 3 === 0 ? 1000 : 600}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
