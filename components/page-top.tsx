import Link from "next/link";
import { QuoteButton } from "@/components/quote-button";

type Crumb = { href: string; label: string };

type Props = {
  title: string;
  lead: string;
  trail: Crumb[];
  current: string;
  showCta?: boolean;
};

export function PageTop({ title, lead, trail, current, showCta = true }: Props) {
  return (
    <section className="page-top">
      <div className="frame">
        <div className="trail">
          {trail.map((c) => (
            <span key={c.href}>
              <Link href={c.href}>{c.label}</Link> /{" "}
            </span>
          ))}
          {current}
        </div>
        <h1>{title}</h1>
        <p>{lead}</p>
        {showCta && <QuoteButton size="lg" tone="light" />}
      </div>
    </section>
  );
}
