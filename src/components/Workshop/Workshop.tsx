import {
  Box,
  BoxProps,
  Flex,
  Heading,
  Image,
  useColorModeValue,
  Text,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { WORKSHOP_DATA } from "src/data/WorkshopImages";
import React, { useRef, useEffect, useState } from "react";
import { TestimonialContent } from "../Testimonials/TestimonialContent";

const Workshop = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <Box bg="white" py="10%">
      <Box mx={{ base: "0%", md: "20%" }}>
        <Heading
          fontSize={{ base: "4xl", md: "4xl" }}
          fontWeight="bold"
          color="black"
          textAlign={"center"}
          bgGradient="linear(to-t, #94f1a5,#0c600e)"
          bgClip="text"
        >
          Our Workshop
        </Heading>
        <Flex px="20px" py="10px">
          <Text
            fontSize={{ base: "md", md: "lg" }}
            lineHeight={{ md: "8" }}
            textAlign={{ base: "center", lg: "center" }}
            color={useColorModeValue("gray.600", "gray.400")}
            fontWeight="bold"
          >
            Ever had a dream to learn photography but could not afford it? Here
            is an opportunity to learn photography for free. We have
            successfully trained over a hundred people in five batches. Hop on
            the moving train by registering with the link in the bio. 👍
            Campuses– Fagba, Lagos. Sango Ota, Ogun State.
          </Text>
        </Flex>

        <Box as={motion.div} ref={carousel} cursor="grab" overflow={"hidden"}>
          <Flex
            as={motion.div}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {WORKSHOP_DATA.map((image, index) => (
              <Box
                key={index}
                flex="none"
                h={{ base: "397px", md: "520px" }}
                w={{ base: "306px", md: "450px" }}
                borderRadius="5px"
                zIndex={"10"}
                mt="3rem"
                ml="2rem"
                p={{ base: "0px", md: "20px" }}
              >
                <Image
                  src={image.img}
                  alt="images"
                  borderRadius="2rem"
                  pointerEvents="none"
                  w={{ base: "100%", md: "100%" }}
                  h={{ base: "100%", md: "100%" }}
                  boxShadow="2xl"
                />
              </Box>
            ))}
          </Flex>
        </Box>
        <Button
          color="#fff"
          bgGradient="linear(to-l, #94f1a5, #0c600e)"
          w={{ base: "full", md: "120px", lg: "full" }}
          borderRadius="20px"
          boxShadow="md"
          my="20px"
        >
          Apply now
        </Button>
      </Box>
    </Box>
  );
};

export default Workshop;
