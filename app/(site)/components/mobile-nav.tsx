import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MobileNav = ({ setIsMenuOpen, isMenuOpen, NAVBAR_LINKS }: any) => {
  const pathname = usePathname();
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-[#001B13] z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#83CD20]/20">
          <Link href="/" onClick={closeMenu}>
            <Image
              src={"/mava-logo.png"}
              alt="Mava logo"
              width={120}
              height={33}
            />
          </Link>
          <button
            onClick={closeMenu}
            className="text-[#83CD20] hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col px-6 py-8 space-y-6 flex-grow">
          {NAVBAR_LINKS.map((link: any, index: number) => {
            const isActive = pathname === link.route;
            return (
              <div key={index} className="space-y-2">
                <Link
                  href={link.route}
                  onClick={closeMenu}
                  className="font-manrope text-white hover:text-[#83CD20] transition-colors text-lg font-semibold flex items-center group"
                >
                  <span className="mr-2 w-2 h-2 bg-[#83CD20] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
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
          <Link href="/contact-us" onClick={closeMenu}>
            <Button className="font-plusJakarta w-full md:w-fit  bg-[#83CD20] hover:bg-[#83CD20]/90 text-[#034833] font-bold py-4 md:px-10 rounded-[27px] transition-colors">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
