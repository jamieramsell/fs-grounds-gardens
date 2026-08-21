import Hero from "@/components/ui/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ServiceAreas from "@/components/ServiceAreas";
import Contact from "@/components/Contact";
import Gallery from "@/components/gallery/Gallery";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <ServiceAreas />
      <Gallery />
      <Contact />
    </div>
  );
}
