import ReusableCarousel from "./reusable-carousel";
import {
  getWorkHighlights,
  getWorkHighlightsContent,
} from "@/sanity/sanity-utils";

const titleData = {
  title: "THINGS YOU SHOULD SEE",
  textColor: "[#034833]",
  arrowLeft: "zz-g-left.png",
  arrowRight: "zz-g-right.png",
};

const WorkHighlights = async () => {
  const workHighlightsData = await getWorkHighlightsContent();
  // console.log(workHighlightsData.workHighlights);
  return (
    <div data-aos="fade-up">
      <ReusableCarousel
        titleData={titleData}
        title="Our work highlights."
        cardData={workHighlightsData.workHighlights.items}
        autoPlayInterval={5000}
        pauseOnInteraction={10000}
        isButton={true}
      />
    </div>
  );
};

export default WorkHighlights;
