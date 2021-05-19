import MemorialList from "./memorialItems/MemorialList";
import MemorialGallery from "./memorialItems/MemorialGallery";
import Footer from "../../footer/Footer";

import { Link } from "react-router-dom";

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
        <div class="back-button mt-3 p-3">
          <Link to="/spiseriet">
            <i class="far fa-arrow-alt-circle-left"></i> Tilbake
          </Link>
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
