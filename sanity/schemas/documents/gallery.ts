export default {
  name: "gallery",
  type: "document",
  title: "Gallery Page",
  fields: [
    {
      name: "sections",
      type: "array",
      title: "Sections",
      of: [{ type: "gallerySection" }],
    },
    { name: "seo", type: "seo", title: "SEO Data" },
    // { name: 'socialLinks', type: 'socialLinks', title: 'Social Media Links' },
    // { name: 'brochure', type: 'brochure', title: 'Brochure' },
  ],
};
