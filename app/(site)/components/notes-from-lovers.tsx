"use client";
import React from "react";
import ReusableTitle from "./reusable-title";
import { notes } from "@/types/project";
import { SkeletonCard } from "./skeleton-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const titleData = {
  title: "WALL OF LOVE",
  textColor: "[#034833]",
  arrowLeft: "zz-g-left.png",
  arrowRight: "zz-g-right.png",
};

const NotesFromLovers = ({ notesFromLovers }: { notesFromLovers: notes[] }) => {
  return (
    <section className="py-5 lg:py-10">
      <div className="max-w-[1200px] mx-auto px-4 space-y-6 lg:space-y-10">
        <div data-aos="fade-up" className="text-center space-y-4">
          <div className="text-center w-full flex justify-center items-center">
            <ReusableTitle {...titleData} />
          </div>
          <h2 className="font-manrope text-2xl lg:text-[40px] font-bold text-[#034833]">
            Sweet notes from PFO’s lovers.
          </h2>
        </div>

        <div className="w-full md:hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            className="w-full"
          >
            {notesFromLovers?.length > 0 ? (
              notesFromLovers?.map((note, index) => (
                <SwiperSlide key={index}>
                  <div
                    data-aos="flip-down"
                    className={`font-niconne text-center w-full h-[242px] p-4 flex justify-center items-center shadow-xl text-2xl`}
                    style={{
                      backgroundColor: `#${note.bgColor}`,
                      color: `#${note.textColor}`,
                    }}
                  >
                    <p>{note.text}</p>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <SkeletonCard />
            )}
          </Swiper>
        </div>
        <div className="hidden md:grid grid-cols-3 gap-6">
          {notesFromLovers?.length > 0 ? (
            notesFromLovers?.map((note, index) => (
              <div
                data-aos="flip-down"
                key={index}
                className={`font-niconne text-center w-full h-[242px] p-4 flex justify-center items-center shadow-xl text-2xl lg:text-[32px]`}
                style={{
                  backgroundColor: `#${note.bgColor}`,
                  color: `#${note.textColor}`,
                }}
              >
                <p>{note.text}</p>
              </div>
            ))
          ) : (
            <SkeletonCard />
          )}
        </div>
      </div>
    </section>
  );
};

export default NotesFromLovers;
