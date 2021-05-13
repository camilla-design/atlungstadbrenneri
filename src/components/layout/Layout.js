import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from "../home/Home";
import Spiseriet from '../spiseriet/Spiseriet';
import Meny from '../spiseriet/meny/Meny';
import Bryllup from '../spiseriet/bryllup/Bryllup';
import Minnesamvær from '../spiseriet/minnesamvær/Minnesamvær';
import Teammøte from '../spiseriet/teammøte/Teammøter';
import KursOgMøter from '../kurs&møter/KursOgMøter';
import Opplevelser from '../opplevelser/Opplevelser';
import Blandelab from '../opplevelser/blandelab/Blandelab';
import Foredrag from '../opplevelser/foredrag/Foredrag';
import Omvisning from '../opplevelser/omvisning/Omvisning';
import OmOss from '../om-oss/OmOss';
import Nyhetsbrev from '../home/nyhetsbrev/Nyhetsbrev';

import Button from 'react-bootstrap/Button'

import logo from '../../images/logo/logo.png';

function Layout() {
    return (
        <Router>
        <Navbar bg="dark" variant="dark" expand="lg"  sticky="top">
            <Navbar.Brand href="/"><img src={logo} width="50" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavLink to="/" exact className="nav-link">
												
                    </NavLink>
                    <NavLink to="/spiseriet" exact className="nav-link">
						Spiseriet						
                    </NavLink>
                    <NavLink to="/kurs-og-møter" exact className="nav-link">
                    Kurs og møter					
                    </NavLink>
                    <NavLink to="/opplevelser" exact className="nav-link">
                    Opplevelser				
                    </NavLink>
                    <NavLink to="/om-oss" exact className="nav-link">
                    Om oss			
                    </NavLink>
                    <div className="nav-button">
                    <a target="_blank" href="https://ecom.susoft.com/atlungstadbutikk/home" exact className="nav-link">
                    <i class="fas fa-shopping-basket"></i> Nettbutikk			
                    </a>
                    <a target="_blank" href="https://www.atlungstad.com" exact className="nav-link">
                    <i class="fas fa-wine-bottle"></i> Destilleriet			
                    </a>
                   
                    <NavLink target="_blank" to="https://ecom.susoft.com/atlungstadtakeaway/home" exact className="nav-link">
                     Take Away		
                    </NavLink>
                    <Button variant="primary" target="_blank" href="https://booking.gastroplanner.no/atlungstadbrenneri/t">Bestill bord</Button>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
		<Switch>
		    <Route path="/" exact component={Home}/>
            <Route path="/spiseriet" component={Spiseriet}/>
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