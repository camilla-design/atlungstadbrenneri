import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../constants/api/API_URL";

function Aktiviteter() {
  const API = API_URL + "/aktiviteters";
  const [textInfo, setTextInfo] = useState(null);

  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        setTextInfo(response.data);
      })
      .catch((err) => {
        return <div>{err}Loading...</div>;
      });
  }, [API]);

  if (textInfo) {
    return (
      <div className="card-box">
        <p>{textInfo[0].description}</p>
        <img src={`${textInfo[0].image[0].url}`} width="240" alt="skiblanderen" />
      </div>
    );
  }
  return <div></div>;
}

export default Aktiviteter;
