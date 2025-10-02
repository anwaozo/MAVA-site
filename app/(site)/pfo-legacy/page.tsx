import React from "react";
import ReusableHero from "../components/reusable-hero";
import NotesFromLovers from "../components/notes-from-lovers";
import Legacy from "../components/legacy";
import { getLegacyPageContent, getLegacySeo } from "@/sanity/lib/sanity-utils";

export const generateMetadata = async () => {
  const pfoLegacySeo = await getLegacySeo();
  return {
    title: pfoLegacySeo.title,
    description: pfoLegacySeo.description,
  };
};

const page = async () => {
  const legacyPageData = await getLegacyPageContent();
  const legacyData = legacyPageData.legacySlides;
  const notesFromLovers = legacyPageData.notesFromLovers;

  // console.log(legacyData);

  return (
    <div className="overflow-x-hidden">
      <ReusableHero
        title={"PFO's Legacy"}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "PFO's Legacy" }]}
      />
      <Legacy legacyData={legacyData} />
      <NotesFromLovers notesFromLovers={notesFromLovers} />
    </div>
  );
};

export default page;
