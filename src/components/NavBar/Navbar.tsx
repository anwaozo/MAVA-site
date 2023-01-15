import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useDisclosure,
  HStack,
  Link,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import MavaLogo from "../Logo";
import NextLink from "next/link";

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();
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
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default NavBar;
