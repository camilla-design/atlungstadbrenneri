import Starter from "./menyer/Forretter";
import Hovedretter from "./menyer/Hovedretter";
import Dessert from "./menyer/Dessert";
import Barnemeny from "./menyer/Barnemeny";
import MenyGalleri from './galleri/MenyGalleri';
import Footer from "../../footer/Footer";

import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import ScrollAnimation from "react-animate-on-scroll";

import image1 from "../../../images/hero/meny1.jpg";

function Meny() {
  return (
    <>
      <div className="hero-container">
        <img className="d-block w-100" alt="hero" src={image1} />
      </div>
      <div class="back-button mt-2 p-3">
        <a href="/spiseriet">
          <i class="far fa-arrow-alt-circle-left"></i> Tilbake
        </a>
      </div>

      <div className="container-meny mt-3 p-4">
        <div className="card-header-content">
          <h1> Menyer </h1>
          <p>
            Menyene våre består av et solid utvalg velsmakende og mettende
            retter laget av råvarer av ypperste kvalitet.
          </p>

          <div className="order-button">
            <a href="https://booking.gastroplanner.no/atlungstadbrenneri/t">
              Bestill Bord
              </a>
            </div>
          <div className="mt-5 menu-navigation">
          <ScrollAnimation animateIn="fadeIn">
            <Tab.Container id="left-tabs" defaultActiveKey="starter">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="starter">
                        {" "}
                        FORRETTER OG DUGGURD
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="main">HOVEDRETTER</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="dessert">DESSERTER</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="kids">BARNEMENY</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="starter">
                      <h1>Forretter og Duggurd</h1>
                      <hr></hr>
                      <Starter />
                    </Tab.Pane>
                    <Tab.Pane eventKey="main">
                      <h1>Hovedretter</h1>
                      <hr></hr>
                      <Hovedretter />
                    </Tab.Pane>
                    <Tab.Pane eventKey="dessert">
                      <h1>Dessert</h1>
                      <hr></hr>
                      <Dessert />
                    </Tab.Pane>
                    <Tab.Pane eventKey="kids">
                      <h1>Barnemeny</h1>
                      <hr></hr>
                      <Barnemeny />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </ScrollAnimation>
        </div>
        </div>
        <MenyGalleri />
      </div>
      <Footer />
    </>
  );
}

export default Meny;
