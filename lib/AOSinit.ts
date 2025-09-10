import AOS from "aos";

export const initializeAOS = () => {
  AOS.init({
    duration: 1000,
    once: true,
  });
};
