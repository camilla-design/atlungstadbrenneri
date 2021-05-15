import { Component } from "react";
import ExperienceList from "./experienseItems/ExperienceList";
import Footer from "../footer/Footer";

import ScrollAnimation from "react-animate-on-scroll";

import image2 from "../../images/hero/opplevelser.jpg";

class Opplevelser extends Component {
  render() {
    return (
      <>
        <ScrollAnimation animateIn="fadeIn">
          <div className="hero-container">
            <img className="d-block w-100 h-100" alt="hero" src={image2} />
          </div>
          <div className="category-container p-3 pt-5">
            <h1> - Opplevelser -</h1>
            <p>
              Her kan du se alle våre opplevelser! Enten du vil se hvordan potet
              blir til gylne dråper, bli med på omvisning eller andre
              oppelevlser
            </p>

            <div className="pt-4 mb-5">
              <ExperienceList />
            </div>
          </div>
        </ScrollAnimation>
        <Footer />
      </>
    );
  }
}

export default Opplevelser;
