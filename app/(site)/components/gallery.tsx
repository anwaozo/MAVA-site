"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import SliderNavigation from "./reusable-navigation";
import ReusableTitle from "./reusable-title";
import { gallery } from "@/types/project";

const titleData = {
  title: "PHOTO-MEMORIES",
  textColor: "[#034833]",
  arrowLeft: "zz-g-left.png",
  arrowRight: "zz-g-right.png",
};

// Responsive hook
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);
  return isMobile;
}

const Gallery = ({ galleryData }: { galleryData: gallery[] }) => {
  // Swipe/drag state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = (totalPages: number) => {
    if (touchStart !== null && touchEnd !== null) {
      if (touchStart - touchEnd > 75) {
        // Swipe left
        setCurrentPage((prev) => (prev + 1) % totalPages);
        restartAutoplay();
      } else if (touchEnd - touchStart > 75) {
        // Swipe right
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
        restartAutoplay();
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Mouse drag handlers for desktop
  const mouseDragRef = useRef<number | null>(null);
  const handleMouseDown = (e: React.MouseEvent) => {
    mouseDragRef.current = e.clientX;
    const handleMouseMove = (moveEvent: MouseEvent) => {
      setTouchEnd(moveEvent.clientX);
    };
    const handleMouseUp = (upEvent: MouseEvent) => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      const totalPages = calculateTotalPages(getGalleryByTab(currentTab));
      if (mouseDragRef.current !== null) {
        if (mouseDragRef.current - upEvent.clientX > 75) {
          setCurrentPage((prev) => (prev + 1) % totalPages);
          restartAutoplay();
        } else if (upEvent.clientX - mouseDragRef.current > 75) {
          setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
          restartAutoplay();
        }
      }
      mouseDragRef.current = null;
      setTouchEnd(null);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState(0);
  const [currentTab, setCurrentTab] = useState(galleryData[0]?.title || "");
  const [isPaused, setIsPaused] = useState(false);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Tabs
  const tabItems = useMemo(
    () =>
      Array.isArray(galleryData) ? galleryData.map((item) => item.title) : [],
    [galleryData]
  );

  // Get gallery for current tab
  const getGalleryByTab = (tabValue: string) =>
    Array.isArray(galleryData) && galleryData.length > 0
      ? galleryData.find((item) => item.title === tabValue) || galleryData[0]
      : undefined;

  // Get images for current page/slide
  const getImagesForPage = (gallery: any, page: number) => {
    if (!gallery || !Array.isArray(gallery.images)) return [];
    const safeImages = gallery.images.filter((img: any) => img && img.src);
    if (isMobile === null) return [];
    if (isMobile) {
      // 1 image per slide
      return safeImages.slice(page, page + 1);
    }
    // 6 images per slide
    const startIndex = page * 6;
    return safeImages.slice(startIndex, startIndex + 6);
  };

  // Total pages/slides
  const calculateTotalPages = (gallery: any) => {
    if (!gallery || !Array.isArray(gallery.images)) return 1;
    const count = gallery.images.filter((img: any) => img && img.src).length;
    if (isMobile === null) return 1;
    return isMobile ? count : Math.ceil(count / 6);
  };

  // Autoplay
  const startAutoplay = () => {
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    autoplayIntervalRef.current = setInterval(() => {
      if (!isPaused) {
        const gallery = getGalleryByTab(currentTab);
        const totalPages = calculateTotalPages(gallery);
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }
    }, 5000);
  };
  const restartAutoplay = () => {
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    startAutoplay();
  };
  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayIntervalRef.current)
        clearInterval(autoplayIntervalRef.current);
    };
  }, [currentPage, currentTab, isPaused, isMobile]);

  // Reset page on resize or tab change
  useEffect(() => {
    setCurrentPage(0);
  }, [isMobile, currentTab]);

  // Prevent hydration mismatch
  if (isMobile === null) return null;

  return (
    <section className="max-w-[1200px] mx-auto py-6 lg:py-12 rounded-[40px] font-jakarta">
      <div className="bg-[#F9F8F5] py-6.5 px-4 lg:px-8 flex flex-col items-center lg:rounded-[50px]">
        <ReusableTitle {...titleData} />
        <Tabs
          defaultValue={tabItems[0]}
          className="w-full mt-6"
          onValueChange={(tab) => {
            setCurrentTab(tab);
            setCurrentPage(0);
            restartAutoplay();
          }}
        >
          <TabsList className="lg:max-w-[950px] w-fit mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center mb-10 bg-transparent h-auto p-0 px-2">
            {tabItems.map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className={cn(
                  "text-lg font-bold lg:text-xl px-5 py-[11px] h-fit rounded-[21px] transition-all border-0 shadow-none",
                  "data-[state=active]:bg-[#83CD20] data-[state=active]:text-[#034833] data-[state=active]:font-bold",
                  "bg-transparent text-[#034833] hover:bg-[#E6F0ED] w-fit"
                )}
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabItems.map((tab) => {
            const gallery = getGalleryByTab(tab);
            const images = getImagesForPage(gallery, currentPage);
            const totalPages = calculateTotalPages(gallery);
            return (
              <TabsContent key={tab} value={tab} className="mt-0">
                <div
                  className={
                    isMobile
                      ? "flex justify-center mb-10"
                      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10"
                  }
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  style={{ cursor: "grab" }}
                  onTouchStart={isMobile ? handleTouchStart : undefined}
                  onTouchMove={isMobile ? handleTouchMove : undefined}
                  onTouchEnd={
                    isMobile ? () => handleTouchEnd(totalPages) : undefined
                  }
                  onMouseDown={!isMobile ? handleMouseDown : undefined}
                >
                  {images.map((image: any, index: number) => (
                    <div
                      key={`${tab}-${currentPage}-${index}`}
                      className={
                        isMobile
                          ? "rounded-2xl overflow-hidden transition-all hover:shadow-lg w-full max-w-sm h-[250px]"
                          : "rounded-2xl overflow-hidden transition-all hover:shadow-lg h-[180px] md:h-[300px]"
                      }
                    >
                      <Image
                        src={image.src}
                        alt={image.alt || "Gallery image"}
                        width={450}
                        height={250}
                        className="w-full h-full object-cover transition-all hover:scale-105"
                        draggable={false}
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
                <SliderNavigation
                  totalItems={totalPages}
                  currentIndex={currentPage}
                  onSelectItem={(page) => {
                    setCurrentPage(page);
                    restartAutoplay();
                  }}
                  onPrevious={() =>
                    setCurrentPage(
                      (prev) => (prev - 1 + totalPages) % totalPages
                    )
                  }
                  onNext={() =>
                    setCurrentPage((prev) => (prev + 1) % totalPages)
                  }
                  useGreenIndicator={true}
                  rightButtonBg="#83CD20"
                />
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
