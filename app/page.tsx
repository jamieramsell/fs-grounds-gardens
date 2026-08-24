import Hero from "@/components/ui/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ServiceAreas from "@/components/ServiceAreas";
import Contact from "@/components/Contact";
import GalleryTeaser from "@/components/gallery/Gallery";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <ServiceAreas />
      <GalleryTeaser />
      <Contact />
    </div>
  );
}
