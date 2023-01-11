import { Container, VStack, Heading, Box, chakra } from "@chakra-ui/react";
import React from "react";
import FaqsTab from "./FaqsTab";

const Faqs = () => {
  return (
    <chakra.section id="faqs" bg="#fff">
      <Container maxW={{ base: "7xl", xl: "7xl", "2xl": "80%" }} py="20">
        <VStack px={{ base: "10px" }}>
          <Heading
            fontSize={{ base: "4xl", md: "4xl" }}
            fontWeight="bold"
            color="black"
            textAlign={"center"}
            bgGradient="linear(to-t, #94f1a5,#0c600e)"
            bgClip="text"
          >
            Frequently Asked Questions
          </Heading>
          <FaqsTab />
        </VStack>
      </Container>
    </chakra.section>
  );
};

export default Faqs;
