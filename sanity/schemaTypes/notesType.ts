import { defineField, defineType } from "sanity";

export const notesType = defineType({
  name: "notesFromLovers",
  title: "Notes From Lovers",
  type: "document",
  fields: [
    defineField({
      name: "text",
      type: "text",
      title: "Note",
    }),
    defineField({
      name: "textColor",
      type: "string",
      title: "Text Color(hex code)",
    }),
    defineField({
      name: "bgColor",
      type: "string",
      title: "Background Color(hex code)",
    }),
  ],
});
