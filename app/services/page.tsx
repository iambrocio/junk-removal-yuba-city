import { ClosingBand } from "@/components/closing-band";
import { PageTop } from "@/components/page-top";
import { ServiceTiles } from "@/components/service-tiles";
import { services } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Junk Removal Services | Full Service List",
  description:
    "Every junk removal service we offer in Yuba City, CA: furniture, appliances, mattresses, garage and estate cleanouts, yard waste, debris, and hot tubs.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageTop
        title="Junk Removal Services"
        lead="One crew, one truck, and a flat price for nearly anything you need gone. Pick a service to see what's included."
        trail={[{ href: "/", label: "Home" }]}
        current="Services"
      />

      <section className="block">
        <div className="frame">
          <div className="kicker">Full service list</div>
          <h2>Pick the job that fits</h2>
          <p className="intro-copy">
            Not sure which one you need? Most pickups mix a few categories, like
            a mattress, an old washer, and a pile of garage boxes. Ask for one
            quote and we&apos;ll cover all of it in a single trip.
          </p>
          <ServiceTiles items={services} />
        </div>
      </section>

      <ClosingBand heading="Have a mix of things to haul? One quote covers it." />
    </>
  );
}
