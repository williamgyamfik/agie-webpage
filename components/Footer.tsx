import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/public/assets/logoNoBg.png";
import { contactInfo, navigation, socialLinks } from "@/constants";

const socialIcons = { Facebook, Instagram, LinkedIn: Linkedin };

const footerSections = [
  { title: "Explore", links: navigation },
  {
    title: "Get Involved",
    links: [
      { name: "Events", href: "/#events" },
      { name: "Join Us", href: "/#join" },
      { name: "Newsletter", href: "/#newsletter" },
      { name: "FAQ", href: "/#faq" },
    ],
  },
];

const linkClass =
  "text-gray-600 transition hover:text-green-700 focus-visible:outline-none focus-visible:underline";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-12 md:grid-cols-4 md:py-14">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2">
              <Image
                src={logo}
                alt="A.G.I.E — Association of Ghanaians in Estonia, home"
                sizes="150px"
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-gray-600 leading-relaxed">
              The Association of Ghanaians in Estonia — bringing together
              Ghanaians living, studying, and working across Estonia.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ name, href }) => {
                const Icon = socialIcons[name];
                return (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-green-700 hover:bg-green-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                {title}
              </h2>
              <ul className="mt-4 space-y-3">
                {links.map(({ name, href }) => (
                  <li key={name}>
                    <Link href={href} className={linkClass}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Contact strip */}
        <ul className="flex flex-col gap-3 border-t border-gray-200 py-6 text-sm sm:flex-row sm:flex-wrap sm:gap-x-8">
          <li>
            <a href={`mailto:${contactInfo.email}`} className={`inline-flex items-center gap-2 ${linkClass}`}>
              <Mail size={16} className="shrink-0 text-green-700" aria-hidden="true" />
              <span className="[overflow-wrap:anywhere]">{contactInfo.email}</span>
            </a>
          </li>
          <li>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className={`inline-flex items-center gap-2 ${linkClass}`}>
              <Phone size={16} className="shrink-0 text-green-700" aria-hidden="true" />
              {contactInfo.phone}
            </a>
          </li>
          <li className="inline-flex items-center gap-2 text-gray-600">
            <MapPin size={16} className="shrink-0 text-green-700" aria-hidden="true" />
            {contactInfo.location}
          </li>
        </ul>

        {/* Copyright */}
        <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500 sm:text-left">
          &copy; {new Date().getFullYear()} Association of Ghanaians in Estonia.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
