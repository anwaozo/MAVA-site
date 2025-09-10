export default {
  name: "faqSection",
  type: "object",
  title: "FAQ Section",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Main Image",
    },
    {
      name: "items",
      type: "array",
      title: "FAQ Items",
      of: [
        {
          type: "object",
          name: "faqItem",
          title: "FAQ Item",
          fields: [
            { name: "question", type: "string", title: "Question" },
            { name: "answer", type: "text", title: "Answer" },
          ],
        },
      ],
    },
  ],
};
