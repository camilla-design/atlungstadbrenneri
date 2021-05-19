import { useEffect, useState } from "react";
import { API_URL } from "../../../../constants/api/API_URL";
import axios from "axios";
import Loader from "../../../loader/Loader";


const API = API_URL + "/foredrags";

function LectureGallery() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    axios.get(API).then((response) => {
      setImage(response.data);
    });
  }, []);

  if (image) {
  return (
    <div className="gallery">
      {image.map((gallery) => (
        <div className="mb-4 mt-4 image-gallery">
          <div className="responsive-gallery">
            <a target="_blank" rel="noreferrer" href={`${gallery.image[0].url}`}>
              <img src={`${gallery.image[0].url}`} width="600" alt="foredrag" title="credit: Atlungstad Brenneri" />
            </a>
          </div>
        </div>
      ))}
      {image.map((gallery) => (
        <div className="mb-4 mt-4 image-gallery">
          <div className="responsive-gallery">
            <a target="_blank" rel="noreferrer" href={`${gallery.image[1].url}`}>
              <img src={`${gallery.image[1].url}`} width="600" alt="foredrag" title="credit: Atlungstad Brenneri" />
            </a>
          </div>
        </div>
      ))}
      {image.map((gallery) => (
        <div className="mb-4 mt-4 image-gallery">
          <div className="responsive-gallery">
            <a target="_blank" rel="noreferrer" href={`${gallery.image[2].url}`}>
              <img src={`${gallery.image[2].url}`} alt="foredrag" width="600" title="credit: Atlungstad Brenneri" />
            </a>
          </div>
        </div>
      ))}
      {image.map((gallery) => (
        <div className="mb-4 mt-4 image-gallery">
          <div className="responsive-gallery">
            <a target="_blank" rel="noreferrer" href={`${gallery.image[3].url}`}>
              <img src={`${gallery.image[3].url}`} width="600" alt="foredrag" title="credit: Atlungstad Brenneri" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );}
  else {
    return (
      <div className="loader-container">
        <Loader />
      </div>
    );
  }
}

export default LectureGallery;
