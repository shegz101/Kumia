import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaTwitter } from "react-icons/fa";
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
import { ViewIcon, ViewOffIcon, LockIcon, EmailIcon } from "@chakra-ui/icons";
import loginImg from "../../assets/login.png";

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
  <Stack alignItems="center" display="flex" flexDirection="column" spacing={3}>
    <Text color="#0000ff" fontSize={25} fontWeight="semibold">Login</Text>

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
      Login
    </Button>

    <Link to="/reset" style={{alignSelf:"flex-start"}}>
      <Text>Reset Password</Text>
    </Link>

    <Text>-- or --</Text>

    <Button w={{base:"100%", lg:"400px"}} backgroundColor="#ffffff" border='2px' borderColor='gray.300' leftIcon={<FcGoogle />}>
      Login With Google
    </Button>
    <Button w={{base:"100%", lg:"400px"}} backgroundColor="#1DA1F2" _hover={{ bg: "#6699FF" }} color="#ffffff" leftIcon={<FaTwitter />} variant='solid'>
      Login With Twitter
    </Button>
    <Button w={{base:"100%", lg:"400px"}} backgroundColor="#000000" _hover={{ bg: "#00000080" }} color="#ffffff" leftIcon={<FaGithub />}>
      Login With GitHub
    </Button>

    <Text>Don't have an account? <Link to="/signup"><span style={{fontWeight:"bold"}}>Register</span></Link></Text>
  </Stack>
);

const Signin = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="20px"
      paddingLeft="50px"
      paddingRight="50px"
    >
      <Box display={{base: "none", md:"block"}}>
        <img src={loginImg} alt="login preset" style={{ width: "500px" }} />
      </Box>

      <Card cardContent={<Content onclick={handleClick} show={show} />} />
    </Box>
  );
}

export default Signin;
