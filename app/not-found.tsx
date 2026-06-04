import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="container-narrow py-32 md:py-40 text-center">
        <p className="eyebrow mb-5">404</p>
        <h1 className="text-4xl md:text-6xl mb-6">This page went cold.</h1>
        <p className="text-[color:var(--color-stone)] mb-10 max-w-md mx-auto">
          The page you&rsquo;re looking for doesn&rsquo;t exist. Let&rsquo;s get you back to the coffee.
        </p>
        <Link href="/" className="btn-primary">Back home</Link>
      </main>
      <Footer />
    </>
  );
}
