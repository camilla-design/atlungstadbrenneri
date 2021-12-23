import MapAtlungstad from "./MapAtlungstad";

import { Component } from "react";

class KontaktOss extends Component {
  render() {
    return (
      <>
        <div className="staff-map category-container mt-5">
          <h1>Kontakt Informasjon</h1>
          <hr></hr>
          <MapAtlungstad />
        </div>

        <div className="contact-card category-container">
          <div className="mb-4 mt-4 staff-information">
            <p>
              <i class="fas fa-phone-alt"></i>{" "}
              <a href="tel:62 33 00 55"> 62 33 00 55</a>
            </p>
            <p>
              <i class="fas fa-envelope"></i>{" "}
              <a href="mailto:post@atlungstadbrenneri.no">
                {" "}
                post@atlungstadbrenneri.no
              </a>
            </p>
            <p>
              <i class="fas fa-map-marker-alt"></i> Sandvikavegen 214, 2312
              Ottestad
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default KontaktOss;
