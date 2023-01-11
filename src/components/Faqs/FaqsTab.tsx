import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FAQS_ITEMS } from "src/data/TabData";

const FaqsTab = () => {
  return (
    <Stack
      spacing="4"
      direction="column"
      justify={{ base: "center", md: "flex-end" }}
    >
      {FAQS_ITEMS.map((item, index) => (
        <Accordion
          allowMultiple
          width={{ base: "330px", md: "700px", lg: "900px" }}
          backgroundImage="url('./static/MAVA-Website-BG (2).jpg')"
          key={index}
        >
          <AccordionItem border={"none"}>
            <h2>
              <AccordionButton
                _hover={{ bg: "white" }}
                _focus={{ boxShadow: "none" }}
              >
                <Box py="2" flex="1" textAlign="left">
                  {item.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </Stack>
  );
};

export default FaqsTab;
