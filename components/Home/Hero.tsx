import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroFallback from "@/public/assets/herobg1.jpg";

const Hero = () => {
  return (
    <header className="relative isolate flex min-h-[34rem] h-[calc(100svh-4rem)] w-full items-center overflow-hidden bg-gray-900">
      {/* Optimised still image shown while the video loads (and if it can't play). */}
      <Image
        src={heroFallback}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover"
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      >
        <source src="/videos/herovideo2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-black/55" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-24 xl:px-6">
        <div className="max-w-3xl text-white">
          {/* Ghana flag stripe */}
          <div className="flex items-start gap-3">
            <span className="mt-2 flex h-1.5 w-12 shrink-0 overflow-hidden rounded-full" aria-hidden="true">
              <span className="flex-1 bg-red-600" />
              <span className="flex-1 bg-yellow-400" />
              <span className="flex-1 bg-green-600" />
            </span>
            {/* "Welcome" in Twi, Ewe and Ga. lang codes help screen readers pronounce them. */}
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold tracking-wide text-gray-200">
              <span lang="tw" title="Twi">Akwaaba</span>
              <span aria-hidden="true" className="text-yellow-300">·</span>
              <span lang="ee" title="Ewe">Woezɔ</span>
              <span aria-hidden="true" className="text-yellow-300">·</span>
              <span lang="gaa" title="Ga">Obaake</span>
              <span className="text-gray-400">— Welcome</span>
            </p>
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="text-red-500">Association</span> of{" "}
            <span className="text-yellow-300">Ghanaians</span> in{" "}
            <span className="text-green-500">Estonia</span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed">
            Are you a Ghanaian living in Estonia? Come join our vibrant
            community and connect with us.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/#join"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-7 py-3.5 font-semibold text-white transition hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Join Our Community
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg border border-white/70 px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <Link
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full p-2 text-white/80 transition hover:text-white sm:block"
      >
        <ChevronDown className="h-7 w-7 animate-bounce motion-reduce:animate-none" aria-hidden="true" />
      </Link>
    </header>
  );
};

export default Hero;
