import Image from "next/image";
import React from "react";
import ReusableTitle from "./reusable-title";
import { type WhoWeAre } from "@/types/project";

const titleData = {
  title: "An academy that began with a dream.",
  textColor: "[#034833]",
  arrowLeft: "zz-g-left.png",
  arrowRight: "zz-g-right.png",
};

const WhoWeAre = ({ whoWeAreData }: { whoWeAreData: WhoWeAre }) => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-8 lg:py-16">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div data-aos="fade-right" className="max-w-[460px] mx-auto">
          <Image
            src={whoWeAreData.image}
            alt="mava logo"
            height={460}
            width={459}
          />
        </div>
        <div data-aos="fade-left" className="max-w-[532px] mx-auto space-y-6">
          <ReusableTitle {...titleData} />
          <h2 className="font-manrope text-2xl md:text-[60px] font-bold text-[#034833]">
            {whoWeAreData.title}
          </h2>
          <div className="space-y-4 text-[15px] font-medium text-[#033224] font-jakarta">
            {whoWeAreData?.paragraphs?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
