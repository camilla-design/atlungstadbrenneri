import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../constants/api/API_URL";
import Loader from "../../loader/Loader";

import ScrollAnimation from "react-animate-on-scroll";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MenyInnhold() {
  const API = API_URL + "/menyer-forsides";

  const [cardInfo, setcardInfo] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setcardInfo(response.data);
    });
  }, [API]);

  if (cardInfo) {
    return (
      <>
        <div className="card-container">
          <Row md={2}>
            <ScrollAnimation animateIn="fadeIn">
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={`${cardInfo[0].image[0].url}`}
                    alt="credit: Atlungstad Brenneri"
                  />
                  <Card.Body>
                    <Card.Title className="card-title">
                      {cardInfo[0].title}
                    </Card.Title>
                    <Card.Text>{cardInfo[0].description}</Card.Text>
                    <Button variant="dark">
                      <Link to="/spiseriet">Spiseriet</Link>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={`${cardInfo[1].image[0].url}`}
                    alt="credit: Atlungstad Brenneri"
                  />
                  <Card.Body>
                    <Card.Title className="card-title">
                      {cardInfo[1].title}
                    </Card.Title>
                    <Card.Text>{cardInfo[1].description}</Card.Text>
                    <Button variant="dark">
                      <a
                        target="_blank"
                        href="https://ecom.susoft.com/atlungstadtakeaway/home"
                        rel="noreferrer"
                      >
                        Take Away
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={`${cardInfo[2].image[0].url}`}
                    alt="credit: Atlungstad Brenneri"
                  />
                  <Card.Body>
                    <Card.Title className="card-title">
                      {cardInfo[2].title}
                    </Card.Title>
                    <Card.Text>{cardInfo[2].description}</Card.Text>
                    <Button variant="dark">
                      <Link to="/opplevelser">Opplevelser</Link>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={`${cardInfo[3].image[0].url}`}
                    alt="credit: Atlungstad Brenneri"
                  />
                  <Card.Body>
                    <Card.Title className="card-title">
                      {cardInfo[3].title}
                    </Card.Title>
                    <Card.Text>{cardInfo[3].description}</Card.Text>
                    <Button variant="dark">
                      <a
                        target="_blank"
                        href="https://ecom.susoft.com/atlungstadbutikk/home"
                        rel="noreferrer"
                      >
                        Nettbutikk
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </ScrollAnimation>
          </Row>
        </div>
      </>
    );
  }
  return (
    <div className="loader-container">
      <Loader />
    </div>
  );
}

export default MenyInnhold;
