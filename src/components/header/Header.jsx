import React, { useState } from "react";
import LogoImage from "../../assets/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  List,
  ListItem,
  Stack,
  UnorderedList,
  InputGroup,
  Input,
  InputRightElement,
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

  //create an array of the navs
  const navs = ["Home", "Categories", "About Us", "Contact Us"];
  return (
    <Box
      w={"100%"}
      bg={"#FFFFFF"}
      h="70px"
      display="flex"
      alignItems="center"
      alignContent={"center"}
      justifyContent="space-between"
      pl={{ base: "1%", md: "2%", lg: "2.5%" }}
      pr={{ base: "1%", md: "2%", lg: "2.5%" }}
      pt="20px"
      pb="20px"
    >
      {/* Logo */}
      <Box mb={"20px"}>
        <img src={LogoImage} alt="logo" />
      </Box>

      {/* Nav links */}
      <Box>
        <UnorderedList
          display={{ base: "none", lg: "flex" }}
          justifyContent="center"
        >
          <List fontWeight="medium">
            <Stack direction="row" spacing={10}>
              {/* dynamically mapped through the navs */}
              {navs.map((nav, index) => (
                <ListItem
                  key={index}
                  position="relative"
                  onClick={() => handleItemClick(index)}
                  cursor="pointer"
                >
                  <Link to={`/${nav.toLowerCase().replace(" ", "-")}`}>
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
                    {nav}
                  </Link>
                </ListItem>
              ))}
            </Stack>
          </List>
        </UnorderedList>
      </Box>

      {/* Search box */}
      <Box>
        <InputGroup>
          <Input
            type="text"
            placeholder="Search for a Product"
            borderRadius="2xl"
            focusBorderColor="#F5F5F5"
            outline="none"
            bg={"#F5F5F5"}
            w="350px"
          />
          <InputRightElement pointerEvents="none">
            <SearchIcon color="black.200" />
          </InputRightElement>
        </InputGroup>
      </Box>
      {/* Sign in & Cart */}
      <Box>
        {/* cart */}
        <Stack direction="row" spacing={4}>
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
