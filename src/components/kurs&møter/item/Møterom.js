import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../loader/Loader";
import { API_URL } from "../../../constants/api/API_URL";

const API = API_URL + "/moteroms";

function Møterom() {
  const [textInfo, setText] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setText(response.data);
    });
  }, []);

  if (textInfo) {
    return (
      <div className="category-container mt-5">
        <h1>Våre Møterom</h1>
        <hr></hr>
        <p className="mb-5 p-3">
          Vi har fler ulike møterom på Brenneriet, vi tilpasser også etter dine
          behov og ønsker, slik at du får ditt skreddersydde arrangement i våre
          unike og historiske lokaler. Kontakt oss for planleggingen av ditt
          møte
        </p>
        {textInfo.map((text) => (
          <div className="mb-4 mt-4 p-3">
            <hr className="hr-menu"></hr>
            <h1>{text.title}</h1>
            <hr className="hr-menu"></hr>
            <p>{text.decription}</p>
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

export default Møterom;
