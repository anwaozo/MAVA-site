import { defineField, defineType } from "sanity";

export const shapingLivesType = defineType({
  name: "shapingLives",
  title: "Shaping Lives Section",
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
  ],
});
