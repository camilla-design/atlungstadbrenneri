import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from '../../loader/Loader';
import { API_URL } from "../../../constants/api/API_URL";

const API = API_URL + "/aktiviteters";

function Aktiviteter() {
  const [textInfo, setText] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setText(response.data);
    });
  }, [API]);

  if(textInfo) {

  return (
    <div className="card-box">
      {textInfo.map((text) => (
        <div>
          <p>{text.description}</p>
          <img src={`${text.image[0].url}`} width="240" alt="skiblanderen" />
        </div>
      ))}
    </div>
  );
} else {
  return <div className="loader-container"><Loader /></div>
}
}

export default Aktiviteter;
