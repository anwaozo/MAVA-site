import Image from "next/image";
import React from "react";
import Title from "./title";

const ShapingLivesSection = ({
  shapingLivesData,
}: {
  shapingLivesData: { title: string; description: string };
}) => {
  return (
    <section
      data-aos="zoom-in"
      data-aos-anchor-placement="top-bottom"
      className="py-8 lg:py-16"
    >
      <div className="relative overflow-hidden bg-[#F1F5EB] max-w-[1200px] mx-auto py-10 px-4 lg:rounded-[50px] font-jakarta">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/OBJECTS.png"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 space-y-4 lg:space-y-8 md:pl-6">
          <Title text={shapingLivesData.title} />
          <div className="max-w-[1000px] w-full">
            <h3 className="text-[#034833] text-2xl lg:text-[50px] font-bold">
              {shapingLivesData.description}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShapingLivesSection;
