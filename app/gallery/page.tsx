"use client";
import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

// Import your images
import event1 from "@/public/assets/gallery1.jpg";
import event2 from "@/public/assets/gallery2.jpg";
import event3 from "@/public/assets/gallery3.jpg";
import event4 from "@/public/assets/gallery2.jpg"; // add more as needed
import event5 from "@/public/assets/gallery3.jpg";

const images = [event1, event2, event3, event4, event5];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20 px-6 md:px-12 lg:px-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Event <span className="text-yellow-300">Gallery</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          A glimpse into our vibrant community events and celebrations across
          Estonia.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedImage(idx)}
            >
              <Image
                src={img}
                alt={`Event ${idx + 1}`}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/20"
          >
            <X size={24} />
          </button>
          <div className="max-w-4xl max-h-[80vh]">
            <Image
              src={images[selectedImage]}
              alt={`Event ${selectedImage + 1}`}
              className="object-contain w-full h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default GalleryPage;
