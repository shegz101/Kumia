import React from "react";
import "./Header.css";
import LogoImage from "../../assets/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import {
  Box,
  Button,
  ButtonGroup,
  List,
  ListItem,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      w="95%"
      h="50px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      ml="2.5%"
      mr="2.5%"
      backgroundColor=""
    >
      {/* Logo */}
      <Box>
        <img src={LogoImage} style={{ width: "80px" }} alt="logo" />
      </Box>
      {/* Nav links */}
      <Box>
        <UnorderedList mt="20px">
          <List fontWeight="medium">
            <Stack direction="row" spacing={6}>
              <ListItem>Home</ListItem>
              <ListItem>Contact Us</ListItem>
            </Stack>
          </List>
        </UnorderedList>
      </Box>
      {/* Sign in & Cart */}
      <Box mt="20px">
        {/* cart */}
        <ButtonGroup>
          <Box>
            <Button
              size="md"
              bg="rgb(249, 250, 251)"
              color="white"
              sx={{
                "&:hover": {
                  // Your custom hover styles here
                  backgroundColor: "rgba(249, 250, 251, 0.5)",
                },
              }}
            >
              <FiShoppingCart />
            </Button>
          </Box>
          <Box as="span" fontSize="1.0em" verticalAlign="super">
            0
          </Box>

          <Button size="md" bg="#0000ff" color="white">
            Sign in
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default Header;
