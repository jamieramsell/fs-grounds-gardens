import { getBlogPosts } from "@/lib/content/blog";
import { siteUrl } from "@/lib/site";
import { MetadataRoute } from "next";

export default function Sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      priority: 0.4,
    },
    {
      url: `${siteUrl}/contact-us`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${siteUrl}/gallery`,
      lastModified: new Date(),
      priority: 0.4,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date(),
      priority: 0.2,
    },
    {
      url: `${siteUrl}/reviews`,
      lastModified: new Date(),
      priority: 0.6,
    },
  ].concat(
    getBlogPosts().map((post) => {
      return {
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: post.date,
        priority: 0.4,
      };
    }),
  );
}

export const dynamic = "force-static";
