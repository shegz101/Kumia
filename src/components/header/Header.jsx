import React, { useState, useEffect } from "react";
import "./Header.css";
import LogoImage from "../../assets/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
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
// Manage everything about REDUX
import { useDispatch } from "react-redux";
import { REMOVE_ACTIVE_USER, SET_USER_TO_ACTIVE } from "../../redux/features/authSlice";
import SigninDisplay, { SignoutDisplay } from "../dynamicDisplay/dynamicDisplay";

const cart_count = 0;

const cart_btn = (
  <Button
    size="md"
    bg="#0000ff"
    color="white"
    width={{ base: "max-content",}}
    _hover={{ bg: "#6699FF" }}
    rightIcon={cart_count}
    gap={1}
    variant="solid"
    p={{base: "2px", md: "10px"}}
    marginRight={{ base: '-10px', md: '20px'}}
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

  const dispatch = useDispatch();

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
  const [userId, setUserId] = useState("");
  // Monitor the currentlt signed-in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserId(uid);
        // create a logic for users that their displayname is Null
        if (user.displayName === null) {
          // create a default display Name by slicing out "@gmail.com" from the user's email
          const defaultName = user.email.substring(0, user.email.indexOf("@"));
          // extract the first character in the defaultName and make it an uppercase
          const firstChar = defaultName.charAt(0).toUpperCase();
          const newUserName = firstChar + defaultName.slice(1);
          setUserName(newUserName);
        } else {
          setUserName(user.displayName);
        }
        // console.log(user);
        setUserPics(user.photoURL);
        // dispatch all the necessary information that comes with being an active user
        dispatch(SET_USER_TO_ACTIVE({
          userName: user.displayName ? user.displayName : userName,
          userMail: user.email,
          userId: user.uid,
        }))
      } else {
        dispatch(REMOVE_ACTIVE_USER())
        setUserName("");
        setUserPics("");
      }
    });
  }, [dispatch, userName])

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
                        nav === "" ? "Home" : (
                          nav === "Orders" ? <SigninDisplay>{"Orders"}</SigninDisplay> : nav
                        )
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
            {
              userId.length > 0 ? (
                <SigninDisplay>
                  <Box display="flex" alignItems="center" marginLeft={{ base: "10px", md: "none"}}>
                    <img src={userPics ? userPics: "https://i.stack.imgur.com/34AD2.jpg"} style={{ width:"30px", height:"30px", borderRadius:"50%"}}/>
                    <Text paddingLeft={2} style={{ color: "#0000ff"}}>
                      Hi {userName}
                    </Text>
                  </Box> 
                </SigninDisplay>
              ) : ""
            }       

            {/* Cart Button */}
            {cart_btn}

            {/* Sign in Button */}
            <SignoutDisplay>
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
            </SignoutDisplay>

            {/* Sign out Button */}
            <SigninDisplay>
              <Button
                size="md"
                bg="#0000ff"
                color="white"
                display={{ base: "none", lg: "block" }}
                _hover={{ bg: "#6699FF" }}
                onClick={logOut}
              >
                Sign out
              </Button>
            </SigninDisplay>

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
            <SigninDisplay>
              <Link to="/orders">Order</Link>
            </SigninDisplay>
            <SignoutDisplay>
              <Link to="/signin">
                <Button size="md" bg="#0000ff" color="white">
                  Sign in
                </Button>
              </Link>
            </SignoutDisplay>
            <SigninDisplay>
              <Button size="md" bg="#0000ff" color="white" onClick={logOut}>
                Signout
              </Button>
            </SigninDisplay>
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
