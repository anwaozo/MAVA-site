import { defineField, defineType } from "sanity";

export const successStoryType = defineType({
  name: "successStory",
  title: "Success Story Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "text",
      type: "text",
      title: "Text",
    }),
    defineField({
      name: "metrics",
      type: "array",
      title: "Metrics",
      of: [
        {
          type: "object",
          name: "metric",
          title: "Metric",
          fields: [
            defineField({
              name: "icon",
              type: "image",
              title: "Icon",
            }),
            defineField({
              name: "number",
              type: "number",
              title: "Number",
            }),
            defineField({
              name: "label",
              type: "string",
              title: "Label",
            }),
          ],
        },
      ],
    }),
  ],
});
