export default {
  name: "heroSection",
  type: "object",
  title: "Hero Section",
  fields: [
    { name: "title", type: "string", title: "Title" }, 
    {
      name: "words",
      type: "array",
      title: "Typewriter Words",
      of: [{ type: "string" }],
    },
    {
      name: "cards",
      type: "array",
      title: "Hero Cards",
      of: [
        {
          type: "object",
          name: "heroCard",
          title: "Hero Card",
          fields: [
            { name: "image", type: "image", title: "Card Image" },
            { name: "text", type: "string", title: "Card Text" },
          ],
        },
      ],
    },
  ],
};
