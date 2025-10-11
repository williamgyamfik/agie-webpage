"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

const faqs = [
  {
    question: "How do I become a member of the Association?",
    answer:
      "To become a member, simply fill out the membership form on our Join page. Membership is open to all Ghanaians living in Estonia.",
  },
  {
    question: "Are there any membership fees?",
    answer:
      "The Association is a non-profit organization. There is a small annual membership fee to help support our events and initiatives.",
  },
  {
    question: "Can I volunteer even if I'm not a member?",
    answer:
      "Yes! We welcome volunteers from both members and friends of the Association. You can contact us via the Contact page to get involved.",
  },
  {
    question: "How can I stay updated about upcoming events?",
    answer:
      "You can subscribe to our newsletter, follow us on social media, or regularly check the Events section on our website.",
  },
  {
    question:
      "Does the Association collaborate with the Ghanaian Embassies in Europe?",
    answer:
      "Yes, we maintain close communication with any Ghanaian Embassy in Europe and work together on initiatives that support the Ghanaian community in Estonia.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-800">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Frequently Asked <span className="text-green-400">Questions</span>
        </h2>
        <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
          Here are answers to some of the most common questions from our members
          and visitors.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-600 rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300 bg-gray-700"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-white font-medium"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="ml-2 text-white" />
              ) : (
                <ChevronDown className="ml-2 text-white" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-200">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
