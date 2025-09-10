import Image from "next/image";
import React from "react";

const EmpoweringCreatives = ({
  empoweringCreativesData,
}: {
  empoweringCreativesData: {
    title: string;
    description: string;
    image: string;
    icon: string;
  };
}) => {
  return (
    <section data-aos="fade-up" className="my-5 lg:my-10">
      <div className=" max-w-[1200px] mx-auto overflow-hidden">
        <div className="bg-[#023123] lg:rounded-[20px] font-jakarta flex flex-col lg:flex-row justify-between">
          <div
            data-aos="zoom-up"
            data-aos-duration="3000"
            className="xl:max-w-[680px] lg:max-w-[550px] space-y-6 lg:space-y-0 px-4 lg:px-10 flex flex-col justify-center items-center py-10 lg:py-0"
          >
            <div>
              <div className="bg-[#83CD20] p-3.5 w-fit rounded-full mb-6">
                <Image
                  src={empoweringCreativesData.icon}
                  alt="earth icon"
                  height={35}
                  width={35}
                  className=""
                />
              </div>
              <div className="space-y-4 text-[#F1F5EB]">
                <h2 className="text-2xl md:text-[35px] xl:text-[45px] font-bold">
                  {empoweringCreativesData.title}
                </h2>
                <p className="text-[16px] text-justify lg:leading-4.5 xl:leading-6.5">
                  {empoweringCreativesData.description}
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="h-full"
          >
            <div className="h-full relative ">
              <Image
                src={empoweringCreativesData.image}
                alt="precious and graduates of mava"
                width={1000}
                height={1000}
                priority
                className="object-cover lg:rounded-[20px] lg:rounded-br-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpoweringCreatives;
