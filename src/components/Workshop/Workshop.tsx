import {
  Box,
  Flex,
  Heading,
  Image,
  useColorModeValue,
  Text,
  Button,
  VStack,
  Link,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { WORKSHOP_DATA } from "src/data/WorkshopImages";
import React, { useRef, useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import NextLink from "next/link";

const Workshop = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <chakra.section id="workshop" bg="white" py="10%">
      <Box mx={{ base: "0%", md: "20%" }}>
        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          color="black"
          textAlign={"center"}
          bgGradient="linear(to-t, #94f1a5,#0c600e)"
          bgClip="text"
        >
          The Photography Workshop
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
            the moving train by clicking on the Register button below. 👍{" "}
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
                h={{ base: "397px", md: "500px" }}
                w={{ base: "295px", md: "400px" }}
                borderRadius="5px"
                zIndex={"10"}
                mt="3rem"
                ml={{ base: "20px", md: "0px" }}
                p={{ base: "0px", md: "20px" }}
              >
                <Image
                  src={image.img}
                  alt="images"
                  borderRadius="2rem"
                  pointerEvents="none"
                  w={{ base: "100%", md: "100%" }}
                  h={{ base: "100%", md: "100%" }}
                  boxShadow="lg"
                />
              </Box>
            ))}
          </Flex>
        </Box>
        <VStack w={{ base: "full", md: "120px", lg: "full" }}>
          <Button
            as={Link}
            href="https://bit.ly/Fpwreg6"
            color="#fff"
            bgGradient="linear(to-l, #94f1a5, #0c600e)"
            w={{ base: "80%", lg: "50%" }}
            borderRadius="20px"
            boxShadow="md"
            my="20px"
            _hover={{ bgGradient: "linear(to-l, #94f1a5, #0c600e)" }}
            _focus={{ bgGradient: "linear(to-l, #94f1a5, #0c600e)" }}
          >
            Register Now
          </Button>

          <Button
            as={Link}
            href="https://wa.me/p/5758685420835953/2348140635143"
            leftIcon={<BsWhatsapp />}
            color="#fff"
            bgGradient="linear(to-l, #94f1a5, #0c600e)"
            borderRadius="20px"
            boxShadow="md"
            my="20px"
            w={{ base: "80%", lg: "50%" }}
            _hover={{
              bgGradient: "linear(to-l, #94f1a5, #0c600e)",
              textDecoration: "none",
            }}
            _focus={{ bgGradient: "linear(to-l, #94f1a5, #0c600e)" }}
          >
            Chat with Us
          </Button>
          <Text fontWeight={"bold"}></Text>
        </VStack>
      </Box>
    </chakra.section>
  );
};

export default Workshop;
