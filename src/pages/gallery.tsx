import { VStack, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import FaqsTab from "src/components/Faqs/FaqsTab";
import GalleryMava from "src/components/Gallery/GalleryMava";

const gallery = () => {
  return (
    <div>
      {" "}
      <VStack py="7rem">
        <Heading
          fontSize={{ base: "md", md: "4xl" }}
          fontWeight="bold"
          color="black"
          textAlign={"center"}
          bgGradient="linear(to-t, #94f1a5,#0c600e)"
          bgClip="text"
        >
          OUR GALLERY
        </Heading>
      </VStack>
      <SimpleGrid column={{ base: 0, md: 3 }}>
        <GalleryMava />
      </SimpleGrid>
    </div>
  );
};

export default gallery;
