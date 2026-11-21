"use client";
import React, { useState } from "react";
import { Mail } from "lucide-react";
import { sendViaEmailApp } from "@/lib/mailto";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  // TODO: replace with the shared form backend (see TODO.md).
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendViaEmailApp(
      "Newsletter subscription",
      `Please add ${email} to the A.G.I.E newsletter.`
    );
  };

  return (
    <section
      id="newsletter"
      className="bg-gray-50 py-16 md:py-20 px-6 md:px-12 lg:px-24 text-gray-800"
    >
      <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-2 lg:items-center text-center lg:text-left">
        <div>
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
            <Mail size={22} aria-hidden="true" />
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Stay <span className="text-green-700">Updated</span>
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
            Subscribe to our newsletter to receive updates on upcoming events,
            news, and community activities.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto flex-col sm:flex-row gap-3"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700/30"
          />
          <button
            type="submit"
            className="rounded-lg bg-green-700 px-6 py-3.5 font-semibold text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
