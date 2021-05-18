import React, { useState, useEffect } from "react";
import { API_URL } from "../../../../constants/api/API_URL";
import axios from "axios";
import Loader from "../../../loader/Loader";

const API = API_URL + "/blandelabs";

function LabList() {
  const [texts, setText] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setText(response.data);
    });
  }, []);

  if (texts) {
    return (
      <div className="mt-2 p-5">
        {texts.map((text) => (
          <div>
            <h1>{text.title}</h1>
            <p>{text.description}</p>
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

export default LabList;
