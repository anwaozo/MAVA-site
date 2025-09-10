export default {
  name: "valuePropositionSection",
  type: "object",
  title: "Value Proposition Section",
  fields: [
    {
      name: "items",
      type: "array",
      title: "Proposition Items",
      of: [
        {
          type: "object",
          name: "propositionItem",
          title: "Proposition Item",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description" },
            {
              name: "icon",
              type: "image",
              title: "Icon",
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
  ],
};
