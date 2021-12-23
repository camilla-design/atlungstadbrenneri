import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../constants/api/API_URL";
import Loader from "../../loader/Loader";

const API = API_URL + "/ansattes";

function Ansatte() {
  const [texts, setText] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setText(response.data);
    });
  }, []);

  if (texts) {
    return (
      <div className="category-container">
        {texts.map((staff) => (
          <div className="staff-card">
            <div className="mb-4 mt-4 card-img">
              <img
                src={`${staff.image[0].url}`}
                width="100"
                alt="Ansatte hos Atlungstad Brenneri"
                title="credit: Atlungstad Brenneri"
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
  } else {
    return (
      <div className="loader-container">
        <Loader />
      </div>
    );
  }
}

export default Ansatte;
