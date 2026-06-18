const steps = [
  { label: "Onboarding", desc: "Your brand is set up once. Oarni learns your visual identity — colors, atmosphere, people, environments. After that, it's ready to produce." },
  { label: "Brief & choose your virtual photographer", desc: "Describe what you need and choose a photographer style. Oarni generates a set of image proposals." },
  { label: "Choose and download", desc: "Pick what works. Download in any format and ratio, immediately." },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-syne font-extrabold mb-16"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", letterSpacing: "-0.02em", color: "var(--text-primary)" }}
        >
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i}>
              <div
                className="font-syne font-extrabold text-5xl mb-3 leading-none"
                style={{ color: "var(--color-accent)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                className="font-syne font-bold text-xl mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {step.label}
              </h3>
              <p style={{ color: "var(--text-secondary)" }} className="leading-relaxed text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
