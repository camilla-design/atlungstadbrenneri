import { useEffect, useState } from "react";
import { API_URL } from "../../../constants/api/API_URL";
import axios from "axios";
import Loader from '../../loader/Loader';


const API = API_URL + "/apningstiders";

function Opening() {
  const [opening, setOpening] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setOpening(response.data);
    });
  }, [API]);

if(opening) {
  return (
    
          <div className="opening-container mt-5">
            <div>
              {opening.map((open) => (
                <div className="opening-day">
                  <p className="mt-2">{open.day}</p>
                </div>
              ))}
            </div>
            <div>
              {opening.map((open) => (
                <div className="">
                  <p className="mt-2">{open.time}</p>
                  <p className="closed-text"> {open.closed}</p>
                </div>
              ))}
            </div>
          </div>
         
  );
  }
  else {
    return <div className="loader-container"><Loader /></div>
  }
}

export default Opening;
