import { ClosingBand } from "@/components/closing-band";
import { PageTop } from "@/components/page-top";
import { business } from "@/lib/business";
import { partnerGroups } from "@/lib/partners";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Our Partners | Local Companies We Recommend",
  description:
    "Local businesses and brands we trust and recommend to customers in Yuba City, CA, from moving and storage to home services and recycling.",
  path: "/partners",
});

export default function PartnersPage() {
  const groups = partnerGroups();

  return (
    <>
      <PageTop
        title="Our Partners"
        lead={`Companies we trust and send our ${business.city} customers to when a job needs more than a haul-away.`}
        trail={[{ href: "/", label: "Home" }]}
        current="Partners"
        showCta={false}
      />

      <section className="block">
        <div className="frame">
          {groups.map(([category, list]) => (
            <div className="ally-group" key={category}>
              <h2>{category}</h2>
              <div className="ally-grid">
                {list.map((p) => (
                  <div className="tile" key={p.url}>
                    <h3>{p.name}</h3>
                    <p>{p.blurb}</p>
                    <a
                      className="tile__more"
                      href={p.url}
                      target="_blank"
                      rel={p.nofollow ? "nofollow noopener" : "noopener"}
                    >
                      {p.anchor}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ClosingBand heading="Need something hauled first? We can help with that." />
    </>
  );
}
