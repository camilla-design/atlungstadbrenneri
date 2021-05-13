import LabList from "./labList/LabList";
import LabGallery from "./labList/LabGallery";
import Footer from "../../footer/Footer";

import ScrollAnimation from "react-animate-on-scroll";
import Button from "react-bootstrap/Button";

import image1 from "../../../images/hero/mixlab.jpg";

function Blandelab() {
  return (
    <>
      <ScrollAnimation animateIn="fadeIn">
        <div className="hero-container mt-5">
          <img className="d-block w-100" alt="hero" src={image1} />
        </div>
        <div class="back-button mt-3 p-3">
          <a href="/opplevelser">
            <i class="far fa-arrow-alt-circle-left"></i> Tilbake
          </a>
        </div>
        <div className="container">
          <LabList />
          <Button className="order-button" variant="primary">
            <a href="#">Bestill</a>
          </Button>

          <LabGallery />
        </div>
      </ScrollAnimation>

      <Footer />
    </>
  );
}

export default Blandelab;
