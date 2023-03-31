import {
  Box,
  Image,
  Flex,
  Button,
  HStack,
  VStack,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GALLERY_DATA } from "src/data/GalleryImages";

const GalleryMava = () => {
  const [items, setItems] = useState(GALLERY_DATA);
  const [active, setActive] = useState(false);
  const filterItem = (categItem: string) => {
    const updateItems = GALLERY_DATA.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActive(true);
  };

  return (
    <>
      <VStack alignItems={"center"} justifyContent="center">
        <HStack>
          <Button
            as={Link}
            href="javascrip:0;"
            color="#fff"
            bgGradient="linear(to-l, #94f1a5, #0c600e)"
            w={{ base: "150px", md: "120px", lg: "150px" }}
            borderRadius="20px"
            boxShadow="md"
            position={"static"}
            _hover={{
              bg: "invisible",
              textDecor: "none",
            }}
            _focus={{ bgGradient: "linear(to-l, #94f1a5, #0c600e)" }}
            onClick={() => filterItem("one")}
          >
            1
          </Button>
          <Button
            as={Link}
            href="javascrip:0;"
            color="#fff"
            bgGradient="linear(to-l, #94f1a5, #0c600e)"
            w={{ base: "150px", md: "120px", lg: "150px" }}
            borderRadius="20px"
            boxShadow="md"
            position={"static"}
            _hover={{
              bg: "invisible",
              textDecor: "none",
            }}
            _focus={{ bgGradient: "linear(to-l, #94f1a5, #0c600e)" }}
          >
            {" "}
            2
          </Button>
          <Button
            as={Link}
            href="javascrip:0;"
            color="#fff"
            bgGradient="linear(to-l, #94f1a5, #0c600e)"
            w={{ base: "150px", md: "120px", lg: "150px" }}
            borderRadius="20px"
            boxShadow="md"
            position={"static"}
            _hover={{
              bg: "invisible",
              textDecor: "none",
            }}
            _focus={{ bgGradient: "linear(to-l, #94f1a5, #0c600e)" }}
          >
            {" "}
            3
          </Button>
          <Button
            as={Link}
            href="javascrip:0;"
            color="#fff"
            bgGradient="linear(to-l, #94f1a5, #0c600e)"
            w={{ base: "150px", md: "120px", lg: "150px" }}
            borderRadius="20px"
            boxShadow="md"
            position={"static"}
            _hover={{
              bg: "invisible",
              textDecor: "none",
            }}
            _focus={{ bgGradient: "linear(to-l, #94f1a5, #0c600e)" }}
          >
            {" "}
            All
          </Button>
        </HStack>
      </VStack>

      <Flex
        flexWrap={"wrap"}
        gap="10px"
        alignItems={"center"}
        justifyContent="center"
      >
        {GALLERY_DATA.map((slide, index) => (
          <Box key={index} cursor={"pointer"}>
            <Image
              src={slide.img}
              alt="images"
              w="400px"
              h="400px"
              _hover={{ transform: "scale(1.02)" }}
            />
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default GalleryMava;
