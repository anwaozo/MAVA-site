import { defineField, defineType } from "sanity";

export const workshopGalleryType = defineType({
  name: "workshopSection",
  title: "Workshop Section",
  type: "document",
  fields: [
    defineField({
      name: "description",
      type: "text",
      title: "Description",
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Workshop Images",
      of: [
        {
          type: "object",
          name: "workshopImage",
          title: "Workshop Image",
          fields: [
            defineField({
              name: "src",
              type: "image",
              title: "Image",
              options: { hotspot: true },
            }),
            defineField({
              name: "alt",
              type: "string",
              title: "Alt Text",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "description",
      media: "image",
    },
  },
});
