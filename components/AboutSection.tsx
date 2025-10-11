import React from "react";
import Image from "next/image";
import aboutSectionImage from "@/public/assets/aboutSection.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-white py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Image
            src={aboutSectionImage}
            alt="Ghanaians in Estonia community event"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <div className="absolute inset-0 rounded-2xl bg-black/20"></div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            About the{" "}
            <span className="text-green-700">Association of Ghanaians</span> in
            Estonia
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            The Association of Ghanaians in Estonia (A.G.I.E) is a vibrant,
            inclusive community that brings together Ghanaians living, studying,
            and working across Estonia. We aim to preserve our rich cultural
            heritage while fostering unity, collaboration, and mutual support
            among our members.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            From organizing cultural events to supporting new arrivals, our
            association plays a key role in connecting Ghanaians with
            opportunities, mentorship, and a sense of belonging in their second
            home.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <div>
              <h3 className="text-3xl font-bold text-green-700">50+</h3>
              <p className="text-gray-500 text-sm">Active Members</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-700">10+</h3>
              <p className="text-gray-500 text-sm">Annual Events</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-700">5+</h3>
              <p className="text-gray-500 text-sm">
                Estonian Cities Represented
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
