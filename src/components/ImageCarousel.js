import React from 'react';
import { Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
          <img src="https://a-static.mlcdn.com.br/280x210/radio-portatil-am-fm-a-pilha-e-energia-usb-recarregavel-bluetooth-inboxmobile/inboxmobile/rfmv/765d24e60eb20200f42212b3198ebb26.jpeg" alt="Image 1" />
        </div>
        <div>
          <img src="https://a-static.mlcdn.com.br/280x210/kit-capa-teclado-p-tablet-galaxy-tab-a9-plus-pelicula-caneta-touch-mouse-bluetooth-daiotec-solutions/daicommerce/kita9pluscp/23afd80e6708ae2a52ebe3a48750f596.jpeg" alt="Image 2" />
        </div>
        <div>
          <img src="https://a-static.mlcdn.com.br/280x210/fone-de-ouvido-bluetooth-orelha-gatinho-infantil-led-sem-fio-cat-ear/arteprimacasaeconforto/149-rosa/ed3b9b79ba5de61fc86dc3e724a3718e.jpeg" alt="Image 3" />
        </div>
      </Carousel>
    </Box>
  );
}

export default ImageCarousel;
