import React from "react";
import HeroSection from "./components/updated-hero";
import BrandsSection from "./components/brands-section";
import FeaturesSection from "./components/features-section";
import VisionSection from "./components/vision-section";
import WorkHighlights from "./components/highlight-section";
import SuccessStory from "./components/success-story-section";
import TestimonialsSection from "./components/testimonials-section";
import { getHomePageContent, getHomeSeo } from "@/sanity/lib/sanity-utils";

export const dynamic = "force-static";
export const revalidate = 60;

export const generateMetadata = async () => {
  const homeSeo = await getHomeSeo();
  return {
    title: homeSeo.title,
    description: homeSeo.description,
  };
};

const page = async () => {
  const homeData = await getHomePageContent();
  const homeHeroContent = homeData.heroSection;
  const brandImages = homeData.brandLogos;
  const featuresContent = homeData.trainEquipSupport;
  const visionContent = homeData.ourVision;
  const successStoryContent = homeData.successStory;
  const testimonialsContent = homeData.testimonials;
  // console.log(featuresContent);

  return (
    <>
      <div className="overflow-x-hidden">
        <HeroSection homeHeroContent={homeHeroContent} />
        <BrandsSection brandImages={brandImages} />
        <FeaturesSection featuresContent={featuresContent} />
        <VisionSection visionContent={visionContent} />
        <WorkHighlights />
        <SuccessStory successStoryContent={successStoryContent} />
        <TestimonialsSection testimonialsData={testimonialsContent} />
      </div>
    </>
  );
};

export default page;
