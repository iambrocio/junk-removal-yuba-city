import Link from "next/link";
import { Glyph } from "@/components/glyph";
import { QuoteButton } from "@/components/quote-button";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Masthead() {
  return (
    <header className="masthead">
      <div className="frame masthead__row">
        <Link className="wordmark" href="/">
          <span className="wordmark__top">Junk Removal</span>
          <span className="wordmark__city">Yuba City</span>
        </Link>

        <nav className="topnav" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="masthead__cta">
          <QuoteButton />
        </div>

        <details className="drawer">
          <summary aria-label="Open menu">
            <Glyph name="menu" size={26} />
          </summary>
          <nav className="drawer__panel" aria-label="Mobile">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
