import WeddingList from "./weddingItems/WeddingList";
import WeddingGallery from "./weddingItems/WeddigGallery";
import Footer from "../../footer/Footer";

import { Link } from "react-router-dom";

import image1 from "../../../images/hero/wedding-hero.jpg";

function Bryllup() {
  return (
    <>
      <div className="hero-container">
        <img className="d-block w-100" alt="hero" src={image1} title="credit: Atlungstad Brenneri" />
      </div>
      <div class="back-button mt-3 p-3">
        <Link to="/spiseriet">
          <i class="far fa-arrow-alt-circle-left"></i> Tilbake
        </Link>
      </div>
      <div className="container lab">
        <WeddingList />
        <div className="container mb-5">
          <WeddingGallery />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Bryllup;
