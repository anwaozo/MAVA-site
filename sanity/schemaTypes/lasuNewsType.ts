import { defineField, defineType } from "sanity";

export const lasuNewsType = defineType({
  name: "lasuNews",
  title: "Lasu News (Hero Carousel)",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "content", type: "blockContent", title: "Content" }),
    defineField({ name: "image", type: "image", title: "Article Image" }),
    defineField({
      name: "source",
      title: "Source",
      type: "object",
      fields: [
        { name: "country", type: "string", title: "Country" },
        { name: "name", type: "string", title: "Name" },
      ],
    }),
    defineField({
      name: "lang",
      type: "string",
      options: {
        list: [{ title: "English", value: "en" }],
      },
    }),
  ],
});
