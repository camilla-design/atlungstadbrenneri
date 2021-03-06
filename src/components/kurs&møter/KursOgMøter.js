import { Component } from "react";
import CourseList from "./item/CourseList";
import Footer from "../footer/Footer";

import ScrollAnimation from "react-animate-on-scroll";

import image2 from "../../images/hero/kurs.jpg";

class KursOgMøter extends Component {
  render() {
    return (
      <>
        <ScrollAnimation animateIn="fadeIn">
          <div className="hero-container">
            <img
              className="d-block w-100 h-100"
              alt="hero"
              src={image2}
              title="credit: Atlungstad Brenneri"
            />
          </div>
          <div className="category-container p-3 pt-5">
            <h1> - Kurs og møter - </h1>
            <p>
              Ha ditt kurs eller møte i historiske omgivelser på brenneriet.
              Våre møtelokaler er tilpasset med dagens behov for wi-fi, lyd og
              bilde. Maten er selvsagt en viktig del av dagen, og vårt kjøkken
              sørger for at dere får forfriskninger gjennom dagen. Lunsjen er
              tilberedt av regionens råvarer og smaks-satt med kjærlighet til
              norske mattradisjoner.
            </p>

            <div className="pt-4 mb-5">
              <CourseList />
            </div>
          </div>
        </ScrollAnimation>

        <Footer />
      </>
    );
  }
}

export default KursOgMøter;
