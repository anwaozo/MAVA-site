export default {
  name: "brands",
  type: "object",
  title: "Brands logos",
  fields: [
    {
      name: "items",
      type: "array",
      title: "Brand Logos",
      of: [
        {
          type: "object",
          fields: [
            { name: "image", type: "image", title: "Logo Image" },
            { name: "alt", type: "string", title: "Alt Text" },
          ],
        },
      ],
    },
  ],
};
