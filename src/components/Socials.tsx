import { Icon, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import { SOCIAL_DATA } from "src/data/SocialData";

const Socials = () => {
  return (
    <>
      {SOCIAL_DATA.map((icon, key) => (
        <Link key={key} href={icon.href} target={"_blank"}>
          <Icon
            as={icon.Icon}
            aria-label={"Instagram"}
            color=" #0c600e"
            fontSize={"2rem"}
            position={"static"}
            border="1px solid"
            borderRadius={{ base: "0px", md: "100px" }}
            p="2px"
            cursor={"pointer"}
            _hover={{ bg: "#0c600e" }}
          />
        </Link>
      ))}
    </>
  );
};

export default Socials;
