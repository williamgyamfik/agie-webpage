import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <header className="relative w-full h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute right-0 bottom-0 w-full h-full z-10 object-cover"
      >
        <source src="/videos/herovideo2.mp4" type="video/mp4" />
        Your browser does not support HTML5 video
      </video>

      <div className="absolute z-20 inset-0 w-full bg-black/50"></div>

      <div className="bottom-0 text-left  absolute z-30 text-white max-w-2xl px-4">
        <h1 className=" text-4xl md:text-6xl font-bold text-white">
          <span className="text-red-500">Association</span> of{" "}
          <span className="text-yellow-300">Ghanaians</span> in
          <span className="text-green-500"> Estonia </span>
        </h1>
        <p className="mt-4 text-lg max-w-5xl text-white">
          Are you a Ghanaian living in Estonia? Come join our vibrant community
          and connect with us
        </p>
        <div className="py-5">
          <Link href="/about">
            <Button className="mt-6  cursor-pointer">Learn More</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
