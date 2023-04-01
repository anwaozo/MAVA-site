import { useState } from "react";
import {
  Box,
  Image,
  Text,
  chakra,
  SimpleGrid,
  Center,
  Button,
} from "@chakra-ui/react";
import { TUTORS_DATA } from "src/data/TeamData";

const TutorCard = ({ tutor }: { tutor: typeof TUTORS_DATA[0] }) => {
  return (
    <Box maxW="xl" bg="white" rounded={"md"} overflow={"hidden"}>
      <Center>
        <Image
          src={tutor.image}
          alt={tutor.name}
          h={{ base: "300px", md: "550px" }}
          w={{ base: "200px", md: "400px" }}
          objectFit="cover" // stretch the image to fill the container without distorting aspect ratio
        />
      </Center>
      <Box p={{ base: 5, md: 10 }}>
        <Text
          fontWeight="bolder"
          fontSize="xl"
          color="primary"
          textAlign={{ base: "center", md: "inherit" }}
        >
          {tutor.name}
        </Text>
      </Box>
    </Box>
  );
};

const Tutors = () => {
  return (
    <chakra.section id="instructors">
      <Text
        fontSize="2xl"
        fontWeight="bold"
        bgGradient="linear(to-t, #94f1a5,#0c600e)"
        bgClip="text"
        mt="2rem"
        textAlign={"center"}
      >
        Tutors
      </Text>{" "}
      <Box my={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacingX={8}>
          {TUTORS_DATA.map((tutor, index) => (
            <TutorCard key={index} tutor={tutor} />
          ))}
        </SimpleGrid>
      </Box>
    </chakra.section>
  );
};

export default Tutors;
