import Link from "next/link";
import { Glyph } from "@/components/glyph";
import type { Service } from "@/lib/services";

export function ServiceTiles({ items }: { items: Service[] }) {
  return (
    <div className="tiles">
      {items.map((s) => (
        <Link className="tile" key={s.slug} href={`/services/${s.slug}`}>
          <span className="tile__icon">
            <Glyph name={s.glyph} size={24} />
          </span>
          <h3>{s.name}</h3>
          <p>{s.card}</p>
          <span className="tile__more">Learn more</span>
        </Link>
      ))}
    </div>
  );
}
