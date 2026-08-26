import Hero from "@/components/ui/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ServiceAreas from "@/components/ServiceAreas";
import Contact from "@/components/Contact";
import GalleryTeaser from "@/components/gallery/GalleryTeaser";
import ReviewsTeaser from "@/components/reviews/ReviewTeaser";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <ReviewsTeaser />
      <ServiceAreas />
      <GalleryTeaser />
      <Contact />
    </div>
  );
}
