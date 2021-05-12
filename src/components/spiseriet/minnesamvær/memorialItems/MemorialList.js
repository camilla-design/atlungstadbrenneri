import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../../constants/api/API_URL";

function MemorialList() {
  const API = API_URL + "/minnesamvaers";
  const [textInfo, setTextInfo] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setTextInfo(response.data);
      console.log(setTextInfo);
    });
  }, [API]);

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
  }
  return <div></div>;
}

export default MemorialList;
