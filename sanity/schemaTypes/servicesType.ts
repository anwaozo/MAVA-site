import { defineField, defineType } from "sanity";

export const servicesType = defineType({
  name: "servicesSection",
  title: "Services Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Section Title",
    }),
    defineField({
      name: "brochure",
      type: "file",
      title: "Brochure File",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Main Image",
      options: { hotspot: true },
    }),
  ],
});
