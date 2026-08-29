import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

const SITE_URL = "https://khabarx.vercel.app";

const CATEGORY_SLUGS = ["pakistan", "punjab", "lahore", "world", "business", "technology", "sports"];

const STATIC_PAGES = [
  "",
  "search",
  "about",
  "contact",
  "privacy-policy",
  "terms",
  "disclaimer",
  "editorial-policy",
  "corrections-policy",
  "authors",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE_URL}/news/${a.slug}`,
    lastModified: a.updatedAt,
    changeFrequency: "hourly",
    priority: 0.8,
  }));

  const categoryEntries: MetadataRoute.Sitemap = CATEGORY_SLUGS.map((slug) => ({
    url: `${SITE_URL}/category/${slug}`,
    changeFrequency: "hourly",
    priority: 0.6,
  }));

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    changeFrequency: "daily",
    priority: slug === "" ? 1 : 0.3,
  }));

  return [...staticEntries, ...categoryEntries, ...articleEntries];
}
