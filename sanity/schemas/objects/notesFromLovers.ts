export default {
  name: "notesFromLovers",
  type: "object",
  title: "Notes From Lovers",
  fields: [
    {
      name: "notes",
      type: "array",
      title: "Notes",
      of: [
        {
          type: "object",
          name: "note",
          title: "Note",
          fields: [
            { name: "text", type: "text", title: "Note" },
            {
              name: "textColor",
              type: "string",
              title: "Text Color(hex code)",
            },
            {
              name: "bgColor",
              type: "string",
              title: "Background Color(hex code)",
            },
          ],
        },
      ],
    },
  ],
};
