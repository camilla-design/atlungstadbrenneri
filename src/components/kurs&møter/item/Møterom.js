import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../loader/Loader";
import { API_URL } from "../../../constants/api/API_URL";

const API = API_URL + "/moteroms";

function Møterom() {
  const [textInfo, setText] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setText(response.data);
    });
  }, []);

  if (textInfo) {
    return (
      <div>
        {textInfo.map((text) => (
          <div className="mb-4 mt-4">
            <h1>{text.title}</h1>
            <p>{text.decription}</p>
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

export default Møterom;
