import LectureList from "./item/LectureList";
import LectureGallery from "./item/LectureGallery";

import Footer from "../../footer/Footer";

import image1 from "../../../images/hero/foredrag.jpg";
import Button from "react-bootstrap/Button";
import { Component } from "react";

class Foredrag extends Component {
  render() {
    return (
      <>
        <div className="hero-container">
          <img
            className="d-block w-100"
            alt="hero"
            src={image1}
            title="credit: Atlungstad Brenneri"
          />{" "}
        </div>
        ´
        <div className="container lab">
          <LectureList />
          <Button className="order-button" variant="primary">
            {" "}
            <a href="mailto: post@atlungstadbrenneri.no"> Bestill </a>
          </Button>
          <div className="container">
            <LectureGallery />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Foredrag;
