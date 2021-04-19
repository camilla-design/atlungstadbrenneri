import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from "../home/Home";

function Layout() {
    return (
        <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="">Atlungstad</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavLink to="/" exact className="nav-link">
						Home						
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
		<Switch>
		    <Route path="/" exact  />
                <Home />
            <Route />
        </Switch>
     
        </Router>
        
    );
}

export default Layout;