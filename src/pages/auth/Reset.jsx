import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Stack,
  InputGroup,
  Input,
  InputRightElement,
  InputLeftElement,
  Button,
  Text,
} from "@chakra-ui/react";
import resetImg from "../../assets/forgot.png";
import { ViewIcon, ViewOffIcon, LockIcon, EmailIcon, ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const Card = ({ cardContent }) => (
  <Box
    boxShadow="lg"
    rounded="md"
    width={{base:"90vw", lg:"max-content"}}
    height="max-content"
    p="12px"
  >
    {cardContent}
  </Box>
);

const Content = ({ onclick, show }) => (
  <Stack  display="flex" flexDirection="column" spacing={3}>
    <Text color="#0000ff" fontSize={25} alignSelf="center" fontWeight="semibold">Reset Password</Text>

    <InputGroup size="lg">
      <Input placeholder="janehop@gmail.com"  type="email" />

      <InputLeftElement pointerEvents='none' size={6}>
        <EmailIcon color='gray.300' />
      </InputLeftElement>
    </InputGroup>

    <InputGroup size="lg">
      <Input
        w="400px"
        type={show ? "text" : "password"}
        placeholder="Enter password"
      />

      <InputLeftElement pointerEvents='none' size={6}>
        <LockIcon color='gray.300' />
      </InputLeftElement>

      <InputRightElement pr="5px">
        <Button h="1.75rem" size="sm" onClick={onclick}>
          {show ? <ViewIcon /> : <ViewOffIcon />}
        </Button>
      </InputRightElement>
    </InputGroup>

    <Button w={{base:"100%", lg:"400px"}} color="white" backgroundColor="#0000ff" _hover={{ bg: "#6699FF" }}>
      Reset Password
    </Button>

    <Box display="flex" justifyContent="space-between" style={{fontWeight:"bold"}}>
      <Text>
        <ArrowBackIcon/> <span><Link to="/signin">Login</Link></span>
      </Text>
      <Text>
      <span><Link to="/signup">Register</Link></span> <ArrowForwardIcon/> 
      </Text>
    </Box>
  </Stack>
);

function Reset() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="35px"
      paddingLeft="50px"
      paddingRight="50px"
    >
      <Card cardContent={<Content onclick={handleClick} show={show} />} />

      <Box display={{base: "none", md:"block"}}>
        <img src={resetImg} alt="login preset" style={{ width: "500px" }} />
      </Box>
    </Box>
  );
}

export default Reset;
