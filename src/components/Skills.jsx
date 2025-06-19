import {
  Box,
  Flex,
  Heading,
  Text,
  Progress,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const skills = [
  {
    name: "HTML",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    value: 90,
  },
  {
    name: "CSS",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    value: 90,
  },
  {
    name: "JavaScript",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor.",
    value: 80,
  },
  {
    name: "Photoshop",
    description: "Quis autem vel eum iure reprehenderit qui in ea voluptate.",
    value: 55,
  },
];

export default function Skills() {
  return (
    <Box py={20} px={{ base: 4, md: 8 }} bg="gray.50">
      <Flex direction="column" align="center" maxWidth="1200px" mx="auto">
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          textAlign="center"
          mb={12}
        >
          <Heading as="h2" size="xl" mb={4}>
            My Skills
          </Heading>
          <Text maxWidth="600px" mx="auto">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur vel illum qui dolorem
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} width="100%">
          {skills.map((skill, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Heading as="h3" size="md" mb={2}>
                {skill.name}
              </Heading>
              <Text mb={2} color="gray.600">
                {skill.description}
              </Text>
              <Progress
                value={skill.value}
                size="sm"
                colorScheme="blue"
                borderRadius="full"
              />
              <Text textAlign="right" mt={1} fontSize="sm">
                {skill.value}%
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}

// This component is a related to Skills page
