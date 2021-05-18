import { useEffect, useState } from "react";
import { API_URL } from "../../../constants/api/API_URL";
import axios from "axios";
import Loader from "../../loader/Loader";

const API = API_URL + "/histories";

function Historie() {
  const [texts, setText] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setText(response.data);
    });
  }, []);

  if (texts) {
    return (
      <div>
        {texts.map((text) => (
          <div className="mb-4 mt-4">
            <h1>{text.title}</h1>
            <h4 className="mt-4">
              <b>{text.intro}</b>
            </h4>
            <p className="mt-3">{text.description}</p>
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

export default Historie;
