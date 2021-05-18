import { Component } from "react";
import CookieConsent from "react-cookie-consent";
import ScrollAnimation from "react-animate-on-scroll";
import Button from "react-bootstrap/Button";

import Slider from "../home/slider/Slider";
import Velkomstekst from "./velkomstekst/Velkomstekst";
import Åpningstid from "./åpningstid/Åpningstid";
import MenyForside from "./menyer-forside/MenyForside";
import Nyhetsbrev from "./nyhetsbrev/Nyhetsbrev";

import policy from "../../policy/policy.pdf";

import Footer from "../footer/Footer";

class Home extends Component {
  render() {
    return (
      <>
        <CookieConsent
          debug={true}
          location="bottom"
          style={{ background: "#081D6B", textAlign: "left" }}
          buttonStyle={{
            color: "#081D6B",
            background: "#fff",
            fontSize: "14px",
          }}
          buttonText="Jeg forstår!"
          expires={300}
        >
          <h4>Vi bruker cookie</h4>
          <h6>
            Vi kan plassere disse for analyse av besøkende data, for å forbedre
            nettstedet vårt, vise personlig innhold og for å gi deg en flott
            nettsideopplevelse. For mer informasjon om cookien bruker vi
            innstillingene.
          </h6>
          <a href={policy}>Les om våre policy her</a>
        </CookieConsent>
        <Slider />
        <Velkomstekst />
        <ScrollAnimation animateIn="fadeIn">
          <div className="container-background">
            <h1 className="mt-5">Åpningstider</h1>
            <p>
              Våre åpningstider ligger også på vår Facebook side:{" "}
              <a href="https://www.facebook.com/atlungstadbrenneri">
                Atlungstad Brenneri
              </a>
            </p>
            <Åpningstid />
            <p className="mt-5">Reserver bord her: </p>
            <Button
              variant="primary"
              href="https://booking.gastroplanner.no/atlungstadbrenneri/t"
            >
              Bestill bord
            </Button>
          </div>
        </ScrollAnimation>
        <MenyForside />
        <Nyhetsbrev />
        <Footer />
      </>
    );
  }
}

export default Home;
