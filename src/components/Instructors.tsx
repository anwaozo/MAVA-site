
import { Box, Image, Text, chakra, SimpleGrid, Center } from "@chakra-ui/react";
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
          textAlign={{ base: "center", md: "center" }}
        >
          {instructor.name}
        </Text>
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
        mt="2rem"
        textAlign={"center"}
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
