import { useEffect, useState } from "react";
import { API_URL } from "../../../../constants/api/API_URL";

const API = API_URL + "/teamsmoters";

function TeamMeetingList() {
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
        <div className="mb-4">
          <h1>{text.title}</h1>
          <p>{text.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TeamMeetingList;
