import { IconType } from "react-icons/lib";
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

type IconDataType = {
  id: number;
  Icon: IconType;
  href: string;
};
export const SOCIAL_DATA: IconDataType[] = [
  {
    id: 1,
    Icon: BsInstagram,
    href: "https://instagram.com/exploremava  ",
  },
  {
    id: 2,
    Icon: BsFacebook,
    href: "Https://facebook.com/exploremava ",
  },
  {
    id: 3,
    Icon: BsLinkedin,
    href: " https://www.linkedin.com/company/exploremava ",
  },
  {
    id: 4,
    Icon: BsTwitter,
    href: "https://twitter.com/exploremava   ",
  },
];
