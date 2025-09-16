import Hero from "@/components/Hero";
import { Features } from "@/components/Features";
import { Catalog } from "@/components/Catalog";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Catalog />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
