import Hero from "@/components/ui/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ServiceAreas from "@/components/ServiceAreas";
import Contact from "@/components/Contact";
import GalleryTeaser from "@/components/gallery/GalleryTeaser";
import ReviewsTeaser from "@/components/reviews/ReviewTeaser";
import { siteUrl } from "@/lib/site";
import { serviceAreas } from "@/lib/serviceAreas";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "FS Grounds & Gardens",
    description:
      "Reliable garden maintenance based in Rothley, Leicestershire. Hedge trimming, lawns, pruning, clearances and tidy-ups. Get a free quote today.",
    url: siteUrl,
    areaServed: serviceAreas.map((area) => {
      return { "@type": "City", name: area };
    }),
    sameAs: [
      "https://instagram.com/fs.grounds.gardens",
      "https://www.facebook.com/p/FS-Grounds-Gardens-61593549812509/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rothley",
      addressRegion: "Leicestershire",
      addressCountry: "GB",
    },
  };

  // Sanitise the string of any opening tags (<) to avoid script injection
  const jsonLdString = JSON.stringify(jsonLd);
  const sanitisedJsonLdString = jsonLdString.replace(/</g, "\\u003c");

  return (
    <div>
      <Hero />
      <Services />
      <About />
      <ReviewsTeaser />
      <ServiceAreas />
      <GalleryTeaser />
      <Contact />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitisedJsonLdString }}
      />
    </div>
  );
}
