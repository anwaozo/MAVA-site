import {
  Box,
  Heading,
  Stack,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "./Card";

const Testimonials = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12} px={0}>
        <Stack spacing={0} align={"center"}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            color="black"
            textAlign={"center"}
            bgGradient="linear(to-t, #94f1a5,#0c600e)"
            bgClip="text"
          >
            Students Testimony
          </Heading>
        </Stack>

        <Card />
      </Container>
    </Box>
  );
};
export default Testimonials;
