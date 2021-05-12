import { useEffect, useState } from "react";
import { API_URL } from "../../../../constants/api/API_URL";

const API = API_URL + "/hovedretts";

function Hovedretter() {
  const [mains, setMains] = useState([]);

  const getApi = () => {
    fetch(API)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setMains(json);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      {mains.map((main) => (
        <div className="mb-4 mt-4">
          <h5>{main.title}</h5>
          <p>{main.description}</p>
          <p>
            <i>{main.allergi}</i>
          </p>
          <h5>{main.price}</h5>
        </div>
      ))}
    </div>
  );
}

export default Hovedretter;
