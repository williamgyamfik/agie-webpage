import React from "react";
import { CalendarDays, MapPin } from "lucide-react"; // nice icons from lucide-react
import { Button } from "./ui/button";
import Image from "next/image";
import event1 from "@/public/assets/event1.jpg";
import event2 from "@/public/assets/event2.jpg";
import event3 from "@/public/assets/event3.jpg";
const events = [
  {
    id: 1,
    title: "Independence Day Celebration",
    date: "March 6, 2025",
    location: "Tallinn, Estonia",
    image: event1,
    description:
      "Join us as we celebrate Ghana’s Independence Day with cultural performances, food, and music. Let’s wear our kente and wave our flags proudly!",
  },
  {
    id: 2,
    title: "Summer Family Picnic",
    date: "July 12, 2025",
    location: "Kadriorg Park, Tallinn",
    image: event2,
    description:
      "A fun-filled day for families — with games, barbecue, and a friendly football match between Ghanaians and friends of Ghana.",
  },
  {
    id: 3,
    title: "Business Networking Night",
    date: "November 2, 2025",
    location: "Tartu, Estonia",
    image: event3,
    description:
      "Meet professionals, entrepreneurs, and students building bridges between Ghana and Estonia. Let's network and grow together.",
  },
];

const Events = () => {
  return (
    <section id="events" className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Upcoming <span className="text-green-700">Events</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Stay updated with our latest gatherings, celebrations, and networking
          opportunities across Estonia.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <Image
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {event.title}
              </h3>

              <div className="flex  items-center text-gray-500 text-sm mb-3 gap-3">
                <CalendarDays size={16} /> <span>{event.date}</span>
                <MapPin size={16} className="ml-3" />{" "}
                <span>{event.location}</span>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {event.description}
              </p>

              <Button className="bg-green-700 hover:bg-green-800 text-white">
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
