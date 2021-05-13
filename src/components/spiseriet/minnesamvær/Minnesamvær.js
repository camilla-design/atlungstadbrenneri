import MemorialList from "./memorialItems/MemorialList";
import MemorialGallery from "./memorialItems/MemorialGallery";
import Footer from "../../footer/Footer";

import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

import image1 from "../../../images/hero/memorial.jpg";

function Minnesamvær() {
  return (
    <>
      <ScrollAnimation animateIn="fadeIn">
        <div className="hero-container mt-5">
          <img className="d-block w-100" alt="hero" src={image1} />
        </div>
        <div class="back-button mt-3 p-3">
          <Link to="/spiseriet">
            <i class="far fa-arrow-alt-circle-left"></i> Tilbake
          </Link>
        </div>

        <div className="container">
          <MemorialList />
          <div className="container mb-5">
            <MemorialGallery />
          </div>
        </div>
      </ScrollAnimation>
      <Footer />
    </>
  );
}

export default Minnesamvær;
