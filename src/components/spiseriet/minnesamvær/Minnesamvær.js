import MemorialList from "./item/MemorialList";
import MemorialGallery from "./item/MemorialGallery";
import Footer from "../../footer/Footer";

import image1 from "../../../images/hero/minnestund.jpg";
import { Component } from "react";

class Minnesamvær extends Component {
  render() {
    return (
      <>
        <div className="hero-container">
          <img
            className="d-block w-100"
            alt="hero"
            src={image1}
            title="credit: Atlungstad Brenneri"
          />
        </div>

        <div className="container lab">
          <MemorialList />
          <div className="container">
            <MemorialGallery />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Minnesamvær;
