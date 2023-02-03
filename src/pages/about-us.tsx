import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Stack,
  VStack,
  Text,
  useColorModeValue,
  Heading,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { TEAM_DATA } from "src/data/TeamData";

import Instructors from "src/components/Instructors";

const TeamCard = ({ team }: { team: typeof TEAM_DATA[0] }) => {
  return (
    <Box maxW="xl" bg="white" rounded={"md"} overflow={"hidden"}>
      <Center>
        <Image
          src={team.image}
          alt={team.name}
          h={{ base: "300px", md: "500px" }}
          w={{ base: "300px", md: "500px" }}
        />
      </Center>
      <Box p={{ base: 5, md: 10 }}>
        <Text
          fontWeight="bolder"
          fontSize="xl"
          color="primary"
          textAlign={{ base: "center", md: "inherit" }}
        >
          {team.name}
        </Text>

        <Box
          display="flex"
          my="2"
          alignItems="center"
          textAlign={{ base: "center", md: "inherit" }}
        >
          <Text color="primary" fontSize={{ base: "sm", md: "md" }}>
            {team.bio}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const AboutUsPage = () => {
  return (
    <Box>
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
            History of Motive Africa Visual Academy
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            mt={10}
            color={useColorModeValue("gray.600", "gray.400")}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            quo, et sint harum vero culpa. Fugiat officia quia magni omnis iste
            tempore odio architecto, facere minima, id, optio ipsa
            reprehenderit.
          </Text>
        </VStack>
      </Box>

      <Container maxW={"7xl"} my={10} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"} color="primary">
          <Heading
            fontSize="4xl"
            fontWeight="bold"
            bgGradient="linear(to-t, #94f1a5,#0c600e)"
            bgClip="text"
          >
            Our Team{" "}
          </Heading>
          <Text
            fontSize="md"
            textAlign="center"
            pt={4}
            maxW={{ base: "80%", md: "60%" }}
            color={useColorModeValue("gray.600", "gray.400")}
          >
            We are made up of a team that that is after a particular goal, which
            is to provide free impact of photography to our students.
          </Text>
        </Stack>
        <Box my={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacingX={8}>
            {TEAM_DATA.map((team, index) => (
              <TeamCard key={index} team={team} />
            ))}
          </SimpleGrid>
        </Box>
        <Instructors />
      </Container>
    </Box>
  );
};

export default AboutUsPage;
