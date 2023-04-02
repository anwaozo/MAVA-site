import { Flex, Avatar, Stack, Text, Box } from "@chakra-ui/react";
import { CARD_DATA } from "src/data/TestimonialData";

import React, { useEffect, useRef, useState } from "react";
import {
  Testimonial,
  TestimonialContent,
  TestimonialText,
} from "./TestimonialContent";
import { motion } from "framer-motion";
import useInterval from "use-interval";

const Card = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null!);
  const [scrollPosition, setScrollPosition] = useState(0); // keep track of the current scroll position

  useEffect(() => {
    setWidth(
      carousel.current?.scrollWidth - carousel.current?.offsetWidth || 0
    );
  }, []);

  // useInterval hook to update the scroll position every 10 milliseconds
  useInterval(() => {
    setScrollPosition((scrollPosition + 1) % width);
  }, 10);

  return (
    <>
      <Box as={motion.div} ref={carousel} cursor="grab" overflow={"hidden"}>
        <Flex
          as={motion.div}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          ml="-3rem"
          style={{ transform: `translateX(-${scrollPosition}px)` }} // update the position of the carousel
          dragElastic={0.8}
          dragMomentum={true}
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
