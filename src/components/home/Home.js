import { Component } from "react";
import CookieConsent from "react-cookie-consent";

import Slider from "../home/slider/Slider";
import Velkomstekst from "./velkomstekst/Velkomstekst";
import Åpningstid from "./åpningstid/Åpningstid";
import MenyForside from "./menyer-forside/MenyForside";
import Nyhetsbrev from "./nyhetsbrev/Nyhetsbrev";

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
          expires={365}
        >
          <h4>Vi bruker cookie</h4>
          <h6>
            Vi kan plassere disse for analyse av besøkende data, for å forbedre
            nettstedet vårt, vise personlig innhold og for å gi deg en flott
            nettsideopplevelse. For mer informasjon om cookien bruker vi
            innstillingene.
          </h6>
          <a href="">Les om våre policy her</a>
        </CookieConsent>
        <Slider />

        <Velkomstekst />
        <Åpningstid />
        <MenyForside />
        <Nyhetsbrev />
        <Footer />
      </>
    );
  }
}

export default Home;
