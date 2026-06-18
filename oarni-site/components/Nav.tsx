"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image
            src="/oarni_textlogo_v03.png"
            alt="Oarni"
            height={28}
            width={120}
            className="object-contain object-left"
            priority
          />
        </a>
        <a
          href="#contact"
          className="text-sm font-medium px-5 py-2.5 rounded-full border border-current transition-colors hover:bg-[var(--text-primary)] hover:text-[var(--bg)]"
          style={{ color: "var(--text-primary)" }}
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
