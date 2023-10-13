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
      templateColumns={{ base: 'repeat(2, 1fr)', md:'repeat(4, 1fr)'}} 
      templateRows={{ base: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)'}} 
      gap={{ base: 4, md: 8}}
      w={"100%"}
      h={{ base: "max-content", md: "250px"}}
      pl={{ base: "2%", lg: "3.5%" }}
      pr={{ base: "2%", lg: "3.5%" }}
      pt="8px"
      pb="8px"
      borderRadius="8px"
      bg="#F5F5F5"
      cursor={"pointer"}>
        {/* First column */}
        <GridItem w='100%' colSpan={{ base: 2, md: 1}}>
          <Box display="flex" flexDirection="column">
            <Image src={logo} alt="logo" width="100px"/>
            <Text color="gray.500">Specializes in providing high-quality, strong electronic devices</Text>
            <Text color="gray.500" pt="10px"><span style={{ fontWeight: "bold"}}>E-mail: </span> info@kumiastore.com</Text>
          </Box>
        </GridItem>

        {/* Second Column */}
        <GridItem w='100%' colSpan={1} pt={4}>
          <UnorderedList>
            <List fontWeight="medium">
              <Stack direction="column" spacing={2}>
                <ListItem>
                  <Text fontWeight="bold" fontSize='xl' color="#0000ff">SHOP</Text>
                </ListItem>
                <ListItem>
                  <Text color="gray.500" _hover={{ color: "#0000ff"}}>All Collections</Text>
                </ListItem>
                <ListItem>
                  <Text color="gray.500" _hover={{ color: "#0000ff"}}>My Wishlist</Text>
                </ListItem>
                <ListItem>
                  <Text color="gray.500" _hover={{ color: "#0000ff"}}>Discount</Text>
                </ListItem>
                <ListItem>
                  <Text color="gray.500" _hover={{ color: "#0000ff"}}>Track My Order</Text>
                </ListItem>
              </Stack>
            </List>
          </UnorderedList>
        </GridItem>

        {/* Third Column */}
        <GridItem w='100%' colSpan={1} pt={4}>
          <UnorderedList>
            <List fontWeight="medium">
              <Stack direction="column" spacing={2}>
                <ListItem>
                  <Text fontWeight="bold" fontSize='md' color="#0000ff">COMPANY</Text>
                </ListItem>
                <ListItem>
                  <Text color="gray.500" _hover={{ color: "#0000ff"}}>About Us</Text>
                </ListItem>
                <ListItem>
                  <Text color="gray.500" _hover={{ color: "#0000ff"}}>Contact</Text>
                </ListItem>
                <ListItem>
                  <Text color="gray.500" _hover={{ color: "#0000ff"}}>Terms and Conditions</Text>
                </ListItem>
                <ListItem>
                  <Text color="gray.500" _hover={{ color: "#0000ff"}}>Delivery Information</Text>
                </ListItem>
              </Stack>
            </List>
          </UnorderedList>
        </GridItem>

        {/* Fourth Column */}
        <GridItem w='100%' colSpan={{ base: 2, md: 1}} pt={4}>
          <UnorderedList>
            <List fontWeight="medium">
              <Stack direction="column" spacing={2}>
                <ListItem>
                  <Text fontWeight="bold" fontSize='md' color="#0000ff">PAYMENT METHODS</Text>
                </ListItem>
                {/* The payment gateway logos */}
                <ListItem>
                  <Stack direction="row" spacing={2} marginLeft="-10px">
                    <Image src={MastercardLogo} alt="Mastercard" width="60px"/>
                    <Image src={VisaLogo} alt="Visa" width="40px" />
                    <Image src={PaypalLogo} alt="PayPal" width="50px"/>
                  </Stack>
                </ListItem>
              </Stack>
            </List>
          </UnorderedList>
        </GridItem>
        
        {/* Second Row */}
        <GridItem w='100%' colSpan={{ base: 2, md: 4}}>
          <Text fontWeight="semibold" color="#0000ff" textAlign="center">
              Copyright &copy; {present_year} Kumia. All right reserved.
          </Text>
        </GridItem>  
    </Grid>
  );
}

export default Footer;
