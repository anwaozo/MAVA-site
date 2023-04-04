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
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { TEAM_DATA } from "src/data/TeamData";

import Instructors from "src/components/Instructors";

const TeamCard = ({ team }: { team: typeof TEAM_DATA[0] }) => {
  const [showBio, setShowBio] = useState(false);

  return (
    <Box maxW="xl" bg="white" rounded={"md"} overflow={"hidden"}>
      <Center>
        <Image
          src={team.image}
          alt={team.name}
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
          {team.name}
        </Text>

        <Box
          display="flex"
          my="2"
          flexDirection="column"
          alignItems={{ base: "center", md: "inherit" }}
        >
          <Text
            color="primary"
            fontSize={{ base: "sm", md: "md" }}
            maxH={!showBio ? "3.6rem" : "none"}
            overflow="hidden"
            textAlign="justify"
          >
            {team.bio}
          </Text>
          {!showBio && (
            <>
              <br />
              <Button
                size="xs"
                variant="outline"
                onClick={() => setShowBio(true)}
                display="block"
              >
                Read More
              </Button>
            </>
          )}
          {showBio && (
            <>
              <br />
              <Button
                size="xs"
                variant="outline"
                onClick={() => setShowBio(false)}
                display="block"
              >
                Read Less
              </Button>
            </>
          )}
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
            History of MAVA
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            mt={10}
            color={useColorModeValue("gray.600", "gray.400")}
            overflow="hidden"
            textAlign="justify"
          >
            About 70% of the Youth in Africa lack access to learn visual skills
            such as photography and cinematography. This means that 7 out of 10
            people cannot afford to learn due to the high and unaffordable
            learning cost.
            <br />
            <br /> In 2020 we identified this problem and have experienced it
            ourselves, we set out with a team of volunteers to solve this
            problem of inability to afford the cost of acquiring visual skills
            by organising free photography workshops to help passionate
            individuals learn.
            <br /> On the 18th of January 2021, the first batch of the Free
            Photography Workshop commenced. In two years we have trained over a
            hundred people and a handful of them who are practising have a
            better livelihood. <br />
            <br />
            Everyone deserves equal access to opportunities irrespective of
            their backgrounds, races and religious belief. and lack of resources
            should not hinder anyone from acquiring visual skills.
            <br /> Motive Africa Visual Academy helps individuals who can't
            afford visual skills learn.
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
            fontSize={{ base: "sm", md: "md" }}
            mt={10}
            color={useColorModeValue("gray.600", "gray.400")}
            overflow="hidden"
            textAlign="center"
          >
            Our team consist of experienced tutors who have visual skills and
            train the students three times a week within the space of two
            months. We also have volunteers who support the organization to
            actualize the vision.
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
