import { ClosingBand, Stripe } from "@/components/closing-band";
import { Glyph } from "@/components/glyph";
import { QuoteButton } from "@/components/quote-button";
import { FaqList } from "@/components/faq-list";
import { ServiceTiles } from "@/components/service-tiles";
import { business, promises } from "@/lib/business";
import { services } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Junk Removal Yuba City, CA | Fast Local Junk Hauling",
  description:
    "Junk removal in Yuba City, CA for homes, rentals, and businesses. Furniture, appliances, cleanouts, and debris hauled away at one flat price.",
  path: "/",
});

const steps = [
  {
    t: "Request a quote",
    b: "Tell us what needs to go, or send a few photos. We'll get back to you with a flat price range.",
  },
  {
    t: "Pick a time",
    b: "Choose a pickup window that works for you. The crew confirms the final price on site before lifting anything.",
  },
  {
    t: "We load and haul",
    b: "We carry everything out, load the truck, sweep up, and take it to donation, recycling, or disposal.",
  },
];

const faqs = [
  {
    q: "How is junk removal priced?",
    a: "Pricing is based on how much space your items take up in the truck, plus any special handling. You get the number before we start, and it doesn't change once we're loading.",
  },
  {
    q: "Do I need to be home during the pickup?",
    a: "Not always. For curbside or garage pickups, many customers leave the items out and pay remotely. For anything inside the home, someone should be there to let the crew in.",
  },
  {
    q: "What won't you take?",
    a: "We can't haul hazardous materials like paint, solvents, asbestos, or chemicals. Those go to a household hazardous waste drop-off instead.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="lead-band">
        <div className="frame lead-band__grid">
          <div>
            <h1>
              Junk Removal in <em>Yuba City</em>
            </h1>
            <p className="lead-band__line">
              Point at what needs to go. We load it, haul it, and sweep up, all
              for one flat price.
            </p>
            <QuoteButton size="lg" />
          </div>

          <div className="haul-card">
            <h2>Every pickup includes</h2>
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

      <Stripe />

      <section className="block" id="services">
        <div className="frame">
          <div className="kicker">What we haul</div>
          <h2>Junk Removal Services in Yuba City</h2>
          <p className="intro-copy">
            From a single recliner to a full estate, one local crew handles it.
            Pick the job that sounds like yours.
          </p>
          <ServiceTiles items={services} />
        </div>
      </section>

      <section className="block process">
        <div className="frame">
          <div className="kicker">How it works</div>
          <h2>Gone in three steps</h2>
          <ol className="process__steps">
            {steps.map((s) => (
              <li key={s.t}>
                <h3>{s.t}</h3>
                <p>{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block block--sand">
        <div className="frame split">
          <div>
            <div className="kicker">Service area</div>
            <h2>Hauling across {business.city}</h2>
            <p className="intro-copy">
              We work in neighborhoods all over {business.city}, from older
              homes near downtown to newer subdivisions on the edges of town.
              Homeowners, landlords, property managers, and contractors all book
              with us.
            </p>
            <div className="chips">
              {business.serviceArea.map((c) => (
                <span key={c}>
                  {c}, {business.state}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="kicker">Questions</div>
            <h2>Before you book</h2>
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <ClosingBand heading="Ready to clear it out? Get your price today." />
    </>
  );
}
