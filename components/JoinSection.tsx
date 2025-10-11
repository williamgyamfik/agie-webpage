import React from "react";
import { Button } from "./ui/button";
import { Users, HeartHandshake } from "lucide-react";
import Image from "next/image";
import joinImage from "@/public/assets/joinImage.jpg";

const JoinSection = () => {
  return (
    <section
      id="join"
      className="relative bg-gradient-to-r from-green-700 to-emerald-600 py-20 px-6 md:px-12 lg:px-24 text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT — Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="text-yellow-300">Ghanaian Community</span>{" "}
            in Estonia
          </h2>
          <p className="text-lg text-gray-100 mb-8 leading-relaxed">
            Become part of a vibrant network of Ghanaians living, studying, and
            working in Estonia. Whether you’re new to the country or have lived
            here for years, we welcome you to connect, collaborate, and
            celebrate our shared culture.
          </p>

          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3">
              <Users className="w-5 h-5 text-yellow-300" />
              <span>Meet and connect with fellow Ghanaians across Estonia</span>
            </li>
            <li className="flex items-center gap-3">
              <HeartHandshake className="w-5 h-5 text-yellow-300" />
              <span>
                Get support settling in, finding work, and integrating
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Users className="w-5 h-5 text-yellow-300" />
              <span>
                Participate in events, cultural nights, and volunteer programs
              </span>
            </li>
          </ul>

          <Button className="bg-yellow-300 text-green-800 hover:bg-yellow-400 font-semibold py-3 px-8 rounded-lg text-lg">
            Join Us Now
          </Button>
        </div>

        <div className="relative hidden md:block">
          <Image
            src={joinImage}
            alt="Ghanaian community in Estonia"
            className="rounded-2xl shadow-xl object-cover w-full h-[450px]"
          />
          <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
