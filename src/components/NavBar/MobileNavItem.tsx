import React from "react";
import {
  Flex,
  Text,
  Stack,
  Link,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { NavItem } from "src/data/NavItem";

const MobileNavItem = ({ label, href }: NavItem) => {
  const { onClose } = useDisclosure();
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
        onClick={onClose}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

export default MobileNavItem;
