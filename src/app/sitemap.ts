import type { MetadataRoute } from "next";
import { PROFILE_DATA } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: PROFILE_DATA.domain,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
