import { z } from "zod";
import loadCollection from "./collections";

export const blogPostSchema = z.object({
  title: z.string(),
  slug: z.string(),
  excerpt: z.string().optional(),
  date: z.coerce.date(),
  body: z.string(),
});

export type BlogPost = z.infer<typeof blogPostSchema>;

/**
 * Loads all blog posts from `content/blog`, sorted by their `order` field.
 * @returns the blog posts in date order (newest first)
 */
export function getBlogPosts(): BlogPost[] {
  const blogPosts = loadCollection("blog", blogPostSchema);

  // Sort blogPosts into date order (newest first) and return
  blogPosts.sort((a, b) => b.date.getTime() - a.date.getTime());
  return blogPosts;
}
