import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

type Image = {
  id: number;
  src: string;
  alt: string;
  category: string;
};
type ImageGridProps = {
  images: Image[];
};

const ImageGrid = ({ images }: ImageGridProps) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
      gap={4}
    >
      {images.map((image) => (
        <motion.div
          key={image.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          <img src={image.src} alt={image.alt} />
        </motion.div>
      ))}
    </Box>
  );
};

export default ImageGrid;
