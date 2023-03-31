import { Box, Image, Text, chakra, SimpleGrid, Center } from "@chakra-ui/react";
import React from "react";
import { INSTRUCTORS_DATA } from "src/data/TeamData";

const InstructorsCard = ({
  instructor,
}: {
  instructor: typeof INSTRUCTORS_DATA[0];
}) => {
  return (
    <Box maxW="xl" bg="white" rounded={"md"} overflow={"hidden"}>
      <Center>
        <Image
          src={instructor.image}
          alt={instructor.name}
          h={{ base: "200px", md: "500px" }}
          w={{ base: "200px", md: "500px" }}
        />
      </Center>
      <Box p={{ base: 5, md: 10 }}>
        <Text
          fontWeight="bolder"
          fontSize="xl"
          color="primary"
          textAlign={{ base: "center", md: "inherit" }}
        >
          {instructor.name}
        </Text>

        <Box
          display="flex"
          my="2"
          alignItems="center"
          textAlign={{ base: "center", md: "inherit" }}
        >
          <Text color="primary" fontSize={{ base: "sm", md: "md" }}>
            {instructor.bio}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const Instructors = () => {
  return (
    <chakra.section id="instructors">
      <Text
        fontSize="2xl"
        fontWeight="bold"
        bgGradient="linear(to-t, #94f1a5,#0c600e)"
        bgClip="text"
        mt="5rem"
      >
        Instructors
      </Text>{" "}
      <Box my={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacingX={8}>
          {INSTRUCTORS_DATA.map((instructor, index) => (
            <InstructorsCard key={index} instructor={instructor} />
          ))}
        </SimpleGrid>
      </Box>
    </chakra.section>
  );
};

export default Instructors;
