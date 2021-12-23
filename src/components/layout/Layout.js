import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../home/Home";
import Spiseriet from "../spiseriet/Spiseriet";
import Meny from "../spiseriet/meny/Meny";
import Bryllup from "../spiseriet/bryllup/Bryllup";
import Minnesamvær from "../spiseriet/minnesamvær/Minnesamvær";
import Teammøte from "../spiseriet/teammøte/Teammøter";
import KursOgMøter from "../kurs&møter/KursOgMøter";
import Møtepakker from "../kurs&møter/item/Møtepakker";
import Møterom from "../kurs&møter/item/Møterom";
import Aktiviteter from "../kurs&møter/item/Aktiviteter";
import Opplevelser from "../opplevelser/Opplevelser";
import Blandelab from "../opplevelser/blandelab/Blandelab";
import Foredrag from "../opplevelser/foredrag/Foredrag";
import Omvisning from "../opplevelser/omvisning/Omvisning";
import OmOss from "../om-oss/OmOss";
import Ansatte from "../om-oss/item/Ansatte";
import KontaktOss from "../om-oss/item/KontaktOss";
import Bærekraft from "../om-oss/item/Bærekraft";
import Historie from "../om-oss/item/Historie";
import FacebookNews from "../om-oss/item/FacebookNews";
import Nyhetsbrev from "../home/nyhetsbrev/Nyhetsbrev";

import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../../images/logo/logo.png";

