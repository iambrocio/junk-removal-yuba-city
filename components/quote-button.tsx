import Link from "next/link";
import { business, hasPhone } from "@/lib/business";
import { Glyph } from "@/components/glyph";

type Props = { size?: "md" | "lg"; tone?: "dark" | "light"; label?: string };

// Primary CTA: a tel: link once a phone number exists, otherwise the quote form.
export function QuoteButton({ size = "md", tone = "dark", label }: Props) {
  const cls = `cta-btn cta-btn--${tone}${size === "lg" ? " cta-btn--lg" : ""}`;

  if (hasPhone) {
    return (
      <a className={cls} href={business.phoneHref}>
        <Glyph name="phone" size={18} />
        {label ?? `Call ${business.phone}`}
      </a>
    );
  }

  return (
    <Link className={cls} href="/contact">
      {label ?? "Get a free quote"}
    </Link>
  );
}
