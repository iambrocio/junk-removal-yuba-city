import type { MetadataRoute } from "next";
import { business } from "@/lib/business";
import { posts } from "@/lib/posts";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/services",
    "/about",
    "/contact",
    "/blog",
    "/sitemap",
    ...services.map((s) => `/services/${s.slug}`),
    ...posts.map((p) => `/blog/${p.slug}`),
  ];
  return paths.map((path) => ({ url: `${business.url}${path}` }));
}
