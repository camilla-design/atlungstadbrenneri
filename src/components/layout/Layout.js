import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from "../home/Home";
import Spiseriet from '../spiseriet/Spiseriet';
import Meny from '../menu/Meny';

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
                    <NavLink to="/spiseriet" exact className="nav-link">
						Spiseriet						
                    </NavLink>
                    <NavLink to="/meny" exact className="nav-link">
						Meny						
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
		<Switch>
		    <Route path="/" exact component={Home}/><Route />
            <Route path="/spiseriet" component={Spiseriet}/><Route />
            <Route path="/meny" component={Meny}/><Route />
            
        </Switch>
     
        </Router>
        
    );
}

export default Layout;