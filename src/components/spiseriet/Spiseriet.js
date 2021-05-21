import { Component } from "react";
import SpiserietList from "./SpiserietList";
import Footer from "../footer/Footer";


import image2 from "../../images/sliderImages/bigger-carusel-spiseriet.jpg";

class Spiseriet extends Component {
  render() {
    return (
      <>
          <div class="hero-container">
            <img className="d-block w-100 h-100" alt="hero" src={image2} title="credit: Atlungstad Brenneri" />
          </div>
          <div className="category-container p-3 pt-5">
            <h1> - Spiseriet -</h1>
            <h2>Er du sulten?</h2>
            <p>
              Her kan du se alle våre menyer! Enten du vil spise hos oss, eller
              bestille av vår take away meny.
            </p>

            <div className="pt-4 mb-5">
              <SpiserietList />
            </div>
          </div>

        <Footer />
      </>
    );
  }
}

export default Spiseriet;
