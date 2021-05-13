import { useEffect, useState } from "react";
import { API_URL } from "../../../constants/api/API_URL";

const API = API_URL + "/histories";

function Historie() {
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
    <div>
      {texts.map((text) => (
        <div className="mb-4 mt-4">
          <h1>{text.title}</h1>
          <h4 className="mt-4">
            <b>{text.intro}</b>
          </h4>
          <p className="mt-3">{text.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Historie;
