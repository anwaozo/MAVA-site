import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import AboutUs from "src/components/AboutUs";
import Faqs from "src/components/Faqs/faq";
import Hero from "src/components/Layout/Hero";
import Testimonials from "src/components/Testimonials/Testimonials";
import Workshop from "src/components/Workshop/Workshop";

const HomePage = () => {
  return (
    <Box>
      <Hero />
      <AboutUs />
      <Testimonials />
      <Workshop />
      <Faqs />
    </Box>
  );
};

export default HomePage;
