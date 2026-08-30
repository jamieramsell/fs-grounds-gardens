import { siteUrl } from "@/lib/site";
import { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: siteUrl + "/sitemap.xml",
  };
}

export const dynamic = "force-static";
