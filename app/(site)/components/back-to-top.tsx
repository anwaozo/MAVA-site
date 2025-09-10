"use client";
import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 bottom-5 right-5 bg-[#033224] text-white p-3 rounded-full shadow-lg 
                     hover:bg-[#033224]/80 hover:scale-110 hover:shadow-xl
                    "
        >
          <ArrowUp className="w-8 h-8 lg:w-[35px] lg:h-[35px] transform transition-transform duration-200 hover:translate-y-[-2px]" />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
