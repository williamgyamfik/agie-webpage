"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** Floating "back to top" button, shown after the visitor scrolls down. */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scrolling comes from `scroll-behavior` in globals.css
  // (disabled for visitors who prefer reduced motion).
  const scrollToTop = () => window.scrollTo({ top: 0 });

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-white shadow-lg transition duration-300 hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};

export default BackToTop;
