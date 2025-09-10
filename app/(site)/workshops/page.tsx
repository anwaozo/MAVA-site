import React from "react";
import ReusableHero from "../components/reusable-hero";
import ShapingLivesSection from "../components/shiping-lives-section";
import EmpoweringCreatives from "../components/empowering-creatives";
import Workshops from "../components/workshops";
import TestimonialsSection from "../components/testimonials-section";
import RegisterCohort from "../components/register-cohort";
import {
  getEmpoweringCreativesContent,
  getPageSeo,
  getSeoData,
  getShapingLivesContent,
  getTestimonials,
  getTestimonialsContent,
  getWorkshopImagesContent,
} from "@/sanity/sanity-utils";

export const generateMetadata = async () => {
  const workshopSeo = await getPageSeo("workshop");
  return {
    title: workshopSeo.title,
    description: workshopSeo.description,
  };
};

const page = async () => {
  const shapingLivesData = await getShapingLivesContent();
  const empoweringCreativesData = await getEmpoweringCreativesContent();
  const testimonialsContent = await getTestimonialsContent();
  const workshopSectionData = await getWorkshopImagesContent();

  // console.log(workshopSectionData);
  return (
    <div className="overflow-x-hidden">
      <ReusableHero
        title={"Workshops"}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "workshops" }]}
      />
      <ShapingLivesSection shapingLivesData={shapingLivesData.shapingLives} />
      <EmpoweringCreatives
        empoweringCreativesData={empoweringCreativesData.empoweringCreatives}
      />
      <Workshops workshopSectionData={workshopSectionData.workshopImages} />
      <TestimonialsSection
        testimonialsData={testimonialsContent.testimonials.items}
      />
      <RegisterCohort />
    </div>
  );
};

export default page;
