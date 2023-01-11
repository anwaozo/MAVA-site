import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import AboutUs from "src/components/AboutUs";
import Faqs from "src/components/Faqs/faq";
import Hero from "src/components/Layout/Hero";
import Testimonials from "src/components/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <Box>
      <Hero />
      <AboutUs />
      <Testimonials />
      <Faqs />
    </Box>
  );
};

export default HomePage;
