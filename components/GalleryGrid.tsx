"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

export type GalleryImage = {
  src: StaticImageData;
  /** Describes the photo; also shown as the caption in the lightbox. */
  alt: string;
};

const GalleryGrid = ({ images }: { images: GalleryImage[] }) => {
  const [open, setOpen] = useState<number | null>(null);
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const lastOpened = useRef<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpen((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length]
  );

  // While open: keyboard controls, scroll lock, focus the close button.
  // On close: return focus to the tile that opened the lightbox.
  useEffect(() => {
    if (open === null) {
      if (lastOpened.current !== null) {
        tileRefs.current[lastOpened.current]?.focus();
        lastOpened.current = null;
      }
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const openAt = (i: number) => {
    lastOpened.current = i;
    setOpen(i);
  };

  const navBtn =
    "inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {images.map((img, i) => (
          <li
            key={img.src.src + i}
            className={i === 0 ? "col-span-2 row-span-2" : ""}
          >
            <button
              ref={(el) => {
                tileRefs.current[i] = el;
              }}
              type="button"
              onClick={() => openAt(i)}
              aria-label={`View photo: ${img.alt}`}
              className="group relative block aspect-square w-full overflow-hidden rounded-xl bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
            >
              <Image
                src={img.src}
                alt=""
                fill
                placeholder="blur"
                sizes={
                  i === 0
                    ? "(min-width: 1024px) 66vw, 100vw"
                    : "(min-width: 1024px) 33vw, 50vw"
                }
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/25">
                <Expand
                  className="h-8 w-8 text-white opacity-0 transition group-hover:opacity-100"
                  aria-hidden="true"
                />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[70] flex flex-col bg-black/90"
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className="flex items-center justify-between p-4 text-white">
            <span className="text-sm text-gray-300" aria-live="polite">
              {open + 1} / {images.length}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close photo viewer"
              className={navBtn}
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 sm:px-20">
            <figure
              className="relative h-full max-h-[78svh] w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                key={open}
                src={images[open].src}
                alt={images[open].alt}
                fill
                sizes="100vw"
                placeholder="blur"
                className="object-contain"
              />
            </figure>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  aria-label="Previous photo"
                  className={`${navBtn} absolute left-3 top-1/2 hidden -translate-y-1/2 sm:inline-flex`}
                >
                  <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  aria-label="Next photo"
                  className={`${navBtn} absolute right-3 top-1/2 hidden -translate-y-1/2 sm:inline-flex`}
                >
                  <ChevronRight className="h-6 w-6" aria-hidden="true" />
                </button>
              </>
            )}
          </div>

          <div className="flex items-center justify-center gap-4 p-4 sm:pb-6">
            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous photo"
                className={`${navBtn} sm:hidden`}
              >
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>
            )}
            <p className="max-w-2xl text-center text-sm text-gray-200">
              {images[open].alt}
            </p>
            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next photo"
                className={`${navBtn} sm:hidden`}
              >
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;
