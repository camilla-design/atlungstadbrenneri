import TeamMeetingList from "./item/TeamMeetingList";
import Footer from "../../footer/Footer";

import { Link } from "react-router-dom";
import image1 from "../../../images/hero/teamsmøte.jpg";
import { Component } from "react";

class Teammøte extends Component {
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
        <div class="back-button mt-3 p-3">
          <Link to="/spiseriet">
            <i class="far fa-arrow-alt-circle-left"></i> Tilbake
          </Link>
        </div>

        <div className="container lab">
          <TeamMeetingList />
          <p>
            Les mer om{" "}
            <a
              target="_blank"
              href="https://stangevestbygd.no/firmaer/sondre-elton-gard/"
              rel="noreferrer"
            >
              Søndre Elton Gård
            </a>
          </p>
          <div class="order-button mt-3 mb-3">
            <a href="mailto:post@atlungstadbrenneri.no">Bestill her</a>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Teammøte;
