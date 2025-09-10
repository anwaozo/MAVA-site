import React from "react";
import ReusableHero from "../components/reusable-hero";
import TalkToUs from "../components/talk-to-us";
import RegisterCohort from "../components/register-cohort";
import Map from "../components/map";
import { getContactDetailsContent, getPageSeo } from "@/sanity/sanity-utils";

export const generateMetadata = async () => {
  const contactUsSeo = await getPageSeo("contact");
  return {
    title: contactUsSeo.title,
    description: contactUsSeo.description,
  };
};

const page = async () => {
  const contactDetails = await getContactDetailsContent();
  // console.log("contactDetails", contactDetails);
  return (
    <div className="overflow-x-hidden">
      <ReusableHero
        title={"Contact Us"}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <TalkToUs contactDetails={contactDetails.contactDetails} />
      <RegisterCohort />
      <Map />
    </div>
  );
};

export default page;
