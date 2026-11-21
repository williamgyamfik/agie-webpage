import React from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import event1 from "@/public/assets/event1.jpg";
import event2 from "@/public/assets/event2.jpg";
import event3 from "@/public/assets/event3.jpg";

type Event = {
  id: number;
  title: string;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  location: string;
  image: StaticImageData;
  description: string;
};

const events: Event[] = [
  {
    id: 1,
    title: "Independence Day Celebration",
    date: "2025-03-06",
    location: "Tallinn, Estonia",
    image: event1,
    description:
      "Join us as we celebrate Ghana’s Independence Day with cultural performances, food, and music. Let’s wear our kente and wave our flags proudly!",
  },
  {
    id: 2,
    title: "Summer Family Picnic",
    date: "2025-07-12",
    location: "Kadriorg Park, Tallinn",
    image: event2,
    description:
      "A fun-filled day for families — with games, barbecue, and a friendly football match between Ghanaians and friends of Ghana.",
  },
  {
    id: 3,
    title: "Business Networking Night",
    date: "2025-11-02",
    location: "Tartu, Estonia",
    image: event3,
    description:
      "Meet professionals, entrepreneurs, and students building bridges between Ghana and Estonia. Let's network and grow together.",
  },
];

// Format in UTC so the server-rendered date never shifts by a day.
const fmt = (iso: string, options: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("en-GB", { timeZone: "UTC", ...options }).format(
    new Date(`${iso}T00:00:00Z`)
  );

const Events = () => {
  return (
    <section
      id="events"
      className="bg-gray-50 py-16 md:py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
            Events
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800">
            Upcoming <span className="text-green-700">Events</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Stay updated with our latest gatherings, celebrations, and
            networking opportunities across Estonia.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {events.map((event, i) => {
            // On tablets the odd last card spans the row in a horizontal layout.
            const wide = i === events.length - 1 && events.length % 2 === 1;
            return (
              <li
                key={event.id}
                className={`group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  wide ? "sm:col-span-2 sm:flex-row lg:col-span-1 lg:flex-col" : ""
                }`}
              >
                {/* Image + date badge */}
                <div
                  className={`relative aspect-[16/10] overflow-hidden ${
                    wide ? "sm:aspect-auto sm:w-1/2 lg:aspect-[16/10] lg:w-auto" : ""
                  }`}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    placeholder="blur"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />

                  <time
                    dateTime={event.date}
                    className="absolute top-4 left-4 flex w-14 flex-col items-center overflow-hidden rounded-xl bg-white text-center shadow-md"
                  >
                    <span className="w-full bg-green-700 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                      {fmt(event.date, { month: "short" })}
                    </span>
                    <span className="py-1 text-xl font-bold leading-none text-gray-800">
                      {fmt(event.date, { day: "numeric" })}
                    </span>
                  </time>
                </div>

                {/* Details */}
                <div
                  className={`flex flex-1 flex-col p-6 ${
                    wide ? "sm:w-1/2 lg:w-auto" : ""
                  }`}
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {event.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-gray-500">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={16} className="text-green-700" aria-hidden="true" />
                      {fmt(event.date, { weekday: "short", day: "numeric", month: "long", year: "numeric" })}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={16} className="text-green-700" aria-hidden="true" />
                      {event.location}
                    </span>
                  </div>

                  <p className="mt-4 flex-1 text-gray-600 leading-relaxed">
                    {event.description}
                  </p>

                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 self-start font-medium text-green-700 transition hover:text-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 rounded"
                  >
                    Learn more
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Events;
