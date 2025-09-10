"use client";
import Image from "next/image";
import ChangingTextAnimation from "./changing-text-animation";
import { HeroCardData } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import type { HeroSection } from "@/types/project";

export default function HeroSection({
  homeHeroContent,
}: {
  homeHeroContent: HeroSection;
}) {
  const formattedTitle = homeHeroContent?.title.replace(",", ",<br />");
  return (
    <section
      // style={{
      //   backgroundImage: `url('/hero-banner.svg')`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      // }}
      className="text-white pb-20 relative overflow-hidden min-h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0">
        <Image
          src={"/hero-banner.svg"}
          alt="hero background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="absolute bottom-0 w-full">
        <Image
          src={"/Rectangle 64.svg"}
          alt="rectangle"
          width={1000}
          height={1000}
          priority
          className="relative object-cover w-full"
        />
      </div>
      <div className="w-full md:max-w-[1200px] mx-auto space-y-20 z-30 mt-40 ">
        <div data-aos={"fade-up"} className=" text-center font-bold w-full">
          <div className="text-4xl md:text-6xl lg:text-[70px] font-urbanist leading-0 md:leading-4 lg:leading-4">
            <h1
              className="leading-10 md:leading-18 lg:leading-22"
              dangerouslySetInnerHTML={{ __html: formattedTitle }}
            />
            <br />
            <div className="text-[#A2DE49] inline-flex ml-8 md:ml-12 items-center flex-col justify-end">
              <div className="h-[50px] flex items-center justify-center min-w-[280px] relative">
                <ChangingTextAnimation words={homeHeroContent?.words || []} />
              </div>
              <Image
                src={"/Line-1.svg"}
                alt="wavy lines"
                width={250}
                height={35}
                className="max-w-[180px] md:max-w-[250px] w-full mt-1 md:mt-6"
              />
            </div>
          </div>
        </div>
        <div className="w-full px-3 md:hidden">
          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView="auto"
            spaceBetween={30}
            freeMode={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={8000}
            loop={true}
            className="w-full"
            style={{ paddingBottom: "8px" }}
          >
            {homeHeroContent?.cards?.map((card, index) => (
              <SwiperSlide key={index} style={{ width: "auto" }} className="">
                <div className="flex items-center flex-row">
                  <div className="bg-white shadow-xl px-2 py-1.5 rounded-xl z-0">
                    <Image
                      src={card.image}
                      alt={`card image`}
                      width={270}
                      height={180}
                      priority
                    />
                    <h3 className="text-base md:text-lg font-urbanist font-semibold text-[#023123] text-center py-3">
                      {card.text}
                    </h3>
                  </div>

                  <div className="bg-[#263B3F] rounded-full px-2.5 py-3.5 h-fit -mx-11 z-50 w-fit absolute">
                    <Image
                      src="/mava-logo5.png"
                      alt="Mava logo"
                      width={34}
                      height={34}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full overflow-x-auto scrollbar-hide px-3 hidden md:block">
          <div className="flex justify-center min-w-max items-center">
            {homeHeroContent?.cards?.map((card, index) => (
              <div key={index} className="flex items-center flex-row">
                <div className="bg-white shadow-xl px-2 py-1.5 rounded-xl">
                  <Image
                    src={card.image}
                    alt={`card image`}
                    width={270}
                    height={180}
                    priority
                  />
                  <h3 className="text-base md:text-lg font-urbanist font-semibold text-[#023123] text-center py-3">
                    {card.text}
                  </h3>
                </div>
                {index < HeroCardData.length - 1 && (
                  <div className="bg-[#263B3F] rounded-full px-2.5 py-3.5 h-fit -mx-3 z-50 w-fit">
                    <Image
                      src="/mava-logo5.png"
                      alt="Mava logo"
                      width={34}
                      height={34}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
