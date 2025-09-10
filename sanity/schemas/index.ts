import home from "./documents/home";
import about from "./documents/about";
import workshop from "./documents/workshop";
import gallery from "./documents/gallery";
import heroSection from "./objects/heroSection";
import trainEquipSupport from "./objects/trainEquipSupport";
import brands from "./objects/brands";
import workHighlights from "./objects/workHighlights";
import testimonials from "./objects/testimonials";
import testimonialItem from "./objects/testimonialItem";
import legacy from "./objects/legacy";
import notesFromLovers from "./objects/notesFromLovers";
import gallerySection from "./objects/gallerySection";
import seo from "./objects/seo";
import brochure from "./objects/brochure";
import ourVision from "./objects/ourVision";
import successStory from "./objects/successStory";
import reusableHero from "./objects/reusableHero";
import socials from "./documents/socials";
import socialMediaLinks from "./objects/socialMediaLinks";
import servicesSection from "./objects/servicesSection";
import valuePropositionSection from "./objects/valuePropositionSection";
import whoWeAre from "./objects/whoWeAre";
import coreValuesSection from "./objects/coreValuesSection";
import whatWeDo from "./objects/whatWeDoSection";
import whatWeDoSection from "./objects/whatWeDoSection";
import faqSection from "./objects/faqSection";
import shapingLives from "./objects/shapingLives";
import empoweringCreativesSection from "./objects/empoweringCreativesSection";
import workshopSection from "./objects/workshopSection";
import pfoLegacy from "./documents/pfoLegacy";
import contact from "./documents/contact";

export const schemaTypes = [
  home,
  about,
  pfoLegacy,
  workshop,
  gallery,
  contact,
  socials,
  socialMediaLinks,
  heroSection,
  brands,
  trainEquipSupport,
  servicesSection,
  valuePropositionSection,
  whoWeAre,
  coreValuesSection,
  whatWeDoSection,
  ourVision,
  faqSection,
  shapingLives,
  empoweringCreativesSection,
  workHighlights,
  workshopSection,
  successStory,
  testimonials,
  reusableHero,
  testimonialItem,
  legacy,
  notesFromLovers,
  gallerySection,
  seo,
  brochure,
];

export const schema = {
  types: schemaTypes,
};
