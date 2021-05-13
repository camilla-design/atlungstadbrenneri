import React, { useState, useEffect } from "react";
import { API_URL } from "../../../../constants/api/API_URL";

const API = API_URL + "/foredrags";

function LectureList() {
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
    <div className="mt-2 p-4">
      {texts.map((text) => (
        <div>
          <h1>{text.title}</h1>
          <h6>
            <b>{text.intro}</b>
          </h6>
          <p>{text.description}</p>
        </div>
      ))}
    </div>
  );
}

export default LectureList;
