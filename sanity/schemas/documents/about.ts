export default {
  name: "about",
  type: "document",
  title: "About Page",
  fields: [
    {
      name: "sections",
      type: "array",
      title: "Sections",
      of: [
        { type: "servicesSection" },
        { type: "valuePropositionSection" },
        { type: "whoWeAre" },
        { type: "coreValuesSection" },
        { type: "whatWeDoSection" },
        { type: "ourVision" },
        { type: "faqSection" },
      ],
    },
    { name: "seo", type: "seo", title: "SEO Data" },
    { name: "brochure", type: "brochure", title: "Brochure" },
  ],
};
