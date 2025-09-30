import React from "react";
import ReusableHero from "../components/reusable-hero";
import ShapingLivesSection from "../components/shiping-lives-section";
import EmpoweringCreatives from "../components/empowering-creatives";
import Workshops from "../components/workshops";
import TestimonialsSection from "../components/testimonials-section";
import RegisterCohort from "../components/register-cohort";
import {
  getWorkshopPageContent,
  getWorkshopSeo,
} from "@/sanity/lib/sanity-utils";

export const generateMetadata = async () => {
  const workshopSeo = await getWorkshopSeo();
  return {
    title: workshopSeo.title,
    description: workshopSeo.description,
  };
};

const page = async () => {
  const workshopPageContent = await getWorkshopPageContent();
  const shapingLivesData = workshopPageContent.shapingLives;
  const empoweringCreativesData = workshopPageContent.empoweringCreatives;
  const testimonialsContent = workshopPageContent.testimonials;
  const workshopSectionData = workshopPageContent.workshopGallery;

  return (
    <div className="overflow-x-hidden">
      <ReusableHero
        title={"Workshops"}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "workshops" }]}
      />
      <ShapingLivesSection shapingLivesData={shapingLivesData} />
      <EmpoweringCreatives empoweringCreativesData={empoweringCreativesData} />
      <Workshops workshopSectionData={workshopSectionData} />
      <TestimonialsSection testimonialsData={testimonialsContent} />
      <RegisterCohort />
    </div>
  );
};

export default page;
