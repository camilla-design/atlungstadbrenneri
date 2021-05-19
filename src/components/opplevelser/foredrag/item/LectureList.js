import React, { useState, useEffect } from "react";
import { API_URL } from "../../../../constants/api/API_URL";
import axios from "axios";
import Loader from "../../../loader/Loader";

const API = API_URL + "/foredrags";

function LectureList() {
  const [texts, setText] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setText(response.data);
    });
  }, []);

  if (texts) {
    return (
      <div className="mt-2 p-4">
        {texts.map((text) => (
          <div>
            <h1>{text.title}</h1>
            <h6>
              <b>{text.intro}</b>
            </h6>
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

export default LectureList;
