"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 text-gray-800 bg-gray-50 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
        <p className="text-green-500 mb-6">
          Subscribe to our newsletter to receive updates on upcoming events,
          news, and community activities.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center sm:items-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-4 rounded-lg w-full sm:w-auto flex-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 text-black"
          />
          <Button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white p-4"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
