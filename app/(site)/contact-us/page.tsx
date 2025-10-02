import React from "react";
import ReusableHero from "../components/reusable-hero";
import TalkToUs from "../components/talk-to-us";
import RegisterCohort from "../components/register-cohort";
import {
  getContactPageContent,
  getContactSeo,
} from "@/sanity/lib/sanity-utils";

export const generateMetadata = async () => {
  const contactUsSeo = await getContactSeo();
  return {
    title: contactUsSeo.title,
    description: contactUsSeo.description,
  };
};

const page = async () => {
  const contactPageData = await getContactPageContent();
  const contactDetails = contactPageData.contactDetails;
  // console.log("contactDetails", contactDetails);
  return (
    <div className="overflow-x-hidden">
      <ReusableHero
        title={"Contact Us"}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <TalkToUs contactDetails={contactDetails.contactDetails} />
      <RegisterCohort />
    </div>
  );
};

export default page;
