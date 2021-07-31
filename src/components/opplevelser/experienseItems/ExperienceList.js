import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../constants/api/API_URL";
import { Link } from "react-router-dom";
import Loader from "../../loader/Loader";

import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

const API = API_URL + "/opplevelsers";

function ExperienceList() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setInfo(response.data);
    });
  }, []);

  if (info) {
    return (
      <>
        <div className="menu-navigation">
          <Tab.Container id="left-tabs" defaultActiveKey="blandelab">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="omvisning"> OMVISNING</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="foredrag">FOREDRAG</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="blandelab"> BLANDELAB</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="omvisning">
                    <div class="card-title mt-5">
                      <h3> {info[2].title} </h3>
                      <hr></hr>
                    </div>
                    <div class="card-body">
                      <p>{info[2].description}</p>
                      <Link to="/omvisning">Les mer</Link>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="foredrag">
                    <div class="card-title mt-5">
                      <h3> {info[1].title} </h3>
                      <hr></hr>
                    </div>
                    <div class="card-body">
                      <p>{info[1].description}</p>
                      <Link to="/foredrag">Les mer</Link>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="blandelab">
                    <div class="card-title mt-5">
                      <h3> {info[0].title} </h3>
                      <hr></hr>
                      <div class="card-body">
                        <p>{info[0].description}</p>
                        <Link to="/blande-lab">Les mer</Link>
                      </div>
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

export default ExperienceList;
