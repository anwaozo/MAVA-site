import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useDisclosure,
  HStack,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import DesktopNav from "./DesktopNav";
import MavaLogo from "../Logo";
import NextLink from "next/link";
import { NAV_ITEMS } from "src/data/NavItem";
import MobileNavItem from "./MobileNavItem";

const NavBar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Box
      boxShadow="sm"
      position="fixed"
      w="full"
      zIndex="20"
      backgroundImage="url('./static/MAVA-Website-BG (2).jpg')"
      backgroundPosition={{ base: "center", md: " center" }}
    >
      <Flex mx="auto" align="center">
        <Box flex={1}>
          <Flex
            gap={{ base: 8, lg: 40, xl: 8 }}
            h={{ base: "70px", md: "90px" }}
            alignItems="center"
            justifyContent="space-between"
            pl={{ base: 5, lg: 10 }}
            pr={{ base: 5, md: 0 }}
          >
            <NextLink href="#" passHref>
              <Link
                mr={{ base: 0, xl: "9vw" }}
                _hover={{ textDecoration: "none" }}
                _focus={{ boxShadow: "none" }}
                flex="1"
              >
                <MavaLogo />
              </Link>
            </NextLink>
            <HStack
              spacing={4}
              display={{
                base: "none",
                md: "flex",
              }}
            >
              <DesktopNav />
            </HStack>
            <Flex ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
              <IconButton
                onClick={onToggle}
                color="headingAndBody"
                icon={
                  isOpen ? (
                    <AiOutlineClose size="1.5rem" />
                  ) : (
                    <RxHamburgerMenu size="1.5rem" />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack
          bg={" rgba(255, 255, 255, 0.25)"}
          p={4}
          display={{ md: "none" }}
          onClick={onClose}
          backdropFilter="blur(4px)"
          webkit-backdropFilter="blur(4px)"
          border="1px solid rgba(255, 255, 255, 0.18)"
        >
          {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
          ))}
        </Stack>
      </Collapse>
    </Box>
  );
};

export default NavBar;
