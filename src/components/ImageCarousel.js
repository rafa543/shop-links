import React from 'react';
import { Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner from '../imagens/banner.png';

function ImageCarousel() {
  return (
    <Box 
      sx={{ 
        width: '100%',
        maxWidth: '1300px', 
        height: '300px', 
        margin: '0 auto',
        '& .carousel .slide img': {
          height: '300px', // Fix the height for the images
          objectFit: 'cover', // Make sure the images cover the area without distortion
        }
      }}
    >
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        stopOnHover
        dynamicHeight={false}
      >
        <div>
          <img src={banner} alt="Image 1" />
        </div>
        <div>
          <img src={banner} alt="Image 2" />
        </div>
        <div>
          <img src={banner} alt="Image 3" />
        </div>
      </Carousel>
    </Box>
  );
}

export default ImageCarousel;
