import { useEffect, useState } from "react";
import { API_URL } from "../../../constants/api/API_URL";
import axios from "axios";
import Loader from "../../loader/Loader";

const API = API_URL + "/baerekrafts";

function Bærekraft() {
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
            <h4>
              <b>{text.title}</b>
            </h4>
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

export default Bærekraft;
