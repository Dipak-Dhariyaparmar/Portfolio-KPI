import { Box, Flex, Heading, Text, Button, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Hero() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minHeight="100vh"
      padding={{ base: "4", md: "8" }}
      bg="gray.50"
      pt="80px"
    >
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        textAlign="center"
        maxWidth="800px"
        mb={12}
      >
        <Heading as="h1" size="2xl" mb={6} fontWeight="extrabold">
          Crafting Digital Experiences with Passion
        </Heading>
        <Text fontSize="xl" mb={8}>
          Transforming ideas into elegant solutions through creative design and
          innovative development
        </Text>
        <Flex justify="center" gap={4}>
          <Button colorScheme="blue" size="lg">
            View My Work
          </Button>
          <Button variant="outline" size="lg">
            Let's Connect
          </Button>
        </Flex>
      </MotionBox>

      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={10}
        width="100%"
        maxWidth="800px"
        mt={12}
      >
        {[
          { value: "5+", label: "Years Experience" },
          { value: "100+", label: "Projects Completed" },
          { value: "50+", label: "Happy Clients" },
        ].map((item, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            textAlign="center"
            p={6}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
          >
            <Heading as="h3" size="xl" mb={2} color="blue.500">
              {item.value}
            </Heading>
            <Text fontSize="lg">{item.label}</Text>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
