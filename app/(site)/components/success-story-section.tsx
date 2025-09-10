import ReusableTitle from "./reusable-title";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { successStory } from "@/types/project";
import Counter from "./count-animation";

const titleData = {
  title: "success story",
  textColor: "white",
  arrowRight: "zz-arrow-right.png",
};

const SuccessStory = ({
  successStoryContent,
}: {
  successStoryContent: successStory;
}) => {
  return (
    <section
      data-aos="flip-up"
      className="py-6 lg:py-12 relative overflow-hidden "
    >
      <div className="font-jakarta relative bg-[#033224] lg:rounded-[50px] mx-auto max-w-[1200px] px-3 lg:px-12 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/Vector.png"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-8 justify-between lg:items-center">
          <div className="text-white space-y-6 lg:max-w-[460px]">
            <ReusableTitle {...titleData} />

            <h2 className="text-2xl lg:text-[40px] font-bold leading-tight">
              {successStoryContent.title}
            </h2>

            <p className="text-base text-justify md:text-lg leading-relaxed lg:max-w-lg">
              {successStoryContent.text}
            </p>

            <div className="pt-4">
              <Link href="contact-us">
                <Button className="bg-[#83CD20] py-3 md:py-5 px-7.5 h-fit hover:bg-[#83CD20]/80 rounded-full font-semibold cursor-pointer">
                  Talk to us
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:max-w-[500px]">
            {successStoryContent?.metrics?.map((metric, index) => (
              <div
                data-aos="fade-right"
                data-aos-duration={`${index * 750}`}
                key={index}
                className="bg-transparent border border-white rounded-3xl w-full lg:max-w-[230px] px-3 py-6"
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Image
                      src={metric.icon}
                      alt={metric.label}
                      width={24}
                      height={24}
                      className="w-8 h-8 md:w-6 md:h-6"
                    />
                  </div>

                  <div>
                    <div className="text-3xl lg:text-[36px] font-bold text-white">
                      <Counter value={metric.number} />
                    </div>
                    <div className="text-[15px] lg:text-base text-white">
                      {metric.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
