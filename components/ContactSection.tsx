"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get in <span className="text-green-400">Touch</span>
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Have questions or want to get involved? We’d love to hear from you.
            Reach out to our team for membership, collaborations, or general
            inquiries.
          </p>

          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3">
              <Mail className="text-green-400" />{" "}
              <span>info@ghanaiansinestonia.ee</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-green-400" /> <span>+372 5555 1234</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-green-400" />{" "}
              <span>Tallinn, Estonia</span>
            </li>
          </ul>

          <div className="flex gap-5">
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition"
            >
              <Facebook size={22} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition"
            >
              <Instagram size={22} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent successfully!");
            }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-green-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-green-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-green-400 focus:outline-none"
                rows={4}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
