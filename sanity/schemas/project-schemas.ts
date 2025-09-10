const WorkHighlights = {
  name: "workhighlights",
  title: "Work Highlights",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};

const Testimonials = {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "testimonial",
      title: "Testimonial",
      type: "string",
    },
  ],
};

const WhatWeDo = {
  name: "whatwedo",
  title: "What We Do",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
  ],
};

const Legacy = {
  name: "legacy",
  title: "Legacy",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};

const NotesFromLovers = {
  name: "notesfromlovers",
  title: "Notes From Lovers",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "string",
    },
    {
      name: "bgColor",
      title: "Background color",
      type: "string",
    },
    {
      name: "textColor",
      title: "Text color",
      type: "string",
    },
  ],
};

const Gallery = {
  name: "gallery",
  title: "Gallery",
  type: "document",
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
            },
          ],
        },
      ],
    },
  ],
};

const socialMediaLinks = {
  name: "socialLinks",
  title: "Social Media Links",
  type: "document",
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

const SEOData = {
  name: "seo",
  title: "SEO Data",
  type: "document",
  fields: [
    {
      name: "page",
      title: "Page Identifier",
      type: "string",
      description: "e.g. about-us, gallery, home",
    },
    {
      name: "title",
      title: "Meta Title",
      type: "string",
    },
    {
      name: "description",
      title: "Meta Description",
      type: "text",
    },
  ],
};

const Brochure = {
  name: "brochure",
  title: "Mava Brochure",
  type: "document",
  fields: [
    {
      name: "file",
      type: "file",
      title: "Upload File",
    },
  ],
};

export {
  WorkHighlights,
  Testimonials,
  WhatWeDo,
  Legacy,
  NotesFromLovers,
  Gallery,
  socialMediaLinks,
  SEOData,
  Brochure,
};
