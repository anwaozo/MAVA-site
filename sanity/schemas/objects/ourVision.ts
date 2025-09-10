export default {
  name: "ourVision",
  type: "object",
  title: "PFO's Vision Section",
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
