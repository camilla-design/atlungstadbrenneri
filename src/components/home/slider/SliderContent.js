import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from '../../../images/sliderImages/2T5A3641.jpg';
import image2 from '../../../images/sliderImages/374A1669.jpg';
import image3 from '../../../images/sliderImages/DSC09315.jpg';


const SliderContent = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="w-100 h-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="w-100 h-100"
          src={image2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="w-100 h-100"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default SliderContent;