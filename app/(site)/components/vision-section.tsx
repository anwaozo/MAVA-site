import React from "react";
import ReusableTitle from "./reusable-title";
import Image from "next/image";
import { ourVision } from "@/types/project";

const titleData = {
  title: "our vision",
  textColor: "white",
  arrowLeft: "zz-arrow.png",
  arrowRight: "zz-arrow-right.png",
};

const VisionSection = ({ visionContent }: { visionContent: ourVision }) => {
  return (
    <section data-aos="fade-up" className="py-5 lg:py-10 lg:px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative font-manrope flex flex-col lg:flex-row justify-between items-stretch bg-[#023123] lg:rounded-[50px] overflow-hidden gap-7 lg:gap-0 lg:pl-2 lg:h-[600px]">
          <div className="w-full lg:w-1/2 max-w-[600px] lg:max-w-none pl-4 lg:pl-16 lg:p-16 z-10 flex flex-col justify-center">
            <div className="my-10 lg:my-0">
              <ReusableTitle {...titleData} />
            </div>
            <div className="mt-8 space-y-6">
              <h2 className="text-2xl md:text-4xl lg:text-6xl text-white font-bold">
                {visionContent.title}
              </h2>
              <p className="text-gray-200 text-base md:text-lg">
                {visionContent.description}
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-[300px] lg:h-full relative">
            <div className="absolute left-0 top-0 bottom-0 w-full h-24 lg:h-full lg:w-32 z-10 bg-gradient-to-b lg:bg-gradient-to-r from-[#023123] to-transparent" />
            <Image
              src={visionContent.image}
              alt="Our vision for photography education"
              fill
              className="lg:rounded-b-[30px] lg:rounded-r-[50px] lg:rounded-bl-none object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
