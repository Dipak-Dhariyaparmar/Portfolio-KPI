import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function About() {
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
            About
          </Heading>
          <Text maxWidth="600px" mx="auto">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur vel illum qui dolorem
          </Text>
        </MotionBox>

        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={12}
          alignItems="center"
          width="100%"
        >
          <GridItem>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://via.placeholder.com/500"
                alt="Eliot Johnson"
                borderRadius="lg"
                boxShadow="lg"
              />
            </MotionBox>
          </GridItem>
          <GridItem>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Heading as="h3" size="lg" mb={4}>
                About Me
              </Heading>
              <Text fontSize="xl" mb={6}>
                Full Stack Software Developer
              </Text>
              <Text mb={6}>
                I'm Dipak Dhariyaparmar, a full-stack developer skilled in MERN stack, Next.js, NestJS, Java, C#, Python, DevOps, and an AI/ML enthusiast.
              </Text>
              <Text mb={8}>
                Passionate about building scalable web applications and always eager to learn emerging technologies.
              </Text>

              <Grid templateColumns="1fr 1fr" gap={6} mb={8}>
                {[
                  { label: "Name", value: "Eliot Johnson" },
                  { label: "Phone", value: "+123 456 7890" },
                  { label: "Age", value: "26 Years" },
                  { label: "Email", value: "email@example.com" },
                  { label: "Occupation", value: "Lorem Engineer" },
                  { label: "Nationality", value: "Ipsum" },
                ].map((item, index) => (
                  <Box key={index}>
                    <Text fontWeight="bold">{item.label}</Text>
                    <Text>{item.value}</Text>
                  </Box>
                ))}
              </Grid>
            </MotionBox>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
}
// This component is a related to about-us page
