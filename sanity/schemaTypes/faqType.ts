import { defineField, defineType } from "sanity";

export const faqType = defineType({
  name: "faqSection",
  title: "FAQ Section",
  type: "document",
  fields: [
    defineField({
      name: "image",
      type: "image",
      title: "Main Image",
    }),
    defineField({
      name: "items",
      type: "array",
      title: "FAQ Items",
      of: [
        {
          type: "object",
          name: "faqItem",
          title: "FAQ Item",
          fields: [
            defineField({
              name: "question",
              type: "string",
              title: "Question",
            }),
            defineField({
              name: "answer",
              type: "text",
              title: "Answer",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
