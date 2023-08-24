import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  const date = new Date();
  const present_year = date.getFullYear();
  return (
    <Box
      h="60px"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      alignContent={"center"}
      bg={"#F5F5F5"}
    >
      <Text fontWeight="semibold" color="#0000ff" textAlign="center">
        Copyright &copy; {present_year} Kumia. All right reserved.
      </Text>
    </Box>
  );
};

export default Footer;
