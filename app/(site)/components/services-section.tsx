import React from "react";
import Image from "next/image";
import { services } from "../data";
import ReusableTitle from "./reusable-title";
import { Button } from "@/components/ui/button";

const titleData = {
  title: "Big on skills, impact  and community.",
  textColor: "[#034833]",
  arrowRight: "zz-g-right.png",
};

const ServicesSection = ({
  servicesData,
}: {
  servicesData: {
    brochure: { file: { asset: { url: string } }; description: string };
    title: string;
    image: string;
  };
}) => {
  const brochureFile = servicesData.brochure?.file?.asset?.url || null;

  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      className="relative  bg-[#F1F5EB] overflow-hidden mb-8 lg:mb-0 pt-16 lg:pt-32 font-jakarta"
    >
      <div className="absolute inset-0">
        <Image
          src="/about-bg-pattern.png"
          alt="Background pattern"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <ReusableTitle {...titleData} />
            </div>

            <h2 className="text-2xl md:text-6xl max-w-sm font-bold text-[#034833] leading-tight">
              {servicesData.title}
            </h2>

            {brochureFile ? (
              <a href={brochureFile} target="_blank" rel="noopener noreferrer">
                <Button className="inline-flex  items-center gap-3 px-7.5 py-3 md:py-5 h-fit border border-[#034833] text-[#034833] rounded-full hover:bg-[#034833] hover:text-white transition-colors group">
                  <span className="font-semibold text-sm">
                    Download Brochure
                  </span>
                  <Image
                    src="/arrow-right-g.png"
                    alt="Arrow"
                    width={14}
                    height={14}
                    className="group-hover:filter group-hover:brightness-0 group-hover:invert transition-all"
                  />
                </Button>
              </a>
            ) : (
              <Button className="inline-flex items-center gap-3 px-7.5 py-3 md:py-5 h-fit border border-[#034833] text-[#034833] rounded-full cursor-not-allowed">
                <span className="font-semibold text-sm">
                  Brochure Coming Soon
                </span>
                <Image
                  src="/arrow-right-g.png"
                  alt="Arrow"
                  width={14}
                  height={14}
                  className=""
                />
              </Button>
            )}
          </div>

          <div className="relative">
            <div className="relative rounded-xl lg:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={servicesData.image}
                alt="Students with international flags"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
              />
            </div>

            {services?.map((service) => (
              <div
                key={service.id}
                className={`absolute service-${service.id} bg-white rounded-[10px] shadow-lg px-2 lg:px-[15px] py-2.5 flex items-center gap-1 lg:gap-3 hover:scale-105 transition-transform duration-300 w-fit`}
              >
                <div className="w-6 h-6 lg:w-6 lg:h-6 rounded-lg bg-[#034833]/10 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={service.icon}
                    alt={`${service.name} icon`}
                    width={20}
                    height={20}
                  />
                </div>
                <span className="text-[#034833] font-semibold text-xs lg:text-sm whitespace-nowrap">
                  {service.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
