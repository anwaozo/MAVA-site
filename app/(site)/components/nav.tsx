"use client";
import React, { useEffect, useState } from "react";
import MainHeader from "./main-header";
import SubHeader from "./sub-header";

const NavBar = () => {
  const [onScroll, setOnScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setOnScroll(true);
      } else {
        setOnScroll(false);
      }
    });
  }, []);
  return onScroll ? <SubHeader /> : <MainHeader />;
};

export default NavBar;
