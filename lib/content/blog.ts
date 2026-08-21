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
