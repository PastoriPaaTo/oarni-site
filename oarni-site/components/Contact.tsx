"use client";

import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: "var(--text-primary)" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-syne font-extrabold mb-4 leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--bg)", letterSpacing: "-0.02em" }}
        >
          Interested?
        </h2>
        <p
          className="text-base mb-12 max-w-sm leading-relaxed"
          style={{ color: "rgba(245,244,240,0.55)" }}
        >
          Get in touch — we'll build a pilot for your brand.
        </p>

        {sent ? (
          <div
            className="inline-flex items-center gap-3 px-6 py-4 rounded-xl font-medium"
            style={{ background: "var(--color-accent)", color: "var(--text-primary)" }}
          >
            <span>✓</span> Message sent — we'll be in touch soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 rounded-full text-base outline-none border-2 border-transparent focus:border-[var(--color-accent)] transition-colors"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "var(--bg)",
              }}
            />
            <button
              type="submit"
              className="px-7 py-3.5 rounded-full font-medium text-base transition-opacity hover:opacity-90 whitespace-nowrap"
              style={{
                background: "var(--color-accent)",
                color: "var(--text-primary)",
              }}
            >
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
