import { Component } from "react";
import logo from "../../images/logo/logo.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container pt-5">
        <div class="footer-flex">
          <div className="footer-logo">
            <img
              src={logo}
              alt="logo"
              width="100"
              title="credit: Atlungstad Brenneri"
            ></img>
          </div>
          <div className="footer-links mt-3">
            <div className="contact-links">
              <h5>Kontakt oss</h5>
              <p>
                <i class="fas fa-phone-alt"></i>
                <a href="tel:+4762330055"> 62 33 00 55</a>
              </p>
              <p>
                <i class="fas fa-envelope"></i>
                <a href="mailto: post@atlungstadbrenneri.no">
                  {" "}
                  post@atlungstadbrenneri.no
                </a>
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i> Sandvikavegen 214, 2312
                Ottestad
              </p>
            </div>
            <div className="social-media-links">
              <h5>Sosiale medier</h5>
              <div class="flex-container">
                <p>
                  <a href="https://www.facebook.com/atlungstadbrenneri">
                    <i class="fab fa-facebook-f"> Facebook</i>
                  </a>
                </p>
                <p>
                  <a href="https://www.instagram.com/atlungstadbrenneri/">
                    <i class="fab fa-instagram"> Instagram</i>
                  </a>
                </p>
              </div>
            </div>
            <div className="sponsore-links">
              <h5>Linker</h5>
              <p>
                <a href="https://www.dehistoriske.no/">
                  De historiske Hoteller og spisesteder
                </a>
              </p>
              <p>
                <a href="https://www.annomuseum.no/">Anno Museene</a>
              </p>
              <p>
                <a href="https://stangevestbygd.no/">Stange Vestbygd</a>
              </p>
              <p>
                <a href="https://atlungstadgolf.no/">Atlungstad Golf</a>
              </p>
              <p>
                <a href="https://www.tripadvisor.com/Attraction_Review-g2416413-d3478694-Reviews-Atlungstad_Distillery-Stange_Municipality_Hedmark_Eastern_Norway.html">
                  Tripadvisor
                </a>
              </p>
            </div>
          </div>
        </div>
        <p>
          <i>©copyright - Atlungstad Brenneri AS</i>
        </p>
      </div>
    );
  }
}

export default Footer;
