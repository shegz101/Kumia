import { useState } from "react";
import "./Header.css";
import LogoImage from "../../assets/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
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

const HamburgerIcon = ({ onClick }) => (
  <Button
    size="md"
    bg="#0000ff"
    color="#ffffff"
    _hover={{ bg: "#6699FF" }}
    display={{ base: "block", md: "none" }}
    onClick={onClick}
  >
    <GiHamburgerMenu />
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
  };
  //create an array of the navs
  const navs = ["Home", "Contact Us"];
  return (
    <Box
      w={"100%"}
      h="70px"
      display="flex"
      alignItems="center"
      alignContent={"center"}
      justifyContent="space-between"
      pl={{ base: "1%", md: "2%", lg: "2.5%" }}
      pr={{ base: "1%", md: "2%", lg: "2.5%" }}
      pt="20px"
      pb="20px"
      boxShadow="md"
      bg="#FFFFFF"
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
            display={{ base: "none", md: "block" }}
            _hover={{ bg: "#6699FF" }}
          >
            Sign in
          </Button>

          <HamburgerIcon onClick={toggleMenu} />
        </Stack>
      </Box>
      {/* Mobile Menu Overlay */}
      <Box
        className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`}
        display={{ base: isMenuOpen ? "block" : "none", md: "none" }}
        top="72px"
        right="0"
        width="50%"
        height={`calc(100% - 70px)`}
        position="fixed"
        bg={"#F5F5F5"}
        zIndex="2"
        overflowY="auto"
        transition="right 0.3s ease-in-out"
      >
        <div className="mobile-menu-content">
          <Link to="/">Home</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Button size="md" bg="#0000ff" color="white">
            Sign in
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default Header;
