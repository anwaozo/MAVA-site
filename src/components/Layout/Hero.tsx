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
} from "@chakra-ui/react";

import Socials from "../Socials";

const Hero = () => {
  return (
    <Flex
      backgroundImage="url('./static/MAVA-Wills-BG.jpg')"
      h={{ base: "120vh", md: "full" }}
      w="full"
      backgroundSize={"cover"}
      backgroundPosition={{ base: "center", md: " center" }}
      pt={{ base: "20", md: "10" }}
    >
      <Container maxWidth={"1200px"} p="0px">
        <Flex flexWrap="wrap" justifyContent={"center"} alignItems="center">
          <Box
            alignItems="left"
            fontSize={{ sm: "15px", md: "12px", lg: "15px" }}
            textAlign={{ base: "center", md: "left" }}
            w={{ base: "500px", md: "350px", lg: "500px", xl: "570px" }}
            pt={{ base: "3rem", md: "6rem", lg: "8rem" }}
            pl={{ md: "2rem" }}
          >
            <Heading
              fontWeight="800"
              mb={{ base: "1rem", md: "2px", xl: "1rem" }}
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
              pt="1rem"
              flexWrap="wrap"
              justifyContent={{ base: "center", md: "left" }}
              alignItems={{ base: "center", md: "left" }}
            >
              <Button
                color="#fff"
                bgGradient="linear(to-l, #94f1a5, #0c600e)"
                w={{ base: "150px", md: "120px", lg: "150px" }}
                borderRadius="20px"
                boxShadow="md"
                position={"static"}
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
              pt={{ base: "1rem", md: "1rem", lg: "2rem" }}
              spacing="5"
              flexWrap="wrap"
              justifyContent={{ base: "center", md: "left" }}
              alignItems={{ base: "center", md: "left" }}
            >
              <Socials />
            </HStack>
          </Box>

          <Flex
            display={{ base: "block", lg: "block" }}
            position={{ base: "absolute", md: "static" }}
            top="7%"
          >
            <Image
              objectFit="cover"
              src="./static/Group 1.png"
              alt="Dan Abramov"
              w={{ base: "600px", md: "350px", xl: "500px" }}
              h={{ base: "600px", md: "350px", xl: "500px" }}
            />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Hero;
