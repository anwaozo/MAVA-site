"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SliderNavigationProps {
  totalItems: number;
  currentIndex: number;
  onSelectItem: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  className?: string;
  useGreenIndicator?: boolean;
  prevIconSrc?: string;
  nextIconSrc?: string;
  rightButtonBg?: string;
}

const SliderNavigation = ({
  totalItems,
  currentIndex,
  onSelectItem,
  onPrevious,
  onNext,
  className,
  useGreenIndicator = false,
  prevIconSrc = "/arrow-left-g.png",
  nextIconSrc = "/arrow-right-w.png",
  rightButtonBg = "#034833",
}: SliderNavigationProps) => {
  return (
    <div
      className={cn(
        "hidden lg:flex flex-col md:flex-row md:justify-around md:items-center mt-12 pl-2 lg:pl-0",
        className
      )}
    >
      <div className="flex gap-2 mt-8">
        {[...Array(totalItems)].map((_, index) => (
          <button
            key={index}
            onClick={() => onSelectItem(index)}
            className={`w-[20px] h-3 rounded-full transition-all ${
              index === currentIndex
                ? useGreenIndicator
                  ? "bg-[#83CD20] w-[35px]"
                  : "bg-[#023123] w-[35px]"
                : useGreenIndicator
                ? "bg-[#034833] w-2"
                : "bg-[#71BD00]"
            }`}
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </div>

      <div className="flex md:justify-end items-center gap-4 mt-8">
        <Button
          onClick={onPrevious}
          className="md:w-[60px] md:h-[60px] h-12 w-12 rounded-full border border-[#023123] flex items-center justify-center hover:border-[#83CD20] hover:bg-[#83CD20] hover:text-white transition-all"
          aria-label="Previous item"
        >
          <Image
            src={prevIconSrc}
            alt="Previous"
            width={14}
            height={16}
            className="object-cover"
          />
        </Button>
        <Button
          onClick={onNext}
          className={`md:w-[60px] md:h-[60px] h-12 w-12 rounded-full bg-[${rightButtonBg}] text-white flex items-center justify-center hover:bg-[#83CD20] transition-all`}
          aria-label="Next item"
        >
          <Image
            src={nextIconSrc}
            alt="Next"
            width={14}
            height={16}
            className="object-cover"
          />
        </Button>
      </div>
    </div>
  );
};

export default SliderNavigation;
