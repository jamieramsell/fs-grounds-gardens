import { z } from "zod";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export const galleryItemSchema = z.object({
  image: z.string(),
  before: z.string().optional(),
  alt: z.string(),
  caption: z.string(),
  order: z.number(),
});

export type GalleryItem = z.infer<typeof galleryItemSchema>;

export function getGallery(): GalleryItem[] {
  // Construct @/content/gallery/ path using project root
  const root = process.cwd();
  const folderPath = path.join(root, "content", "gallery");

  // Retrieve all .md files
  let files = fs.readdirSync(folderPath);
  files = files.filter((filename) => filename.endsWith(".md"));

  // Map each filename -> GalleryItem
  const galleryItems = files.map((filename) => {
    const filePath = path.join(folderPath, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return galleryItemSchema.parse(data);
  });

  // Sort galleryItems into the manually specified order & return
  galleryItems.sort((a, b) => a.order - b.order);
  return galleryItems;
}
