import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Tag,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const portfolioItems = [
  {
    category: "WEB DESIGN",
    title: "Modern Dashboard Interface",
    description:
      "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    category: "GRAPHICS",
    title: "Creative Brand Identity",
    description:
      "Vestibulum id ligula porta felis euismod semper at vulputate.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    category: "MOTION",
    title: "Product Animation Reel",
    description: "Donec ullamcorper nulla non metus auctor fringilla dapibus.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    category: "BRANDING",
    title: "Luxury Brand Package",
    description: "Aenean lacinia bibendum nulla sed consectetur elit.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    category: "WEB DESIGN",
    title: "E-commerce Platform",
    description: "Nullam id dolor id nibh ultricies vehicula ut id elit.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    category: "GRAPHICS",
    title: "Digital Art Collection",
    description: "Cras mattis consectetur purus sit amet fermentum.",
    image: "https://via.placeholder.com/600x400",
  },
];

export default function Portfolio() {
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
            Portfolio
          </Heading>
          <Text maxWidth="600px" mx="auto">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur vel illum qui dolorem
          </Text>
        </MotionBox>

        <Flex mb={8} wrap="wrap" justify="center" gap={2}>
          {["All Work", "Web Design", "Graphics", "Motion", "Branding"].map(
            (item, index) => (
              <Button
                key={index}
                variant={index === 0 ? "solid" : "outline"}
                colorScheme={index === 0 ? "blue" : "gray"}
                size="sm"
                mx={1}
              >
                {item}
              </Button>
            )
          )}
        </Flex>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={6}
          width="100%"
        >
          {portfolioItems.map((item, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
              //   transition="all 0.3s ease"
            >
              <Image
                src={item.image}
                alt={item.title}
                objectFit="cover"
                height="200px"
                width="100%"
              />
              <Box p={4}>
                <Tag colorScheme="blue" mb={2}>
                  {item.category}
                </Tag>
                <Heading as="h3" size="md" mb={2}>
                  {item.title}
                </Heading>
                <Text color="gray.600">{item.description}</Text>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}

// this component is related to portfolio page
