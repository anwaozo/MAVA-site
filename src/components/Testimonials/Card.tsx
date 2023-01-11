import { Flex, Avatar, Stack, useColorModeValue, Text } from "@chakra-ui/react";
import { CARD_DATA } from "src/data/TestimonialData";

import React from "react";
import {
  Testimonial,
  TestimonialContent,
  TestimonialText,
} from "./TestimonialContent";

const Card = () => {
  return (
    <>
      {CARD_DATA.map((data, index) => (
        <Testimonial key={index}>
          <TestimonialContent>
            <TestimonialText>{data.text}</TestimonialText>
          </TestimonialContent>
          <Flex align={"center"} mt={8} direction={"column"}>
            <Avatar h="100%" w="20%" src={data.img} mb={2} />
            <Stack spacing={-1} align={"center"}>
              <Text fontWeight={600}>{data.name}</Text>
            </Stack>
          </Flex>
        </Testimonial>
      ))}
    </>
  );
};

export default Card;
