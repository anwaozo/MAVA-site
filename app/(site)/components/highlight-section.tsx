import { getHomePageContent } from "@/sanity/lib/sanity-utils";
import ReusableCarousel from "./reusable-carousel";

const titleData = {
  title: "THINGS YOU SHOULD SEE",
  textColor: "[#034833]",
  arrowLeft: "zz-g-left.png",
  arrowRight: "zz-g-right.png",
};

const WorkHighlights = async () => {
  const homeData = await getHomePageContent();
  const workHighlightsData = homeData.workHighlights;

  return (
    <div data-aos="fade-up">
      <ReusableCarousel
        titleData={titleData}
        title="Our work highlights."
        cardData={workHighlightsData}
        autoPlayInterval={5000}
        pauseOnInteraction={10000}
        isButton={true}
      />
    </div>
  );
};

export default WorkHighlights;
