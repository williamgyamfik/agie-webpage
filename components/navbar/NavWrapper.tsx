"use client";
import React, { useCallback, useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const NavWrapper = () => {
  const [showNav, setShowNav] = useState(false);
  const closeNav = useCallback(() => setShowNav(false), []);

  // Fragment (not a wrapper div) so the sticky header is a direct child of <body>.
  return (
    <>
      <Nav openNav={() => setShowNav(true)} navOpen={showNav} />
      <MobileNav showNav={showNav} closeNav={closeNav} />
    </>
  );
};

export default NavWrapper;
