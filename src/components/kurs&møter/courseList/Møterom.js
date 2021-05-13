import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../constants/api/API_URL";

const API = API_URL + "/moteroms";

function Møterom() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        setMeetings(response.data);
      })
      .catch((err) => {
        return <div>{err}Loading...</div>;
      });
  }, [API]);

  return (
    <div>
      {meetings.map((meeting) => (
        <div className="mb-4 mt-4">
          <h1>{meeting.title}</h1>
          <p>{meeting.decription}</p>
        </div>
      ))}
    </div>
  );
}

export default Møterom;
