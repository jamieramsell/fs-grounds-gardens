import { z } from "zod";

export const galleryItemSchema = z.object({
  image: z.string(),
  before: z.string().optional(),
  alt: z.string(),
  caption: z.string(),
  order: z.number(),
});

export type GalleryItem = z.infer<typeof galleryItemSchema>;
