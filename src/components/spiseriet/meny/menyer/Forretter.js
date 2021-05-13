import { useEffect, useState } from "react";
import { API_URL } from "../../../../constants/api/API_URL";

const API = API_URL + "/foretters";

function Starter() {
    const [starters, setText] = useState([]);
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
      {starters.map((starter) => (
        <div className="mb-4 mt-4">
          <h5>{starter.title}</h5>
          <p>{starter.description}</p>
          <p>
            <i>{starter.allergi}</i>
          </p>
          <h5>{starter.price}</h5>
        </div>
      ))}
    </div>
  );
}

export default Starter;
