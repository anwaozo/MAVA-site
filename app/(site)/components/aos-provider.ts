"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";
import { initializeAOS } from "@/lib/AOSinit";

const AOSProvider = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return null;
};

export default AOSProvider;
