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
import Opplevelser from "../opplevelser/Opplevelser";
import Blandelab from "../opplevelser/blandelab/Blandelab";
import Foredrag from "../opplevelser/foredrag/Foredrag";
import Omvisning from "../opplevelser/omvisning/Omvisning";
import OmOss from "../om-oss/OmOss";
import Nyhetsbrev from "../home/nyhetsbrev/Nyhetsbrev";

import Button from "react-bootstrap/Button";

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
            <li className="nav-item">
            <NavLink
                to="/spiseriet"
                activeClassName="active"
                exact
                className="nav-link"
                onClick={handleClick}
              >
                Spiseriet
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/kurs-og-møter"
                activeClassName="active"
                exact
                className="nav-link"
                onClick={handleClick}
              >
                Kurs og møter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/opplevelser"
                activeClassName="active"
                exact
                className="nav-link"
                onClick={handleClick}
              >
                Opplevelser
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/om-oss"
                activeClassName="active"
                exact
                className="nav-link"
                onClick={handleClick}
              >
                Om oss
              </NavLink>
            </li>
            <li className="nav-item">
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
            <li className="nav-item">
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
            <li className="nav-item">
              <a
                className="nav-link"
                activeClassName="active"
                target="_blank"
                rel="noreferrer"
                href="https://ecom.susoft.com/atlungstadtakeaway/home"
                exact
              >
                Take Away
              </a>
            </li>
            <li className="order-button-nav">
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
        <Route path="/meny" component={Meny} />
        <Route path="/bryllup" component={Bryllup} />
        <Route path="/minnesamvær" component={Minnesamvær} />
        <Route path="/teamsmøter" component={Teammøte} />
        <Route path="/kurs-og-møter" component={KursOgMøter} />
        <Route path="/opplevelser" component={Opplevelser} />
        <Route path="/blande-lab" component={Blandelab} />
        <Route path="/foredrag" component={Foredrag} />
        <Route path="/omvisning" component={Omvisning} />
        <Route path="/om-oss" component={OmOss} />
        <Route path="/nyhetsbrev" component={Nyhetsbrev} />
      </Switch>
    </Router>
  );
}

export default Layout;
