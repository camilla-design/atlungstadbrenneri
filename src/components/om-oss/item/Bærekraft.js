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
      <div className="category-container mt-4">
        <h1>Bærekraft</h1>
        <hr></hr>
        {texts.map((text) => (
          <div className="mb-4 mt-4 p-3">
            <h4>
              <hr className="hr-menu"></hr>
              <b>{text.title}</b>
              <hr className="hr-menu"></hr>
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
