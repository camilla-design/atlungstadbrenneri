import React, { useState, useEffect } from "react";
import { API_URL } from "../../../constants/api/API_URL";
import ScrollAnimation from "react-animate-on-scroll";

import historyImage from "../../../images/hero/history1.jpg";

const API = API_URL + "/velkomsteksts";

function Velkomstekst() {
  const [texts, setText] = useState([]);

  const getApi = () => {
    fetch(API)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setText(json);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <ScrollAnimation animateIn="fadeIn">
        {texts.map((text) => (
          <div className="container">
            <div class="flex-container">
              <div className="text-container">
                <h1>{text.title}</h1>
                <p className="mt-3">{text.description}</p>
                <div className="read-more-button mt-3">
                  <a href="/om-oss">Les mer</a>
                </div>
              </div>
              <div className="mt-3 image-container">
                <img src={historyImage} width="300" alt="old factory mens" />
              </div>
            </div>
          </div>
        ))}
      </ScrollAnimation>
    </div>
  );
}

export default Velkomstekst;
