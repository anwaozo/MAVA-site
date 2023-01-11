import {
  Stack,
  Flex,
  Text,
  Image,
  Box,
  Heading,
  chakra,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const AboutUs = () => {
  return (
    <chakra.section id="about" bg="#f7f7f7">
      <Stack
        py={{ base: 20, lg: 40 }}
        px={{ base: 8, lg: 28 }}
        direction={{ base: "column-reverse", lg: "row" }}
        spacing={19}
        justifyContent="center"
      >
        <Flex justify={"center"}>
          <Stack
            color="white"
            spacing={6}
            w={"full"}
            maxW={{ base: "full", lg: "lg" }}
          >
            <Heading
              display={{ base: "none", md: "flex" }}
              fontWeight="800"
              fontSize="4xl"
              textAlign={{ base: "center", lg: "center" }}
              color="black"
              bgGradient="linear(to-t, #94f1a5,#0c600e)"
              bgClip="text"
            >
              Our Story
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "inherit" }}
              lineHeight={{ md: "8" }}
              textAlign={{ base: "center", lg: "left" }}
              color={useColorModeValue("gray.600", "gray.400")}
            >
              "Motive Africa Visual Academy is an Academy that helps people who
              can't afford visual skill acquire them. We not only teach visual
              skills but also use it as a tool to shape the perception, mindset
              and thought patterns of people to influence the World positively
              believing everything they set their minds to do is achievable.
              Everyone should be allowed equal access to opportunities
              irrespective of their backgrounds, races and religious beliefs.
              Lack of resources shouldn't be the reason you don't get to do the
              things you love. This is our MAVA, the Bridge from where you are
              to where you want to be. A home away from home where the love is
              pure and the bond genuine. Come explore MAVA."
            </Text>
          </Stack>
        </Flex>
        <Box>
          <Center>
            <Heading
              display={{ base: "flex", md: "none" }}
              fontWeight="800"
              fontSize="3xl"
              textAlign={{ base: "center", lg: "center" }}
              color="black"
              bgGradient="linear(to-t, #94f1a5,#0c600e)"
              bgClip="text"
              pb="2rem"
            >
              Our Story
            </Heading>
          </Center>
          <Flex
            display={{ base: "block", lg: "block" }}
            pt={{ base: "1rem", md: "2.5rem" }}
          >
            <Center>
              <Image
                alt={"Login Image"}
                objectFit={"cover"}
                src="/static/about.jpg"
                rounded="lg"
                w={{ base: "250px", md: "400px" }}
                h={{ base: "250px", md: "400px" }}
                borderRadius={{ base: "150px", md: "200px" }}
              />
            </Center>
          </Flex>
        </Box>
      </Stack>
    </chakra.section>
  );
};

export default AboutUs;
