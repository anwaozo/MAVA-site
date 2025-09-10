export default {
  name: "gallerySection",
  type: "object",
  title: "Gallery Section",
  fields: [
    {
      name: "title",
      title: "Category Title",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "src",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
