import React, { useRef, useState } from 'react';
// import { Box, Text } from "@chakra-ui/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import loginImg from "../../assets/login.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './slider.css';

// import required modules
import { Navigation } from 'swiper/modules';

const Slider = () => {
    const imageUrl = "https://images.unsplash.com/photo-1554941426-e9604e34bc94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2xpZGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60";

    const backgroundStyle = {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover', // You can also set other background properties
      // Add more background-related properties as needed
      width: "100%", 
      height: "100%",
      position: "relative",
    };
    
    return (
      <div style={backgroundStyle}>
        <Swiper navigation={true} modules={[Navigation]}>
          <SwiperSlide>
            <img src={loginImg} alt="login" style={{ width: "500px" }}/>
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    );
}

export default Slider;
