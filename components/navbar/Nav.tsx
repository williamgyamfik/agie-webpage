"use client";
import { navigation } from "@/constants";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "@/public/assets/logoNoBg.png";
import Image from "next/image";

type Props = {
  openNav: () => void;
  navOpen: boolean;
};

const Nav = ({ openNav, navOpen }: Props) => {
  const pathName = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-24 xl:px-6">
        {/* The logo is a wide wordmark (730×300) — size by height, keep aspect ratio. */}
        <Link
          href="/"
          className="flex items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
        >
          <Image
            src={logo}
            alt="A.G.I.E — Association of Ghanaians in Estonia, home"
            priority
            sizes="120px"
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        {/* Desktop links */}
        <nav aria-label="Main" className="hidden md:flex items-center gap-1 lg:gap-2">
          {navigation.map((item) => {
            const isActive = pathName === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-green-50 text-green-700"
                    : "text-gray-700 hover:text-green-700"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            href="/#join"
            className="ml-2 rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
          >
            Join Us
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={openNav}
          aria-label="Open menu"
          aria-expanded={navOpen}
          aria-controls="mobile-nav"
          className="md:hidden -mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-gray-800 transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
};

export default Nav;
