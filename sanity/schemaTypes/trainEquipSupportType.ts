import { defineField, defineType } from "sanity";

export const trainEquipSupportType = defineType({
  name: "trainEquipSupport",
  title: "Train, Equip & Support Section",
  type: "document",
  fields: [
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "items",
      type: "array",
      title: "List Items",
      of: [
        {
          type: "object",
          name: "trainEquipSupportItem",
          title: "List Item",
          fields: [
            defineField({
              name: "title",
              type: "string",
              title: "Item Title",
            }),
            defineField({
              name: "text",
              type: "text",
              title: "Item Text",
            }),
          ],
        },
      ],
    }),
  ],
});
