import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../loader/Loader";
import { API_URL } from "../../../constants/api/API_URL";

const API = API_URL + "/aktiviteters";

function Aktiviteter() {
  const [textInfo, setText] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setText(response.data);
    });
  }, []);

  if (textInfo) {
    return (
      <div className="card-box category-container  menu-navigation mt-5">
        <h1>Aktiviteter</h1>
        <hr></hr>

        {textInfo.map((text) => (
          <div>
            <p>{text.description}</p>
            <img
              src={`${text.image[0].url}`}
              width="240"
              alt="skiblanderen"
              title="credit: Atlungstad Brenneri"
            />
          </div>
        ))}
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

export default Aktiviteter;
