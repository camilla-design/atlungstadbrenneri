import React from "react";
import { Carousel } from "react-bootstrap";

import atlungstadImage from "../../../images/sliderImages/carusel-atlungstad.jpg";
import spiserietImage from "../../../images/sliderImages/carusel-mobile-spiseriet.jpg";
import uteserveringImage from "../../../images/sliderImages/carusel-uteservering.jpg";

const SliderContentMobile = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="w-100 h-100"
          src={atlungstadImage}
          alt="Atlungstad Brenneri factory"
          title="credit: Atlungstad Brenneri"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="w-100 h-100"
          src={spiserietImage}
          alt="Spiseriet guests"
          title="credit: Atlungstad Brenneri"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="w-100 h-100"
          src={uteserveringImage}
          alt="Outside earea"
          title="credit: Atlungstad Brenneri"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default SliderContentMobile;
