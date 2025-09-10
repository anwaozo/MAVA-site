import Image from "next/image";
import React from "react";
import { CoreValuesSection } from "@/types/project";

const CoreValues = ({
  coreValuesData,
}: {
  coreValuesData: CoreValuesSection;
}) => {
  function formatCoreValueNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
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
        <div className="relative z-10 space-y-16.5 md:pl-12">
          <div className="inline-flex items-center gap-3">
            <Image src={"/object.png"} alt="icon" height={41} width={48} />{" "}
            <h3 className="text-[#034833] font-bold text-2xl md:text-[50px] ">
              Our core values.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:items-center gap-6 lg:gap-4 w-full">
            {coreValuesData?.values?.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center h-full w-full"
              >
                <div className="bg-[#83CD20] w-2/3 md:w-[108px] h-[108px] -mr-8 z-20 py-2 px-2 rounded-[10px] flex flex-col gap-2">
                  <span className="text-3xl font-bold text-white font-jakarta text-left">
                    {formatCoreValueNumber(item.number)}
                  </span>
                  <div className="flex items-end justify-end">
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      height={54}
                      width={54}
                    />
                  </div>
                </div>
                <div className="bg-white h-[117px] w-3/3 md:w-[203px] pl-10 flex items-center rounded-[20px]">
                  <h3 className="text-lg font-semibold text-[#034833]">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
