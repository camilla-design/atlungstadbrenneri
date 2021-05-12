import { useEffect, useState } from "react";
import { API_URL } from "../../../../constants/api/API_URL";

const API = API_URL + "/barnemenies";

function Barnemeny() {
  const [kidsMenu, setkidsMenu] = useState([]);

  const getApi = () => {
    fetch(API)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setkidsMenu(json);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

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
}

export default Barnemeny;
