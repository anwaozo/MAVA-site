"use client";

import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
import MobileNav from "./mobile-nav";

const NAVBAR_LINKS = [
  {
    title: "About Us",
    route: "/about-us",
    icon: "/about-icon.svg",
  },
  {
    title: "PFO's Legacy",
    route: "/pfo-legacy",
    icon: "/legacy-icon.svg",
  },
  {
    title: "Workshops",
    route: "/workshops",
    icon: "/workshop-icon.svg",
  },
  {
    title: "Gallery",
    route: "/gallery",
    icon: "/gallery-icon.svg",
  },
];

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <nav className="absolute z-50 w-full bg-transparent">
        <div className="max-w-[1200px] mx-auto px-2 py-1">
          <div className="flex items-center justify-between py-[16px] md:py-[16px] md:px-6 lg:px-[40px] relative">
            <Link href="/" className="text-white font-bold text-xl">
              <Image
                src={"/mava-logo9 1.svg"}
                alt="Mava logo"
                width={156}
                height={43}
                className="p-0"
              />
            </Link>
            <div className="text-white font-bold text-[13px] gap-6 hidden lg:flex items-center">
              {NAVBAR_LINKS.map((link, index) => {
                const isActive = pathname === link.route;
                return (
                  <div key={index} className="relative">
                    {isActive && (
                      <div className="absolute top-0 left-5 max-w-3/4 mx-auto w-full h-[2px] bg-gradient-to-r from-transparent via-[#75FF8C] to-transparent rounded-full z-40" />
                    )}
                    <Link
                      href={link.route}
                      className={`hover:text-[#83CD20] transition-colors font-manrope font-normal flex items-center text-[13px] text-[#DBE4C4] ${
                        isActive
                          ? "border-[#164623] bg-[#0D4A06] shadow-md  py-3 px-6 h-fit rounded-full"
                          : ""
                      }`}
                    >
                      <Image
                        src={link.icon}
                        alt={`${link.title} icon`}
                        width={12}
                        height={12}
                        className="inline mr-2"
                      />
                      {link.title}
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="hidden lg:flex w-fit relative">
              <div className="absolute top-0 left-5 max-w-3/4 mx-auto w-full h-[2px] bg-gradient-to-r from-transparent via-[#75FF8C] to-transparent rounded-full z-40" />

              <Link
                href="/contact-us"
                className="font-jakarta border border-[#164623] bg-[#0D4A06] shadow-lg text-[#DBE4C4] py-4 px-8 h-fit font-semibold text-xs flex items-center rounded-full relative z-20"
              >
                <Image
                  src="/contact-us-icon.svg"
                  alt="contact icon"
                  width={14}
                  height={14}
                  className="inline mr-1"
                />
                Contact Us
              </Link>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex items-center shadow-none pr-4"
            >
              {isMenuOpen ? (
                <X className="text-[#83CD20] h-8 w-8" />
              ) : (
                <AlignJustify className="text-[#83CD20] h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <MobileNav
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        NAVBAR_LINKS={NAVBAR_LINKS}
      />
    </>
  );
};

export default MainHeader;
