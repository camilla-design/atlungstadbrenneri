import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../constants/api/API_URL";

import ScrollAnimation from "react-animate-on-scroll";
import Button from "react-bootstrap/Button";

const API = API_URL + "/apningstiders";

function Opening() {
  const [opening, setOpening] = useState([]);

  const getApi = () => {
    fetch(API)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setOpening(json);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <ScrollAnimation animateIn="fadeIn">
      <div className="container-background opening-hours-contanier p-5">
        <div className="text-content-opening">
          <h1 className="mt-5">Åpningstider</h1>
          <p>
            Våre åpningstider ligger også på vår Facebook side:{" "}
            <a href="https://www.facebook.com/atlungstadbrenneri">
              Atlungstad Brenneri
            </a>
          </p>
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
          <p className="mt-5">Reserver bord her: </p>
          <Button
            variant="primary"
            href="https://booking.gastroplanner.no/atlungstadbrenneri/t"
          >
            Bestill bord
          </Button>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Opening;
