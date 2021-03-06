import WeddingList from "./item/WeddingList";
import WeddingGallery from "./item/WeddigGallery";
import Footer from "../../footer/Footer";

import image1 from "../../../images/hero/wedding-hero.jpg";
import { Component } from "react";

class Bryllup extends Component {
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
          <WeddingList />
          <div className="container">
            <WeddingGallery />
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Bryllup;
