import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { GalleryType, GALLERY_DATA } from "../data/GalleryImages";

const Gallery: React.FC = () => {
  const [category, setCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const categories: string[] = GALLERY_DATA.reduce(
    (acc: string[], image: GalleryType) => {
      if (!acc.includes(image.category)) {
        acc.push(image.category);
      }
      return acc;
    },
    ["All"]
  );

  const filteredImages: GalleryType[] = GALLERY_DATA.filter(
    (image: GalleryType) => category === "All" || image.category === category
  );

  const handleImageClick = (imageSrc: string): void => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setSelectedImage("");
    setIsModalOpen(false);
  };

  return (
    <Box
      maxW={{ base: "800px", md: "800px" }}
      mx="auto"
      mt={{ base: "5rem", md: "7rem" }}
    >
      <ButtonGroup
        size={{ base: "md", md: "lg" }}
        top={{ base: "2rem", md: "1rem" }}
        zIndex="1"
        variant={"outline"}
      >
        <Grid
          templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(6,1fr)" }}
          gap={2}
          mx={{ base: "1rem" }}
        >
          {categories.map((cat: string) => (
            <Button
              _active={{
                bgGradient: "linear(to-l, #94f1a5, #0c600e)",
                color: "white",
              }}
              key={cat}
              isActive={category === cat}
              onClick={() => setCategory(cat)}
              className={category === cat ? "active" : ""}
            >
              {cat}
            </Button>
          ))}
        </Grid>
      </ButtonGroup>

      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={{ base: 1, md: 4 }}
        mt="2rem"
        mx={{ base: "1rem" }}
      >
        {filteredImages.map((image: GalleryType) => (
          <GridItem key={image.id}>
            <Box w="100%" h="auto">
              <Image
                src={image.src}
                alt={image.alt}
                w="100%"
                h="200px" // set a fixed height for all images
                objectFit="cover" // stretch the image to fill the container without distorting aspect ratio
                onClick={() => handleImageClick(image.src)}
                cursor="pointer"
              />
            </Box>
          </GridItem>
        ))}
      </Grid>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={selectedImage}
              alt="Selected Image"
              w="100%"
              h="500px" // set a fixed height for the modal image
              objectFit="cover" // stretch the image to fill the container without distorting aspect ratio
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Gallery;
