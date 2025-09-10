export default {
  name: "whoWeAre",
  type: "object",
  title: "Who We Are Section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Section Title",
    },
    {
      name: "image",
      type: "image",
      title: "Main Image",
      options: { hotspot: true },
    },
    {
      name: "paragraphs",
      type: "array",
      title: "Paragraphs",
      of: [{ type: "text", title: "Paragraph" }],
    },
  ],
};
