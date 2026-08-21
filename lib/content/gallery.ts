import { z } from "zod";
import loadCollection from "./collections";

export const galleryItemSchema = z.object({
  image: z.string(),
  before: z.string().optional(),
  alt: z.string(),
  caption: z.string(),
  order: z.number(),
});

export type GalleryItem = z.infer<typeof galleryItemSchema>;

export function getGallery(): GalleryItem[] {
  const galleryItems = loadCollection("gallery", galleryItemSchema);

  // Sort galleryItems into the manually specified order & return
  galleryItems.sort((a, b) => a.order - b.order);
  return galleryItems;
}
