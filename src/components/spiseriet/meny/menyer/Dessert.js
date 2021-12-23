import { useEffect, useState } from "react";
import { API_URL } from "../../../../constants/api/API_URL";
import axios from "axios";
import Loader from "../../../loader/Loader";

const API = API_URL + "/desserts";

function Dessert() {
  const [desserts, setText] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setText(response.data);
    });
  }, []);

  if (desserts) {
    return (
      <div>
        {desserts.map((dessert) => (
          <div className="mb-4 mt-4">
            <div className="d-flex menu-flex">
              <div>
                <h5>{dessert.title}</h5>
              </div>
              <div>
                <h5>{dessert.price}</h5>
              </div>
            </div>
            <p>{dessert.description}</p>
            <p>
              <i>{dessert.allergi}</i>
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

export default Dessert;
