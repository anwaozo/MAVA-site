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
import { INSTRUCTORS_DATA } from "src/data/TeamData";

const InstructorsCard = ({
  instructor,
}: {
  instructor: typeof INSTRUCTORS_DATA[0];
}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

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
          textAlign={{ base: "center", md: "inherit" }}
        >
          {instructor.name}
        </Text>

        <Box
          display="flex"
          my="2"
          flexDirection="column"
          alignItems={{ base: "center", md: "inherit" }}
          textAlign="center"
        >
          <Text
            color="primary"
            fontSize={{ base: "sm", md: "md" }}
            textAlign="justify"
            maxH={showMore ? "none" : "6rem"}
            overflow="hidden"
          >
            {instructor.bio}
          </Text>
        </Box>
        <Center>
          <Button
            size="xs"
            variant="outline"
            color="primary"
            onClick={toggleShowMore}
          >
            {showMore ? "Read less" : "Read more"}
          </Button>
        </Center>
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
