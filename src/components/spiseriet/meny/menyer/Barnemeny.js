import { useEffect, useState } from "react";
import { API_URL } from "../../../../constants/api/API_URL";
import axios from "axios";
import Loader from "../../../loader/Loader";

const API = API_URL + "/barnemenies";

function Barnemeny() {
  const [kidsMenu, setText] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setText(response.data);
    });
  }, []);

  if (kidsMenu) {
    return (
      <div>
        {kidsMenu.map((menu) => (
          <div className="mb-4 mt-4">
            <h5>{menu.title}</h5>
            <p>{menu.description}</p>
            <p>
              <i>{menu.allergi}</i>
            </p>
            <h5>{menu.price}</h5>
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

export default Barnemeny;
