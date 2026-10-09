import { ClosingBand } from "@/components/closing-band";
import { Glyph } from "@/components/glyph";
import { PageTop } from "@/components/page-top";
import { business, promises } from "@/lib/business";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Us | Local Junk Hauling Crew",
  description:
    "Meet the local junk removal crew serving Yuba City, CA. Learn how we price jobs, where your items go, and what to expect on pickup day.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageTop
        title="About Us"
        lead={`A local hauling crew for ${business.city} homes, rentals, and businesses. We keep it simple: clear prices, careful work, and nothing left behind.`}
        trail={[{ href: "/", label: "Home" }]}
        current="About"
      />

      <section className="block">
        <div className="frame split">
          <div>
            <div className="kicker">Who we are</div>
            <h2>Hauling built for Yuba City</h2>
            <div className="intro-copy">
              <p>
                We started this service because getting rid of bulky junk in{" "}
                {business.city} was harder than it should be. Curbside pickup
                won&apos;t take most of it, a borrowed truck only goes so far, and
                a trip to the transfer station eats up a whole Saturday.
              </p>
              <p>
                So we keep it simple. You tell us what needs to go, we give you a
                flat price, and a two-person crew does the lifting. It works the
                same whether you have one recliner, a full garage, or a rental
                that needs to be emptied before the next tenant moves in.
              </p>
            </div>
          </div>
          <div className="haul-card">
            <h2>Our standards</h2>
            <ul className="ticks">
              {promises.map((p) => (
                <li key={p}>
                  <Glyph name="check" size={20} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="block process">
        <div className="frame">
          <div className="kicker">Where it goes</div>
          <h2>Less landfill, more reuse</h2>
          <ol className="process__steps">
            <li>
              <h3>Donate</h3>
              <p>
                Furniture, housewares, and clothing in good shape go to local
                charities and thrift stores.
              </p>
            </li>
            <li>
              <h3>Recycle</h3>
              <p>
                Metal, appliances, mattresses, electronics, and clean wood are
                separated and sent to recyclers.
              </p>
            </li>
            <li>
              <h3>Dispose</h3>
              <p>
                Only what can&apos;t be reused or recycled goes to the transfer
                station, and it&apos;s handled properly.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="block block--sand">
        <div className="frame">
          <div className="kicker">Service area</div>
          <h2>Where we work</h2>
          <p className="intro-copy">
            We serve homes and businesses throughout {business.city},{" "}
            {business.state}, in {business.region}. Our customers are
            homeowners, landlords, property managers, realtors, and contractors
            who need something gone without the hassle.
          </p>
          <div className="chips">
            {business.serviceArea.map((c) => (
              <span key={c}>
                {c}, {business.state}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ClosingBand heading="Tell us what needs to go. We'll handle the rest." />
    </>
  );
}
