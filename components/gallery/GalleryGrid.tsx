"use client";

import type { GalleryItem } from "@/lib/content/gallery";
import { useState, useEffect } from "react";

type GalleryGridProps = {
  items: GalleryItem[];
};

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
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="hover:bg-brand-accent absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition duration-200"
              onClick={() => setFocusedItem(null)}
              aria-label="Close"
            >
              ✕
            </button>

            <img
              src={focusedItem.image}
              alt={focusedItem.alt}
              className="max-h-[80vh] w-full rounded object-contain"
            ></img>

            <p className="mt-2 text-center text-sm text-white">
              {focusedItem.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
