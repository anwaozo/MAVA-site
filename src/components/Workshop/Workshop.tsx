import {
  Box,
  Flex,
  Heading,
  Image,
  useColorModeValue,
  Text,
  Button,
  VStack,
  Link,
  chakra,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  color,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { WORKSHOP_DATA } from "src/data/WorkshopImages";
import React, { useRef, useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import useInterval from "use-interval";

const Workshop = () => {
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

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <chakra.section id="workshop" bg="white" py="10%">
      <Box mx={{ base: "0%", md: "20%" }}>
        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          color="black"
          textAlign={"center"}
          bgGradient="linear(to-t, #94f1a5,#0c600e)"
          bgClip="text"
        >
          Visual Skills
        </Heading>
        <Flex
          px="20px"
          py="10px"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
        >
          <Text
            fontSize={{ base: "md", md: "lg" }}
            lineHeight={{ md: "8" }}
            textAlign={{ base: "center", lg: "center" }}
            color={useColorModeValue("gray.600", "gray.400")}
            fontWeight="bold"
          >
            {/* We are delighted to announce that registration for the 7th cohort of
            the Free Photography Workshop by MAVA commences today. We are
            committed to bridging the gap and helping individuals who can't
            afford visual skills acquire them. */}
            Check out our
            <Text
              mt="1rem"
              fontWeight="bold"
              fontSize={{ base: "lg", md: "lg" }}
            >
              Register below&nbsp;
            </Text>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ display: "inline-block" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="2.5rem"
                height="2.5rem"
                style={{ marginLeft: "0.5rem" }}
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </motion.div>
          </Text>
        </Flex>

        <Box as={motion.div} ref={carousel} cursor="grab" overflow={"hidden"}>
          <Flex
            as={motion.div}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            style={{ transform: `translateX(-${scrollPosition}px)` }} // update the position of the carousel
            dragElastic={0.8}
            dragMomentum={true}
          >
            {WORKSHOP_DATA.map((image, index) => (
              <Box
                key={index}
                flex="none"
                h={{ base: "397px", md: "500px" }}
                w={{ base: "295px", md: "400px" }}
                borderRadius="5px"
                zIndex={"10"}
                mt="3rem"
                ml={{ base: "20px", md: "0px" }}
                p={{ base: "0px", md: "20px" }}
              >
                <Image
                  src={image.img}
                  alt="images"
                  borderRadius="2rem"
                  pointerEvents="none"
                  w={{ base: "100%", md: "100%" }}
                  h={{ base: "100%", md: "100%" }}
                  boxShadow="lg"
                />
              </Box>
            ))}
          </Flex>
        </Box>
        {/* <Flex alignItems={"center"} justifyContent="center">
          <Image
            src="/static/photography image.jpg"
            w={{ base: "350px", xl: "450px" }}
          />
        </Flex> */}

        <VStack w={{ base: "full", md: "full", lg: "full" }}>
          <Button
            // as={Link}
            // href="http://www.linktr.ee/exploremava"
            color="#fff"
            bgGradient="linear(to-l, #94f1a5, #0c600e)"
            w={{ base: "80%", md: "50%" }}
            borderRadius="20px"
            boxShadow="md"
            my="20px"
            onClick={onOpen}
            _focus={{ bgGradient: "linear(to-l, #94f1a5, #0c600e)" }}
            _hover={{
              bgGradient: "linear(to-l, #94f1a5, #0c600e)",
              textDecoration: "none",
            }}
          >
            Register Now
          </Button>
          <Button
            as={Link}
            href="https://wa.me/message/G2VVPCEPV2NUE1"
            leftIcon={<BsWhatsapp />}
            color="#fff"
            bgGradient="linear(to-l, #94f1a5, #0c600e)"
            borderRadius="20px"
            boxShadow="md"
            my="20px"
            w={{ base: "80%", md: "50%" }}
            _hover={{
              bgGradient: "linear(to-l, #94f1a5, #0c600e)",
              textDecoration: "none",
            }}
            _focus={{ bgGradient: "linear(to-l, #94f1a5, #0c600e)" }}
          >
            Chat with Us
          </Button>
          <Text fontWeight={"bold"}></Text>
        </VStack>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent
            bgGradient="linear(to-l, #94f1a5, #0c600e)"
            borderRadius="10px"
            boxShadow="md"
            p={{ base: "20px", md: "30px" }}
            m={{ base: "20px" }}
          >
            <ModalHeader
              textAlign="center"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              bgGradient="linear(to-t, red,#fff)"
              bgClip="text"
            >
              Not Available
            </ModalHeader>
            <ModalBody>
              <VStack spacing={4} textAlign="center">
                <p style={{ fontSize: "18px", color: "white" }}>
                  The Free Photography Workshop is currently not in session.
                  Follow our social media handles for more updates on the next
                  Free Photography Workshop or chat with us on WhatsApp for our
                  private classes.
                </p>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </chakra.section>
  );
};

export default Workshop;
