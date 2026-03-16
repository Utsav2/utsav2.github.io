"use client";

import { useState, useCallback, useEffect } from "react";

interface SlideshowProps {
  images: string | string[];
}

export function Slideshow({ images: imagesProp }: SlideshowProps) {
  const images = typeof imagesProp === "string"
    ? imagesProp.split(",").map((s) => s.trim())
    : imagesProp ?? [];

  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => Math.max(0, c - 1)),
    []
  );
  const next = useCallback(
    () => setCurrent((c) => Math.min(images.length - 1, c + 1)),
    [images.length]
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  if (images.length === 0) return null;

  return (
    <div
      style={{
        margin: "2em 0",
        background: "#fff",
        borderRadius: 6,
        border: "1px solid #2a2a2a",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 280,
          padding: "1.5em",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[current]}
          alt={`Slide ${current + 1} of ${images.length}`}
          style={{
            maxWidth: "100%",
            maxHeight: "50vh",
            objectFit: "contain",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          padding: "0.75em",
          borderTop: "1px solid #eee",
          background: "#fafafa",
        }}
      >
        <button
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous slide"
          style={{
            background: "none",
            border: "1px solid #ddd",
            borderRadius: 4,
            padding: "4px 14px",
            cursor: current === 0 ? "default" : "pointer",
            fontSize: 16,
            color: current === 0 ? "#ccc" : "#333",
          }}
        >
          &larr;
        </button>
        <span style={{ fontSize: 13, color: "#888", fontVariantNumeric: "tabular-nums" }}>
          {current + 1} / {images.length}
        </span>
        <button
          onClick={next}
          disabled={current === images.length - 1}
          aria-label="Next slide"
          style={{
            background: "none",
            border: "1px solid #ddd",
            borderRadius: 4,
            padding: "4px 14px",
            cursor: current === images.length - 1 ? "default" : "pointer",
            fontSize: 16,
            color: current === images.length - 1 ? "#ccc" : "#333",
          }}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
