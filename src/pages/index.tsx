import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import AboutUs from "src/components/Our Story";
import Faqs from "src/components/Faqs/faq";
import Hero from "src/components/Layout/Hero";
import Testimonials from "src/components/Testimonials/Testimonials";
import Workshop from "src/components/Workshop/Workshop";
import Head from "next/head";

const HomePage = () => {
  return (
    <Box>
      <Head>
        <title>Motive Africa Visual Academy</title>
      </Head>
      <Hero />
      <AboutUs />
      <Testimonials />
      <Workshop />
      <Faqs />
    </Box>
  );
};

export default HomePage;
