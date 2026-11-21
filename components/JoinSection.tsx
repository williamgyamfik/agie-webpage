import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, PartyPopper, Users } from "lucide-react";
import joinImage from "@/public/assets/joinImage.jpg";

const benefits = [
  {
    icon: Users,
    title: "Connect",
    text: "Meet and connect with fellow Ghanaians across Estonia.",
  },
  {
    icon: HeartHandshake,
    title: "Get support",
    text: "Get help settling in, finding work, and integrating.",
  },
  {
    icon: PartyPopper,
    title: "Take part",
    text: "Join events, cultural nights, and volunteer programs.",
  },
];

const JoinSection = () => {
  return (
    <section
      id="join"
      className="relative isolate overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-emerald-600 py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-24 text-white"
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.08] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative lg:order-2">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20">
            <Image
              src={joinImage}
              alt="Ghanaian community in Estonia"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              placeholder="blur"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-5 left-4 sm:left-6 flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-gray-800 shadow-lg">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-300 text-green-800">
              <Users size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="font-bold leading-tight">Everyone is welcome</p>
              <p className="text-xs text-gray-500">New arrivals &amp; long-time residents</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-4 lg:pt-0 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
            Become a member
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Join the <span className="text-yellow-300">Ghanaian Community</span>{" "}
            in Estonia
          </h2>
          <p className="mt-6 text-base sm:text-lg text-green-50 leading-relaxed">
            Become part of a vibrant network of Ghanaians living, studying, and
            working in Estonia. Whether you’re new to the country or have lived
            here for years, we welcome you to connect, collaborate, and
            celebrate our shared culture.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {benefits.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="flex gap-4 rounded-xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-sm sm:flex-col sm:gap-3 lg:flex-row lg:items-center lg:gap-4"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-300 text-green-800">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-green-50/90 leading-snug">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-300 px-8 py-3.5 text-lg font-semibold text-green-900 shadow-lg transition hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-700"
            >
              Join Us Now
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/#events"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-lg font-semibold text-white ring-1 ring-white/40 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              See our events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
