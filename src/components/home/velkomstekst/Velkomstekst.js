import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../constants/api/API_URL";
import ScrollAnimation from "react-animate-on-scroll";

import historyImage from "../../../images/hero/history1.jpg";

function Velkomstekst() {
  const API = API_URL + "/velkomsteksts";
  const [textInfo, setTextInfo] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setTextInfo(response.data);
    });
  }, [API]);

  if (textInfo) {
    return (
      <div className="container">
        <ScrollAnimation animateIn="fadeIn">
          <div class="flex-container">
            <div className="text-container">
              <h1>{textInfo[0].title}</h1>
              <p className="mt-3">{textInfo[0].description}</p>
              <div class="read-more-button mt-3">
                <a href="/om-oss">Les mer</a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div className="mt-3 image-container">
            <img src={historyImage} width="300" />
          </div>
        </ScrollAnimation>
      </div>
    );
  }
  return <div></div>;
}

export default Velkomstekst;
