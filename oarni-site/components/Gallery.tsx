"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const PLACEHOLDER_COUNT = 12;

function isVideo(src: string) {
  return /\.(mp4|webm)$/i.test(src);
}

export default function Gallery() {
  const [items, setItems] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/gallery")
      .then((r) => r.json())
      .then(({ images: files }: { images: string[] }) => {
        const srcs = files.map((f: string) => `/gallery/${f}`);
        for (let i = srcs.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [srcs[i], srcs[j]] = [srcs[j], srcs[i]];
        }
        setItems(srcs);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  // Lightbox only works with images
  const imageItems = items.filter((s) => !isVideo(s));
  const lightboxSlides = imageItems.map((src) => ({ src }));

  function handleClick(src: string) {
    if (isVideo(src)) return;
    const idx = imageItems.indexOf(src);
    if (idx >= 0) setLightboxIndex(idx);
  }

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-syne font-extrabold mb-12"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", letterSpacing: "-0.02em", color: "var(--text-primary)" }}
        >
          Work
        </h2>

        {!loaded || items.length === 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
              <div
                key={i}
                className="w-full rounded-xl break-inside-avoid"
                style={{
                  background: "#E5E4E0",
                  height: i % 3 === 0 ? "320px" : i % 3 === 1 ? "240px" : "280px",
                }}
              />
            ))}
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {items.map((src) => (
              <div
                key={src}
                className="relative w-full break-inside-avoid overflow-hidden rounded-xl group"
                style={{ cursor: isVideo(src) ? "default" : "pointer" }}
                onClick={() => handleClick(src)}
              >
                {isVideo(src) ? (
                  <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto block"
                  />
                ) : (
                  <Image
                    src={src}
                    alt="Oarni brand photography"
                    width={800}
                    height={600}
                    className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={lightboxSlides}
      />
    </section>
  );
}
