import type { MetadataRoute } from "next";
import { PROFILE_DATA } from "@/data/portfolio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${PROFILE_DATA.domain}/sitemap.xml`,
  };
}
