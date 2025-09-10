export default {
  name: "trainEquipSupport",
  type: "object",
  title: "Train, Equip & Support Section",
  fields: [
    { name: "image", type: "image", title: "Image" },
    { name: "title", type: "string", title: "Title" },
    {
      name: "items",
      type: "array",
      title: "List Items",
      of: [
        {
          type: "object",
          name: "trainEquipSupportItem",
          title: "List Item",
          fields: [
            { name: "title", type: "string", title: "Item Title" },
            { name: "text", type: "text", title: "Item Text" },
          ],
        },
      ],
    },
  ],
};
