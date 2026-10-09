import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClosingBand } from "@/components/closing-band";
import { Glyph } from "@/components/glyph";
import { PageTop } from "@/components/page-top";
import { FaqList } from "@/components/faq-list";
import { ServiceTiles } from "@/components/service-tiles";
import { business } from "@/lib/business";
import { getService, services } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[service]">): Promise<Metadata> {
  const { service } = await params;
  const s = getService(service);
  if (!s) return {};
  return pageMeta({
    title: s.metaTitle,
    description: s.description,
    path: `/services/${s.slug}`,
  });
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[service]">) {
  const { service } = await params;
  const s = getService(service);
  if (!s) notFound();
  const related = services.filter((o) => o.slug !== s.slug).slice(0, 4);

  return (
    <>
      <PageTop
        title={s.name}
        lead={s.lead}
        trail={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
        ]}
        current={s.name}
      />

      <section className="block">
        <div className="frame split">
          <div>
            <div className="kicker">{s.name}</div>
            <h2>How we handle {s.name.toLowerCase()}</h2>
            <div className="intro-copy">
              {s.intro.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          </div>
          <div className="haul-card">
            <h2>What we take</h2>
            <ul className="ticks">
              {s.takes.map((t) => (
                <li key={t}>
                  <Glyph name="check" size={20} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="block process">
        <div className="frame">
          <div className="kicker">How it works</div>
          <h2>{s.name}, step by step</h2>
          <ol className="process__steps">
            {s.steps.map((st) => (
              <li key={st.t}>
                <h3>{st.t}</h3>
                <p>{st.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block block--sand">
        <div className="frame">
          <div className="kicker">FAQ</div>
          <h2>{s.name} questions</h2>
          <FaqList items={s.faqs} />
        </div>
      </section>

      <section className="block">
        <div className="frame">
          <div className="kicker">More services</div>
          <h2>Other jobs we handle in {business.city}</h2>
          <ServiceTiles items={related} />
        </div>
      </section>

      <ClosingBand heading={`Need ${s.name.toLowerCase()} in ${business.city}? Let's get it gone.`} />
    </>
  );
}
