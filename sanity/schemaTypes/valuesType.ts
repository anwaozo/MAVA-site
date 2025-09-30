import { defineField, defineType } from "sanity";

export const valuesType = defineType({
  name: "valuePropositionSection",
  title: "Value Proposition Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
    }),
    defineField({
      name: "icon",
      type: "image",
      title: "Icon",
      options: { hotspot: true },
    }),
  ],
});
