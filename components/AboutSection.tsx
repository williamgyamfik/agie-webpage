import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HandHeart, Sparkles, Users } from "lucide-react";
import aboutSectionImage from "@/public/assets/aboutSection.jpg";

const pillars = [
  {
    icon: Sparkles,
    title: "Culture",
    text: "Preserving and celebrating our rich Ghanaian heritage.",
  },
  {
    icon: Users,
    title: "Community",
    text: "Fostering unity and mutual support among members.",
  },
  {
    icon: HandHeart,
    title: "Opportunity",
    text: "Connecting newcomers with mentorship and opportunities.",
  },
];

const stats = [
  { value: "50+", label: "Active Members" },
  { value: "10+", label: "Annual Events" },
  { value: "5+", label: "Cities Represented" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-white py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div
            className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 h-2/3 w-2/3 rounded-2xl bg-green-700/10"
            aria-hidden="true"
          />
          <div
            className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 h-24 w-24 sm:h-32 sm:w-32 rounded-2xl bg-yellow-300/40"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={aboutSectionImage}
              alt="Ghanaians in Estonia community event"
              fill
              sizes="(min-width: 1024px) 50vw, (min-width: 640px) 576px, 100vw"
              className="object-cover"
              placeholder="blur"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 rounded-xl bg-white/95 backdrop-blur px-4 py-3 sm:px-5 sm:py-4 shadow-lg">
            <p className="text-lg sm:text-xl font-bold text-green-700">
              Akwaaba!
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Your home away from home
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
            About Us
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight font-bold text-gray-800">
            About the{" "}
            <span className="text-green-700">Association of Ghanaians</span> in
            Estonia
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            The Association of Ghanaians in Estonia (A.G.I.E) is a vibrant,
            inclusive community that brings together Ghanaians living, studying,
            and working across Estonia. We aim to preserve our rich cultural
            heritage while fostering unity, collaboration, and mutual support
            among our members.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            From organizing cultural events to supporting new arrivals, our
            association plays a key role in connecting Ghanaians with
            opportunities, mentorship, and a sense of belonging in their second
            home.
          </p>

          {/* Pillars */}
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-3 sm:flex-col">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-700">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-800">{title}</h3>
                  <p className="text-sm text-gray-500 leading-snug">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Stats */}
          <dl className="mt-8 grid grid-cols-3 divide-x divide-gray-200 rounded-2xl border border-gray-100 bg-gray-50">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col-reverse px-2 py-4 sm:px-4 sm:py-5 text-center"
              >
                <dt className="mt-1 text-xs sm:text-sm text-gray-500">
                  {label}
                </dt>
                <dd className="text-2xl sm:text-3xl font-bold text-green-700">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-green-700 px-6 py-3 font-medium text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
          >
            Learn more about us
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
