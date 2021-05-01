import React from 'react';
import { Carousel } from 'react-bootstrap';

import slide1 from '../../../images/sliderImages/slide1-mobile.jpg';
import slide2 from '../../../images/sliderImages/slide2-mobile.jpg';
import slide3 from '../../../images/sliderImages/slide3-mobile.jpg';



const SliderContentMobile = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="w-100 h-100"
          src={slide1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="w-100 h-100"
          src={slide2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="w-100 h-100"
          src={slide3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default SliderContentMobile; 