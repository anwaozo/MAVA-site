export default {
  name: "workHighlights",
  title: "Work Highlights",
  type: "object",
  fields: [
    {
      name: "items",
      title: "Highlights",
      type: "array",
      of: [
        {
          type: "object",
          name: "workHighlightItem",
          title: "Work Highlight Item",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "string" },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              fields: [{ name: "alt", title: "Alt", type: "string" }],
            },
          ],
        },
      ],
    },
  ],
};
