import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClosingBand } from "@/components/closing-band";
import { PageTop } from "@/components/page-top";
import { formatDate, getPost, posts } from "@/lib/posts";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return pageMeta({
    title: p.metaTitle,
    description: p.description,
    path: `/blog/${p.slug}`,
  });
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  return (
    <>
      <PageTop
        title={p.title}
        lead={p.excerpt}
        trail={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Blog" },
        ]}
        current={formatDate(p.date)}
        showCta={false}
      />

      <article className="block">
        <div className="frame prose">
          {p.sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </section>
          ))}
          <p>
            <Link href="/blog">← Back to all guides</Link>
          </p>
        </div>
      </article>

      <ClosingBand heading="Ready to clear it out? Get your price today." />
    </>
  );
}
