"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

interface PropositionItem {
  icon: string;
  title: string;
  description: string;
}

const ValueProposition = ({
  propositionData,
}: {
  propositionData: PropositionItem[];
}) => {
  return (
    <section className="max-w-[1200px] mx-auto flex flex-col items-center justify-center">
      <div className="w-full px-6 py-8 lg:py-16 font-jakarta">
        {/* Swiper for mobile only */}
        <div className="lg:hidden">
          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView="auto"
            spaceBetween={12}
            freeMode={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={6000}
            loop={true}
            className="w-full h-full"
          >
            {propositionData?.map((item, index) => (
              <SwiperSlide key={index} style={{ width: 268 }}>
                <div
                  data-aos="fade-right"
                  className="flex flex-col gap-4 border border-[#83CD20] py-5 px-2 rounded-[20px] w-[268px] flex-shrink-0 h-[250px]"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    height={56}
                    width={56}
                  />
                  <h3 className="text-[25px] font-semibold text-[#034833]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#023123]">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden lg:grid grid-cols-4 min-w-max gap-2">
          {propositionData?.map((item, index) => (
            <div
              data-aos="fade-right"
              key={index}
              className="flex flex-col gap-4 border border-[#83CD20] p-5 rounded-[20px] w-[268px] flex-shrink-0"
            >
              <Image src={item.icon} alt={item.title} height={56} width={56} />
              <h3 className="text-[25px] font-semibold text-[#034833]">
                {item.title}
              </h3>
              <p className="text-sm text-[#023123]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
