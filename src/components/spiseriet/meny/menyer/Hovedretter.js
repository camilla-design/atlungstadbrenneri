import { useEffect, useState } from "react";
import { API_URL } from "../../../../constants/api/API_URL";
import axios from "axios";
import Loader from "../../../loader/Loader";

const API = API_URL + "/hovedretts";

function Hovedretter() {
  const [mains, setText] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setText(response.data);
    });
  }, []);

  if (mains) {
    return (
      <div>
        {mains.map((main) => (
          <div className="mb-4 mt-4">
            <div className="d-flex menu-flex">
              <div>
                <h5>{main.title}</h5>
              </div>
              <div>
                <h5>{main.price}</h5>
              </div>
            </div>
            <p>{main.description}</p>
            <p>
              <i>{main.allergi}</i>
            </p>
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

export default Hovedretter;
