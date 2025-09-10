import Image from "next/image";
import React from "react";
import CustomMap from "./map-component";

const Map = () => {
  return (
    <section className="py-5 lg:py-12">
      <div className="max-w-[1200px] mx-auto px-2 md:px-4 space-y-6 lg:space-y-12 font-jakarta relative">
        <CustomMap />
      </div>
    </section>
  );
};

export default Map;
