"use client";

import React, { useState, useEffect } from "react";
import ReusableTitle from "./reusable-title";
import Image from "next/image";
import SliderNavigation from "./reusable-navigation";
import "./testimonials-swipe.css";
import { testimonial } from "@/types/project";
import { SkeletonCard } from "./skeleton-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const titleData = {
  title: "Testimonials",
  textColor: "[#034833]",
  arrowLeft: "zz-g-left.png",
  arrowRight: "zz-g-right.png",
};

const TestimonialsSection = ({
  testimonialsData,
}: {
  testimonialsData: testimonial[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    setIsAnimating(true);

    // First set animating state to hide content
    setTimeout(() => {
      // Then update the content
      setCurrentIndex((prev) =>
        prev === testimonialsData.length - 1 ? 0 : prev + 1
      );

      // Give a moment for the DOM to update before triggering animation
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 400);
  };

  const prevSlide = () => {
    setIsAnimating(true);

    // First set animating state to hide content
    setTimeout(() => {
      // Then update the content
      setCurrentIndex((prev) =>
        prev === 0 ? testimonialsData.length - 1 : prev - 1
      );

      // Give a moment for the DOM to update before triggering animation
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 400);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;

    setIsAnimating(true);
    setIsAutoPlaying(false);

    // First set animating state to hide content
    setTimeout(() => {
      // Then update the content
      setCurrentIndex(index);

      // Give a moment for the DOM to update before triggering animation
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);

      setTimeout(() => setIsAutoPlaying(true), 4000);
    }, 400);
  };

  // Also handle keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isAnimating) {
        if (e.key === "ArrowLeft") {
          prevSlide();
        } else if (e.key === "ArrowRight") {
          nextSlide();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isAnimating]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevClick = () => {
    if (!isAnimating) {
      prevSlide();
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 4000);
    }
  };

  const handleNextClick = () => {
    if (!isAnimating) {
      nextSlide();
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 4000);
    }
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Touch swipe functionality
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Required minimum distance between touch start and touch end to be detected as swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setIsAutoPlaying(false);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    // Only slide if we're not already animating
    if (!isAnimating) {
      if (isLeftSwipe) {
        nextSlide();
      } else if (isRightSwipe) {
        prevSlide();
      }
    }

    // Reset values
    setTouchStart(null);
    setTouchEnd(null);

    // Resume auto-playing after some time
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Get previous, current, and next testimonial indices
  const getPrevIndex = () =>
    currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1;
  const getNextIndex = () =>
    currentIndex === testimonialsData.length - 1 ? 0 : currentIndex + 1;

  const isLoading = !testimonialsData || testimonialsData.length === 0;

  return (
    <section
      data-aos="zoom-up"
      className="py-6 lg:py-8 lg:px-4 relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto bg-[#F1F5EB] py-16 lg:px-4 lg:rounded-[50px] font-jakarta">
        {/* Header */}
        <div className="lg:ml-14 mb-12 px-2">
          <ReusableTitle {...titleData} />
          <h2 className="text-2xl md:text-[40px] font-bold text-[#034833] mt-6">
            Voices that speak for us.
          </h2>
        </div>
        
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="absolute hidden lg:block left-0 top-0 bottom-0 w-36 bg-gradient-to-r from-[#F1F5EB] via-[#F1F5EB] to-transparent z-10 pointer-events-none" />
          <div className="absolute hidden lg:block right-0 top-0 bottom-0 w-36 bg-gradient-to-l from-[#F1F5EB] via-[#F1F5EB] to-transparent z-10 pointer-events-none" />

          {/* Mobile Slider */}

          <div className="w-full lg:hidden">
            <Swiper
              modules={[Autoplay, FreeMode]}
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="w-full"
            >
              {testimonialsData?.map((testimonial, idx) => (
                <SwiperSlide key={idx}>
                  <div className="w-full md:max-w-[496px] mx-auto h-full transform scale-100 transition-all duration-300 flex flex-shrink-0">
                    <div className="bg-[#034833] text-white py-8 px-2 md:px-6 md:rounded-md shadow-2xl relative flex flex-col w-full h-[380px]">
                      <div className="mb-6">
                        <Image
                          src={"/Group (2).png"}
                          alt="quote icon"
                          width={41}
                          height={23}
                        />
                      </div>
                      <div className="text-white text-base text-justify leading-relaxed mb-6 h-[180px] overflow-hidden">
                        <div>{testimonial.quote}</div>
                      </div>
                      <div className="flex items-center gap-3 mt-auto">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                          <Image
                            src={"/avatar-img.png"}
                            alt="quote icon"
                            width={45}
                            height={46}
                          />
                        </div>
                        <span className="font-semibold text-white text-lg text-justify truncate max-w-[250px]">
                          {testimonial.author}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Slider */}

          <div className="hidden lg:flex items-stretch justify-center gap-4 overflow-hidden swipeable">
            {/* Previous Card */}
            {isLoading ? (
              <SkeletonCard />
            ) : (
              <div className="w-[446px] transform scale-95 transition-all duration-300 hidden lg:flex flex-shrink-0">
                <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col w-full h-[380px]">
                  <div className="mb-6">
                    <Image
                      src={"/Group (2).png"}
                      alt="quote icon"
                      width={41}
                      height={23}
                    />
                  </div>
                  <div className="text-gray-600 text-lg leading-relaxed mb-6 h-[180px] line-clamp-4 overflow-hidden">
                    {testimonialsData[getPrevIndex()]?.quote}
                  </div>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Image
                        src={"/avatar-img.png"}
                        alt="quote icon"
                        width={45}
                        height={46}
                      />
                    </div>
                    <span className="font-semibold text-[#034833] text-sm truncate max-w-[200px]">
                      {testimonialsData[getPrevIndex()]?.author}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Current Card (Center - Full visible) */}
            {isLoading ? (
              <SkeletonCard />
            ) : (
              <div className="md:max-w-[496px] w-full h-full transform scale-100 transition-all duration-300 flex flex-shrink-0">
                <div className="bg-[#034833] text-white py-8 px-2 md:px-8 md:rounded-2xl shadow-2xl relative flex flex-col w-full h-[380px]">
                  <div className="mb-6">
                    <Image
                      src={"/Group (2).png"}
                      alt="quote icon"
                      width={41}
                      height={23}
                    />
                  </div>
                  <div className="text-white text-base md:text-lg leading-relaxed mb-6 h-[180px] overflow-hidden text-justify">
                    <div
                      className={
                        isAnimating ? "pre-animation" : "opacity-animation"
                      }
                    >
                      {testimonialsData[currentIndex]?.quote}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Image
                        src={"/avatar-img.png"}
                        alt="quote icon"
                        width={45}
                        height={46}
                      />
                    </div>
                    <span
                      className={`font-semibold text-white text-lg truncate max-w-[250px] ${
                        isAnimating ? "pre-animation" : "opacity-animation"
                      }`}
                    >
                      {testimonialsData[currentIndex]?.author}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Next Card  */}
            {isLoading ? (
              <SkeletonCard />
            ) : (
              <div className="w-[446px] transform scale-95 transition-all duration-300 hidden lg:flex flex-shrink-0">
                <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col w-full h-[380px]">
                  <div className="mb-6">
                    <Image
                      src={"/Group (2).png"}
                      alt="quote icon"
                      width={41}
                      height={23}
                    />
                  </div>
                  <div className="text-gray-600 text-lg leading-relaxed mb-6 h-[180px] line-clamp-4 overflow-hidden">
                    {testimonialsData[getNextIndex()]?.quote}
                  </div>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Image
                        src={"/avatar-img.png"}
                        alt="quote icon"
                        width={45}
                        height={46}
                      />
                    </div>
                    <span className="font-semibold text-[#034833] text-sm truncate max-w-[200px]">
                      {testimonialsData[getNextIndex()]?.author}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* ) : (
          <SkeletonCard />
        )} */}

        <SliderNavigation
          totalItems={testimonialsData.length}
          currentIndex={currentIndex}
          onSelectItem={goToSlide}
          onPrevious={handlePrevClick}
          onNext={handleNextClick}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
