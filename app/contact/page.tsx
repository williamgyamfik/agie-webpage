import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { contactInfo, socialLinks } from "@/constants";

export const metadata: Metadata = {
  title: "Contact | A.G.I.E",
  description:
    "Get in touch with the Association of Ghanaians in Estonia about membership, events, partnerships or general questions.",
};

const socialIcons = { Facebook, Instagram, LinkedIn: Linkedin };

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
  },
  { icon: MapPin, label: "Location", value: contactInfo.location },
];

const ContactPage = () => {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-green-700 text-white px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl xl:px-6 py-14 sm:py-16 md:py-20">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-green-100">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight size={14} />
              </li>
              <li aria-current="page" className="text-white">
                Contact
              </li>
            </ol>
          </nav>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold">
            Get in <span className="text-yellow-300">Touch</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-green-50 leading-relaxed">
            We’d love to hear from you! Reach out to us for questions, events,
            or membership inquiries.
          </p>
        </div>
      </section>

      {/* Details + form */}
      <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-10 xl:px-6 lg:grid-cols-5 lg:gap-16">
          {/* Contact details */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Contact <span className="text-green-700">Details</span>
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Prefer to reach us directly? Use any of the options below.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactMethods.map(({ icon: Icon, label, value, href }, i) => {
                const inner = (
                  <>
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-700">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wider text-gray-500">
                        {label}
                      </span>
                      <span className="block font-medium text-gray-900 [overflow-wrap:anywhere]">
                        {value}
                      </span>
                    </span>
                  </>
                );
                const cls =
                  "flex h-full min-w-0 items-center gap-4 rounded-xl border border-gray-200 bg-white p-4";
                return (
                  <li
                    key={label}
                    className={`min-w-0 ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                  >
                    {href ? (
                      <a
                        href={href}
                        className={`${cls} transition hover:border-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700`}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className={cls}>{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8">
              <p className="text-sm font-medium text-gray-700">Follow us</p>
              <div className="mt-3 flex gap-3">
                {socialLinks.map(({ name, href }) => {
                  const Icon = socialIcons[name];
                  return (
                    <a
                      key={name}
                      href={href}
                      aria-label={name}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-green-700 hover:bg-green-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700"
                    >
                      <Icon size={20} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-gray-50 p-5">
              <p className="font-semibold text-gray-900">
                Want to become a member?
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Learn what the Association offers and how to join.
              </p>
              <Link
                href="/#join"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 transition hover:text-green-800"
              >
                Find out more
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800">
                Send Us a Message
              </h2>
              <p className="mt-1 mb-6 text-sm text-gray-500">
                Fill in the form and we’ll get back to you.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
