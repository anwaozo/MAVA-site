import { defineField, defineType } from "sanity";

export const contactDetailsType = defineType({
  name: "contactSection",
  title: "Contact Us Page",
  type: "document",
  fields: [
    defineField({
      name: "contactDetails",
      type: "object",
      title: "Contact Details",
      fields: [
        defineField({
          name: "contactNumber",
          type: "string",
          title: "Contact Number",
        }),
        defineField({
          name: "email",
          type: "string",
          title: "Email",
        }),
        defineField({
          name: "location",
          type: "string",
          title: "Location",
        }),
        defineField({
          name: "openingHours",
          type: "string",
          title: "Opening Hours",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "contactDetails.email",
    },
  },
});
