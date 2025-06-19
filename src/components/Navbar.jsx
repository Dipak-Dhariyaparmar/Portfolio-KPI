import {
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="white"
      color="gray.800"
      boxShadow="sm"
      position="fixed"
      width="100%"
      zIndex="10"
    >
      <Flex align="center" mr={5}>
        <Text fontSize="xl" fontWeight="bold">
          EasyFolio
        </Text>
      </Flex>

      <Box display={{ base: "block", md: "none" }}>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<HamburgerIcon />}
            variant="outline"
          >
            Menu
          </MenuButton>
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Resume</MenuItem>
            <MenuItem>
              Portfolio <ChevronDownIcon />
            </MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Contact</MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <Flex direction="row" gap={6} ml={10}>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Resume</Button>
          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              rightIcon={<ChevronDownIcon />}
            >
              Portfolio
            </MenuButton>
            <MenuList>
              <MenuItem>Web Design</MenuItem>
              <MenuItem>Graphics</MenuItem>
              <MenuItem>Motion</MenuItem>
              <MenuItem>Branding</MenuItem>
            </MenuList>
          </Menu>
          <Button variant="ghost">Services</Button>
          <Button variant="ghost">Contact</Button>
        </Flex>
      </Box>
    </Flex>
  );
}

// This component is a related to Navbar page
