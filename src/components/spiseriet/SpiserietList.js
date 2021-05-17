import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants/api/API_URL";
import { Link } from "react-router-dom";

import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

function SpiserietList() {
  const API = API_URL + "/spiseriets";

  const [info, setInfo] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setInfo(response.data);
      console.log(response.data);
    });
  }, [API]);

  if (info) {
    return (
      <>
      <div className="menu-navigation">
        <Tab.Container id="left-tabs" defaultActiveKey="meny">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="meny"> MENY</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="takeaway">TAKE AWAY</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="wedding">BRYLLUP</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="memorial">MINNESAMVÆR</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="teams">TEAMSMØTER</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="meny">
                  <div class="card-title">
                    <h3> {info[0].title} </h3>
                    <hr></hr>
                  </div>
                  <div class="card-body">
                    <p>{info[0].description}</p>

                    <Link to="/meny">Gå til Meny</Link>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="takeaway">
                  <div class="card-title">
                    <h3> {info[1].title} </h3>
                    <hr></hr>
                  </div>
                  <div class="card-body">
                    <p>{info[1].description}</p>
                    <a
                      target="_blank"
                      href="https://ecom.susoft.com/atlungstadtakeaway/products/?fbclid=IwAR0tyhdG3aTuqSPrLdqBouHTs2OQJTS98MtA2W3dWsR_BcWHuRTs-1P7lyU"
                    >
                      Les mer
                    </a>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="wedding">
                  <div class="card-title">
                    <h3> {info[2].title} </h3>
                    <hr></hr>
                  </div>
                  <div class="card-body">
                    <p>{info[2].description}</p>
                    <Link to="/bryllup">Les mer</Link>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="memorial">
                  <div class="card-title">
                    <h3> {info[3].title} </h3>
                    <hr></hr>
                  </div>
                  <div class="card-body">
                    <p>{info[3].description}</p>
                    <Link to="/minnesamvær">Les mer</Link>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="teams">
                  <div class="card-title">
                    <h3> {info[4].title} </h3>
                    <hr></hr>
                  </div>
                  <div class="card-body">
                    <p>{info[4].description}</p>
                    <Link to="/teamsmøter">Les mer</Link>
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
  else {
  return <div>Loading....</div>;
  }
}

export default SpiserietList;
