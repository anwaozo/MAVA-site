"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Title from "./title";
import { legacy } from "@/types/project";
import { SkeletonCard } from "./skeleton-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Legacy = ({ legacyData }: { legacyData: legacy[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  if (!legacyData || legacyData.length === 0) return <SkeletonCard />;

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleDotClick = (idx: number) => {
    swiperRef.current?.slideTo(idx);
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="py-10 lg:py-20"
    >
      <div className="max-w-[1200px] mx-auto bg-[#F1F5EB] lg:rounded-[40px] py-6 px-4 lg:p-16 relative font-jakarta overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={400}
            className="w-full"
            navigation={{
              nextEl: ".legacy-next",
              prevEl: ".legacy-prev",
            }}
          >
            {legacyData?.map((item, idx) => (
              <SwiperSlide key={item._id || idx}>
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                  {/* Text Section */}
                  <div className="flex-1 h-[562px] flex justify-between flex-col">
                    <div>
                      <Title text="Honouring the one who shaped lives" />
                      <h2 className="text-2xl lg:text-[40px] font-bold text-[#034833] mb-10 transition-all duration-500 ease-out">
                        {item.title}
                      </h2>
                    </div>
                    <div className="bg-white shadow-xl rounded-2xl py-6 px-6 md:py-10 lg:pr-2 max-w-[800px] lg:max-w-[620px] lg:-mr-28 xl:-mr-44 z-50 font-jakarta transition-all duration-500 ease-out">
                      <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
                        <div className="bg-[#83CD20] rounded-full p-4 min-w-[56px] w-fit min-h-[56px] flex items-center justify-center">
                          <Image
                            src="/050-worldwide.png"
                            alt="earth icon"
                            width={40}
                            height={40}
                          />
                        </div>
                        <p className="text-[#023123] text-2xl lg:text-[24px] leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                    {/* Custom Dots */}
                    <div className="hidden md:flex gap-2 mt-8">
                      {[...Array(legacyData.length)].map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handleDotClick(index)}
                          className={`w-[20px] h-3 rounded-full transition-all ${
                            index === currentIndex
                              ? "bg-[#023123] w-[35px]"
                              : "bg-[#71BD00]"
                          }`}
                          aria-label={`Go to item ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Image Section */}
                  <div className="lg:flex-1 relative w-full lg:max-w-[410px] xl:max-w-[500px] h-[562px] rounded-2xl flex items-center justify-center">
                    <div className="w-full h-full transition-all duration-500 ease-out">
                      <Image
                        src={item.image}
                        alt={item.alt || "legacy image"}
                        fill
                        className="rounded-2xl object-cover"
                        priority={idx === 0}
                      />
                    </div>
                    {/* Arrows */}
                    <div className="absolute top-8 hidden md:flex right-1/2 lg:right-[30%] xl:right-[35%] gap-3 z-10">
                      <Button className="legacy-prev w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#294207] bg-[#294207] hover:bg-[#294207]/70 hover:text-white flex items-center justify-center">
                        <Image
                          src="/arrow-left.png"
                          alt="prev"
                          width={14}
                          height={16}
                        />
                      </Button>
                      <Button className="legacy-next w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#294207] text-white hover:bg-[#294207]/70 flex items-center justify-center">
                        <Image
                          src="/arrow-right-w.png"
                          alt="next"
                          width={14}
                          height={16}
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
