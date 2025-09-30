import { defineField, defineType } from "sanity";

export const coreValuesType = defineType({
  name: "coreValuesSection",
  title: "Core Values Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "number",
      type: "number",
      title: "Number",
    }),
    defineField({
      name: "icon",
      type: "image",
      title: "Value Icon",
      options: { hotspot: true },
    }),
  ],
});
