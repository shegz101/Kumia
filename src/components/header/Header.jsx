import React, { useState } from "react";
import "./Header.css";
import LogoImage from "../../assets/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
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

const HamburgerIcon = ({ onClick, buttonType }) => (
  <Button
    size="md"
    bg="#0000ff"
    color="#ffffff"
    _hover={{ bg: "#6699FF" }}
    display={{ base: "block", lg: "none" }}
    onClick={onClick}
  >
    {buttonType}
  </Button>
);

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setNavOpen(!navOpen);
  };

  const [navOpen, setNavOpen] = useState(false);

  //create an array of the navs
  const navs = ["Home", "Contact Us", "Orders"];
  return (
    <Box
      w={"100%"}
      h={{ base: "max-content", md: "80px" }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      pl={{ base: "1.5%", md: "2%", lg: "2.5%" }}
      pr={{ base: "1.5%", md: "2%", lg: "2.5%" }}
      pt="8px"
      pb="8px"
      boxShadow="md"
      bg="#FFFFFF"
    >
      {/* Box 1 */}
      <Box
        w={"100%"}
        h="70px"
        display="flex"
        alignItems="center"
        alignContent={"center"}
        justifyContent="space-between"
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
        <Box display={{ base: "none", md: "block" }}>
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

        {/* Sign in, Cart & Hamburger Icon */}
        <Box>
          {/* cart */}
          <Stack direction="row" spacing={4}>
            {/* Cart Button */}
            {cart_btn}

            {/* Sign in Button */}
            <Link to="/signin">
              <Button
                size="md"
                bg="#0000ff"
                color="white"
                display={{ base: "none", lg: "block" }}
                _hover={{ bg: "#6699FF" }}
              >
                Sign in
              </Button>
            </Link>

            {/* Hamburger Icon */}
            <HamburgerIcon
              onClick={toggleMenu}
              buttonType={navOpen ? <CloseIcon /> : <GiHamburgerMenu />}
            />
          </Stack>
        </Box>
        {/* Mobile Menu Overlay */}
        <Box
          className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`}
          display={{
            base: isMenuOpen ? "block" : "none",
            lg: "none",
          }}
          top={{ base: "130px", md: "80px" }}
          right="0"
          width="50%"
          height={`calc(100% - 130px)`}
          position="fixed"
          bg={"#F5F5F5"}
          zIndex="2"
          overflowY="auto"
          transition="right 0.3s ease-in-out"
        >
          <div className="mobile-menu-content">
            <Link to="/">Home</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/signin">
              <Button size="md" bg="#0000ff" color="white">
                Sign in
              </Button>
            </Link>
          </div>
        </Box>
      </Box>

      {/* Box 2 */}
      <Box display={{ base: "block", md: "none" }}>
        <InputGroup>
          <Input
            type="text"
            placeholder="Search for a Product"
            borderRadius="2xl"
            focusBorderColor="#F5F5F5"
            outline="none"
            bg={"#F5F5F5"}
            w="100vw"
            ml="1%"
            mr="1%"
          />
          <InputRightElement pointerEvents="none">
            <SearchIcon color="black.200" />
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  );
};

export default Header;
