export default {
  name: "pfoLegacy",
  type: "document",
  title: "PFO Legacy Page",
  fields: [
    {
      name: "sections",
      type: "array",
      title: "Sections",
      of: [{ type: "legacy" }, { type: "notesFromLovers" }],
    },
    { name: "seo", type: "seo", title: "SEO Data" },
  ],
};
