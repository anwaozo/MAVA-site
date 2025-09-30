import React from "react";
import ReusableHero from "../components/reusable-hero";
import Gallery from "../components/gallery";
import {
  getGalleryPageContent,
  getGallerySeo,
} from "@/sanity/lib/sanity-utils";

export const generateMetadata = async () => {
  const gallerySeo = await getGallerySeo();
  return {
    title: gallerySeo.title,
    description: gallerySeo.description,
  };
};

const page = async () => {
  const galleyPageData = await getGalleryPageContent();
  const galleryData = galleyPageData.gallerySections;

  return (
    <div className="overflow-x-hidden">
      <ReusableHero
        title={"Gallery"}
        breadcrumbs={[
          { label: "About Us", href: "/about-us" },
          { label: "Gallery" },
        ]}
      />
      <Gallery galleryData={galleryData} />
    </div>
  );
};

export default page;
