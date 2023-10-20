import React from "react";
import { Box } from "@chakra-ui/react";
import Slider from "./Slider";
import Category from "./Category";

const Home = () => {
  return (
    <Box>
      <Slider/>
      <Category/>
    </Box>
  );
};

export default Home;
