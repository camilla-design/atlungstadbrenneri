import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../constants/api/API_URL";
import Loader from "../../loader/Loader";

import Ansatte from "./Ansatte";
import KontaktOss from "./KontaktOss";
import Bærekraft from "./Bærekraft";
import Historie from "./Historie";
import FacebookNews from "./FacebookNews";

import image1 from "../../../images/hero/sustainability.png";
import image2 from "../../../images/hero/historie-menn.jpg";
import image3 from "../../../images/hero/gamle-atlungstad.jpg";

import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

function AboutList() {
  const API = API_URL + "/spiseriets";

  const [info, setInfo] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setInfo(response.data);
    });
  }, [API]);

  if (info) {
    return (
      <>
        <div className="menu-navigation">
          <Tab.Container id="left-tabs" defaultActiveKey="ansatte">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="ansatte"> KONTAKT PERSONER</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="kontakt-oss"> KONTAKT OSS</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="bærekraft"> BÆREKRAFT</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="historie"> HISTORIE</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="news"> NYHETER</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="ansatte">
                    <div class="card-title mt-5">
                      <h3> Kontakt personer </h3>
                      <hr></hr>
                    </div>
                    <div class="card-body">
                      <p>
                        Ønsker du å komme i kontakt med noen av våre ledere? Da
                        finner du all kontakt informasjon her!
                      </p>
                    </div>
                    <Ansatte />
                  </Tab.Pane>
                  <Tab.Pane eventKey="kontakt-oss">
                    <div class="card-title mt-5">
                      <h3> Kontakt oss </h3>
                      <hr></hr>
                    </div>
                    <div class="card-body">
                      <p>
                        Har du noen spørsmål, eller ønsker å komme i kontakt med
                        oss?
                      </p>
                    </div>
                    <KontaktOss />
                  </Tab.Pane>
                  <Tab.Pane eventKey="bærekraft">
                    <div class="card-title mt-5">
                      <h3> Bærekraft </h3>
                      <hr></hr>
                    </div>
                    <div class="card-body">
                      <img src={image1} width="200" alt="bærekraft logo" />
                      <Bærekraft />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="historie">
                    <div class="card-title mt-5">
                      <h3> Historie </h3>
                      <hr></hr>
                      <img
                        src={image2}
                        width="300"
                        className="mt-3"
                        alt="Eldre menn som jobbet på Atlungstad"
                        title="credit: Atlungstad Brenneri"
                      />
                    </div>
                    <div class="card-body">
                      <Historie />
                      <img
                        src={image3}
                        width="300"
                        className="mt-3"
                        alt="gammle Atlungstad Brenneri"
                        title="credit: Atlungstad Brenneri"
                      />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="news">
                    <div class="card-title mt-5">
                      <h3> Facebook Nyheter </h3>
                      <hr></hr>
                    </div>
                    <div class="card-body">
                      <FacebookNews />
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
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

export default AboutList;
