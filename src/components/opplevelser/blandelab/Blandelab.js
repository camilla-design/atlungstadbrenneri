import LabList from "./item/LabList";
import LabGallery from "./item/LabGallery";
import Footer from "../../footer/Footer";

import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import Button from "react-bootstrap/Button";

import image1 from "../../../images/hero/blandelab.jpg";
import { Component } from "react";

class Blandelab extends Component {
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
          <div class="back-button mt-3 p-3">
            <Link to="/opplevelser">
              <i class="far fa-arrow-alt-circle-left"></i> Tilbake
            </Link>
          </div>
          <div className="container lab">
            <LabList />
            <Button className="order-button" variant="primary">
              <a href="mailto: post@atlungstadbrenneri.no">Bestill</a>
            </Button>

            <LabGallery />
          </div>
        </ScrollAnimation>

        <Footer />
      </>
    );
  }
}

export default Blandelab;
