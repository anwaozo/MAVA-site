import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { HeroImagesInner, HeroImagesOuter } from "../data";
import Image from "next/image";
import ReusableButton from "./reusable-button";

export function HeroSection() {
  return (
    <section
      style={{
        backgroundImage: `url('/hero-banner.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-gradient-to-br from-[#023123] to-[#112328] text-white pb-20 px-6 relative overflow-hidden min-h-screen flex items-center justify-center "
    >
      <div className="max-w-[1200px] min-w-[1024px] md:min-w-fit mx-auto space-y-12">
        {" "}
        {/* Orbital paths and avatars */}
        {/* <div className="absolute inset-0 flex items-center justify-center xl:pt-56 2xl:pt-100 ">
          <div className="relative orbital-container xl:mt-40 2xl:mt-80 min-w-[550px] md:min-w-[1100px] lg:min-w-fit mx-auto">
            {/* Dotted orbital paths */}
        {/* <div className="orbital-ring orbital-ring-outer"></div>
            <div className="orbital-ring orbital-ring-inner"></div>  */}
        {/* Outer orbit avatars
            {(Array.isArray(HeroImagesOuter) ? HeroImagesOuter : []).map((image, index) => (
              <Avatar
                key={`outer-${index}`}
                className="avatar-orbital avatar-outer"
                style={{
                  animationDelay: `${-(
                    index *
                    (40 / HeroImagesOuter.length)
                  )}s`,
                }}
              >
                <AvatarImage
                  src={image.path || "/placeholder.svg"}
                  alt={image.alt}
                  className="object-cover"
                />
                <AvatarFallback className="bg-amber-100 text-amber-800 font-bold">
                  {image.alt}
                </AvatarFallback>
              </Avatar>
            ))}

            {/* Inner orbit avatars */}
  {/* {(Array.isArray(HeroImagesInner) ? HeroImagesInner : []).map((image, index) => (
              <Avatar
                key={`inner-${index}`}
                className="avatar-orbital avatar-inner"
                style={{
                  animationDelay: `${-(
                    index *
                    (35 / HeroImagesInner.length)
                  )}s`,
                }}
              >
                <AvatarImage
                  src={image.path || "/placeholder.svg"}
                  alt={image.alt}
                  className="object-cover"
                />
                <AvatarFallback className="bg-amber-100 text-amber-800 font-bold">
                  {image.alt}
                </AvatarFallback>
              </Avatar>
            ))}
          </div> */}
        {/* </div> */}
        {/* Centered content */}
        <div className="relative z-10 text-center flex flex-col justify-center max-w-[300px] md:max-w-4xl mx-auto px-4 xl:mt-80">
          <h1 className="font-jakarta text-xl md:text-3xl  xl:4xl font-semibold leading-tight">
            A visual academy founded on
          </h1>
          <h2 className="text-[#83CD20] font-galindo text-4xl md:text-8xl xl::text-9xl font-bold mb-3">
            Community
          </h2>

          {/* Bottom Cards */}
          <div className="font-urbanist flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-12">
            {/* Students Count Card */}
            <div className="bg-[#F8F9F9] backdrop-blur-sm rounded-[13px] px-4 py-[3px] h-fit w-full md:w-fit flex items-center gap-3 shadow-lg">
              <div className="flex -space-x-4">
                <Avatar className="w-8 h-8 bg-white">
                  <AvatarImage src="/Ellipse 883.png" />
                  <AvatarFallback className="text-xs">U1</AvatarFallback>
                </Avatar>
                <Avatar className="w-8 h-8 bg-white">
                  <AvatarImage src="/Ellipse 884.png" />
                  <AvatarFallback className="text-xs">U2</AvatarFallback>
                </Avatar>
                <Avatar className="w-8 h-8 bg-white">
                  <AvatarImage src="/Ellipse 885.png" />
                  <AvatarFallback className="text-xs">U3</AvatarFallback>
                </Avatar>
                <Avatar className="w-8 h-8 bg-white">
                  <AvatarImage src="/Ellipse 886.png" />
                  <AvatarFallback className="text-xs">U3</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-left">
                <div className="font-semibold text-[#0A1519] text-sm sm:text-base">
                  500+
                </div>
                <div className="text-[#0A1519]/70 text-xs sm:text-sm">
                  Photography Students
                </div>
              </div>
            </div>

            {/* Download Button */}
            <ReusableButton text="Download Brochure" />
          </div>
        </div>
      </div>
    </section>
  );
}
