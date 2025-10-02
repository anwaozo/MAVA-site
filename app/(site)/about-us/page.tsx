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
import { getAboutPageContent, getAboutSeo } from "@/sanity/lib/sanity-utils";

export const dynamic = "force-static";
export const revalidate = 60;

export const generateMetadata = async () => {
  const aboutUsSeo = await getAboutSeo();
  return {
    title: aboutUsSeo.title,
    description: aboutUsSeo.description,
  };
};

const page = async () => {
  const aboutData = await getAboutPageContent();
  const servicesData = aboutData.services;
  const valuePropositionsData = aboutData.valueProposition;
  const whoWeAreData = aboutData.whoWeAre;
  const coreValuesData = aboutData.coreValues;
  const pfoVisionData = aboutData.pfoVision;
  const faqSectionData = aboutData.faq;
  const successStoryContent = aboutData.successStory;

  // console.log(servicesData);

  return (
    <div className="overflow-x-hidden">
      <ReusableHero
        title={"Our Story"}
        breadcrumbs={[
          { label: "About Us", href: "/about-us" },
          { label: "Our Story" },
        ]}
      />
      <ServicesSection servicesData={servicesData} />
      <ValueProposition propositionData={valuePropositionsData} />
      <SuccessStory successStoryContent={successStoryContent} />
      <WhoWeAre whoWeAreData={whoWeAreData} />
      <CoreValues coreValuesData={coreValuesData} />
      <WhatWeDo />
      <OrjiVision pfoVisionData={pfoVisionData} />
      <FAQSection faqData={faqSectionData} />
    </div>
  );
};

export default page;
