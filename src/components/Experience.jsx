import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const MotionBox = motion(Box);

const experienceItems = [
  {
    title: "Project Lead",
    company: "Etiam Industries",
    period: "Jun, 2023 - Current",
    description:
      "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila",
  },
  {
    title: "Senior graphic design specialist",
    company: "Nullam Corp",
    period: "2019 - 2023",
    description:
      "Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.",
    bullets: [
      "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
      "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
      "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design",
      "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000",
    ],
  },
  {
    title: "Graphic design specialist",
    company: "Stepping Stone Ltd.",
    period: "2015-2019",
    description:
      "Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.",
  },
];

const educationItems = [
  {
    degree: "Diploma in Consequat",
    institution: "Vestibulum University",
    period: "2017-2019",
    description:
      "Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.",
  },
  {
    degree: "Master of Fine Arts & Graphic Design",
    institution: "Nullam Corp",
    period: "2019 - 2023",
    description:
      "Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.",
  },
  {
    degree: "Bachelor of Fine Arts & Graphic Design",
    institution: "Vestibulum University",
    period: "2015-2019",
    description:
      "Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.",
  },
];

export default function Experience() {
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
            Resume
          </Heading>
          <Text maxWidth="600px" mx="auto">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur vel illum qui dolorem
          </Text>
        </MotionBox>

        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={10}
          width="100%"
        >
          <GridItem>
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Flex align="center" mb={6}>
                <Icon as={FaBriefcase} boxSize={6} color="blue.500" mr={3} />
                <Heading as="h3" size="lg">
                  Work Experience
                </Heading>
              </Flex>

              <Text mb={6}>
                Maecenas tempus tellus eget condimentum rhoncus sem quam semper
                libero sit amet adipiscing sem neque sed ipsum.
              </Text>

              {experienceItems.map((item, index) => (
                <Box key={index} mb={8}>
                  <Flex justify="space-between" mb={2}>
                    <Text fontWeight="bold">{item.title}</Text>
                    <Tag colorScheme="blue">{item.period}</Tag>
                  </Flex>
                  <Text fontStyle="italic" mb={2}>
                    {item.company}
                  </Text>
                  <Text mb={3}>{item.description}</Text>
                  {item.bullets && (
                    <List spacing={2}>
                      {item.bullets.map((bullet, i) => (
                        <ListItem
                          key={i}
                          display="flex"
                          alignItems="flex-start"
                        >
                          <ListIcon
                            // as={FaCircle}
                            boxSize={3}
                            mt={1}
                            color="blue.500"
                          />
                          {bullet}
                        </ListItem>
                      ))}
                    </List>
                  )}
                </Box>
              ))}
            </MotionBox>
          </GridItem>

          <GridItem>
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Flex align="center" mb={6}>
                <Icon
                  as={FaGraduationCap}
                  boxSize={6}
                  color="blue.500"
                  mr={3}
                />
                <Heading as="h3" size="lg">
                  My Education
                </Heading>
              </Flex>

              <Text mb={6}>
                Maecenas tempus tellus eget condimentum rhoncus sem quam semper
                libero sit amet adipiscing.
              </Text>

              {educationItems.map((item, index) => (
                <Box key={index} mb={8}>
                  <Flex justify="space-between" mb={2}>
                    <Text fontWeight="bold">{item.degree}</Text>
                    <Tag colorScheme="blue">{item.period}</Tag>
                  </Flex>
                  <Text fontStyle="italic" mb={2}>
                    {item.institution}
                  </Text>
                  <Text>{item.description}</Text>
                </Box>
              ))}
            </MotionBox>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
}
// This component is related to Experince page
