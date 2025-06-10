import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  Input,
  Textarea,
  Button,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const MotionBox = motion(Box);

export default function Contact() {
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
            Contact
          </Heading>
          <Text maxWidth="600px" mx="auto">
            Nemo enim ipsam voluptatem quia voluptas
          </Text>
        </MotionBox>

        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={10}
          width="100%"
        >
          <GridItem>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form>
                <Flex direction="column" gap={4}>
                  <Input placeholder="Your Name" size="lg" bg="white" />
                  <Input placeholder="Your Email" size="lg" bg="white" />
                  <Input placeholder="Subject" size="lg" bg="white" />
                  <Textarea
                    placeholder="Message"
                    size="lg"
                    bg="white"
                    rows={6}
                  />
                  <Button colorScheme="blue" size="lg" width="full">
                    Send Message
                  </Button>
                </Flex>
              </form>
            </MotionBox>
          </GridItem>
          <GridItem>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Text mb={6}>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam.
              </Text>

              <Flex direction="column" gap={6}>
                <Flex align="center" gap={4}>
                  <Icon as={FiMapPin} boxSize={6} color="blue.500" />
                  <Box>
                    <Text fontWeight="bold">Location:</Text>
                    <Text>A108 Adam Street, New York, NY 535022</Text>
                  </Box>
                </Flex>

                <Flex align="center" gap={4}>
                  <Icon as={FiMail} boxSize={6} color="blue.500" />
                  <Box>
                    <Text fontWeight="bold">Email:</Text>
                    <Text>info@example.com</Text>
                  </Box>
                </Flex>

                <Flex align="center" gap={4}>
                  <Icon as={FiPhone} boxSize={6} color="blue.500" />
                  <Box>
                    <Text fontWeight="bold">Call:</Text>
                    <Text>+1 5589 55488 558</Text>
                  </Box>
                </Flex>
              </Flex>

              <Button
                mt={8}
                variant="outline"
                rightIcon={<Icon as={FiMapPin} />}
              >
                Open Map
              </Button>
            </MotionBox>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
}

// this component is related to contact-us page
