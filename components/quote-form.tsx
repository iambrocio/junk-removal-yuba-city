"use client";

import { useState } from "react";
import { services } from "@/lib/services";

type Status = "idle" | "sending" | "sent" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => null);
    setStatus(res?.ok ? "sent" : "error");
  }

  if (status === "sent") {
    return (
      <div className="lead-form__done">
        <h3>Got it, thanks!</h3>
        <p>We&apos;ll be in touch shortly with your price.</p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <div className="lead-form__pair">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
      </div>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" />
      </label>
      <label>
        Service
        <select name="service" defaultValue="">
          <option value="" disabled>
            Choose a service
          </option>
          {services.map((s) => (
            <option key={s.slug}>{s.name}</option>
          ))}
          <option>Something else</option>
        </select>
      </label>
      <label>
        What needs to go?
        <textarea
          name="details"
          rows={4}
          placeholder="e.g. old sectional, a washer, and about 15 boxes from the garage"
        />
      </label>
      <button
        className="cta-btn cta-btn--dark cta-btn--lg"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Get my free quote"}
      </button>
      {status === "error" && (
        <p className="lead-form__err">
          Something went wrong. Please try again in a moment.
        </p>
      )}
    </form>
  );
}
