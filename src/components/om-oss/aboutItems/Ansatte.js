import { useEffect, useState } from "react";
import { API_URL } from "../../../constants/api/API_URL";

const API = API_URL + "/ansattes";

function Ansatte() {
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
      {texts.map((staff) => (
        <div className="staff-card">
        <div className="mb-4 mt-4 card-img">
          <img
            src={`${staff.image[0].url}`}
            width="100"
            alt="Ansatte hos Atlungstad Brenneri"
          />
          </div>
          <div className="mb-4 mt-4 staff-information">
            <h4>
              <i class="fas fa-id-card"></i> {staff.name}
            </h4>
            <p>
              <i>{staff.title}</i>
            </p>
            <p>
              <i class="fas fa-envelope"></i>{" "}
              <a href={`mailto:${staff.email}`}> {staff.email}</a>
            </p>
            <p>
              <i class="fas fa-phone-alt"></i>{" "}
              <a href={`tel:${staff.phone}`}> {staff.phone}</a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ansatte;
