import React, { useState, useEffect } from "react";
import { API_URL } from "../../../constants/api/API_URL";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

import image1 from "../../../images/hero/historie-menn.jpg";

const API = API_URL + "/velkomsteksts";

function Velkomstekst() {
  const [texts, setText] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getApi = () => {
    fetch(API)
      .then((response) => response.json())
      .then((json) => {
        setText(json);
      });
  };

  useEffect(function () {
    try {
      getApi();
    } catch (error) {
      setError(error.toString());
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading..</div>;
  }

  if (error) {
    return <div>An error</div>;
  }

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

export default Velkomstekst;
