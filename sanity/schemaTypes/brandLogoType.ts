import { defineField, defineType } from "sanity";

export const brandLogoType = defineType({
  name: "brands",
  title: "Brands logos",
  type: "document",
  fields: [
    defineField({
      name: "image",
      type: "image",
      title: "Logo Image",
    }),
    defineField({
      name: "alt",
      type: "string",
      title: "Alt Text",
    }),
  ],
});
