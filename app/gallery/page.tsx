import GalleryGrid from "@/components/gallery/GalleryGrid";
import Section from "@/components/ui/Section";
import { getGallery } from "@/lib/content/gallery";
import type { Metadata } from "next";
import type { ReactNode } from "react";

type GalleryPageSectionProps = {
  children: ReactNode;
};

function GalleryPageSection({ children }: GalleryPageSectionProps) {
  return (
    <Section>
      <div className="space-y-6">
        <h1 className="text-brand text-3xl font-bold">Our photos</h1>
        {children}
      </div>
    </Section>
  );
}

export default function GalleryPage() {
  const items = getGallery();
  if (items.length === 0) {
    return (
      <GalleryPageSection>
        <p className="text-ink/70 mt-1">Photos coming soon</p>
      </GalleryPageSection>
    );
  }

  return (
    <GalleryPageSection>
      <GalleryGrid items={items} />
    </GalleryPageSection>
  );
}

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See recent work from FS Grounds & Gardens: hedge trimming, lawn care, pruning and garden clearances across Leicestershire.",
};
