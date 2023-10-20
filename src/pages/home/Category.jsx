import React, { useState } from 'react';
import { Box, Stack, Text } from "@chakra-ui/react";
import { RiArrowDropRightLine } from "react-icons/ri";

const Category = () => {
  const categories = ["All", "Mobile Phones", "Cameras", "Laptops", "Headsets"];
  const [leftBorderCategoryTrackerId, setLeftBorderCategoryTrackerId] = useState(0);

  const handleCategoryClick = (index) => {
    setLeftBorderCategoryTrackerId(index);
  };
  
  return (
    <Box pt={5} display={"flex"} flexDirection={"row"} 
    width={"70%"} margin={"0 auto"}>
      {/* Product Categories */}
      <Box width={"15%"}>
        <Text color="#0000ff" fontSize={"2xl"} 
        fontWeight={"medium"}>
          Categories
        </Text>
        {/* All Categories */}
        <Stack>
          {
            categories.map((a_category, id) => (
              <button key={id} onClick={() => handleCategoryClick(id)} 
              style={{ display:"flex", flexDirection:"row", 
              textAlign: "start", height:"30px", paddingTop:"5px", 
              borderBottom:"1px solid black", borderLeft: leftBorderCategoryTrackerId === id ? "3px solid #0000ff" : "none"}}>
                <span><RiArrowDropRightLine style={{ marginTop:"3px"}}/></span> {a_category}
              </button>
            ))
          }
        </Stack>
      </Box>

      {/* Products cards */}
      <Box width={"65%"}>
        {/* The Various Categories */}
        <Stack>
          {/* Laptops & Computer Category  */}
          <Text>Product Card</Text>
        </Stack>
      </Box>
    </Box>
  )
}

export default Category