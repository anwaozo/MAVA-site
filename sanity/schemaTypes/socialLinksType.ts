import { defineField, defineType } from "sanity";

export const socialLinksType = defineType({
  name: "socialMediaLinks",
  title: "Social Media Links",
  type: "document",
  fields: [
    defineField({
      name: "platform",
      title: "Platform Name",
      type: "string",
      options: {
        list: [
          { title: "Instagram", value: "instagram" },
          { title: "Facebook", value: "facebook" },
          { title: "Twitter (X)", value: "twitter" },
        ],
      },
    }),
    defineField({
      name: "url",
      title: "Profile URL",
      type: "string",
    }),
  ],
});
