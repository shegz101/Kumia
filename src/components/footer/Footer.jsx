import React from "react";
import { Box, Text, Grid, GridItem, Image, List, Stack, ListItem, UnorderedList} from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import VisaLogo from "../../assets/Visa_logo.png";
import PaypalLogo from "../../assets/PayPal_logo.png";
import MastercardLogo from "../../assets/Mastercard_logo.png";

const Footer = () => {
  const date = new Date();
  const present_year = date.getFullYear();
  return (
    <Grid 
      templateColumns='repeat(5, 1fr)' 
      templateRows='repeat(2, 1fr)' 
      gap={8}
      w={"100%"}
      h='250px'
      pl={{ base: "1.5%", md: "2%", lg: "3.5%" }}
      pr={{ base: "1.5%", md: "2%", lg: "3.5%" }}
      pt="8px"
      pb="8px"
      borderRadius="8px"
      bg="#F5F5F5">
        {/* First column */}
        <GridItem w='100%' colSpan={1}>
          <Box display="flex" flexDirection="column">
            <Image src={logo} alt="logo" width="100px"/>
            <Text color="gray.500">Specializes in providing high-quality, strong electronic devices</Text>
          </Box>
        </GridItem>

        {/* Second Column */}
        <GridItem w='100%' colSpan={1} pt={4}>
          <UnorderedList>
            <List fontWeight="medium">
              <Stack direction="column" spacing={4}>
                <ListItem>
                  <Text fontWeight="bold" fontSize='xl' color="#0000ff">SHOP</Text>
                </ListItem>
                <ListItem>
                  <Text color="gray.500">All Collections</Text>
                </ListItem>
                <ListItem>
                  <Text color="gray.500">Winter Edition</Text>
                </ListItem>
                <ListItem>
                  <Text color="gray.500">Discount</Text>
                </ListItem>
              </Stack>
            </List>
          </UnorderedList>
        </GridItem>

        {/* Third Column */}
        <GridItem w='100%' colSpan={1} pt={4}>
          <UnorderedList>
            <List fontWeight="medium">
              <Stack direction="column" spacing={4}>
                <ListItem>
                  <Text fontWeight="bold" fontSize='md' color="#0000ff">COMPANY</Text>
                </ListItem>
                <ListItem>
                  <Text color="gray.500">About Us</Text>
                </ListItem>
                <ListItem>
                  <Text color="gray.500">Contact</Text>
                </ListItem>
                <ListItem>
                  <Text color="gray.500">Affiliates</Text>
                </ListItem>
              </Stack>
            </List>
          </UnorderedList>
        </GridItem>

        {/* Fourth Column */}
        <GridItem w='100%' colSpan={1} pt={4}>
          <UnorderedList>
            <List fontWeight="medium">
              <Stack direction="column" spacing={4}>
                <ListItem>
                  <Text fontWeight="bold" fontSize='md' color="#0000ff">SUPPORT</Text>
                </ListItem>
                <ListItem>
                  <Text color="gray.500">FAQS</Text>
                </ListItem>
                <ListItem>
                  <Text color="gray.500">Cookie Policy</Text>
                </ListItem>
                <ListItem>
                  <Text color="gray.500">Terms of Use</Text>
                </ListItem>
              </Stack>
            </List>
          </UnorderedList>
        </GridItem>

        {/* Fifth Column */}
        <GridItem w='100%' colSpan={1} pt={4}>
          <UnorderedList>
            <List fontWeight="medium">
              <Stack direction="column" spacing={4}>
                <ListItem>
                  <Text fontWeight="bold" fontSize='md' color="#0000ff">PAYMENT METHODS</Text>
                </ListItem>
                {/* The payment gateway logos */}
                <ListItem>
                  <Stack direction="row" spacing={2}>
                    <Image src={MastercardLogo} alt="Mastercard" width="60px" h="40px"/>
                    <Image src={VisaLogo} alt="Visa" width="30px" />
                    <Image src={PaypalLogo} alt="PayPal" width="50px"/>
                  </Stack>
                </ListItem>
              </Stack>
            </List>
          </UnorderedList>
        </GridItem>
        
        {/* Second Row */}
        <GridItem w='100%' colSpan={5}>
          <Text fontWeight="semibold" color="#0000ff" textAlign="center">
              Copyright &copy; {present_year} Kumia. All right reserved.
          </Text>
        </GridItem>  
    </Grid>
  );
}

export default Footer;
