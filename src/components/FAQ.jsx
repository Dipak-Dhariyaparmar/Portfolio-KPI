import {
  Box,
  Flex,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const faqItems = [
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question: "Feugiat scelerisque varius morbi enim nunc faucibus?",
    answer: "Answer for question 2",
  },
  {
    question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
    answer: "Answer for question 3",
  },
  {
    question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    answer: "Answer for question 4",
  },
  {
    question: "Tempus quam pellentesque nec nam aliquam sem et tortor?",
    answer: "Answer for question 5",
  },
  {
    question: "Perspiciatis quod quo quos nulla quo illum ullam?",
    answer: "Answer for question 6",
  },
];

export default function FAQ() {
  return (
    <Box py={20} px={{ base: 4, md: 8 }} bg="white">
      <Flex direction="column" align="center" maxWidth="1200px" mx="auto">
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          textAlign="center"
          mb={12}
        >
          <Heading as="h2" size="xl" mb={4}>
            Frequently Asked Questions
          </Heading>
          <Text maxWidth="600px" mx="auto">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur vel illum qui dolorem
          </Text>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          width="100%"
          maxWidth="800px"
        >
          <Accordion allowToggle>
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                mb={4}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
              >
                <AccordionButton py={4} px={6} _hover={{ bg: "gray.50" }}>
                  <Box flex="1" textAlign="left" fontWeight="semibold">
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} px={6}>
                  {item.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionBox>
      </Flex>
    </Box>
  );
}

// this component is related to FAQ page
