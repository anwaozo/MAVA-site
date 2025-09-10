import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="py-36 lg:py-12 max-w-[1400px] mx-auto px-2 md:px-4 space-y-6 lg:space-y-12 font-jakarta flex flex-col items-center justify-centerlg:h-screen">
      <div className="max-w-1/3 mt-20 animate-pulse">
        <Image
          src={"/undraw_page-not-found_6wni.svg"}
          alt="404 icon"
          height={1000}
          width={1000}
        />
      </div>
      <div>
        <h3 className="font-semibold text-3xl lg:text-[40px] text-[#034833] text-center mt-10 font-galindo">
          We are still working on this page, check back later.
        </h3>
      </div>
    </div>
  );
};

export default page;
