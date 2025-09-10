interface Breadcrumb {
  label: string;
  href: string;
}

interface ReusableHero {
  title: string;
  breadcrumbs: Breadcrumb[];
}

export default {
  name: "reusableHero",
  type: "object",
  title: "Hero Section",
  fields: [
    {
      name: "breadcrumbs",
      type: "array",
      title: "Breadcrumbs",
      of: [
        {
          type: "object",
          name: "breadcrumb",
          title: "Breadcrumb",
          fields: [
            { name: "label", type: "string", title: "Label" },
            {
              name: "href",
              type: "string",
              title: "Href",
              options: {
                list: [
                  { title: "About Us", value: "/about-us" },
                  { title: "PFO Legacy", value: "/" },
                  { title: "Services", value: "/services" },
                  { title: "Contact Us", value: "/contact-us" },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
};
