import { getGallery } from "@/lib/content/gallery";
import Section from "../ui/Section";
import type { ReactNode } from "react";
import GalleryGrid from "./GalleryGrid";

type GalleryProps = {
  children: ReactNode;
};

function GallerySection({ children }: GalleryProps) {
  return (
    <Section id="gallery">
      <div className="space-y-6">
        <h2 className="text-brand text-3xl font-bold">Gallery</h2>
        {children}
      </div>
    </Section>
  );
}

export default function Gallery() {
  const items = getGallery();

  if (items.length === 0) {
    return (
      <GallerySection>
        <p className="text-ink/70 mt-1">Photos coming soon</p>
      </GallerySection>
    );
  }

  return (
    <GallerySection>
      <GalleryGrid items={items} />
    </GallerySection>
  );
}
