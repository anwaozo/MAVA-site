export default {
  name: "empoweringCreativesSection",
  type: "object",
  title: "Empowering Creatives Section",
  fields: [
    { name: "icon", type: "image", title: "Icon", options: { hotspot: true } },
    { name: "title", type: "string", title: "Title" },
    { name: "description", type: "text", title: "Description" },
    {
      name: "image",
      type: "image",
      title: "Main Image",
      options: { hotspot: true },
    },
  ],
};
