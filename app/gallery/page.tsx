import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import GalleryGrid, { type GalleryImage } from "@/components/GalleryGrid";

// To add a photo: put it in public/assets/, import it here and add it to
// `images` with a short description. The first photo is shown large.
import gallery1 from "@/public/assets/gallery1.jpg";
import gallery2 from "@/public/assets/gallery2.jpg";
import gallery3 from "@/public/assets/gallery3.jpg";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description:
    "Photos from community events and celebrations of the Association of Ghanaians in Estonia.",
  path: "/gallery",
});

const images: GalleryImage[] = [
  {
    src: gallery2,
    alt: "Children in kente and colourful outfits performing a cultural dance with ribbons",
  },
  {
    src: gallery1,
    alt: "Dancers in traditional African print outfits dancing in a courtyard",
  },
  {
    src: gallery3,
    alt: "A woman braiding hair at an outdoor street gathering",
  },
];

const GalleryPage = () => {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-green-700 text-white px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl xl:px-6 py-14 sm:py-16 md:py-20">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-green-100">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight size={14} />
              </li>
              <li aria-current="page" className="text-white">
                Gallery
              </li>
            </ol>
          </nav>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold">
            Event <span className="text-yellow-300">Gallery</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-green-50 leading-relaxed">
            A glimpse into our vibrant community events and celebrations across
            Estonia.
          </p>
        </div>
      </section>

      {/* Photos */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl xl:px-6">
          <GalleryGrid images={images} />
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
