import { QuoteButton } from "@/components/quote-button";

export function ClosingBand({ heading }: { heading: string }) {
  return (
    <section className="closing">
      <div className="frame closing__row">
        <h2>{heading}</h2>
        <QuoteButton size="lg" tone="light" />
      </div>
    </section>
  );
}

export function Stripe() {
  return <div className="stripe" aria-hidden="true" />;
}
