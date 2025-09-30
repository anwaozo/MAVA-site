import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "quote",
      type: "text",
      title: "Quote",
    }),
    defineField({
      name: "author",
      type: "string",
      title: "Author",
    }),
  ],
});
