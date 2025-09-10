import React from "react";
import ReusableTitle from "./reusable-title";
import Image from "next/image";
import Link from "next/link";

const titleData = {
  title:
    "For inquiries, please use one of the options that best fits your request.",
  textColor: "[#034833]",
  arrowLeft: "zz-g-left.png",
  arrowRight: "zz-g-right.png",
};

const TalkToUs = ({
  contactDetails,
}: {
  contactDetails: {
    contactNumber: string;
    email: string;
    location: string;
    openingHours: string;
  };
}) => {
  return (
    <section
      data-aos="zoom-out"
      data-aos-duration="1500"
      className="py-8 lg:py-16"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1200px] mx-auto px-2 md:px-6 space-y-8 lg:space-y-14 font-jakarta">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <ReusableTitle {...titleData} />
          <h2
            id="contact-heading"
            className="text-[#034833] text-3xl lg:text-[50px] font-bold"
          >
            Talk to us!
          </h2>
        </div>

        <div className="bg-white rounded-[20px] shadow-lg lg:shadow-2xl px-3 py-6 lg:py-12 lg:px-12 transition-all hover:shadow-2xl">
          <div className="flex flex-col md:flex-row justify-around items-start md:items-center gap-8 relative">
            <div className="space-y-6 w-full">
              <div className="w-fit">
                <Link
                  href={
                    contactDetails?.contactNumber.startsWith("+")
                      ? `tel:${contactDetails?.contactNumber}`
                      : `mailto:${contactDetails?.email}`
                  }
                  aria-label={"Call our phone number"}
                  className="flex items-center gap-4 group transition-all hover:translate-x-1"
                >
                  <div className="relative w-8 h-8 flex items-center justify-center rounded-full p-1.5 ">
                    <Image
                      src={"/contact-icon.png"}
                      alt=""
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-[#727272] text-sm">Call or text us on</p>
                    <p className="text-lg font-semibold text-[#034833] group-hover:underline">
                      {contactDetails?.contactNumber}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="w-fit">
                <Link
                  href={`mailto:${contactDetails?.email}`}
                  aria-label={"Send us an email"}
                  className="flex items-center gap-4 group transition-all hover:translate-x-1"
                >
                  <div className="relative w-8 h-8 flex items-center justify-center rounded-full p-1.5 ">
                    <Image
                      src={"/message-icon.png"}
                      alt=""
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-[#727272] text-sm">E-mail</p>
                    <p className="text-lg font-semibold text-[#034833] group-hover:underline">
                      {contactDetails?.email}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="w-fit">
                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    contactDetails?.location
                  )}`}
                  aria-label={"View our location on Google Maps"}
                  className="flex items-center gap-4 group transition-all hover:translate-x-1"
                >
                  <div className="relative w-8 h-8 flex items-center justify-center rounded-full p-1.5 ">
                    <Image
                      src={"/location-icon.png"}
                      alt=""
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-[#727272] text-sm">Location</p>
                    <p className="text-lg font-semibold text-[#034833] group-hover:underline">
                      {contactDetails?.location}
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="hidden md:block absolute h-full w-0 left-1/2 top-1/2 -translate-y-1/2 border-l-2 border-[#E3DBD8]" />

            <div className="flex items-center gap-4 pt-6 lg:pt-0 border-t md:border-t-0 border-[#E3DBD8] w-full md:w-[210px]">
              <div className="relative w-8 h-8 flex items-center justify-center rounded-full p-1.5">
                <Image
                  src="/clock-icon.png"
                  alt=""
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-[#727272] text-sm">Monday-Friday</p>
                <p className="text-lg font-semibold text-[#034833]">
                  {contactDetails?.openingHours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkToUs;
