import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import registerImg from "../../assets/register.png";
import { Loader } from "../../components";
import { ViewIcon, ViewOffIcon, LockIcon, EmailIcon } from "@chakra-ui/icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/firebaseconfig';
// import toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(false);

  const handleClick = () => setShow(!show);
  const handleDisplay = () => setDisplay(!display);

  // state for the input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  // track loading state
  const [isLoading, setIsloading] = useState(false);

  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    // validate password
    if (password !== cpassword) {
      toast.error("Password does not match!");
    }
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsloading(false);
        toast.success("sign up successful!");
        navigate("/signin"); 
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error({errorMessage});
        setIsloading(false);
      });
  setEmail("");
  setPassword("");
  setCpassword("");
  }
  
  return (
    <>
      <ToastContainer />
      {isLoading && <Loader/>}
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="20px"
      paddingLeft="50px"
      paddingRight="50px"
      >
        {/* Box 1 */}
        <Box
          boxShadow="lg"
          rounded="md"
          width={{base:"90vw", lg:"max-content"}}
          height="max-content"
          p="12px"
        >
          <Stack alignItems="center" display="flex" flexDirection="column" spacing={3}>
            <Text color="#0000ff" fontSize={25} fontWeight="semibold">Register</Text>

            <InputGroup size="lg">
              <Input placeholder="janehop@gmail.com"  type="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>

              <InputLeftElement pointerEvents='none' size={6}>
                <EmailIcon color='gray.300' />
              </InputLeftElement>
            </InputGroup>

            <InputGroup size="lg">
              <Input
                w="400px"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <InputLeftElement pointerEvents='none' size={6}>
                <LockIcon color='gray.300' />
              </InputLeftElement>

              <InputRightElement pr="5px">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>

            {/* Confirm Password */}
            <InputGroup size="lg">
              <Input
                w="400px"
                type={display ? "text" : "password"}
                placeholder="Confirm password"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
              />

              <InputLeftElement pointerEvents='none' size={6}>
                <LockIcon color='gray.300' />
              </InputLeftElement>

              <InputRightElement pr="5px">
                <Button h="1.75rem" size="sm" onClick={handleDisplay}>
                  {display ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>

            <Button w={{base:"100%", lg:"400px"}} color="white" backgroundColor="#0000ff" _hover={{ bg: "#6699FF" }} onClick={signUp}>
              Register
            </Button>

            <Text>Already have an account? <Link to="/signin"><span style={{fontWeight:"bold"}}>Login</span></Link></Text>
          </Stack>
        </Box>

        {/* Box 2 */}
        <Box display={{base: "none", md:"block"}}>
          <img src={registerImg} alt="login preset" style={{ width: "500px" }} />
        </Box>
      </Box>
    </>
  );
}

export default Signup;
