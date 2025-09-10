export default {
  name: "contact",
  type: "document",
  title: "Contact Us Page",
  fields: [
    {
      name: "contactDetails",
      type: "object",
      title: "Contact Details",
      fields: [
        { name: "contactNumber", type: "string", title: "Contact Number" },
        { name: "email", type: "string", title: "Email" },
        { name: "location", type: "string", title: "Location" },
        { name: "openingHours", type: "string", title: "Opening Hours" },
      ],
    },
    { name: "seo", type: "seo", title: "SEO Data" },
  ],
};
