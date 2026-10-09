import Link from "next/link";
import { business, hasPhone } from "@/lib/business";
import { services } from "@/lib/services";

const company = [
  { href: "/about", label: "About" },
  { href: "/services", label: "All services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/sitemap", label: "Sitemap" },
];

export function BaseFooter() {
  return (
    <footer className="base">
      <div className="frame base__grid">
        <div>
          <div className="base__name">{business.name}</div>
          <p className="base__blurb">{business.summary}</p>
          {hasPhone && (
            <a className="base__phone" href={business.phoneHref}>
              {business.phone}
            </a>
          )}
        </div>

        <div className="base__col">
          <div className="base__head">Services</div>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>
              {s.name}
            </Link>
          ))}
        </div>

        <div className="base__col">
          <div className="base__head">Company</div>
          {company.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="frame base__legal">
        © {new Date().getFullYear()} {business.name} · Serving {business.city},{" "}
        {business.state}
      </div>
    </footer>
  );
}
