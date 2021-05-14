import { useEffect, useState } from "react";
import { API_URL } from "../../../constants/api/API_URL";

const API = API_URL + "/moteroms";

function Møterom() {
    const [textInfo, setTextInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const getApi = () => {
      fetch(API)
        .then((response) => response.json())
        .then((json) => {
          setTextInfo(json);
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
      {textInfo.map((text) => (
        <div className="mb-4 mt-4">
          <h1>{text.title}</h1>
          <p>{text.decription}</p>
        </div>
      ))}
    </div>
  );
}

export default Møterom;
