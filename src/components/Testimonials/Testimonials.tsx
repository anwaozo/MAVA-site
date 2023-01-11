import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import Card from "./Card";

const Testimonials = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading
            fontSize={{ base: "4xl", md: "4xl" }}
            fontWeight="bold"
            color="black"
            textAlign={"center"}
            bgGradient="linear(to-t, #94f1a5,#0c600e)"
            bgClip="text"
          >
            Hear Our Students Testify
          </Heading>
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Card />
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export default Testimonials;
