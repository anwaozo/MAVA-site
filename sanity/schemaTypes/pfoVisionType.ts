import { defineField, defineType } from "sanity";

export const pfoVisionType = defineType({
  name: "pfoVision",
  title: "PFO's Vision Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Section Title",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Main Image",
      options: { hotspot: true },
    }),
    defineField({
      name: "paragraphs",
      type: "array",
      title: "Paragraphs",
      of: [{ type: "text", title: "Paragraph" }],
    }),
  ],
});
