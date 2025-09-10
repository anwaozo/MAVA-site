import React from "react";
import ReusableHero from "../components/reusable-hero";
import ServicesSection from "../components/services-section";
import SuccessStory from "../components/success-story-section";
import ValueProposition from "../components/value-proposition";
import WhoWeAre from "../components/who-we-are";
import CoreValues from "../components/core-values";
import WhatWeDo from "../components/what-we-do";
import OrjiVision from "../components/orji-vision";
import FAQSection from "../components/faq-section";
import {
  getBrochureFile,
  getCoreValuesContent,
  getFaqContent,
  getPageSeo,
  getPfoVisionContent,
  getsuccessStoryContent,
  getValuePropositionContent,
  getWhoWeAreContent,
} from "@/sanity/sanity-utils";

export const dynamic = "force-static";
export const revalidate = 60;

export const generateMetadata = async () => {
  const aboutUsSeo = await getPageSeo("about");
  return {
    title: aboutUsSeo.title,
    description: aboutUsSeo.description,
  };
};

const page = async () => {
  const brochure = await getBrochureFile();
  const valuePropositionsData = await getValuePropositionContent();
  const whoWeAreData = await getWhoWeAreContent();
  const coreValuesData = await getCoreValuesContent();
  const pfoVisionData = await getPfoVisionContent();
  const faqSectionData = await getFaqContent();
  const successStoryContent = await getsuccessStoryContent();

  return (
    <div className="overflow-x-hidden">
      <ReusableHero
        title={"Our Story"}
        breadcrumbs={[
          { label: "About Us", href: "/about-us" },
          { label: "Our Story" },
        ]}
      />
      <ServicesSection brochure={brochure} />
      <ValueProposition
        propositionData={valuePropositionsData.valueProposition.items}
      />
      <SuccessStory successStoryContent={successStoryContent.successStory} />
      <WhoWeAre whoWeAreData={whoWeAreData.whoWeAre} />
      <CoreValues coreValuesData={coreValuesData.coreValues} />
      <WhatWeDo />
      <OrjiVision pfoVisionData={pfoVisionData.ourVision} />
      <FAQSection faqData={faqSectionData.faq} />
    </div>
  );
};

export default page;
