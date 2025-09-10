"use client";

import { useState } from "react";
import Image from "next/image";
import { faqDataProps } from "@/types/project";

const FAQSection = ({ faqData }: { faqData: faqDataProps }) => {
  const [openItem, setOpenItem] = useState<string | null>("");

  const toggleItem = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-8 lg:py-16 bg-white">
      <div className="px-4 relative font-jakarta">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Layer_1.png"
            alt="Background pattern"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div data-aos="fade-right" className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/Frame.svg" alt="FAQ icon" width={20} height={20} />
                <span className="text-[#034833] font-semibold text-sm uppercase tracking-wider">
                  FAQ
                </span>
              </div>

              <h2 className="text-2xl md:text-[50px] font-bold text-[#034833] leading-tight">
                Frequently asked
                <br />
                questions.
              </h2>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {faqData?.items?.map((faq) => {
                return (
                  <div
                    key={faq._key}
                    className={`${
                      openItem === faq._key ? "bg-[#F1F5EB]" : "bg-white"
                    } rounded-2xl shadow-sm transition-colors duration-200 relative overflow-hidden`}
                  >
                    <div className="w-full">
                      <button
                        onClick={() => toggleItem(faq._key)}
                        className="w-full px-4 py-5 text-left flex items-start gap-4 hover:bg-transparent"
                      >
                        <div
                          className="text-[#034833] font-semibold text-lg leading-relaxed flex-1 min-w-0"
                          style={{
                            wordBreak: "break-word",
                            overflowWrap: "anywhere",
                          }}
                        >
                          {faq.question}
                        </div>
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                          {openItem === faq._key ? (
                            <div className="w-8 h-8 bg-[#83CD20] rounded-full flex items-center justify-center">
                              <Image
                                src="/arrow-up.svg"
                                alt="Collapse"
                                height={16}
                                width={8}
                              />
                            </div>
                          ) : (
                            <Image
                              src="/arrow-right-02.svg"
                              alt="Expand"
                              height={16}
                              width={8}
                            />
                          )}
                        </div>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openItem === faq._key
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-6 pb-5">
                          <p className="text-[#727272] text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div
            data-aos="fade-left"
            className="relative lg:pl-8 z-20 md:pt-20 hidden lg:flex"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-lg w-full h-[600px] lg:h-[700px]">
              <Image
                src={faqData.image}
                alt="Student with Ghana flag"
                className="object-cover "
                fill
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
