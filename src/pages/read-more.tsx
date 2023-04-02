import {
  Box,
  Heading,
  VStack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ReadMore = () => {
  return (
    <>
      <Box
        w="full"
        backgroundImage="url('./static/MAVA-Wills-BG.jpg')"
        display="flex"
        justifyContent="center"
        textAlign="center"
      >
        <VStack
          spacing={10}
          color={useColorModeValue("gray.600", "gray.400")}
          py={{ base: 24, md: 28 }}
          w={{ base: "90%", md: "80%", lg: "70%" }}
        >
          <Heading
            fontWeight="bold"
            fontSize={{ base: "4xl", md: "2xl", lg: "5xl" }}
            display={{ base: "flex", md: "flex" }}
            textAlign={{ base: "center", lg: "center" }}
            bgGradient="linear(to-t, #94f1a5,#0c600e)"
            bgClip="text"
            justifyContent={"center"}
            alignItems="center"
            pt={{ base: "0rem", md: "2rem" }}
          >
            Learn More About Our Workshop
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            mt={10}
            color={useColorModeValue("gray.600", "gray.400")}
            overflow="hidden"
            textAlign="justify"
          >
            The free photography workshop is a 2-month program that consists of
            3 classes in a week and covers a wide range of photography topics
            that include; camera settings, composition, lighting,
            post-processing and portfolio development taught by experienced
            photographers who also provide hands-on training and feedback to the
            participants. <br />
            <br />
            We are aiming to train between 1000-5000 individuals in visual
            skills as well as enhance their leadership prowess, cognitive
            abilities and creative skills in the next 5 years not just in
            Nigeria but also Africa.
            <br />
            <br />
            We are committed to providing high-quality training and enhancing
            the innate and creative abilities of our participants, we believe
            that the free photography workshop will continue to have a positive
            impact on the lives of our participants and society at large. We are
            open to partnering with organizations and individuals who share our
            vision and mission.
          </Text>
        </VStack>
      </Box>
    </>
  );
};

export default ReadMore;
