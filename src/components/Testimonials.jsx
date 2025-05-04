import {
  Box,
  Flex,
  Heading,
  Text,
  Avatar,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const MotionBox = motion(Box);

const testimonials = [
  {
    name: "Sara Wilsson",
    role: "Designer",
    content:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
  {
    name: "John Doe",
    role: "Developer",
    content:
      "Dolorem excepturi esse qui amet maxime quibusdam aut repellendus voluptatum. Corrupti enim a repellat cumque est laborum fuga consequuntur. Dolorem nostrum deleniti quas voluptatem iure dolorum rerum.",
  },
];

export default function Testimonials() {
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
            Testimonials
          </Heading>
          <Text maxWidth="600px" mx="auto">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur vel illum qui dolorem
          </Text>
        </MotionBox>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={10}
          width="100%"
        >
          {testimonials.map((testimonial, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              flex={1}
              bg="gray.50"
              p={8}
              borderRadius="lg"
              position="relative"
            >
              <Icon
                as={FaQuoteLeft}
                boxSize={6}
                color="blue.500"
                mb={4}
                opacity={0.2}
              />
              <Text mb={6} fontStyle="italic">
                {testimonial.content}
              </Text>
              <Divider mb={4} />
              <Flex align="center">
                <Avatar name={testimonial.name} mr={4} />
                <Box>
                  <Text fontWeight="bold">{testimonial.name}</Text>
                  <Text color="gray.600">{testimonial.role}</Text>
                </Box>
              </Flex>
            </MotionBox>
          ))}
        </Stack>
      </Flex>
    </Box>
  );
}
