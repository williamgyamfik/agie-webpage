"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20 px-6 md:px-12 lg:px-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get in <span className="text-yellow-300">Touch</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          We’d love to hear from you! Reach out to us for questions, events, or
          membership inquiries.
        </p>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <Button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white w-full"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contact Details
          </h2>
          <p className="mb-4">
            <strong>Email:</strong> info@ghanainestonia.org
          </p>
          <p className="mb-4">
            <strong>Phone:</strong> +372 555 12345
          </p>
          <p className="mb-4">
            <strong>Address:</strong> Tallinn, Estonia
          </p>

          {/* Optional: Map Embed */}
          {/* <div className="mt-8 w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.0560123456789!2d24.7536!3d59.437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c3729fb1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sTallinn%2C%20Estonia!5e0!3m2!1sen!2s!4v1697072345678!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
