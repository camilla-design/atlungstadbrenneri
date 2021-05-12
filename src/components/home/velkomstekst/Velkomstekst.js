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
      <ScrollAnimation animateIn="fadeIn">
        <div className="container">
          <div class="flex-container">
            <div className="text-container">
              <h1>{textInfo[0].title}</h1>
              <p className="mt-3">{textInfo[0].description}</p>
              <div className="read-more-button mt-3">
                <a href="/om-oss">Les mer</a>
              </div>
            </div>
            <div className="mt-3 image-container">
              <img src={historyImage} width="300" alt="old factory mens" />
            </div>
          </div>
        </div>
      </ScrollAnimation>
    );
  }
  return <div></div>;
}

export default Velkomstekst;
