import React, { useState, useEffect } from "react";
import { API_URL } from "../../../../constants/api/API_URL";
import axios from "axios";
import Loader from "../../../loader/Loader";

const API = API_URL + "/bryllups";

function WeddingList() {
  const [texts, setText] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setText(response.data);
    });
  }, []);

  if (texts) {
    return (
      <div className="p-4">
        {texts.map((text) => (
          <div>
            <h1> {text.title} </h1>
            <hr></hr>
            <h4>Bryllupet er en av livets største begivenheter.</h4>
            <p className="mt-3">{text.description}</p>
          </div>
        ))}

        <div>
          <div class="order-button mt-3">
            <a href="mailto:post@atlungstadbrenneri.no">Bestill her</a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="loader-container">
        <Loader />
      </div>
    );
  }
}

export default WeddingList;
