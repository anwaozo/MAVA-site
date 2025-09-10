export default {
  name: "socialMediaPage",
  type: "document",
  title: "Social Media Links",
  fields: [
    {
      name: "links",
      type: "array",
      title: "Social Media Links",
      of: [{ type: "socialMediaLinks" }],
    },
  ],
};
