export default {
  name: "socialMediaLinks",
  title: "Social Media Links",
  type: "object",
  fields: [
    {
      name: "platform",
      title: "Platform Name",
      type: "string",
      options: {
        list: [
          { title: "Instagram", value: "instagram" },
          { title: "Facebook", value: "facebook" },
          { title: "Twitter (X)", value: "twitter" },
        ],
      },
    },
    {
      name: "url",
      title: "Profile URL",
      type: "string",
    },
  ],
};
