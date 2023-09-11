import React, { useState, useEffect } from "react";
import "./Header.css";
import LogoImage from "../../assets/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLogout } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseconfig";
// import toastify
import { toast } from 'react-toastify';
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  List,
  Text,
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

  const navigate = useNavigate();

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setNavOpen(!navOpen);
  };

  const [userName, setUserName] = useState("");
  const [userPics, setUserPics] = useState("");
  // Monitor the currentlt signed-in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user);
        setUserName(user.displayName);
        setUserPics(user.photoURL);
      } else {
        setUserName("");
        setUserPics("");
      }
    });
  }, [])

  // sign out user
  const logOut = () => {
    signOut(auth).then(() => {
      toast.success("sign out successful!");
      // Delay the navigation!
      setTimeout(() => {
        // Navigate after the toast notification is shown
        navigate("/");
      }, 2000); 
    }).catch((error) => {
      const errorMessage = error.message;
      toast.error({errorMessage});
    });
  }

  const [navOpen, setNavOpen] = useState(false);

  //create an array of the navs
  const navs = ["", "Contact Us", "Orders"];
  
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
                      {
                        nav === "" ? "Home" : nav
                      }
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
            {/* Display user name */}
            <Box display="flex" alignItems="center">
              <img src={userPics ? userPics: "https://i.stack.imgur.com/34AD2.jpg"} style={{ width:"30px", height:"30px", borderRadius:"50%"}}/>
              <Text paddingLeft={2}>
                Hi {userName}
              </Text>
            </Box>        

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

            {/* Sign out Button */}
            <Button
              size="md"
              bg="#0000ff"
              color="white"
              display={{ base: "none", lg: "block" }}
              _hover={{ bg: "#6699FF" }}
              onClick={logOut}
            >
              <MdOutlineLogout/>
            </Button>

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
            <Link to="/orders">Order</Link>
            <Link to="/signin">
              <Button size="md" bg="#0000ff" color="white">
                Sign in
              </Button>
            </Link>
            <Button size="md" bg="#0000ff" color="white" onClick={logOut}>
              Signout
            </Button>
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
