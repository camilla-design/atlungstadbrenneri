import React from 'react';
import { Carousel } from 'react-bootstrap';

import factoryImage from '../../../images/sliderImages/bigger-carusel-factory.jpg';
import spiserietImage from '../../../images/sliderImages/bigger-carusel-spiseriet.jpg';
import uteserveringImage from '../../../images/sliderImages/bigger-carusel-uteservering.jpg';


const SliderContent = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="w-100 h-100"
          src={factoryImage}
          alt="The factory"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="w-100 h-100"
          src={spiserietImage}
          alt="Spiseriet"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="w-100 h-100"
          src={uteserveringImage}
          alt="uteservering"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default SliderContent;