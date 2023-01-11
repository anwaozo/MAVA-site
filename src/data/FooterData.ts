export type FooterLinksType = {
  id: number;
  title: string;
  href: string;
};

export type FooterSubLinksType = {
  id: number;
  title: string;
  href: string;
};

export const FOOTER_DATA: FooterLinksType[] = [
  {
    id: 1,
    title: "About us",
    href: "/about-us",
  },
  {
    id: 2,
    title: "Contact Us",
    href: "#",
  },
  {
    id: 3,
    title: "Blog",
    href: "https://blog.sendhood.com/",
  },
];

export const OTHER_FOOTER_LINKS: FooterLinksType[] = [
  {
    id: 1,
    title: "Security",
    href: "#",
  },
  {
    id: 2,
    title: "Terms",
    href: "#",
  },
  {
    id: 3,
    title: "Privacy",
    href: "#",
  },
];
