import Starter from "./menyer/Forretter";
import Hovedretter from "./menyer/Hovedretter";
import Dessert from "./menyer/Dessert";
import Barnemeny from "./menyer/Barnemeny";
import MenyGalleri from "./galleri/MenyGalleri";
import Footer from "../../footer/Footer";

import ScrollAnimation from "react-animate-on-scroll";

import image1 from "../../../images/hero/meny1.jpg";
import { Component } from "react";

class Meny extends Component {
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

        <div className="mt-3 p-4">
          <div className="card-header-content">
            <h1> Menyer </h1>
            <p>
              Menyene våre består av et solid utvalg velsmakende og mettende
              retter laget av råvarer av ypperste kvalitet.
            </p>

            <div className="order-button">
              <a href="https://booking.gastroplanner.no/atlungstadbrenneri/t">
                Bestill Bord
              </a>
            </div>
            <div className="mt-5 menu-navigation">
              <ScrollAnimation animateIn="fadeIn">
                
                      <div className="pb-5">
                      <hr className="hr-menu"></hr>
                          <h1>Forretter</h1>
                          <hr className="hr-menu"></hr>
                          <Starter />
                          </div>
                       
                        <div className="pb-5">
                        <hr className="hr-menu"></hr>
                          <h1>Hovedretter</h1>
                          <hr className="hr-menu"></hr>
                          <Hovedretter />
                        </div>


                        <div className="pb-5">
                        <hr className="hr-menu"></hr>
                          <h1>Dessert</h1>
                          <hr className="hr-menu"></hr>
                          <Dessert />
                        </div>


                        <div >
                        <hr className="hr-menu"></hr>
                          <h1>Barnemeny</h1>
                          <hr className="hr-menu"></hr>
                          <Barnemeny />
                        </div>
  
                   
              </ScrollAnimation>
            </div>
          </div>
          <div className="container">
          <MenyGalleri />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Meny;
