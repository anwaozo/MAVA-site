"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReusableTitle from "./reusable-title";
import { Button } from "@/components/ui/button";
import ReusableButton from "./reusable-button";
import { SkeletonCard } from "./skeleton-card";

// Interface for title data
interface TitleData {
  title: string;
  textColor: string;
  arrowLeft?: string;
  arrowRight?: string;
}

// Interface for card data
interface CardData {
  id: number | string;
  image: string;
  title: string;
  description: string;
  [key: string]: any; // Allow additional properties
}

// Interface for component props
interface ReusableCarouselProps {
  titleData: TitleData;
  title: string;
  cardData: CardData[];
  autoPlayInterval?: number;
  pauseOnInteraction?: number;
  isButton?: boolean;
}

const ReusableCarousel: React.FC<ReusableCarouselProps> = ({
  titleData,
  title,
  cardData,
  isButton,
  autoPlayInterval = 5000,
  pauseOnInteraction = 10000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Update cards per slide based on screen size
  useEffect(() => {
    const updateCardsPerSlide = () => {
      const width = window.innerWidth;
      if (width < 768) {
        // mobile
        setCardsPerSlide(1);
      } else if (width < 1024) {
        // md
        setCardsPerSlide(2);
      } else {
        // lg and up
        setCardsPerSlide(3);
      }
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const totalSlides = Math.ceil(cardData.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), pauseOnInteraction);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides, autoPlayInterval]);

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTimeout(() => setIsAutoPlaying(true), pauseOnInteraction);
  };

  // Handle button clicks
  const handlePrevClick = () => {
    prevSlide();
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), pauseOnInteraction);
  };

  const handleNextClick = () => {
    nextSlide();
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), pauseOnInteraction);
  };

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Group cards into slides based on current cardsPerSlide
  const groupedCards = [];
  for (let i = 0; i < cardData.length; i += cardsPerSlide) {
    groupedCards.push(cardData.slice(i, i + cardsPerSlide));
  }

  // console.log(groupedCards);

  const isLoading = !cardData || cardData.length === 0;

  return (
    <section className={`py-6 lg:py-8 lg:px-4`}>
      <div className="max-w-[1200px] bg-[#F1F5EB] mx-auto px-2 lg:px-6 pt-6 lg:py-12 lg:rounded-[50px]">
        <div className="mb-12">
          <div className="mb-4 flex items-center justify-center lg:justify-start text-center lg:text-left">
            <ReusableTitle {...titleData} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-6xl font-bold text-[#034833] mt-4 font-manrope">
                {title}
              </h2>
            </div>
            <div className="hidden lg:flex items-center gap-4">
              <Button
                onClick={handlePrevClick}
                className="md:w-14 md:h-14 w-10 h-10 rounded-full border border-[#E3DBD8] flex items-center justify-center hover:border-[#83CD20] hover:bg-[#83CD20] hover:text-white transition-all"
              >
                <Image
                  src={"/arrow-left-g.png"}
                  alt={"arrow icon"}
                  width={14}
                  height={14}
                  className="object-cover"
                />
              </Button>
              <Button
                onClick={handleNextClick}
                className="md:w-14 md:h-14 w-10 h-10 rounded-full bg-[#83CD20] text-white flex items-center justify-center hover:bg-[#75B81C] transition-all"
              >
                <Image
                  src={"/arrow-right-w.png"}
                  alt={"arrow icon"}
                  width={14}
                  height={14}
                  className="object-cover"
                />
              </Button>
            </div>
          </div>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isLoading ? (
            <div className="flex gap-6">
              <SkeletonCard />
            </div>
          ) : (
            <div
              className="flex transition-transform duration-300 ease-in-out font-jakarta"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {groupedCards?.map((cardGroup, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 flex gap-6 justify-start"
                >
                  {cardGroup?.map((item, index) => (
                    <div
                      key={index}
                      className={`min-w-0 ${
                        cardsPerSlide === 1
                          ? "w-full"
                          : cardsPerSlide === 2
                            ? "w-1/2"
                            : "w-1/3"
                      }`}
                    >
                      {/* {cardGroup.length > 0 ? ( */}
                      <div className="relative rounded-[20px] overflow-hidden h-[400px]">
                        <div className="relative w-full h-64 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover w-full rounded-[20px]"
                            priority
                          />
                        </div>

                        <div className="relative bg-white p-6 rounded-l-[20px] rounded-br-[20px] w-full ml-auto -mt-16 z-20 lg:max-w-[90%] h-fit flex flex-col">
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold text-[#034833] mb-2">
                              {item.title}
                            </h3>
                            <p className="text-[#727272] text-[14px] mb-6">
                              {item.description}
                            </p>
                          </div>

                          {/* {isButton && (
                            <div className="flex items-end justify-end mt-auto">
                              <ReusableButton text={"View now"} />
                            </div>
                          )} */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="hidden lg:flex md:ml-28 gap-4 mt-12">
          {Array(totalSlides)
            .fill(null)
            .map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-[20px] h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#023123] w-[35px]"
                    : "bg-[#71BD00] hover:bg-[#023123]/70"
                }`}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ReusableCarousel;
