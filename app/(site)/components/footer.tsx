import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getSocialMediaLinks } from "@/sanity/lib/sanity-utils";
import { social } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "Our Story", href: "/about-us" },
      { name: "PFO's Legacy", href: "/pfo-legacy" },
      { name: "Gallery", href: "/gallery" },
      { name: "Merch Store", href: "/store" },
      { name: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "More",
    links: [
      { name: "Academy", href: "/" },
      { name: "WorkShops", href: "/workshops" },
      { name: "Rent our studio", href: "/" },
      { name: "FAQs", href: "/about-us/#faq" },
    ],
  },
];

const Footer = async () => {
  const socialLinks: social[] = await getSocialMediaLinks();
  // console.log(socialLinks);
  return (
    <footer className="bg-[#001B13] py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 font-jakarta">
        {/* Main Footer Content */}
        <div className="w-full flex flex-col lg:flex-row justify-between gap-8 text-white">
          {/* Brand Section */}
          <div className="w-full lg:max-w-[303px] border border-white/30 py-6 px-6 relative space-y-6 rounded-2xl backdrop-blur-lg bg-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 font-poppins">
                <Image
                  src="/Profile Picture.png"
                  alt="Mava logo"
                  width={40}
                  height={40}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="font-medium text-sm">Explore MAVA</p>
                  <p className="text-xs text-gray-300">@exploremava</p>
                </div>
              </div>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/ph_twitter-logo-fill.png"
                  alt="twitter icon"
                  width={20}
                  height={20}
                />
              </Link>
            </div>

            <p className="text-lg leading-relaxed ">
              Bridging the gap between visual skill acquisition and resources is
              our top priority.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-24">
            {footerLinks?.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-extrabold text-lg text-[#83CD20]">
                  {section.title}
                </h3>
                <div className="space-y-2">
                  {section?.links?.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      className="block hover:text-[#83CD20] transition-colors duration-200 text-base"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Subscribe Section */}
          <div className="space-y-6 text-white w-full max-w-[388px] mt-3">
            <h2 className="font-extrabold text-lg md:text-xl">
              Subscribe for gems and love notes.
            </h2>

            {/* Name Input */}
            <div className="relative">
              <div className="bg-[#83CD20] w-[39px] h-[40px] rounded-full flex items-center justify-center absolute left-1.5 top-1/2 -translate-y-1/2 z-10">
                <Image
                  src="/user.svg"
                  alt="user avatar"
                  width={20}
                  height={20}
                />
              </div>
              <Input
                type="text"
                placeholder="Name"
                className="pl-16 pr-4 py-3.5 h-fit rounded-full border border-white/30 bg-transparent text-white placeholder:text-gray-400 focus-visible:ring-[1px] focus:ring-1 focus:ring-[#83CD20] focus:border-[#83CD20] transition-all"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <div className="bg-[#83CD20] w-[39px] h-[40px] rounded-full flex items-center justify-center absolute left-1.5 top-1/2 -translate-y-1/2 z-10">
                <Image
                  src="/Vector.svg"
                  alt="user avatar"
                  width={20}
                  height={20}
                />
              </div>
              <Input
                type="email"
                placeholder="Email address"
                className="pl-16 pr-4 py-3.5 rounded-full h-fit border border-white/30 bg-transparent text-white placeholder:text-gray-400 focus-visible:ring-[1px] focus:ring-1 focus:ring-[#83CD20] focus:border-[#83CD20] transition-all"
              />
            </div>

            {/* Subscribe Button */}
            <Button className="w-full bg-[#83CD20] hover:bg-[#75B81C] text-black font-semibold py-3 px-5 h-fit rounded-full text-base transition-colors">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#3E524C] mt-10 pt-6 flex flex-col sm:flex-row justify-between md:items-center gap-4">
          <div className="flex items-center gap-2 text-white">
            <Image
              src="/mava-logo5.png"
              alt="Mava logo"
              width={34}
              height={34}
            />
            <span className="font-medium font-poppins">MAVA, 2025.</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks?.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src={
                    social.platform === "instagram"
                      ? "/Instagram.svg"
                      : social.platform === "twitter"
                        ? "/Twitter.svg"
                        : "/Facebook.svg"
                  }
                  alt={`${social.platform} icon`}
                  width={40}
                  height={40}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
