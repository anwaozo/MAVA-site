import Image from "next/image";
import React from "react";
import { FeaturesData } from "../data";
import Link from "next/link";
import { FeaturesContent } from "@/types/project";

const FeaturesSection = ({
  featuresContent,
}: {
  featuresContent: FeaturesContent;
}) => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-5 lg:py-8">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-8">
        <div data-aos="fade-right" className="w-full max-w-[600px]">
          <Image
            src={featuresContent?.image}
            alt="mava staffs"
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>
        <div data-aos="fade-left" className=" max-w-[670px]">
          <h2 className="font-manrope font-bold text-[38px] md:text-[50px] text-primary">
            {featuresContent?.title}
          </h2>
          <div className="font-jakarta grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {featuresContent?.items?.map((feature, index) => (
              <div className="flex items-start gap-3" key={index}>
                <Image
                  src={"/check-icon.png"}
                  alt="check icon"
                  width={20}
                  height={14}
                  className="w-5 h-5"
                />
                <div className="-mt-1.5">
                  <h3 className="font-semibold text-lg text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-secondary">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href={"/about-us"}
            className="bg-[#83CD20] mt-8 lg:mt-10 text-white px-7.5 py-4 w-fit h-fit rounded-full flex items-center gap-3 font-jakarta"
          >
            Learn about us
            <Image
              src={"/arrow-right.png"}
              alt="arrow icon"
              width={14}
              height={14}
              className="w-4 h-3"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
