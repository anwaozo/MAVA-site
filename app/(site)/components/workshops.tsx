"use client";
import ReusableTitle from "./reusable-title";
import Image from "next/image";
import { workshopImages } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const titleData = {
  title: "The vision drives us",
  textColor: "[#034833]",
  arrowLeft: "zz-g-left.png",
  arrowRight: "zz-g-right.png",
};

const Workshops = ({
  workshopSectionData,
}: {
  workshopSectionData: {
    description: string;
    images: { src: string; alt: string; description: string }[];
  };
}) => {
  return (
    <section data-aos="fade-up" className="py-5 lg:py-10">
      <div className="max-w-[1200px] mx-auto font-jakarta px-4">
        <div className="max-w-[1046px] mx-auto space-y-6">
          <ReusableTitle {...titleData} />
          <h2 className="text-[#034833] text-2xl lg:text-[50px] font-bold leading-tight">
            {workshopSectionData.description}
          </h2>
        </div>

        <div className="mt-8 lg:mt-12 space-y-4 md:hidden h-[400px] w-full">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            {workshopSectionData?.images?.map((img, idx) => (
              <SwiperSlide key={idx} className="relative w-full h-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="rounded-[16px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-8 lg:mt-12 space-y-4 hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4">
          {workshopSectionData?.images?.map((img, idx) => (
            <div key={idx} className="w-full h-[300px] lg:h-[500px] relative">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="rounded-[16px] object-cover"
              />
            </div>
          ))}
          {/* <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0">
              <Image
                src={workshopImages[0].src}
                alt={workshopImages[0].alt}
                width={330}
                height={400}
                className="w-full rounded-[50px]  h-[250px] md:h-[300px] lg:h-[400px] object-cover"
              />
            </div>
            <div className="flex-shrink-0">
              <Image
                src={workshopImages[1].src}
                alt={workshopImages[1].alt}
                width={260}
                height={400}
                className="w-full rounded-[50px]  h-[250px] md:h-[300px] lg:h-[400px] object-cover"
              />
            </div>
            <div className="flex-grow">
              <Image
                src={workshopImages[2].src}
                alt={workshopImages[2].alt}
                width={461}
                height={400}
                className="w-full rounded-[50px] h-[250px] md:h-[300px] lg:h-[400px] object-cover "
              />
            </div>
          </div> */}
          {/* 
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <Image
                src={workshopImages[3].src}
                alt={workshopImages[3].alt}
                width={461}
                height={350}
                className="w-full rounded-[50px] h-[200px] md:h-[250px] lg:h-[450px] object-cover "
              />
            </div>
            <div className="flex-shrink-0">
              <Image
                src={workshopImages[4].src}
                alt={workshopImages[4].alt}
                width={258}
                height={350}
                className="w-full rounded-[50px]  h-[200px] md:h-[250px] lg:h-[450px] object-cover"
              />
            </div>
            <div className="flex-shrink-0">
              <Image
                src={workshopImages[5].src}
                alt={workshopImages[5].alt}
                width={211}
                height={350}
                className="w-full rounded-[50px]  h-[200px] md:h-[250px] lg:h-[450px] object-cover"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
