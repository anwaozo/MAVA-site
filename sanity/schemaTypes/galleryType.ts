import { defineField, defineType } from "sanity";

export const galleryType = defineType({
  name: "gallerySection",
  title: "Gallery Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Category Title",
      type: "string",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "src",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
});
