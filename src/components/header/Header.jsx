import React, { useState } from "react";
import "./Header.css";
import LogoImage from "../../assets/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  List,
  ListItem,
  Stack,
  UnorderedList,
  Text,
} from "@chakra-ui/react";

const cart_count = 0;

const cart_btn = (
  <Button
    size="md"
    bg="#0000ff"
    color="white"
    _hover={{ bg: "#6699FF" }}
    rightIcon={cart_count}
    gap={1}
    variant="solid"
  >
    <FiShoppingCart />
  </Button>
);

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const items = ["Home", "Contact Us"];
  return (
    <Box
      w={{ base: "98%", lg: "95%" }}
      h="50px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      ml={{ base: "1%", md: "2%", lg: "2.5%" }}
      mr={{ base: "1%", md: "2%", lg: "2.5%" }}
    >
      {/* Logo */}
      <Box>
        <img src={LogoImage} style={{ width: "80px" }} alt="logo" />
      </Box>
      {/* Nav links */}
      <Box>
        <UnorderedList
          mt="20px"
          display={{ base: "none", lg: "flex" }}
          justifyContent="center"
        >
          <List fontWeight="medium">
            <Stack direction="row" spacing={6}>
              {items.map((item, index) => (
                <ListItem
                  key={index}
                  position="relative"
                  onClick={() => handleItemClick(index)}
                  cursor="pointer"
                >
                  <Link to={`/${item.toLowerCase().replace(" ", "-")}`}>
                    {activeIndex === index && (
                      <Box
                        position="absolute"
                        bottom={0}
                        left="50%"
                        transform="translateX(-50%)"
                        width="100%"
                        height="2px"
                        bg="#0000ff"
                        opacity={0.8}
                        borderRadius="sm"
                      />
                    )}
                    {item}
                  </Link>
                </ListItem>
              ))}
            </Stack>
          </List>
        </UnorderedList>
      </Box>
      {/* Sign in & Cart */}
      <Box mt="20px">
        {/* cart */}
        <Stack direction="row" spacing={4}>
          <Text mt="10px" fontSize="15px" fontWeight="medium" cursor="pointer">
            My Orders
          </Text>

          {/* Cart Button */}
          {cart_btn}

          <Button
            size="md"
            bg="#0000ff"
            color="white"
            _hover={{ bg: "#6699FF" }}
          >
            Sign in
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Header;

// sx={{
//   "&:hover": {
//     // Your custom hover styles here
//     backgroundColor: "rgba(249, 250, 251, 0.5)",
//   },
// }}
