import React, { useState, useEffect } from "react";
import { API_URL } from "../../../../constants/api/API_URL";

const API = API_URL + "/bryllups";

function WeddingList() {
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
    <div className="p-4">
      {texts.map((text) => (
        <div>
          <h1> {text.title} </h1>
          <h4>Bryllupet er en av livets største begivenheter.</h4>
          <p className="mt-3">{text.description}</p>
        </div>
      ))}

      <div>
        <div class="order-button mt-3">
          <a href="mailto:post@atlungstadbrenneri.no">Bestill her</a>
        </div>
      </div>
    </div>
  );
}

export default WeddingList;
