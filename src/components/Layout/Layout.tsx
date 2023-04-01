import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack>
      <Navbar />
      <Box>{children}</Box>
      <Footer />
    </Stack>
  );
};

export default Layout;