function Layout() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Router>
      <nav className="navigation">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <img
              src={logo}
              width="50"
              alt="logo"
              title="credit: Atlungstad Brenneri"
            />
          </NavLink>
          <ul class={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <NavLink
                to="/meny"
                activeClassName="active"
                exact
                className="nav-link"
              >
                <NavDropdown title="Spiseriet" id="basic-nav-dropdown">
                  <NavLink
                    to="/meny"
                    activeClassName="active"
                    exact
                    className="nav-link"
                  >
                    <NavDropdown.Item
                      href="../spiseriet/meny/Meny"
                      onClick={handleClick}
                    >
                      Meny
                    </NavDropdown.Item>
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavLink
                    to="/bryllup"
                    activeClassName="active"
                    exact
                    className="nav-link"
                  >
                    <NavDropdown.Item
                      href="../spiseriet/bryllup/Bryllup"
                      onClick={handleClick}
                    >
                      Bryllup
                    </NavDropdown.Item>
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavLink
                    to="/minnesamvær"
                    activeClassName="active"
                    exact
                    className="nav-link"
                  >
                    <NavDropdown.Item
                      href="../spiseriet/minnesamvær/Minnesamvær"
                      onClick={handleClick}
                    >
                      Minnesamvær
                    </NavDropdown.Item>
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavLink
                    to="/teamsmøter"
                    activeClassName="active"
                    exact
                    className="nav-link"
                  >
                    <NavDropdown.Item
                      href="../spiseriet/teammøte/Teammøter"
                      onClick={handleClick}
                    >
                      Teammøter
                    </NavDropdown.Item>
                  </NavLink>
                </NavDropdown>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/kurs-og-møter"
                activeClassName="active"
                exact
                className="nav-link"
              >
                <NavDropdown title="Kurs og møter" id="basic-nav-dropdown">
                  <NavLink
                    to="/møtepakker"
                    activeClassName="active"
                    exact
                    className="nav-link"
                  >
                    <NavDropdown.Item
                      href="../kurs&møter/item/Møtepakker"
                      onClick={handleClick}
                    >
                      Møtepakker
                    </NavDropdown.Item>
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavLink
                    to="/møterom"
                    activeClassName="active"
                    exact
                    className="nav-link"
                  >
                    <NavDropdown.Item
                      href="../kurs&møter/item/Møterom"
                      onClick={handleClick}
                    >
                      Møterom
                    </NavDropdown.Item>
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavLink
                    to="/aktiviteter"
                    activeClassName="active"
                    exact
                    className="nav-link"
                  >
                    <NavDropdown.Item
                      href="../kurs&møter/item/Aktiviteter"
                      onClick={handleClick}
                    >
                      Aktiviteter
                    </NavDropdown.Item>
                  </NavLink>
                </NavDropdown>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/opplevelser"
                activeClassName="active"
                exact
                className="nav-link"
              >
                <NavDropdown title="Omvisning" id="basic-nav-dropdown">
                  <NavLink
                    to="/omvisning"
                    activeClassName="active"
                    exact
                    className="nav-link"
                  >
                    <NavDropdown.Item
                      href="../opplevelser/omvisning/Omvisning"
                      onClick={handleClick}
                    >
                      Omvisning
                    </NavDropdown.Item>
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavLink
                    to="/blande-lab"
                    activeClassName="active"
                    exact
                    className="nav-link"
                  >
                    <NavDropdown.Item
                      href="../opplevelser/blandelab/Blandelab"
                      onClick={handleClick}
                    >
                      Blande lab
                    </NavDropdown.Item>
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavLink
                    to="/foredrag"
                    activeClassName="active"
                    exact
                    className="nav-link"
                  >
                    <NavDropdown.Item
                      href="../opplevelser/foredrag/Foredrag"
                      onClick={handleClick}
                    >
                      Foredrag
                    </NavDropdown.Item>
                  </NavLink>
                </NavDropdown>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="om-oss"
                activeClassName="active"
                exact
                className="nav-link"
              >
                <NavDropdown title="Om oss" id="basic-nav-dropdown">
                  <NavLink
                    to="/ansatte"
                    activeClassName="active"
                    exact
                    className="nav-link"
                  >
                    <NavDropdown.Item
                      href="../om-oss/item/Ansatte"
                      onClick={handleClick}
                    >
                      Ansatte
                    </NavDropdown.Item>
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavLink
                    to="/kontakt-oss"
                    activeClassName="active"
                    exact
                    className="nav-link"
                  >
                    <NavDropdown.Item
                      href="../om-oss/item/KontaktOss"
                      onClick={handleClick}
                    >
                      Kontakt oss
                    </NavDropdown.Item>
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavLink
                    to="/bærekraft"
                    activeClassName="active"
                    exact
                    className="nav-link"
                  >
                    <NavDropdown.Item
                      href="../om-oss/item/Bærekraft"
                      onClick={handleClick}
                    >
                      Bærekraft
                    </NavDropdown.Item>
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavLink
                    to="/historie"
                    activeClassName="active"
                    exact
                    className="nav-link"
                  >
                    <NavDropdown.Item
                      href="../om-oss/item/Historie"
                      onClick={handleClick}
                    >
                      Historie
                    </NavDropdown.Item>
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavLink
                    to="/nyheter"
                    activeClassName="active"
                    exact
                    className="nav-link"
                  >
                    <NavDropdown.Item
                      href="../om-oss/item/FacebookNews"
                      onClick={handleClick}
                    >
                      Nyheter
                    </NavDropdown.Item>
                  </NavLink>
                  <NavDropdown.Divider />
                </NavDropdown>
              </NavLink>
            </li>
            <li className="nav-item nav-link">
              <a
                className="nav-link"
                activeClassName="active"
                target="_blank"
                rel="noreferrer"
                href="https://ecom.susoft.com/atlungstadbutikk/home"
                exact
              >
                <i class="fas fa-shopping-basket"></i> Nettbutikk
              </a>
            </li>
            <li className="nav-item nav-link">
              <a
                className="nav-link"
                activeClassName="active"
                target="_blank"
                rel="noreferrer"
                href="https://www.atlungstad.com"
                exact
              >
                <i class="fas fa-wine-bottle"></i> Destilleriet
              </a>
            </li>
            <li className="order-button-nav nav-link">
              <Button
                variant="primary"
                target="_blank"
                rel="noreferrer"
                href="https://booking.gastroplanner.no/atlungstadbrenneri/t"
              >
                Bestill bord
              </Button>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/spiseriet" component={Spiseriet} />
        <Route path="/kurs-og-møter" component={KursOgMøter} />
        <Route path="/møtepakker" component={Møtepakker} />
        <Route path="/møterom" component={Møterom} />
        <Route path="/aktiviteter" component={Aktiviteter} />
        <Route path="/opplevelser" component={Opplevelser} />
        <Route path="/om-oss" component={OmOss} />
        <Route path="/ansatte" component={Ansatte} />
        <Route path="/kontakt-oss" component={KontaktOss} />
        <Route path="/bærekraft" component={Bærekraft} />
        <Route path="/historie" component={Historie} />
        <Route path="/nyheter" component={FacebookNews} />
        <Route path="/meny" component={Meny} />
        <Route path="/bryllup" component={Bryllup} />
        <Route path="/minnesamvær" component={Minnesamvær} />
        <Route path="/teamsmøter" component={Teammøte} />
        <Route path="/blande-lab" component={Blandelab} />
        <Route path="/foredrag" component={Foredrag} />
        <Route path="/omvisning" component={Omvisning} />
        <Route path="/nyhetsbrev" component={Nyhetsbrev} />
      </Switch>
    </Router>
  );
}

export default Layout;
