import { Box, Image } from "@chakra-ui/react";
import React from "react";

const MavaLogo = () => {
  return (
    <Box mt="1rem">
      <Image
        w={{ base: "150px", lg: "200px" }}
        objectFit="cover"
        src="./static/mavalogo.png"
        alt="Logo"
      />
    </Box>
  );
};

export default MavaLogo;

export const MavaLogoB = ({
  isFooter,
  width,
}: {
  isFooter?: boolean;
  width?: { base: string; md: string };
}) => {
  return (
    <Box mt="1rem">
      <Image
        w={{ base: "150px", lg: "200px" }}
        objectFit="cover"
        src={`/static/${isFooter ? "MAVA white" : "MAVA white"}.png`}
        alt="Logo"
      />
    </Box>
  );
};
