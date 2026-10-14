import Link from "next/link";
import { PageTop } from "@/components/page-top";
import { posts } from "@/lib/posts";
import { services } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sitemap | All Pages",
  description:
    "Every page on the Junk Removal Yuba City website, including main pages, all junk removal services, and blog guides.",
  path: "/sitemap",
});

const groups = [
  {
    h: "Main pages",
    links: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/blog", label: "Blog" },
      { href: "/partners", label: "Partners" },
    ],
  },
  {
    h: "Services",
    links: services.map((s) => ({ href: `/services/${s.slug}`, label: s.name })),
  },
  {
    h: "Blog",
    links: posts.map((p) => ({ href: `/blog/${p.slug}`, label: p.title })),
  },
];

export default function SitemapPage() {
  return (
    <>
      <PageTop
        title="Sitemap"
        lead="Every page on this site in one place."
        trail={[{ href: "/", label: "Home" }]}
        current="Sitemap"
        showCta={false}
      />
      <section className="block">
        <div className="frame link-groups">
          {groups.map((g) => (
            <div key={g.h}>
              <h2>{g.h}</h2>
              <ul>
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
