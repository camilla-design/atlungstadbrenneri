import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../../constants/api/API_URL";
import Loader from "../../../loader/Loader";

const API = API_URL + "/omvisnings";

function TourList() {
  const [texts, setText] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setText(response.data);
    });
  }, []);

  if (texts) {
    return (
      <div className="mt-2 p-5 category-container  menu-navigation">
        {texts.map((text) => (
          <div>
            <h1>{text.title}</h1>
            <hr></hr>
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

export default TourList;
