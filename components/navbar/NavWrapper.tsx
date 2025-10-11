"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
// import Hero from "../Hero";

const NavWrapper = () => {
  const [showNav, setShowNav] = useState(false);

  const closeNav = () => setShowNav(false);
  const openNav = () => setShowNav(true);

  return (
    <div>
      <Nav openNav={openNav} />
      <MobileNav showNav={showNav} closeNav={closeNav} />
      {/* <Hero /> */}
    </div>
  );
};

export default NavWrapper;
