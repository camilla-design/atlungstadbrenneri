import { useEffect, useState } from "react";
import { API_URL } from "../../../../constants/api/API_URL";
import axios from "axios";
import Loader from "../../../loader/Loader";

const API = API_URL + "/foretters";

function Starter() {
  const [starters, setText] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setText(response.data);
    });
  }, []);

  if (starters) {
    return (
      <div>
        {starters.map((starter) => (
          <div className="mb-4 mt-4">
            <div className="d-flex menu-flex">
              <div>
                <h5>{starter.title}</h5>
              </div>
              <div>
                <h5>{starter.price}</h5>
              </div>
            </div>
            <p>{starter.description}</p>
            <p>
              <i>{starter.allergi}</i>
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

export default Starter;
