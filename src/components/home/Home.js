import { Component } from "react";
import { Link } from "react-router-dom";
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
        <div class="container-meeting-homepage mt-5 mb-5">
        <h1> - Kurs og møter - </h1>
            <p>
              Ha ditt kurs eller møte i historiske omgivelser på brenneriet.
              Våre møtelokaler er tilpasset med dagens behov for wi-fi, lyd og
              bilde. Maten er selvsagt en viktig del av dagen, og vårt kjøkken
              sørger for at dere får forfriskninger gjennom dagen. Lunsjen er
              tilberedt av regionens råvarer og smaks-satt med kjærlighet til
              norske mattradisjoner.
            </p>
            <Button variant="dark">
                      <Link to="/kurs-og-møter">Les mer</Link>
                    </Button>
        </div>
        <ScrollAnimation animateIn="fadeIn">
          <div className="container-background">
            <div class="text-container">
            <h1 className="mt-5">Åpningstider</h1>
            <p>
              Våre åpningstider ligger også på vår Facebook side:{" "}
              <a href="https://www.facebook.com/atlungstadbrenneri">
                Atlungstad Brenneri
              </a>
            </p>
            </div>
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
