import { Glyph } from "@/components/glyph";
import type { Faq } from "@/lib/services";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="qa-list">
      {items.map((f) => (
        <details className="qa" key={f.q}>
          <summary>
            {f.q}
            <Glyph name="plus" size={20} />
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
