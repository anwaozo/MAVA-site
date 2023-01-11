import {
  Stack,
  Flex,
  Text,
  Image,
  Box,
  Heading,
  chakra,
  Center,
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
              lineHeight={8}
              color="black"
              textAlign={{ base: "center", lg: "left" }}
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
        <Flex display={{ base: "block", lg: "block" }} pt="2.5rem">
          <Center>
            <Image
              alt={"Login Image"}
              objectFit={"cover"}
              src="/static/about.jpg"
              rounded="lg"
              w={{ base: "200px", md: "400px" }}
              h={{ base: "200px", md: "400px" }}
              borderRadius={{ base: "150px", md: "200px" }}
            />
          </Center>
        </Flex>
      </Stack>
    </chakra.section>
  );
};

export default AboutUs;
