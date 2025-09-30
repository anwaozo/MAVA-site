import { defineField, defineType } from "sanity";

export const empoweringCreativesType = defineType({
  name: "empoweringCreativesSection",
  title: "Empowering Creatives Section",
  type: "document",
  fields: [
    defineField({
      name: "icon",
      type: "image",
      title: "Icon",
      options: { hotspot: true },
    }),
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
      name: "image",
      type: "image",
      title: "Main Image",
      options: { hotspot: true },
    }),
  ],
});
