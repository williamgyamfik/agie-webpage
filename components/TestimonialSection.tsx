"use client";
import React, { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Quote } from "lucide-react";

import member1 from "@/public/assets/member1.jpg";
import member2 from "@/public/assets/member2.jpg";
import member3 from "@/public/assets/member3.jpg";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ayisha Mohammed",
    role: "Master’s Student, Tallinn University",
    image: member1,
    quote:
      "Joining the Association made my first months in Estonia so much easier. I found friends, mentors, and opportunities I never expected.",
  },
  {
    id: 2,
    name: "Kwesi Mensah",
    role: "Software Engineer, Tartu",
    image: member3,
    quote:
      "Through the Association, I connected with professionals who helped me navigate life in Estonia and even find my current job.",
  },
  {
    id: 3,
    name: "Akua Owusu",
    role: "Entrepreneur, Tallinn",
    image: member2,
    quote:
      "The events are always lively, inspiring, and full of genuine people. It feels like having a second family here in Estonia.",
  },
];

const TestimonialCard = ({
  person,
  featured,
  className = "",
}: {
  person: Testimonial;
  featured: boolean;
  className?: string;
}) => (
  <figure
    className={`relative flex h-full flex-col justify-between gap-8 rounded-2xl p-7 sm:p-8 transition duration-300 ${
      featured
        ? "bg-green-700 text-white shadow-xl shadow-green-900/20 lg:-translate-y-4"
        : "bg-gray-50 text-gray-800 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1"
    } ${className}`}
  >
    <div>
      <span
        className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${
          featured ? "bg-white/15 text-yellow-300" : "bg-green-50 text-green-700"
        }`}
        aria-hidden="true"
      >
        <Quote size={20} />
      </span>
      <blockquote className="mt-6 text-base leading-relaxed sm:text-lg">
        “{person.quote}”
      </blockquote>
    </div>

    <figcaption
      className={`flex items-center gap-4 border-t pt-6 ${
        featured ? "border-white/20" : "border-gray-100"
      }`}
    >
      <Image
        src={person.image}
        alt={person.name}
        width={112}
        height={112}
        className={`h-14 w-14 shrink-0 rounded-full object-cover ring-2 ${
          featured ? "ring-yellow-300" : "ring-green-600"
        }`}
      />
      <div className="min-w-0 text-left">
        <p className="font-semibold">{person.name}</p>
        <p
          className={`text-sm ${featured ? "text-green-100" : "text-gray-500"}`}
        >
          {person.role}
        </p>
      </div>
    </figcaption>
  </figure>
);

const TestimonialSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Track which card is in view on the mobile carousel.
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.scrollWidth / testimonials.length;
    setActive(Math.round(track.scrollLeft / cardWidth));
  };

  const scrollTo = (index: number) => {
    const card = trackRef.current?.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <section
      id="testimonials"
      className="bg-white py-16 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800">
            What Our <span className="text-green-700">Members Say</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real voices from Ghanaians building a vibrant community here in
            Estonia.
          </p>
        </div>

        {/* Mobile: swipeable carousel */}
        <div className="md:hidden">
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Member testimonials"
          >
            {testimonials.map((person, i) => (
              <div key={person.id} className="w-[85%] shrink-0 snap-center">
                <TestimonialCard person={person} featured={i === active} />
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {testimonials.map((person, i) => (
              <button
                key={person.id}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Show testimonial from ${person.name}`}
                aria-current={i === active}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-green-700" : "w-2.5 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Tablet & desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 lg:pt-4">
          {testimonials.map((person, i) => (
            <TestimonialCard
              key={person.id}
              person={person}
              featured={i === 1}
              className={i === 2 ? "md:col-span-2 lg:col-span-1" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
