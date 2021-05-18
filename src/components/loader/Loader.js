import { Component } from "react";
import logo from '../../images/logo/logo-black.png';

class Loader extends Component {
    render() {
      return (
        <>
         <div className="load">
             <div className="spin"></div>
             <div className="loading">
                <img src={logo} alt="logo-black" width="100px"></img>
             </div>
         </div>
         <div>
         <h2>Beklager! Innlasting tar ca 4 sekunder. </h2>
         </div>
        </>
      );
    }
  }
  
  export default Loader;