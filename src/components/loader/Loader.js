import { Component } from "react";
import logo from "../../images/logo/logo-black.png";

class Loader extends Component {
  render() {
    return (
      <>
        <div className="load">
          <div className="spin"></div>
          <div className="loading">
            <img
              src={logo}
              alt="logo-black"
              width="100px"
              title="credit: Atlungstad Brenneri"
            ></img>
          </div>
        </div>
        <div>
        </div>
      </>
    );
  }
}

export default Loader;
