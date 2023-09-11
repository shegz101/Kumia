import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Stack,
  InputGroup,
  Input,
  InputLeftElement,
  Button,
  Text,
} from "@chakra-ui/react";
import resetImg from "../../assets/forgot.png";
import { EmailIcon, ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../firebase/firebaseconfig';
// import toastify
import { toast } from 'react-toastify';
import { Loader } from "../../components";

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

const Content = ({ email, setEmail, resetPassword }) => (
  <Stack  display="flex" flexDirection="column" spacing={3}>
    <Text color="#0000ff" fontSize={25} alignSelf="center" fontWeight="semibold">Reset Password</Text>

    <InputGroup size="lg">
      <Input placeholder="janehop@gmail.com"  type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

      <InputLeftElement pointerEvents='none' size={6}>
        <EmailIcon color='gray.300' />
      </InputLeftElement>
    </InputGroup>

    <Button w={{base:"100%", lg:"400px"}} color="white" backgroundColor="#0000ff" _hover={{ bg: "#6699FF" }} onClick={resetPassword}>
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
  const [email, setEmail] = useState("");

  // track loading state
  const [isLoading, setIsloading] = useState(false);

  // Reset Password using Email
  const resetPassword = (e) => {
    e.preventDefault();
    setIsloading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsloading(false);
        toast.success("Check your email for reset link!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error({errorMessage});
        setIsloading(false);
      });
    setEmail("");
  }

  return (
    <>
      {isLoading && <Loader/>}
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="35px"
      >
        <Card cardContent={<Content email={email} setEmail={setEmail} resetPassword={resetPassword}/>} />

        <Box display={{base: "none", md:"block"}}>
          <img src={resetImg} alt="login preset" style={{ width: "500px" }} />
        </Box>
      </Box>
    </>
  );
}

export default Reset;
