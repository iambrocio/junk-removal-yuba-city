import Link from "next/link";
import { PageTop } from "@/components/page-top";
import { formatDate, posts } from "@/lib/posts";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Junk Removal Tips & Guides | Blog",
  description:
    "Practical junk removal guides for Yuba City homeowners: pricing, garage cleanouts, what you can and can't toss, and how to get ready for pickup day.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageTop
        title="Junk Removal Tips & Guides"
        lead="Straightforward advice on clearing out, cleaning up, and getting rid of junk in Yuba City."
        trail={[{ href: "/", label: "Home" }]}
        current="Blog"
        showCta={false}
      />

      <section className="block">
        <div className="frame">
          <div className="post-grid">
            {posts.map((p) => (
              <Link className="tile" key={p.slug} href={`/blog/${p.slug}`}>
                <span className="post-date">{formatDate(p.date)}</span>
                <h2 className="post-name">{p.title}</h2>
                <p>{p.excerpt}</p>
                <span className="tile__more">Read the guide</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
