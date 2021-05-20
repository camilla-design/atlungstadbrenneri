import { useEffect, useState } from "react";
import { API_URL } from "../../../../constants/api/API_URL";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import Loader from "../../../loader/Loader";

const API = API_URL + "/bryllups";

function WeddingGallery() {
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
          <Carousel fade={true} pause={false}>
          <Carousel.Item interval={2000}>
          <img
            className="w-100 h-100"
            src={`${gallery.image[0].url}`}
            alt="wedding"
          />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
          <img
            className="w-100 h-100"
            src={`${gallery.image[1].url}`}
            alt="wedding"
          />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
          <img
            className="w-100 h-100"
            src={`${gallery.image[2].url}`}
            alt="wedding"
          />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
          <img
            className="w-100 h-100"
            src={`${gallery.image[3].url}`}
            alt="wedding"
          />
          </Carousel.Item>
          </Carousel>
          
        ))}
        </div>
        
    );
  } else {
    return (
      <div className="loader-container">
        <Loader />
      </div>
    );
  }
}

export default WeddingGallery;

