import React from "react";
import SliderContentMobile from "./SliderContentMobile";
import SliderContent from "./SliderContent";
import { Component } from "react";

/**
 * @function Slider
 */

class Slider extends Component {
  render() {
    return (
      <>
        <div class="slide-content-mobile">
          <SliderContentMobile />
        </div>
        <div className="slide-bigger-screen">
          <SliderContent />
        </div>
      </>
    );
  }
}

export default Slider;
