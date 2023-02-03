import React from "react";
import {
  Box,
  Button,
  chakra,
  Heading,
  HStack,
  Image,
  Flex,
  Container,
  Center,
  VStack,
  Link,
} from "@chakra-ui/react";

import Socials from "../Socials";
import { motion } from "framer-motion";
import link from "next/link";

const Hero = () => {
  return (
    <Flex
      backgroundImage="url('./static/MAVA-Wills-BG.jpg')"
      h={{ base: "100%", md: "full" }}
      w="full"
      backgroundSize={"cover"}
      backgroundPosition={{ base: "center", md: " center" }}
      pt={{ base: "20", md: "10" }}
    >
      <Container maxWidth={"1200px"} p="0px">
        <Flex flexWrap="wrap" justifyContent={"center"} alignItems="center">
          <VStack
            alignItems="left"
            fontSize={{ sm: "15px", md: "12px", lg: "15px" }}
            textAlign={{ base: "center", md: "left" }}
            w={{ base: "500px", md: "350px", lg: "500px", xl: "570px" }}
            pt={{ base: "3rem", md: "6rem", lg: "8rem" }}
            pl={{ md: "2rem" }}
          >
            <Heading
              fontWeight="800"
              mb={{ base: "0rem", md: "2px", xl: "1rem" }}
              color="#696969"
              lineHeight={{ base: "40px", xl: "50px" }}
              fontSize={{ base: "45px", md: "40px", xl: "55px" }}
            >
              <chakra.span
                bgGradient="linear(to-t, #94f1a5,#0c600e)"
                bgClip="text"
                fontSize={{ base: "55px", md: "50px", xl: "75px" }}
                fontWeight="800"
                w={{ base: "100%", md: "100px" }}
              >
                Can't Afford
              </chakra.span>{" "}
              Photography?
            </Heading>

            <chakra.p
              color="#696969"
              w={{ md: "75%" }}
              px={{ base: "20px", md: "0px" }}
            >
              Lack of resources should not be the reason you don't get to do the
              things you love. We are the bridge from where you are to where you
              want to be.
            </chakra.p>

            <HStack
              pt={{ base: "0rem", md: "1rem" }}
              flexWrap="wrap"
              justifyContent={{ base: "center", md: "left" }}
              alignItems={{ base: "center", md: "left" }}
            >
              <Button
                as={Link}
                href="#workshop"
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
                Apply now
              </Button>
              <Button
                variant="outline"
                w={{ base: "150px", md: "120px", lg: "150px" }}
                bg="transparent"
                borderRadius="20px"
                boxShadow="md"
                borderColor="#94f1a5"
                borderWidth={"2px"}
                position={"static"}
                color="#696969"
              >
                Read more
              </Button>
            </HStack>

            <HStack
              pt={{ base: "0.5rem", md: "1rem", lg: "2rem" }}
              spacing="5"
              flexWrap="wrap"
              justifyContent={{ base: "center", md: "left" }}
              alignItems={{ base: "center", md: "left" }}
            >
              <Socials />
            </HStack>
            <Flex display={{ base: "block", lg: "none" }}>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
              >
                <Center>
                  <Image
                    objectFit="cover"
                    src="./static/WEB BEN (1).png"
                    alt="Dan Abramov"
                    w={{ base: "320px", md: "350px", xl: "500px" }}
                    h={{ base: "320px", md: "350px", xl: "500px" }}
                  />
                </Center>
              </motion.div>
            </Flex>
          </VStack>
          <Box top="9%">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
            >
              <Flex display={{ base: "none", lg: "block" }}>
                <Image
                  objectFit="cover"
                  src="./static/Group 1.png"
                  alt="Dan Abramov"
                  w={{ base: "550px", md: "350px", xl: "500px" }}
                  h={{ base: "550px", md: "350px", xl: "500px" }}
                />
              </Flex>
            </motion.div>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Hero;
