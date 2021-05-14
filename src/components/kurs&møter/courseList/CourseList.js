import Aktiviteter from "./Aktiviteter";
import Møtepakker from "./Møtepakker";
import Møterom from "./Møterom";

import image1 from "../../../images/hero/møtepakker.jpg";
import image2 from "../../../images/hero/møterom.jpg";

import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

function CourseList() {
  return (
    <Tab.Container id="left-tabs" defaultActiveKey="aktiviteter">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="aktiviteter"> AKTIVITETER</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="møtepakker">MØTEPAKKER</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="møterom"> MØTEROM</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="aktiviteter">
              <div class="card-title mt-5">
                <h3> Aktiviteter </h3>
                <hr></hr>
              </div>
              <div class="card-body">
                <Aktiviteter />
              </div>
              <div class="order-button">
                <a href="mailto: post@atlungstadbrenneri.no">Bestill</a>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="møtepakker">
              <div class="card-title mt-5">
                <h3> Møtepakker </h3>
                <hr></hr>
              </div>
              <div class="card-body">
                <p>
                  Vi har fler ulike møtepakker på Brenneriet, vi tilpasser også
                  etter dine behov og ønsker, slik at du får ditt skreddersydde
                  arrangement i våre unike og historiske lokaler Kontakt oss for
                  planleggingen av ditt møte.
                </p>
                <Møtepakker />
                <div>
                  <img src={image1} width="200" alt="møtepakker" />
                </div>
              </div>
              <div class="order-button">
                <a href="mailto: post@atlungstadbrenneri.no">Bestill</a>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="møterom">
              <div class="card-title mt-5">
                <h3> Møterom </h3>
                <hr></hr>
              </div>
              <div class="card-body">
                <p>Våre møtelokaler</p>
                <Møterom />
                <div>
                  <img src={image2} width="200" alt="Møtelokaler" />
                </div>
                </div>
                <div class="order-button">
                <a href="mailto: post@atlungstadbrenneri.no">Bestill</a>
                </div>
              
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default CourseList;
