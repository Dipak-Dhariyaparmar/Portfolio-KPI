import { Box, Flex, Heading, Text, SimpleGrid, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaPalette,
  FaCode,
  FaMobile,
  FaChartLine,
  FaCamera,
  FaServer,
} from "react-icons/fa";

const MotionBox = motion(Box);

const services = [
  {
    icon: FaPalette,
    title: "Consectetur adipiscing",
    description:
      "Vestibulum morbi blandit cursus risus at ultrices mi elit sed do eiusmod tempor",
  },
  {
    icon: FaCode,
    title: "Eget nulla facilisi etiam",
    description:
      "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor.",
  },
  {
    icon: FaMobile,
    title: "Duis aute irure dolor",
    description:
      "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent taciti sociosqu ad litora.",
  },
  {
    icon: FaChartLine,
    title: "Excepteur sint occaecat",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
  },
  {
    icon: FaCamera,
    title: "Ullamco laboris nisi",
    description:
      "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    icon: FaServer,
    title: "Tempus imperdiet nulla",
    description:
      "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
  },
];

export default function Services() {
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
            Services
          </Heading>
          <Text maxWidth="600px" mx="auto">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur vel illum qui dolorem
          </Text>
        </MotionBox>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={8}
          width="100%"
        >
          {services.map((service, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              bg="white"
              p={8}
              borderRadius="lg"
              boxShadow="md"
              textAlign="center"
              _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
            >
              <Icon as={service.icon} boxSize={10} color="blue.500" mb={4} />
              <Heading as="h3" size="md" mb={3}>
                {service.title}
              </Heading>
              <Text color="gray.600">{service.description}</Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
//This component is a related to Services
