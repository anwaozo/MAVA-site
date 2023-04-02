import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  GridItem,
  Divider,
  Text,
  Stack,
  useBreakpointValue,
  Link,
  Heading,
} from "@chakra-ui/react";
import Socials from "src/components/Socials";
import { MavaLogoB } from "src/components/Logo";
import { FOOTER_DATA } from "src/data/FooterData";
import { useRouter } from "next/router";

const Footer = () => {
  const spacing = useBreakpointValue({ base: 4, lg: 24 });
  const router = useRouter();
  return (
    <Box bg="#415177" w="full">
      <Container
        as={Stack}
        maxW={{ base: "7xl", xl: "7xl", "2xl": "80%" }}
        py={5}
      >
        <Stack w="full" direction="column">
          <Box
            display="flex"
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <MavaLogoB isFooter width={{ base: "40", md: "50" }} />
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={spacing} py={5}>
            <Stack
              direction="row"
              justify={{ base: "center", md: "flex-start" }}
              spacing={4}
            >
              {FOOTER_DATA.map((link, index) => (
                <Heading
                  key={index}
                  cursor="pointer"
                  onClick={() => router.push(link.href)}
                  color="#fff"
                  size="sm"
                  mb="3"
                >
                  {link.title}
                </Heading>
              ))}
            </Stack>
          </SimpleGrid>
          <Divider orientation="horizontal" />
          <SimpleGrid
            py={5}
            color="white"
            spacing={5}
            fontSize="xs"
            columns={{ base: 1, md: 2 }}
          >
            <Stack align={{ base: "center", md: "flex-start" }} flex="1">
              <Text fontSize="sm">
                © COPYRIGHT MOTIVE AFRICA VISUAL ACADEMY
              </Text>
            </Stack>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};
export default Footer;
