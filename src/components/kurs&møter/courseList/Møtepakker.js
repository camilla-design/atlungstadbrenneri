import { useEffect, useState } from "react";
import axios from "axios";
import Loader from '../../loader/Loader';
import { API_URL } from "../../../constants/api/API_URL";

const API = API_URL + "/motepakkers";

function Møtepakker() {
  const [textInfo, setText] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setText(response.data);
    });
  }, [API]);

  if(textInfo) {

  return (
    <div>
      {textInfo.map((text) => (
        <div className="mb-4 mt-4">
          <p>
            Vi har fler ulike møtepakker på Brenneriet, vi tilpasser også etter
            dine behov og ønsker, slik at du får ditt skreddersydde arrangement
            i våre unike og historiske lokaler Kontakt oss for planleggingen av
            ditt møte
          </p>
          <h1>{text.title}</h1>
          <p>{text.description}</p>
        </div>
      ))}
    </div>
  );
  }
  else {
    return <div className="loader-container"><Loader /></div>
  }
}

export default Møtepakker;
