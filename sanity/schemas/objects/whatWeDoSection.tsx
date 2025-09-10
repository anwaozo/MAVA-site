export default {
  name: "whatWeDoSection",
  title: "What We Do Section",
  type: "object",
  fields: [
    {
      name: "items",
      type: "array",
      title: "What We Do Items",
      of: [
        {
          type: "object",
          name: "whatWeDoItem",
          title: "What We Do Item",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description" },
            {
              name: "image",
              type: "image",
              title: "Image",
              options: { hotspot: true },
              fields: [{ name: "alt", title: "Alt", type: "string" }],
            },
          ],
        },
      ],
    },
  ],
};
