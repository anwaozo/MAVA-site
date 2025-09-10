"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AlignJustify, X } from "lucide-react";
import { usePathname } from "next/navigation";
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

export default function SubHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const pathname = usePathname();
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        activeDropdown !== null &&
        dropdownRefs.current[activeDropdown] &&
        !dropdownRefs.current[activeDropdown]?.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  return (
    <>
      <header
        data-aos={"fade-up"}
        className="fixed top-0 left-0 right-0 z-50 bg-transparent"
      >
        <nav className="max-w-[800px] mx-auto px-2 py-3">
          <div className="flex items-center justify-between py-[12px] md:py-[16px] px-4 lg:px-[40px] relative">
            <div className="absolute inset-0 bg-[#033224] backdrop-blur-md -z-10 rounded-[50px]"></div>
            <Link href="/" className="text-white font-bold text-xl">
              <Image
                src={"/mava-logo9 1.svg"}
                alt="Mava logo"
                width={156}
                height={43}
              />
            </Link>
            <div className="text-white font-bold text-[13px] space-x-6 hidden md:flex">
              {NAVBAR_LINKS.map((link, index) => {
                const isActive = pathname === link.route;

                return (
                  <div
                    key={index}
                    className="relative"
                    ref={(el) => {
                      dropdownRefs.current[index] = el;
                    }}
                  >
                    <Link
                      href={link.route}
                      className={`hover:text-[#83CD20] transition-colors font-manrope ${
                        isActive ? "text-[#83CD20]" : "text-white"
                      }`}
                    >
                      {link.title}
                      {isActive && (
                        <Image
                          src={"/dot-icon.png"}
                          alt={`current page indicator icon`}
                          width={6}
                          height={6}
                          className="inline ml-1"
                        />
                      )}
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="hidden md:flex">
              <Link
                href={"/contact-us"}
                className="font-jakarta border border-[#83CD20] bg-[#08563F]/47 text-white py-4 px-8 h-fit font-semibold text-[13px] rounded-[27px] hover:bg-[#83CD20] transition-colors"
              >
                Contact Us
              </Link>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center z-60 relative pr-4"
            >
              {isMenuOpen ? (
                <X className="text-[#83CD20] h-8 w-8" />
              ) : (
                <AlignJustify className="text-[#83CD20] h-8 w-8" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <MobileNav
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        NAVBAR_LINKS={NAVBAR_LINKS}
      />
    </>
  );
}
