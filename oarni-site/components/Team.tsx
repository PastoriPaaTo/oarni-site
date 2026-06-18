const people = [
  { name: "Valtteri Hirvonen", role: "Founder", email: "valtteri@oarni.com" },
  { name: "Tomi Paajanen", role: "Co-founder", email: "tomi@oarni.com" },
  { name: "Pekka Lemettinen", role: "Co-founder", email: "pekka@oarni.com" },
];

export default function Team() {
  return (
    <section className="py-24 px-6" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-syne font-extrabold mb-10"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", letterSpacing: "-0.02em", color: "var(--text-primary)" }}
        >
          The team
        </h2>
        <p
          className="max-w-2xl text-[0.95rem] leading-[1.7] mb-16"
          style={{ color: "var(--text-secondary)" }}
        >
          Oarni was founded in Finland by three people who between them have spent decades producing commercial images for global brands, scaling media and technology companies, and building AI systems from the ground up. The goal is to make professional brand photography accessible to every company that needs it — and to free up the resources that should be going to the productions that genuinely deserve them.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {people.map((p) => (
            <div key={p.name}>
              <div
                className="font-syne font-bold text-base mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {p.name}
              </div>
              <div
                className="text-sm mb-3"
                style={{ color: "var(--text-secondary)" }}
              >
                {p.role}
              </div>
              <a
                href={`mailto:${p.email}`}
                className="text-sm transition-opacity hover:opacity-60"
                style={{ color: "var(--text-primary)" }}
              >
                {p.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
