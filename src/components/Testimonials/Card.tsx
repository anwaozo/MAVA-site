import { Flex, Avatar, Stack, Text, Box } from "@chakra-ui/react";
import { CARD_DATA } from "src/data/TestimonialData";

import React, { useEffect, useRef, useState } from "react";
import {
  Testimonial,
  TestimonialContent,
  TestimonialText,
} from "./TestimonialContent";
import { motion } from "framer-motion";

const Card = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);
  return (
    <>
      <Box as={motion.div} ref={carousel} cursor="grab" overflow={"hidden"}>
        <Flex
          as={motion.div}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
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
        </Flex>
      </Box>
    </>
  );
};

export default Card;
