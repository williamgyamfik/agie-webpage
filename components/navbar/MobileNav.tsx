"use client";
import { navigation } from "@/constants";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const pathName = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);

  // While open: lock page scroll, close on Escape, focus the close button.
  useEffect(() => {
    if (!showNav) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeNav();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [showNav, closeNav]);

  return (
    <div
      id="mobile-nav"
      className={`fixed inset-0 z-[60] md:hidden ${showNav ? "" : "pointer-events-none"}`}
      aria-hidden={!showNav}
      inert={!showNav}
    >
      {/* Backdrop */}
      <div
        onClick={closeNav}
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          showNav ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`absolute right-0 top-0 flex h-full w-[80%] max-w-xs flex-col bg-white shadow-xl transition-transform duration-300 ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6">
          <span className="text-lg font-bold text-gray-900">Menu</span>
          <button
            ref={closeRef}
            type="button"
            onClick={closeNav}
            aria-label="Close menu"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-gray-800 transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1 p-4">
          {navigation.map((item) => {
            const isActive = pathName === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeNav}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-lg px-4 py-3 text-lg font-medium transition-colors ${
                  isActive
                    ? "bg-green-50 text-green-700"
                    : "text-gray-800 hover:bg-gray-50 hover:text-green-700"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-gray-200 p-4">
          <Link
            href="/#join"
            onClick={closeNav}
            className="block rounded-lg bg-green-700 px-4 py-3 text-center font-semibold text-white transition hover:bg-green-800"
          >
            Join Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
