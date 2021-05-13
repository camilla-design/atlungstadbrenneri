import { useEffect, useState } from "react";
import { API_URL } from "../../../../constants/api/API_URL";

const API = API_URL + "/hovedretts";

function Hovedretter() {
    const [mains, setText] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const getApi = () => {
      fetch(API)
        .then((response) => response.json())
        .then((json) => {
          setText(json);
        });
    };
  
    useEffect(function () {
      try {
        getApi();
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }, []);
  
    if (loading) {
      return <div>Loading..</div>;
    }
  
    if (error) {
      return <div>An error</div>;
    }

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
