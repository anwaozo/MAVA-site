import { defineField, defineType } from "sanity";

export const heroSectionType = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "words",
      type: "array",
      title: "Typewriter Words",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "cards",
      type: "array",
      title: "Hero Cards",
      of: [
        {
          type: "object",
          name: "heroCard",
          title: "Hero Card",
          fields: [
            defineField({
              name: "image",
              type: "image",
              title: "Card Image",
            }),
            defineField({
              name: "text",
              type: "string",
              title: "Card Text",
            }),
          ],
        },
      ],
    }),
  ],
});
