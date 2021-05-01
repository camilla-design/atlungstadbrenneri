import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from "../home/Home";
import Spiseriet from '../spiseriet/Spiseriet';
import Meny from '../menu/Meny';
import Wedding from '../wedding/Wedding';
import Memorial from '../memorial/Memorial';
import TeamsMeeting from '../teamsMeeting/TeamsMeeting';
import Course from '../course/Course';
import Experiences from '../experiences/Experiences';
import MixedLab from '../mixedlab/MixedLab';
import Lecture from '../lecture/Lecture';
import Tour from '../tour/Tour';
import AboutUs from '../aboutUs/AboutUs';

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
                    <NavLink to="https://ecom.susoft.com/atlungstadbutikk/home" exact className="nav-link">
                    <i class="fas fa-shopping-basket"></i> Nettbutikk			
                    </NavLink>
                    <NavLink to="https://www.atlungstad.com" exact className="nav-link">
                    <i class="fas fa-wine-bottle"></i> Destilleriet			
                    </NavLink>
                    <div className="mt-5 nav-button">
                    <NavLink to="https://ecom.susoft.com/atlungstadtakeaway/home" exact className="nav-link">
                     Take Away		
                    </NavLink>
                    <Button variant="primary" href="https://booking.gastroplanner.no/atlungstadbrenneri/t">Bestill bord</Button>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
		<Switch>
		    <Route path="/" exact component={Home}/>
            <Route path="/spiseriet" component={Spiseriet}/>
            <Route path="/meny" component={Meny} />
            <Route path="/bryllup" component={Wedding} />
            <Route path="/minnesamvær" component={Memorial} />
            <Route path="/teamsmøter" component={TeamsMeeting} />
            <Route path="/kurs-og-møter" component={Course} />
            <Route path="/opplevelser" component={Experiences} />
            <Route path="/blande-lab" component={MixedLab} />
            <Route path="/foredrag" component={Lecture} />
            <Route path="/omvisning" component={Tour} />
            <Route path="/om-oss" component={AboutUs} />
        </Switch>
     
        </Router>
        
    );
}

export default Layout;