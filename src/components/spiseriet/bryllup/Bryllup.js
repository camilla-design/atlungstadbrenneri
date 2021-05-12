import WeddingList from "./weddingItems/WeddingList";
import WeddingGallery from "./weddingItems/WeddigGallery";
import Footer from "../../footer/Footer";

import image1 from "../../../images/hero/wedding.jpg";

function Bryllup() {
  return (
    <>
      <div className="hero-container mt-5">
        <img className="d-block w-100" alt="hero" src={image1} />
      </div>
      <div class="back-button mt-3 p-3">
        <a href="/spiseriet">
          <i class="far fa-arrow-alt-circle-left"></i> Tilbake
        </a>
      </div>
      <div className="container">
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
