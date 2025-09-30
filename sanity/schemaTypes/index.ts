import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { lasuNewsType } from "./lasuNewsType";
import { generalNewsType } from "./generalNewsType";
import { heroSectionType } from "./heroSectionType";
import { brandLogoType } from "./brandLogoType";
import { trainEquipSupportType } from "./trainEquipSupportType";
import { ourVisionType } from "./ourVisionType";
import { workHighlightType } from "./workHighlightType";
import { successStoryType } from "./successStoryType";
import { testimonialType } from "./testimonialsType";
import { socialLinksType } from "./socialLinksType";
import { servicesType } from "./servicesType";
import { valuesType } from "./valuesType";
import { whoWeAreType } from "./whoWeAreType";
import { coreValuesType } from "./coreValuesType";
import { whatWeDoType } from "./whatWeDoType";
import { pfoVisionType } from "./pfoVisionType";
import { faqType } from "./faqType";
import seoType from "./seoType";
import aboutSeoData from "./aboutSeoData";
import { legacyType } from "./legacyType";
import { notesType } from "./notesType";
import legacySeoType from "./legacySeoType";
import { shapingLivesType } from "./shapingLivesType";
import { empoweringCreativesType } from "./empoweringCreativesType";
import { workshopGalleryType } from "./workshopGalleryType";
import workshopSeoType from "./workshopSeoType";
import { galleryType } from "./galleryType";
import gallerySeoType from "./gallerySeoType";
import contactSeoType from "./contactSeoType";
import { contactDetailsType } from "./contactDetailsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroSectionType,
    brandLogoType,
    trainEquipSupportType,
    ourVisionType,
    workHighlightType,
    successStoryType,
    testimonialType,
    servicesType,
    valuesType,
    whoWeAreType,
    coreValuesType,
    whatWeDoType,
    pfoVisionType,
    faqType,
    legacyType,
    notesType,
    shapingLivesType,
    empoweringCreativesType,
    workshopGalleryType,
    galleryType,
    contactDetailsType,
    seoType,
    aboutSeoData,
    legacySeoType,
    workshopSeoType,
    gallerySeoType,
    contactSeoType,
    socialLinksType,
  ],
};
