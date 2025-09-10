import ReusableCarousel from "./reusable-carousel";
import { getWhatWeDo, getWhatWeDoContent } from "@/sanity/sanity-utils";

const titleData = {
  title: "Empowering visual enthusiasts to learn and create.",
  textColor: "[#034833]",
  arrowLeft: "zz-g-left.png",
  arrowRight: "zz-g-right.png",
};

const WhatWeDo = async () => {
  const whatWeDoData = await getWhatWeDoContent();

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <ReusableCarousel
        titleData={titleData}
        title="What we do"
        cardData={whatWeDoData?.whatWeDo?.items}
        autoPlayInterval={5000}
        pauseOnInteraction={10000}
      />
    </div>
  );
};

export default WhatWeDo;
