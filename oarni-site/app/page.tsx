import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Gallery />
        <HowItWorks />
        <FAQ />
        <Team />
        <Contact />
      </main>
      <footer
        className="py-6 px-6 text-sm"
        style={{ background: "var(--text-primary)", color: "rgba(245,244,240,0.4)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2">
          <span>© 2026 Oarni</span>
          <a href="/privacy-policy.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Privacy policy</a>
          <a href="/cookie-policy.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Cookie settings</a>
          <a href="/service-description.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Service description</a>
        </div>
      </footer>
    </>
  );
}
