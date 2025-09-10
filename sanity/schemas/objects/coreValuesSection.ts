export default {
  name: "coreValuesSection",
  type: "object",
  title: "Core Values Section",
  fields: [
    {
      name: "values",
      type: "array",
      title: "Core Values",
      of: [
        {
          type: "object",
          name: "coreValue",
          title: "Core Value",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "number", type: "number", title: "Number" },
            {
              name: "icon",
              type: "image",
              title: "Value Icon",
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
  ],
};
