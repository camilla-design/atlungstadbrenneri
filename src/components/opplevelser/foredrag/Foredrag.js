import LectureList from "./lectureItems/LectureList";
import LectureGallery from "./lectureItems/LectureGallery";

import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";

import image1 from "../../../images/hero/foredrag.jpg";
import Button from "react-bootstrap/Button";

function Foredrag() {
  return (
    <>
      <div className="hero-container">
        <img className="d-block w-100" alt="hero" src={image1} title="credit: Atlungstad Brenneri" />{" "}
      </div>{" "}
      <div class="back-button mt-3 p-3">
        <Link to="/opplevelser">
          {" "}
          <i class="far fa-arrow-alt-circle-left"> </i> Tilbake
        </Link>
      </div>{" "}
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

export default Foredrag;
