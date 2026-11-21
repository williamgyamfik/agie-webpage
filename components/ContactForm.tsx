"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { sendViaEmailApp } from "@/lib/mailto";

const topics = [
  "General enquiry",
  "Membership",
  "Events",
  "Partnership or collaboration",
];

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 transition focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700/30";

const labelClass = "mb-2 block text-sm font-medium text-gray-700";

/** Light-themed contact form used on the /contact page. */
const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: topics[0],
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  // TODO: replace with the shared form backend (see TODO.md).
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendViaEmailApp(
      `${form.topic} — ${form.name}`,
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="cf-name" className={labelClass}>
          Name
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="cf-email" className={labelClass}>
          Email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-topic" className={labelClass}>
          Topic
        </label>
        <select
          id="cf-topic"
          name="topic"
          value={form.topic}
          onChange={handleChange}
          className={inputClass}
        >
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={6}
          placeholder="How can we help?"
          value={form.message}
          onChange={handleChange}
          required
          className={`${inputClass} resize-y`}
        />
      </div>
      <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-gray-500">
          Sending opens your email app with your message ready to go.
        </p>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-lg bg-green-700 px-6 py-3.5 font-semibold text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
        >
          Send Message
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
