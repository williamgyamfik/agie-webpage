"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { contactInfo, socialLinks } from "@/constants";
import { sendViaEmailApp } from "@/lib/mailto";

const CONTACT_EMAIL = contactInfo.email;
const CONTACT_PHONE = contactInfo.phone;

const contactMethods = [
  {
    icon: Mail,
    label: "Email us",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: Phone,
    label: "Call us",
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Based in",
    value: contactInfo.location,
  },
];

const socialIcons = { Facebook, Instagram, LinkedIn: Linkedin };
const socials = socialLinks.map(({ name, href }) => ({
  icon: socialIcons[name],
  label: name,
  href,
}));

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 transition focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/40";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  // TODO: replace with the shared form backend (see TODO.md).
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendViaEmailApp(
      `Website enquiry from ${form.name}`,
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-gray-900 py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-24 text-white"
    >
      <div
        className="absolute -bottom-40 -left-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-green-600/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10 lg:gap-16">
        {/* Info */}
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
            Contact
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            Get in <span className="text-green-400">Touch</span>
          </h2>
          <p className="mt-6 text-gray-300 leading-relaxed">
            Have questions or want to get involved? We’d love to hear from you.
            Reach out to our team for membership, collaborations, or general
            inquiries.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {contactMethods.map(({ icon: Icon, label, value, href }, i) => {
              const content = (
                <>
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-500/15 text-green-400">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-gray-400">
                      {label}
                    </span>
                    <span className="block font-medium [overflow-wrap:anywhere]">
                      {value}
                    </span>
                  </span>
                </>
              );
              const cls =
                "flex h-full min-w-0 items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4";
              return (
                // The email (first item) gets the full row on tablets.
                <li key={label} className={`min-w-0 ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
                  {href ? (
                    <a
                      href={href}
                      className={`${cls} transition hover:border-green-400/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className={cls}>{content}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-8">
            <p className="text-sm text-gray-400">Follow us</p>
            <div className="mt-3 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-green-400 hover:bg-green-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-white/10 bg-gray-800/60 p-6 sm:p-8 shadow-2xl backdrop-blur">
            <h3 className="text-xl font-semibold">Send us a message</h3>
            <p className="mt-1 text-sm text-gray-400">
              We usually reply within a few days.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm text-gray-300">
                  Name
                </label>
                <input
                  id="contact-name"
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
                <label htmlFor="contact-email" className="mb-2 block text-sm text-gray-300">
                  Email
                </label>
                <input
                  id="contact-email"
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
                <label htmlFor="contact-message" className="mb-2 block text-sm text-gray-300">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="How can we help?"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className={`${inputClass} resize-y`}
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3.5 font-semibold text-white shadow-lg transition hover:bg-green-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 sm:w-auto"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
