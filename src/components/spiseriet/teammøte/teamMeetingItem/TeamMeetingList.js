import { useEffect, useState } from "react";
import { API_URL } from "../../../../constants/api/API_URL";

const API = API_URL + "/teamsmoters";

function TeamMeetingList() {
  const [texts, setText] = useState([]);

  const getApi = () => {
    fetch(API)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setText(json);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

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
