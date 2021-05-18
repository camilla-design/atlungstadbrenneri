import { Component } from "react";
import meny1 from "../../../../images/hero/meny1.jpg";
import meny2 from "../../../../images/hero/meny2.jpg";
import meny3 from "../../../../images/hero/meny3.jpg";
import meny4 from "../../../../images/hero/meny4.jpg";

class MenyGalleri extends Component {
    render() {
      return (
          <div className="gallery">

<div className="mb-4 mt-4 image-gallery">
          <div className="responsive-gallery">
            <a target="_blank" rel="noreferrer" href={meny1}>
              <img src={meny1} width="600" alt="Meny 1" title="credit: Atlungstad Brenneri" />
            </a>
          </div>
        </div>
        <div className="mb-4 mt-4 image-gallery">
          <div className="responsive-gallery">
            <a target="_blank" rel="noreferrer" href={meny2}>
              <img src={meny2} width="600" alt="Meny 2" title="credit: Atlungstad Brenneri" />
            </a>
          </div>
        </div>
        <div className="mb-4 mt-4 image-gallery">
          <div className="responsive-gallery">
            <a target="_blank" rel="noreferrer" href={meny3}>
              <img src={meny3} width="600" alt="Meny 3" title="credit: Atlungstad Brenneri" />
            </a>
          </div>
        </div>
        <div className="mb-4 mt-4 image-gallery">
          <div className="responsive-gallery">
            <a target="_blank" rel="noreferrer" href={meny4}>
              <img src={meny4} width="600" alt="Meny 4" title="credit: Atlungstad Brenneri" />
            </a>
          </div>
        </div>


        </div>
      )
    }}
export default MenyGalleri;