import { NAV_ITEMS } from "src/data/NavItem";

import { Box, Stack, Link } from "@chakra-ui/react";

const DesktopNav = () => {
  return (
    <Stack
      direction={"row"}
      spacing={{ base: 4, lg: 10 }}
      bgGradient="linear(to-l, #94f1a5, #0c600e)"
      p="15px"
      pl="9rem"
      borderBottomLeftRadius={"60px"}
      borderTopLeftRadius={"60px"}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            p={2}
            href={navItem.href ?? "#"}
            fontSize={{ base: "md", lg: "lg" }}
            fontWeight="semibold"
            color="#fff"
            _hover={{
              textDecoration: "none",
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav;
