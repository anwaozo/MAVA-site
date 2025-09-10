import React from "react";
import ReusableHero from "../components/reusable-hero";
import NotesFromLovers from "../components/notes-from-lovers";
import Legacy from "../components/legacy";
import {
  getLegacyContent,
  getNotesFromLoversContent,
  getPageSeo,
} from "@/sanity/sanity-utils";

export const generateMetadata = async () => {
  const pfoLegacySeo = await getPageSeo("pfoLegacy");
  return {
    title: pfoLegacySeo.title,
    description: pfoLegacySeo.description,
  };
};

const page = async () => {
  const legacyData = await getLegacyContent();
  const notesFromLovers = await getNotesFromLoversContent();

  // console.log(notesFromLovers);

  return (
    <div className="overflow-x-hidden">
      <ReusableHero
        title={"PFO's Legacy"}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "PFO's Legacy" }]}
      />
      <Legacy legacyData={legacyData.legacy} />
      <NotesFromLovers
        notesFromLovers={notesFromLovers.notesFromLovers.notes}
      />
    </div>
  );
};

export default page;
