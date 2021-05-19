import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../../constants/api/API_URL";
import Loader from "../../../loader/Loader";

const API = API_URL + "/minnesamvaers";

function MemorialList() {
  const [textInfo, setTextInfo] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setTextInfo(response.data);
      console.log(setTextInfo);
    });
  }, []);

  if (textInfo) {
    return (
      <div className="p-3">
        <h1> {textInfo[0].title} </h1>
        <h4>Et siste minne.</h4>
        <p>{textInfo[0].description}</p>
        <div class="order-button mt-3">
          <a href="mailto:post@atlungstadbrenneri.no">Bestill her</a>
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

export default MemorialList;
