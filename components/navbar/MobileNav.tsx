import { navigation } from "@/constants";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-200%]";

  return (
    <div>
      <div
        className={`fixed ${navOpen} top-0 inset-0 transform transition-all duration-500 z-[100002] bg-black opacity-70 w-full h-screen`}
      ></div>
      <div
        className={`text-white ${navOpen} top-0 fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-gray-900 space-y-6 z-[1000050]`}
      >
        {navigation.map((item) => {
          return (
            <Link key={item.name} href={item.href}>
              <p className="text-white w-fit text-2xl ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">
                {item.name}
              </p>
            </Link>
          );
        })}

        <X
          onClick={closeNav}
          className="absolute cursor-pointer top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
