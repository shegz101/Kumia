import React, { useState } from 'react';
import "./Slider.css";
import { Box, Button, Stack, Text } from '@chakra-ui/react';
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Slider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      url: "https://images.unsplash.com/photo-1605170439002-90845e8c0137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      url: "https://images.unsplash.com/photo-1470940511639-1068d7764233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhbWVyYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      url: "https://images.unsplash.com/photo-1597673030062-0a0f1a801a31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fExhcHRvcHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    }
  ];

  // array of product categories
  const arr_category = ["HeadPhones & EarPhones", "Mobile Devices", "Cameras", "Laptops & Computers"]

  //logic to move through the slides
  const [currentId, setCurrentId] = useState(0);

  // function to move to previous slide
  const prevSlide = () => {
    const firstSlideId = currentId === 0;
    const prevId = firstSlideId ? slides.length - 1 : currentId - 1;
    setCurrentId(prevId);
  }

  // function to move to next slide
  const nextSlide = () => {
    const lastSlideId = currentId === slides.length - 1;
    const nextId = lastSlideId ? 0 : currentId + 1;
    setCurrentId(nextId);
  }

  const gotoSlide = (id) => {
    setCurrentId(id);
  }

  return (
    <Box maxW={1400}
    height={600} width={"100%"} position={'relative'} 
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <Box 
      style={{ backgroundImage:`url(${slides[currentId].url})`}} 
      w="100%" h="100%" 
      bgPosition="center" 
      bgSize="cover" bgRepeat="no-repeat"/>
      {
        isHovered && (
          <>
            {/* Left Icon */}
            <Box position="absolute" top={"50%"} 
            left={5} color="white" cursor={"pointer"} 
            borderRadius={50} bg={"blackAlpha.200"} 
            _hover={{ bg: "blackAlpha.400"}} p={2} fontSize="2xl" zIndex={3}>
              <BsChevronCompactLeft size={30} onClick={prevSlide} />
            </Box>
            {/* Right Icon */}
            <Box position="absolute" top={"50%"} 
            right={5} color="white" cursor={"pointer"} 
            borderRadius={50} bg={"blackAlpha.200"} 
            _hover={{ bg: "blackAlpha.400"}} p={2} fontSize="2xl">
              <BsChevronCompactRight size={30} onClick={nextSlide}/>
            </Box>
          </>
        )
      }

      {/* Slide Description */}
      <Box position={'absolute'} top="35%" left="15%"
      bg="rgba(0, 0, 255, 0.2)" width={{ base: "90%", md: "50rem"}} 
      height={"max-content"} p={10} margin={"auto"} ml={{ base:"5%", md:"none"}} mr={{ base:"5%", md:"none"}}> 
        <Stack display={"flex"} flexDirection={"column"} color={"white"}>
          <Text fontSize={"2xl"} textAlign={"center"}>{ arr_category[currentId] }</Text>
          <Text textAlign={"center"}>{`Up to 30% off on all ${arr_category[currentId]} products!`}</Text>
          <hr style={{ fontWeight:"bold"}}/>
          <Button width={"max-content"} margin="0 auto" outline={"none"} borderRadius={5} cursor={"pointer"} 
          p={3} bg={"#0000ff"} _hover={{ bg: "#6699FF" }} color={"white"}>
            Shop Now
          </Button>
        </Stack>
      </Box>

      {/* Active slide notification */}
      <Box style={{ transform: "translate(-50%, -50%)", }}
       display="flex" p={2} justifyContent="center" 
       alignItems={"center"} top={"90%"} 
       left={"50%"} position="absolute">
        {
          slides.map((_, slideId) => (
            <button key={slideId} onClick={() => gotoSlide(slideId)} 
            className={ currentId === slideId ? "indicator" : "indicator indicator-inactive"}/>
          ))
        }
      </Box>
    </Box>
  );
}

export default Slider;
