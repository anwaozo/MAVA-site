import React from "react";
import HeroSection from "./components/updated-hero";
import BrandsSection from "./components/brands-section";
import FeaturesSection from "./components/features-section";
import VisionSection from "./components/vision-section";
import WorkHighlights from "./components/highlight-section";
import SuccessStory from "./components/success-story-section";
import TestimonialsSection from "./components/testimonials-section";
import {
  getHomeHeroContent,
  getFeaturesContent,
  getVisionContent,
  getsuccessStoryContent,
  getTestimonialsContent,
  getPageSeo,
  getBrandImages,
} from "@/sanity/sanity-utils";

export const dynamic = "force-static";
export const revalidate = 60;

export const generateMetadata = async () => {
  const homePageSeo = await getPageSeo("home");
  return {
    title: homePageSeo.title,
    description: homePageSeo.description,
  };
};

const page = async () => {
  const homeHeroContent = await getHomeHeroContent();
  const brandImages = await getBrandImages();
  const featuresContent = await getFeaturesContent();
  const visionContent = await getVisionContent();
  const successStoryContent = await getsuccessStoryContent();
  const testimonialsContent = await getTestimonialsContent();

  return (
    <>
      <div className="overflow-x-hidden">
        <HeroSection homeHeroContent={homeHeroContent} />
        <BrandsSection brandImages={brandImages.brands.items} />
        <FeaturesSection featuresContent={featuresContent.trainEquipSupport} />
        <VisionSection visionContent={visionContent.ourVision} />
        <WorkHighlights />
        <SuccessStory successStoryContent={successStoryContent.successStory} />
        <TestimonialsSection
          testimonialsData={testimonialsContent.testimonials.items}
        />
      </div>
    </>
  );
};

export default page;
