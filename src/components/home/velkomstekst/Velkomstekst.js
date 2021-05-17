import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../constants/api/API_URL";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import Loader from '../../loader/Loader';

import image1 from "../../../images/hero/historie-menn.jpg";

const API = API_URL + "/velkomsteksts";

function Velkomstekst() {
  const [texts, setText] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setText(response.data);
    });
  }, [API]);

  if(texts) {
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
                <Link to="/om-oss">Les mer</Link>
                </div>
              </div>
              <div className="mt-3 image-container">
                <img src={image1} width="300" alt="old factory mens" />
              </div>
            </div>
          </div>
        ))}
      </ScrollAnimation>
    </div>
  );
}
else {
  return <div><Loader /></div>
}
}

export default Velkomstekst;
