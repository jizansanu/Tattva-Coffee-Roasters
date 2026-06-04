import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import HowWeMake from "@/components/HowWeMake";
import Explore from "@/components/Explore";
import Story from "@/components/Story";
import Process from "@/components/Process";
import Quote from "@/components/Quote";
import Brew from "@/components/Brew";
import OriginsBand from "@/components/OriginsBand";
import Testimonials from "@/components/Testimonials";
import ClosingCta from "@/components/ClosingCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Collection />
        <HowWeMake />
        <Explore />
        <Story />
        <Process />
        <Quote />
        <Brew />
        <OriginsBand />
        <Testimonials />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
