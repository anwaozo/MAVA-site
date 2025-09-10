import React from "react";
import ReusableHero from "../components/reusable-hero";
import Gallery from "../components/gallery";
import { getGalleryImages, getPageSeo } from "@/sanity/sanity-utils";

export const generateMetadata = async () => {
  const gallerySeo = await getPageSeo("gallery");
  return {
    title: gallerySeo.title,
    description: gallerySeo.description,
  };
};

const page = async () => {
  const galleryData = await getGalleryImages();

  // console.log("Gallery Data: ", galleryData.galleryImages);
  return (
    <div className="overflow-x-hidden">
      <ReusableHero
        title={"Gallery"}
        breadcrumbs={[
          { label: "About Us", href: "/about-us" },
          { label: "Gallery" },
        ]}
      />
      <Gallery galleryData={galleryData.galleryImages} />
    </div>
  );
};

export default page;
