"use client";

import type { GalleryItem } from "@/lib/content/gallery";
import { useState, useEffect } from "react";

type LightboxImageProps = {
  src: string;
  alt: string;
  label?: "before" | "after";
};

/**
 * LightboxImage - a single photo shown inside the lightbox, sized to fit, and
 * optionally tagged with a corner label.
 * @param src - the image URL (a path under `public/`)
 * @param alt - alternative text describing the photo
 * @param label - optional "before" / "after" badge shown over the image
 */
function LightboxImage({ src, alt, label }: LightboxImageProps) {
  return (
    <div
      className="relative mx-auto w-fit"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={src}
        alt={alt}
        className="max-h-[70vh] w-auto max-w-full rounded object-contain max-md:max-h-[38vh]"
      />

      {label && (
        <p className="absolute top-4 left-4 rounded bg-black/70 px-4 py-2 text-white">
          {label}
        </p>
      )}
    </div>
  );
}

type GalleryGridProps = {
  items: GalleryItem[];
};

/**
 * GalleryGrid - a client-side masonry grid of gallery photos. Clicking a
 * thumbnail opens it in a lightbox dialog, which shows a before/after pair
 * when the item has a `before` image.
 * @param items - the gallery items to display, in order
 */
export default function GalleryGrid({ items }: GalleryGridProps) {
  const [focusedItem, setFocusedItem] = useState<GalleryItem | null>(null);

  /* Close the gallery item when the user presses the Escape key. We listen on
   * `document`, rather than a specific element, because the key can be pressed
   * from anywhere.
   */
  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setFocusedItem(null);
      }
    }

    document.addEventListener("keydown", handleKey);

    // Remove the listener on unmount to avoid stacking duplicate listeners
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <>
      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item) => (
          <li key={item.image} className="mb-4 break-inside-avoid">
            <button
              type="button"
              className="block w-full text-left"
              onClick={() => setFocusedItem(item)}
            >
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

      {focusedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          aria-modal="true"
          aria-label="Photo viewer"
          role="dialog"
          onClick={() => setFocusedItem(null)}
        >
          {/* A panel containing two images is double the width of a panel that
           * only contains one */}
          <div
            className={`relative mx-auto w-full ${focusedItem.before ? "max-w-6xl" : "max-w-3xl"}`}
          >
            {focusedItem.before ? (
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <LightboxImage
                  src={focusedItem.before}
                  alt={focusedItem.alt}
                  label="before"
                />

                <LightboxImage
                  src={focusedItem.image}
                  alt={focusedItem.alt}
                  label="after"
                />
              </div>
            ) : (
              <LightboxImage src={focusedItem.image} alt={focusedItem.alt} />
            )}

            <button
              type="button"
              className="hover:bg-brand-accent absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition duration-200"
              onClick={() => setFocusedItem(null)}
              aria-label="Close"
            >
              ✕
            </button>

            <p className="mt-2 text-center text-sm text-white">
              {focusedItem.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
