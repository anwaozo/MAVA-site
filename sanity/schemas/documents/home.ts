export default {
  name: "home",
  type: "document",
  title: "Home Page",
  fields: [
    {
      name: "sections",
      type: "array",
      title: "Sections",
      of: [
        { type: "heroSection", title: "heroSection" },
        { type: "brands", title: "brands" },
        { type: "trainEquipSupport", title: "trainEquipSupport" },
        { type: "ourVision", title: "ourVision" },
        { type: "workHighlights", title: "workHighlights" },
        { type: "successStory", title: "successStory" },
        { type: "testimonials" },
      ],
    },
    { name: "seo", type: "seo", title: "SEO Data" },
  ],
};
