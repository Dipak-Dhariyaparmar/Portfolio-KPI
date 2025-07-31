import { Box, Flex, Text, Link, Icon } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <Box bg="gray.800" color="white" py={10}>
      <Flex
        direction="column"
        align="center"
        maxWidth="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
      >
        <Text mb={6} textAlign="center">
          © Copyright <strong>EasyFolio</strong>. All Rights Reserved
        </Text>
        <Text mb={6} textAlign="center">
          Designed by{" "}
          <Link href="#" color="blue.400">
            BootstrapMade
          </Link>
        </Text>
        <Flex gap={4}>
          <Link href="#" _hover={{ color: "blue.400" }}>
            Terms of Service
          </Link>
          <Link href="#" _hover={{ color: "blue.400" }}>
            Privacy Policy
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
// This component is related to footer
