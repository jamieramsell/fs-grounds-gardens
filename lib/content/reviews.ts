import { z } from "zod";
import loadCollection from "./collections";

export const reviewSchema = z.object({
  author: z.string(),
  quote: z.string().optional(),
  rating: z.number().int().min(1).max(5),
  order: z.number(),
});

export type Review = z.infer<typeof reviewSchema>;

/**
 * Loads all reviews from `content/reviews`, sorted by their `order` field.
 * @returns the reviews in display order
 */
export function getReviews(): Review[] {
  const reviews = loadCollection("reviews", reviewSchema);

  // Sort Reviews into their manually specified order & return
  reviews.sort((a, b) => a.order - b.order);
  return reviews;
}
