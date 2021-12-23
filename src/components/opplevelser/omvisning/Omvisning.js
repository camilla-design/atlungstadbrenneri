import TourList from "./item/TourList";
import TourGallery from "./item/TourGallery";
import Footer from "../../footer/Footer";

import ScrollAnimation from "react-animate-on-scroll";
import Button from "react-bootstrap/Button";

import image1 from "../../../images/hero/omvisning.jpg";
import { Component } from "react";

class Omvisning extends Component {
  render() {
    return (
      <>
        <ScrollAnimation animateIn="fadeIn">
          <div className="hero-container">
            <img
              className="d-block w-100"
              alt="hero"
              src={image1}
              title="credit: Atlungstad Brenneri"
            />
          </div>

          <div className="container lab">
            <TourList />
            <Button className="order-button" variant="primary">
              <a href="mailto: post@atlungstadbrenneri.no">Bestill</a>
            </Button>
            <div class="container">
              <TourGallery />
            </div>
          </div>
        </ScrollAnimation>
        <Footer />
      </>
    );
  }
}

export default Omvisning;
