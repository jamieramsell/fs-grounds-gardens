"use client";

import type { GalleryItem } from "@/lib/content/gallery";

type GalleryGridProps = {
  items: GalleryItem[];
};

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {items.map((item) => (
        <li key={item.image} className="mb-4 break-inside-avoid">
          <button type="button" className="block w-full text-left">
            <img
              src={item.image}
              alt={item.alt}
              loading="lazy"
              className="h-auto w-full rounded-lg"
            />
            <p className="text-ink/90 mt-1 text-sm">{item.caption}</p>
          </button>
        </li>
      ))}
    </ul>
  );
}
