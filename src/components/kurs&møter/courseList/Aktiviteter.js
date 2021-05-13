import React, { useState, useEffect } from "react";
import { API_URL } from "../../../constants/api/API_URL";

const API = API_URL + "/aktiviteters";

function Aktiviteter() {
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
    <div className="card-box">
      {textInfo.map((text) => (
        <div>
          <p>{text.description}</p>
          <img src={`${text.image[0].url}`} width="240" alt="skiblanderen" />
        </div>
      ))}
    </div>
  );
}

export default Aktiviteter;
