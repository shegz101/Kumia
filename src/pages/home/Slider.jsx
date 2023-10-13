import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Slider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const slides = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKrzZHWwZijd6kr9gRqN9YmLtZKmuUMyfIMw&usqp=CAU"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO0zBiYAtDgugiLdr70I1XYnfz6S9KIJzdJA&usqp=CAU"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-716IXJktW-W4hG9V3xpGBvpAM6qTc_9TwdBTUGLrsaTdbNVK_HVHd5xCj1hlur4XLk&usqp=CAU"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ21ywoBy8jaBYP9FrZVd1TjkLoiPfZjkV5Qw&usqp=CAU"
    }
  ];

  //logic to move through the slides
  const [currentId, setCurrentId] = useState(0);
  const [colorId, setColorId] = useState(0);
  console.log("currentId - " + currentId);
  console.log("colorId - " + colorId)
  // function to move to previous slide
  const prevSlide = () => {
    //first let's detect if the current slide is the first slide or not
    const firstSlideId = currentId === 0;
    // let's get the prev index
    const firstColorId = colorId === 0;
    // let's get the prev index
    const prevId = firstSlideId ? slides.length - 1 : currentId - 1;
    setCurrentId(prevId);
    const prevColorId = firstColorId ? slides.length - 1 : colorId - 1;
    setColorId(prevColorId);
  }

  // function to move to next slide
  const nextSlide = () => {
    //first let's detect if the current slide is the last slide or not
    const lastSlideId = currentId === slides.length - 1;
    const lastColorId = colorId === slides.length - 1;
    // let's get the next index
    const nextId = lastSlideId ? 0 : currentId + 1;
    setCurrentId(nextId);
    const nextColorId = lastColorId ? 0 : colorId + 1;
    setColorId(nextColorId);
  }

  // go to slide function
  const gotoSlide = (slideId) => {
    setCurrentId(slideId);
  }

  // function to dett current id and change the color of the current slide icon
  // const [updateColor, setUpdateColor] = useState("gray.500");

  // const detectColor = (id) => {
  //   if (id == currentId) {
  //     setUpdateColor("#0000ff");
  //   } else {
  //     setUpdateColor("gray.500");
  //   }
  // }
  return (
    <Box maxW={1400} mt="-10px"
    height={780} width={"100%"} position={'relative'} 
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
            _hover={{ bg: "blackAlpha.400"}} p={2} fontSize="2xl">
              <BsChevronCompactLeft size={30} onClick={prevSlide}/>
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
      {/* Active slide notification */}
      <Box style={{ transform: "translate(-50%, -50%)", }}
       display="flex" p={2} justifyContent="center" 
       alignItems={"center"} top={"90%"} 
       left={"50%"} position="absolute">
        {
          slides.map((slide, slideId) => (
            <Box key={slideId} fontSize="2xl" cursor={"pointer"} onClick={() => gotoSlide(slideId)}>
              <RxDotFilled size={40} color={ colorId === currentId ? "#0000ff" : "gray.500" }/>
            </Box>
          ))
        }
      </Box>
    </Box>
  );
}

export default Slider;
