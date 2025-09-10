import React from "react";
import Image from "next/image";

const BrandsSection = ({
  brandImages,
}: {
  brandImages: Array<{ src: string; alt: string }>;
}) => {
  return (
    <section className="py-4 lg:py-8">
      <div className="max-w-[1200px] mx-auto px-4 space-y-4 lg:space-y-0">
        <h2 className="text-2xl font-semibold tracking-widest text-center font-jakarta">
          Brands that trusts us
        </h2>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white to-transparent" />

          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent" />

          <div className="flex gap-3 lg:gap-2 items-center animate-seamless-marquee">
            {/* First set */}
            {brandImages?.map((brand, index) => (
              <div key={`set1-${index}`} className="flex-shrink-0">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={180}
                  height={80}
                />
              </div>
            ))}

            {/* Second set */}
            {brandImages?.map((brand, index) => (
              <div key={`set2-${index}`} className="flex-shrink-0">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={180}
                  height={80}
                />
              </div>
            ))}

            {/* Third set */}
            {brandImages?.map((brand, index) => (
              <div key={`set3-${index}`} className="flex-shrink-0">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={180}
                  height={80}
                />
              </div>
            ))}

            {/* Fourth set */}
            {brandImages?.map((brand, index) => (
              <div key={`set4-${index}`} className="flex-shrink-0">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={180}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
