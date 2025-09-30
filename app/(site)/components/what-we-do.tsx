import { getAboutPageContent } from "@/sanity/lib/sanity-utils";
import ReusableCarousel from "./reusable-carousel";

const titleData = {
  title: "Empowering visual enthusiasts to learn and create.",
  textColor: "[#034833]",
  arrowLeft: "zz-g-left.png",
  arrowRight: "zz-g-right.png",
};

const WhatWeDo = async () => {
  const aboutData = await getAboutPageContent();
  const whatWeDoData = aboutData.whatWeDo;

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <ReusableCarousel
        titleData={titleData}
        title="What we do"
        cardData={whatWeDoData}
        autoPlayInterval={5000}
        pauseOnInteraction={10000}
      />
    </div>
  );
};

export default WhatWeDo;
