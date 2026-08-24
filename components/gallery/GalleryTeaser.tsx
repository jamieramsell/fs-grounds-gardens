import { getGallery } from "@/lib/content/gallery";
import Section from "../ui/Section";
import type { ReactNode } from "react";
import GalleryGrid from "./GalleryGrid";
import Button from "../ui/Button";

type GalleryProps = {
  children: ReactNode;
};

/**
 * GalleryTeaserSection - the homepage gallery teaser band: a cream Section with
 * the "Photo gallery" heading, wrapping whatever content it's given.
 * @param children - the section's content (the teaser grid, or an empty-state
 * message)
 */
function GalleryTeaserSection({ children }: GalleryProps) {
  return (
    <div className="bg-cream">
      <Section id="gallery">
        <div className="space-y-6">
          <h2 className="text-brand text-3xl font-bold">Photo gallery</h2>
          {children}
        </div>
      </Section>
    </div>
  );
}

/**
 * GalleryTeaser - the homepage gallery teaser. Shows the first six photos, and
 * a link through to the full `/gallery` page.
 */
export default function GalleryTeaser() {
  const items = getGallery();
  const teaser = items.slice(0, 6);

  if (teaser.length === 0) {
    return (
      <GalleryTeaserSection>
        <p className="text-ink/70 mt-1">Photos coming soon</p>
      </GalleryTeaserSection>
    );
  }

  return (
    <GalleryTeaserSection>
      <GalleryGrid items={teaser} />
      {items.length > 6 && <Button href="/gallery">View all photos</Button>}
    </GalleryTeaserSection>
  );
}
