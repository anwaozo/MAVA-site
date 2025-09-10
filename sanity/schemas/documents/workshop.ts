export default {
  name: "workshop",
  type: "document",
  title: "Workshop Page",
  fields: [
    {
      name: "sections",
      type: "array",
      title: "Sections",
      of: [
        { type: "shapingLives" },
        { type: "empoweringCreativesSection" },
        { type: "workshopSection" },
      ],
    },
    { name: "seo", type: "seo", title: "SEO Data" },
    // { name: 'socialLinks', type: 'socialLinks', title: 'Social Media Links' },
    // { name: 'brochure', type: 'brochure', title: 'Brochure' },
  ],
};
