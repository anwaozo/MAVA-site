import { Box, Image, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { GALLERY_DATA } from "src/data/GalleryImages";

const GalleryMava = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {};
  return (
    <Box>
      {openModal && <Box></Box>}
      <Flex
        flexWrap={"wrap"}
        gap="10px"
        alignItems={"center"}
        justifyContent="center"
      >
        {GALLERY_DATA.map((slide, index) => (
          <Box key={index} cursor={"pointer"}>
            <Image
              src={slide.img}
              alt="images"
              w="400px"
              h="400px"
              _hover={{ transform: "scale(1.02)" }}
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default GalleryMava;
