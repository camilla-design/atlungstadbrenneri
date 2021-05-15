import TeamMeetingList from "./teamMeetingItem/TeamMeetingList";
import Footer from "../../footer/Footer";

import { Link } from "react-router-dom";
import image1 from "../../../images/hero/teamsmøte.jpg";

function Teammøte() {
  return (
    <>
      <div className="hero-container">
        <img className="d-block w-100" alt="hero" src={image1} />
      </div>
      <div class="back-button mt-3 p-3">
        <Link to="/spiseriet">
          <i class="far fa-arrow-alt-circle-left"></i> Tilbake
        </Link>
      </div>

      <div className="container">
        <TeamMeetingList />
        <p>
          Les mer om{" "}
          <a
            target="_blank"
            href="https://stangevestbygd.no/firmaer/sondre-elton-gard/"
          >
            Søndre Elton Gård
          </a>
        </p>
        <div class="order-button mt-3">
          <a href="mailto:post@atlungstadbrenneri.no">Bestill her</a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Teammøte;
