import React from "react";
import Link from "next/link";

const JoinCTA = () => {
  return (
    <section className="bg-green-700 text-white py-14 md:py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Ready to Join the Family?
        </h2>
        <p className="mb-6 text-green-50">
          Be part of a vibrant Ghanaian community in Estonia.
        </p>
        {/* TODO: point to /join once the membership form exists (see TODO.md). */}
        <Link
          href="/contact"
          className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-green-700 transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-700"
        >
          Become a Member
        </Link>
      </div>
    </section>
  );
};

export default JoinCTA;
