export default {
  name: "workshopSection",
  type: "object",
  title: "Workshop Section",
  fields: [
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "images",
      type: "array",
      title: "Workshop Images",
      of: [
        {
          type: "object",
          name: "workshopImage",
          title: "Workshop Image",
          fields: [
            {
              name: "src",
              type: "image",
              title: "Image",
              options: { hotspot: true },
            },
            { name: "alt", type: "string", title: "Alt Text" },
          ],
        },
      ],
    },
  ],
};
