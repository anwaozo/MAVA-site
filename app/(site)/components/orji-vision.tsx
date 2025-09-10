import { WhoWeAre } from "@/types/project";
import Image from "next/image";
import React from "react";

const OrjiVision = ({ pfoVisionData }: { pfoVisionData: WhoWeAre }) => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-8 lg:py-16">
      <div className="flex flex-col lg:flex-row justify-between items-center font-jakarta">
        <div data-aos="fade-right" className="space-y-6 max-w-[562px]">
          <h2 className="text-[#034833] font-bold text-2xl md:text-[50px]">
            {pfoVisionData.title}
          </h2>
          <Image src={"/Frame.png"} alt="quote icon" width={83} height={68} />
          <div className="text-[#033224] text-lg font-bold space-y-4">
            {pfoVisionData?.paragraphs?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div data-aos="fade-left" className=" max-w-[455px]">
          <Image
            src={pfoVisionData.image}
            alt="A picture of Orji Precious"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default OrjiVision;
