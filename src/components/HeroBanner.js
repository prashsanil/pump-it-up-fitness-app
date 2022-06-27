import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/bannerphoto-2.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg: '212px', xs: '70px'},
      ml: {sm: '50px'}
    }} position="relative" p="20px">
      
      <Typography 
      color="#FF2625" fontWeight="600" fontSize="26px" textTransform="uppercase"
      >
        PUMP It Up!
      </Typography>
      
      <Typography fontWeight={700}
        sx={{
          fontSize: {lg: '44px', xs: '40px'}
        }}
        mb="23px" 
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      
      <Typography fontSize="22px"
      lineHeight="35px" mb={4}
      >
        Check out the most Effective Exercises!
      </Typography>
      
      <Button variant="contained" color="error"
      sx={{ backgroundColor: '#ff2625', p: '15px'}}
      > 
      Explore Exercises 
      </Button>
      
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { md: 'block', xs: 'none'},
          fontSize: { lg: '100px', md: '90px'}
        }}
      >
        Exercises
      </Typography>
      
      {/* Making img responsive */}
      <Box component="img"
      sx={{
        maxHeight: {lg: '900px', md: '700px', sm: '0px'},
        maxWidth: {lg: '600px', md: '450px', sm: '0px'},
        mt: {lg: "-330px", sm: "-190px"},
        display: {sm: 'block', xs: 'none'}
      }}
      src={HeroBannerImage} 
      alt="banner"
      className="hero-banner-img"
      ></Box>
    </Box>
  )
}

export default HeroBanner