export default {
  name: "servicesSection",
  type: "object",
  title: "Services Section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Section Title",
    },
    {
      name: "brochure",
      type: "file",
      title: "Brochure File",
    },
    {
      name: "image",
      type: "image",
      title: "Main Image",
      options: { hotspot: true },
    },
    {
      name: "services",
      type: "array",
      title: "Services",
      of: [
        {
          type: "object",
          name: "service",
          title: "Service",
          fields: [
            { name: "name", type: "string", title: "Service Name" },
            {
              name: "icon",
              type: "image",
              title: "Service Icon",
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
  ],
};
