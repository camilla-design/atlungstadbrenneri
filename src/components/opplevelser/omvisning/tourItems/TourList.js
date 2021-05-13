import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../../constants/api/API_URL";

const API = API_URL + "/omvisnings";

function TourList() {
  const [texts, setText] = useState([]);
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
    <div className="mt-2 p-5">
      {texts.map((text) => (
        <div>
          <h4>{text.title}</h4>
          <p>{text.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TourList;
