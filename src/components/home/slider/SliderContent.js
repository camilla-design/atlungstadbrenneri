import React from "react";
import { Component } from "react";
import { Carousel } from "react-bootstrap";

import factoryImage from "../../../images/sliderImages/bigger-carusel-factory.jpg";
import spiserietImage from "../../../images/sliderImages/bigger-carusel-spiseriet.jpg";
import uteserveringImage from "../../../images/sliderImages/bigger-carusel-uteservering.jpg";

class SliderContent extends Component {
  render() {
    return (
      <Carousel fade={true} pause={false}>
        <Carousel.Item interval={2000}>
          <img
            className="w-100 h-100"
            src={factoryImage}
            alt="The factory"
            title="credit: Atlungstad Brenneri"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="w-100 h-100"
            src={spiserietImage}
            alt="Spiseriet"
            title="credit: Atlungstad Brenneri"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="w-100 h-100"
            src={uteserveringImage}
            alt="uteservering"
            title="credit: Atlungstad Brenneri"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default SliderContent;
