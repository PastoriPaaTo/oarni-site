"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const INTERVAL = 4000;
const FADE = 1500;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Hero() {
  const [images, setImages] = useState<string[]>(["/Oarni_hero.png"]);
  const [bottom, setBottom] = useState(0);
  const [top, setTop] = useState(0);
  const [topOpacity, setTopOpacity] = useState(1);
  const [topTransition, setTopTransition] = useState(false);
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    fetch("/api/hero")
      .then((r) => r.json())
      .then(({ images: files }: { images: string[] }) => {
        const srcs = files.length > 0
          ? files.map((f: string) => `/hero/${f}`)
          : ["/Oarni_hero.png"];
        const shuffled = shuffle(srcs);
        setImages(shuffled);
        setTop(0);
        setBottom(1 % shuffled.length);
        indexRef.current = 0;
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (images.length < 2) return;

    timerRef.current = setInterval(() => {
      const next = (indexRef.current + 1) % images.length;
      setBottom(next);
      setTopTransition(true);
      setTopOpacity(0);

      setTimeout(() => {
        setTop(next);
        setTopOpacity(1);
        setTopTransition(false);
        indexRef.current = next;
      }, FADE);
    }, INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [images]);

  return (
    <section className="h-screen grid grid-cols-1 lg:grid-cols-[5fr_7fr]">
      {/* Left — text */}
      <div className="flex flex-col justify-center px-8 md:px-16 pt-32 pb-20 lg:py-0">
        <h1
          className="font-syne font-bold leading-[1.0] mb-7"
          style={{
            fontSize: "clamp(2.6rem, 5vw, 4.8rem)",
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
          }}
        >
          Thinks like a photographer.
          <br />
          Works like a machine.
        </h1>
        <p
          className="max-w-sm text-[0.95rem] leading-[1.6] mb-10"
          style={{ color: "var(--text-secondary)" }}
        >
          Oarni delivers brand-quality visuals at the speed and scale only AI can manage — without the studio, the crew, or the wait.
        </p>
        <div>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 font-medium text-base px-7 py-3.5 rounded-full transition-all hover:gap-4"
            style={{
              background: "var(--text-primary)",
              color: "var(--bg)",
            }}
          >
            See the work ↓
          </a>
        </div>
      </div>

      {/* Right — crossfading images */}
      <div className="relative min-h-[50vh] lg:min-h-full overflow-hidden">
        <Image
          src={images[bottom] ?? "/Oarni_hero.png"}
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        <Image
          src={images[top] ?? "/Oarni_hero.png"}
          alt="Brand photography sample"
          fill
          className="object-cover"
          priority
          style={{
            opacity: topOpacity,
            transition: topTransition ? `opacity ${FADE}ms ease-in-out` : "none",
          }}
        />
      </div>
    </section>
  );
}
