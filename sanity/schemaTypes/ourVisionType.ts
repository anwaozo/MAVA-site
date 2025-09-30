import { defineField, defineType } from "sanity";

export const ourVisionType = defineType({
  name: "ourVision",
  title: "PFO's Vision Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Section Text",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Section Image",
      options: { hotspot: true },
    }),
  ],
});
