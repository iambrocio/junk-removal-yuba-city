import { Glyph } from "@/components/glyph";
import { PageTop } from "@/components/page-top";
import { QuoteForm } from "@/components/quote-form";
import { business, hasPhone } from "@/lib/business";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact Us | Free Junk Removal Quote",
  description:
    "Request a free junk removal quote in Yuba City, CA. Tell us what needs to go and get a flat price for furniture, appliances, cleanouts, and debris.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageTop
        title="Get a Free Junk Removal Quote"
        lead="Tell us what needs to go and we'll get back to you with a flat price. No obligation."
        trail={[{ href: "/", label: "Home" }]}
        current="Contact"
        showCta={false}
      />

      <section className="block">
        <div className="frame split">
          <div className="haul-card">
            <h2>Request a quote</h2>
            <QuoteForm />
          </div>

          <div>
            <div className="kicker">Reach us</div>
            <h2>Contact details</h2>
            <ul className="reach">
              {hasPhone && (
                <li>
                  <Glyph name="phone" size={22} />
                  <a href={business.phoneHref}>{business.phone}</a>
                </li>
              )}
              {business.email && (
                <li>
                  <Glyph name="mail" size={22} />
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                </li>
              )}
              <li>
                <Glyph name="clock" size={22} />
                {business.hours}
              </li>
              <li>
                <Glyph name="pin" size={22} />
                Serving {business.serviceArea.join(", ")}, {business.state}
              </li>
            </ul>
            <p className="intro-copy">
              Photos help us give you an accurate price faster. Mention them in
              your request and we&apos;ll follow up to get them.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
