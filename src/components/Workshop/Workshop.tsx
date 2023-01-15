import { Box, BoxProps, Flex, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { WORKSHOP_DATA } from "src/data/WorkshopImages";
import React, { useRef, useEffect, useState } from "react";

const Workshop = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <Box mx={{ base: "0%", md: "20%" }} my="10%">
      <Heading
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="bold"
        color="black"
        textAlign={"center"}
        bgGradient="linear(to-t, #94f1a5,#0c600e)"
        bgClip="text"
      >
        Our Workshop
      </Heading>
      <Box as={motion.div} ref={carousel} cursor="grab" overflow={"hidden"}>
        <Flex
          as={motion.div}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {WORKSHOP_DATA.map((image, index) => (
            <Box
              key={index}
              flex="none"
              h={{ base: "297px", md: "520px" }}
              w={{ base: "206px", md: "400px" }}
              borderRadius="5px"
              zIndex={"10"}
              mt="3rem"
              ml="2rem"
              p={{ base: "0px", md: "40px" }}
            >
              <Image
                src={image.img}
                alt="images"
                borderRadius="2rem"
                pointerEvents="none"
                w={{ base: "100%", md: "100%" }}
                h={{ base: "100%", md: "100%" }}
                boxShadow="2xl"
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Workshop;
